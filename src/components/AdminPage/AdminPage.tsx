import {Link} from "react-router-dom";
import gs from './../global.module.scss'
import s from './AdminPage.module.scss'
import React, {useState} from "react";
import {ProductCardSmall} from "../common/ProductCardSmall/ProductCardSmall";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {productsSlice} from "../../store/productsSlice";

export const AdminPage = () => {

  const {products} = useAppSelector(state => state.productsReducer);
  const dispatch = useAppDispatch();
  const {addNewProduct, setProducts, deleteProduct} = productsSlice.actions

  let [id, setId] = useState('')
  let [deleteBarcode, setDeleteBarcode] = useState('')
  let [title, setTitle] = useState('')
  let [unit, setUnit] = useState('')
  let [weight, setWeight] = useState(0)
  let [barcode, setBarcode] = useState('')
  let [manufacturer, setManufacturer] = useState('')
  let [brand, setBrand] = useState('')
  let [description, setDescription] = useState('')
  let [price, setPrice] = useState(0)

  const addProduct = () => {
    let newProduct = {
      id: id,
      categories: ["hands"],
      img: "img/paper.png",
      title: title,
      icon: "img/productCard_box.svg",
      unit: unit,
      weight: weight,
      barcode: barcode,
      manufacturer: manufacturer,
      brand: brand,
      description: description,
      price: price,
    };

    dispatch(addNewProduct(newProduct))
    dispatch(setProducts())

    setId('')
    setTitle('')
    setUnit('')
    setWeight(0)
    setBarcode('')
    setManufacturer('')
    setBrand('')
    setDescription('')
    setPrice(0)
  };

  const removeProduct = (barcode: string) => {
    dispatch(deleteProduct(barcode))
    dispatch(setProducts())
  }



  return (
    <div className={gs.container}>
      <div className={s.admin__wrapper}>

        <div className={s.admin__intro}>
          <h1>Микроадминка</h1>
          <span>Вернуться в <Link to="/catalog">каталог</Link></span>
        </div>


        <div className={s.admin__main}>
          <div className={s.admin__form}>
            <h2>Создать новый продукт</h2>
            <p>(Картинка и иконка добавятся по умолчанию)</p>

            <span>Введите id продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input1'
              value={id}
              placeholder={'строка'}
              onChange={(event) => setId(event.target.value)}
            />

            <span>Введите title продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input2'
              value={title}
              placeholder={'строка'}
              onChange={(event) => setTitle(event.target.value)}
            />

            <span>Введите unit продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input3'
              value={unit}
              placeholder={'строка'}
              onChange={(event) => setUnit(event.target.value)}
            />

            <span>Введите weight продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input4'
              value={weight}
              placeholder={'число'}
              onChange={(event) => setWeight(Number(event.target.value))}
            />

            <span>Введите barcode продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input5'
              value={barcode}
              placeholder={'строка'}
              onChange={(event) => setBarcode(event.target.value)}
            />

            <span>Введите manufacturer продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input6'
              value={manufacturer}
              placeholder={'строка'}
              onChange={(event) => setManufacturer(event.target.value)}
            />

            <span>Введите brand продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input7'
              value={brand}
              placeholder={'строка'}
              onChange={(event) => setBrand(event.target.value)}
            />

            <span>Введите description продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input8'
              value={description}
              placeholder={'строка'}
              onChange={(event) => setDescription(event.target.value)}
            />

            <span>Введите price продукта</span>
            <input
              style={{width: '250px'}}
              type="text"
              name='input9'
              value={price}
              placeholder={'число'}
              onChange={(event) => setPrice(Number(event.target.value))}
            />

            <input type="submit" value="Добавить продукт" onClick={addProduct}/>

            <h2>Удалить продукт</h2>

            <input style={{width: '300px'}}
                        type="text"
                        name='input9'
                        value={deleteBarcode}
                        placeholder={'Введите штрихкод продукта который хотите удалить'}
                        onChange={(event) => setDeleteBarcode(event.target.value)}/>
            <button onClick={() => removeProduct(deleteBarcode)}>удалить продукт со штрихкодом = {deleteBarcode}</button>
          </div>

          <div className={s.admin__products}>
            <h2>все продукты (новые в конце)</h2>
            <div className={s.admin__cards}>
              {products.map(m => {
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
          </div>
        </div>
      </div>
    </div>
  )
}