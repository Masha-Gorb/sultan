import {useParams} from "react-router-dom";
import s from './ProductCardPage.module.scss'
import gs from './../global.module.scss'
import {Button} from "../common/Button/Button";
import cart from "../icons/cart_button.svg";
import share from "../icons/share.svg";
import priceIconBlack from "../icons/priceIconBlack.svg";
import {firstWord} from "../../helpers/firstWord";
import {titleWithoutFirstWord} from "../../helpers/titleWithoutFirsWord";
import React from "react";
import {Counter} from "../common/Counter/Counter";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {addToCart} from "../../store/cartSlice";
import {Breadcrumbs} from "../common/Breadcrumbs/Breadcrumbs";

export const ProductCardPage = () => {

  const {id} = useParams();
  const {products} = useAppSelector(state => state.productsReducer);
  const filterPr = products.filter(f => f.id === id)[0];
  const product = products.filter(el => el.id === id)[0];

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(filterPr));
    alert('Товар добавлен в корзину')
  }

  if (!product) {
    console.error('No data here!');
    return null
  }

  const productTitle = product.title



  return (
    <div className={gs.container}>

      <Breadcrumbs address={[
        {title: "Главная", link: "/"},
        {title: "Каталог", link: "/catalog"},
        {title: productTitle, link: ""},
      ]}/>


      <div className={s.productCardPage__wrapper}>

        <div className={s.productCardPage__img}>
          <img src={'/' + product.img} alt=' '/>
        </div>


        <div className={s.productCardPage__main}>
          <p>В наличии</p>
          <h2>
            <b>{firstWord(product.title) + ' '}</b>
            {titleWithoutFirstWord(product.title)}
          </h2>
          <span>
            <img style={{opacity: "0.4"}} src={'/' + product.icon} alt='product icon'/>
            <span>{' ' + product.weight}</span>
            <span>{' ' + product.unit}</span>
          </span>

          <div className={s.productCardPage__priceBlock}>
            <p>{product.price}₸</p>

            <div>
              <Counter product={filterPr} add={addToCartHandler}/>
            </div>

            <Button className={gs.buttonSmall}
                    title='В корзину'
                    icon={cart}
                    foo={addToCartHandler}/>
          </div>

          <div className={s.productCardPage__share}>
            <div className={s.productCardPage__shareIcon}><a href=' '><img src={share} alt={'share icon'}/></a></div>
            <div className={s.productCardPage__shareAdd}><a href=' '>При покупке от <b>10 000 ₸</b> бесплатная доставка
              по Кокчетаву и области</a></div>
            <div className={s.productCardPage__sharePriceList}><a href=' '><b>Прайс лист <img src={priceIconBlack}
                                                                                              alt={' price-list icon'}/></b></a>
            </div>
          </div>

          <div className={s.productCardPage__info}>
            <p>Штрихкод: <b>{product.barcode}</b></p>
            <p>Производитель: <b>{product.manufacturer}</b></p>
            <p>Бренд: <b>{product.brand}</b></p>
          </div>

          <div className={s.productCardPage__description}>
            <span>Описание</span>
            <p>{product.description}</p>
            <span>Характеристики</span>
            <p>Название: <b>{firstWord(product.title) + ' '}</b></p>
            <p>Тип: <b>{product.brand}</b></p>
            <p>Производитель: <b>{product.manufacturer}</b></p>
            <p>Бренд: <b>{product.brand}</b></p>
            <p>Штрихкод: <b>{product.barcode}</b></p>
            <p>Вес: <b>{product.weight}{product.unit}</b></p>
            <p>Объем: <b>{product.weight}{product.unit}</b></p>
            <p>Кол-во в коробке: <b>{product.weight}{product.unit}</b></p>
          </div>


        </div>

      </div>
    </div>
  )
}