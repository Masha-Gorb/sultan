import React, {useEffect, useState} from "react";
import s from "./CatalogPage.module.scss";
import gs from "../global.module.scss"
import {ProductCardSmall} from "../common/ProductCardSmall/ProductCardSmall";
import {FilterPanel} from "../common/FilterPanel/FilterPanel";
import {Button} from "../common/Button/Button";
import trashBin from "../icons/trashBin.svg";
import {CategoryPanel} from "../common/CategoryPanel/CategoryPanel";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {productsSlice, resetSorting} from "../../store/productsSlice";
import {Link} from "react-router-dom";
import verticalSmall from "../icons/vertical_small.svg";


export const CatalogPage = () => {
  const {filteredProducts, filters} = useAppSelector(state => state.productsReducer);
  const dispatch = useAppDispatch();
  const {
    filterProducts,
    setProducts,
    setFilters,
    resetFilters,
    sortByName,
    sortByPriceLowToHigh,
    sortByPriceHighToLow
  } = productsSlice.actions


  const [disabled, setDisabled] = useState(true);

  const removeFilterHandler = () => {
    dispatch(resetFilters())
    dispatch(setProducts())
  };

  const setFilterHandler = (category: string) => {
    dispatch(setFilters({name: 'categories', value: category}))
  };


  useEffect(() => {
    dispatch(setProducts())
    dispatch(filterProducts())
  }, [dispatch, filterProducts, setProducts]);

  useEffect(() => {
    setDisabled(!filters.categories.length && !filters.manufacturer.length && !filters.brand.length)
  }, [filters])

  return (
    <div className={gs.container}>

      <div className={s.header__breadcrumbs}>
        <p><Link to="/">{"Главная"}</Link></p>
        <img style={{height: "16px", marginLeft: "10px", marginRight: "20px", marginTop: "15px"}} src={verticalSmall}
             alt=''/>
        <p><Link to="/catalog">{"Каталог"}</Link></p>
      </div>

      <div className={s.catalog__page}>


        <div className={s.catalog__titleAndSorting}>
          <h1 className={s.h1}>Косметика и гигиена</h1>
          <div className={s.catalog__sorting}>
            <button onClick={() => dispatch(resetSorting())} className={s.btn}>
              <span><b>{'Сортировка: '}</b></span>
            </button>
            <div className={s.dropdown}>
              <div className={s.btn__list}>
                <button onClick={() => dispatch(sortByName())}>Название</button>
                <button onClick={() => dispatch(sortByPriceLowToHigh())}>Цена: низкая</button>
                <button onClick={() => dispatch(sortByPriceHighToLow())}>Цена: высокая</button>
              </div>
            </div>
          </div>
        </div>


        <CategoryPanel class={s.catalog__categories}
                       filters={filters.categories}
                       setFilters={setFilterHandler}
                       filterState={() => (dispatch(filterProducts()))}
        />

        <section className={s.catalog__main}>
          <aside className={s.catalog__aside}>
            <h3>Подбор по параметрам</h3>
            <p><Link to="/admin">{"Перейти в админку"}</Link></p>

            <FilterPanel checked={filters.manufacturer}
                         options={['Grifon', 'Boyscout', 'Paclan', 'Булгари Грин']}
                         title={'Производитель'}
                         onSelect={(value) => dispatch(setFilters({name: 'manufacturer', value}))}/>
            <hr/>
            <FilterPanel checked={filters.brand}
                         options={["AOS", "GRIFON", "Nivea", "Домашний сундук", "HELP"]}
                         title={'Бренд'}
                         onSelect={(value) => dispatch(setFilters({name: 'brand', value}))}/>

            <div className={s.catalog__filterButtons}>

              <Button className={gs.buttonSmall}
                      title='Показать'
                      foo={() => dispatch(filterProducts())}/>

              <Button className={gs.buttonRound}
                      title=''
                      icon={trashBin}
                      foo={removeFilterHandler}/>
            </div>


            <CategoryPanel class={s.catalog__column}
                           filters={filters.categories}
                           setFilters={setFilterHandler}
                           filterState={() => (dispatch(filterProducts()))}
            />


          </aside>

          <div className={s.catalog__cards}>
            {filteredProducts.map(m => {
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis
            iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed
            pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
            malesuada.</p>
        </div>

      </div>
    </div>
  )
}