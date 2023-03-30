import gs from './../global.module.scss'
import s from './CartPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {CartProductCard} from "../common/CartProductCard/CartProductCard";
import {cartSlice} from "../../store/cartSlice";
import {Button} from "../common/Button/Button";
import {cartSum} from "../../helpers/cartSum";
import React from "react";

export const CartPage = () => {

  const {orderedProducts} = useAppSelector(state => state.cartReducer);
  console.log(orderedProducts);

  const dispatch = useAppDispatch();
  const {deleteCart} = cartSlice.actions


  return (
    <div>
      <div className={gs.container}>
        <div className={s.cartPage__wrapper}>
          <h1>КОРЗИНА</h1>

          <div className={s.cartPage__products}>
            {orderedProducts.map(m => {
              return <CartProductCard
                key={Math.random()}
                img={m.img}
                title={m.title}
                icon={m.icon}
                weight={m.weight}
                unit={m.unit}
                description={m.description}
                price={m.price}
              />
            })}
          </div>

          <p>Общая сумма: <b>{cartSum(orderedProducts)}₸</b></p>

          <Button className={gs.buttonMedium}
                  title='Оформить заказ'
                  foo={() => (dispatch(deleteCart()))}/>


        </div>
      </div>
    </div>
  )
}
