import React, {useEffect, useState} from "react";
import s from "./CatalogPage.module.scss";
import gs from "../global.module.scss"
import {ProductCardSmall} from "../common/ProductCardSmall/ProductCardSmall";
import {FilterPanel} from "../common/FilterPanel/FilterPanel";
import {Button} from "../common/Button/Button";
import cart from "../icons/cart_button.svg";
import {CategoryType, ProductType} from "../../types";
import {getProducts} from "../../state/getProducts";
import {CategoryPanel} from "../common/CategoryPanel/CategoryPanel";


export const CatalogPage = () => {

  localStorage.setItem('filters', JSON.stringify([]));

  //заготовка для фильтрации через редакс тулкит
  // const {products} = useAppSelector(state => state.productsReducer);
  // const dispatch = useAppDispatch();
  // const {filterProducts} = productsSlice.actions

  const [filter, setFilter] = useState(['start']);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [disabled, setDisable] = useState(true);

  const filterState = (arr: ProductType[], f: CategoryType[]) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      let arrCategories = arr[i].categories;
      for (let j = 0; j < arrCategories.length; j++) {
        for (let k = 0; k < f.length; k++) {
          if (f[k] === arrCategories[j]) {
            newArr.push(arr[i])
          }
        }
      }
    }
    const newState = newArr.filter((item, i, ar) => ar.indexOf(item) === i)
    setProducts(newState)
    return newState
  };

  const removeFilterHandler = () => {
    setFilter([])
    localStorage.setItem('filters', JSON.stringify([]))
    setDisable(true)
    setProducts(getProducts())
  };

  const setFilterHandler = (category: string) => {
    //при повторном клике на фильтр - убирать его из выбранных
    const newFilters = filter.includes(category) ? filter.filter(el => el !== category) : [category, ...filter]
    setFilter(newFilters)
    localStorage.setItem('filters', JSON.stringify(newFilters));
    setDisable(!newFilters.length)
  };

  useEffect(()=>{
    const f = localStorage.getItem('filters')
    if(f){
      setFilter(JSON.parse(f) as string[])
    }
    setProducts(getProducts())
  },[]);


  return (
    <div className={gs.container}>
    <div className={s.catalog__page}>


      <div className={s.catalog__titleAndSorting}>
        <h1 className={s.h1}>Косметика и гигиена</h1>
        <div className={s.catalog__sorting}>
          <label>
            <b>{'Сортировка: '}</b>
            <select>
              <option>Название</option>
              <option>Цена: по убыванию</option>
              <option>Цена: по возрастанию</option>
            </select>
          </label>

        </div>
      </div>


      <CategoryPanel class={s.catalog__categories}
                     filters={filter}
                     setFilters={setFilterHandler}
                     filterState={filterState}
                     />

      <button disabled={disabled} className={s.commandButton}
              onClick={() => filterState(getProducts(), filter)}>
        отфильтровать
      </button>
      <button disabled={disabled} className={s.commandButton}
              onClick={removeFilterHandler}
      >
        сбросить фильтры
      </button>

        <section className={s.catalog__main}>
          <aside className={s.catalog__aside}>
            <h3>Подбор по параметрам</h3>
            <p>тут еще подбор по цене будет</p>

            <FilterPanel title={'Производитель'}/>
            <hr/>
            <FilterPanel title={'Бренд'}/>

            <div className={s.catalog__filterButtons}>
              <Button className={gs.buttonSmall}
                      title='Показать'
                      foo={() => alert('пока тупая кнопка')}/>

              <Button className={gs.buttonRound}
                         title=''
                         icon={cart}
                         foo={() => alert('пока тупая кнопка')}/>
            </div>

            <CategoryPanel class={s.catalog__column}
                           filters={filter}

                           setFilters={setFilterHandler}/>


          </aside>

          <div className={s.catalog__cards}>
            {products.map( m => {
              return <ProductCardSmall
                key={m.id}
                id={m.id}
                img={m.img}
                icon={m.icon}
                weight={m.weight}
                unit={m.unit}
                title={m.title}
                barcode={m.barcode}
                manufacturer={m.manufacturer}
                brand={m.brand}
                price={m.price}
                description={m.description}
                categories={m.categories}
              />
            })}

          </div>
        </section>

      <div className={s.catalog__bottomText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
      </div>

      </div>
    </div>
  )
}