import cart from '../../icons/header__cart.svg'
import s from './HeaderCart.module.scss'
import {Link} from "react-router-dom";
import React from "react";
import {useAppSelector} from "../../../store/hooks";
import {cartSum} from "../../../helpers/cartSum";

export const HeaderCart = () => {

  const {orderedProducts} = useAppSelector(state => state.cartReducer);
  const productsInCartCount = orderedProducts.length;

  return (
    <div className={s.header__cart}>
      <div className={s.cart__icon}>
        <div className={s.cart__count}>{productsInCartCount}</div>
        <img src={cart} alt=''/>
      </div>

      <div>
        <p><Link to="/cart">{"Корзина"}</Link></p>
        <p><b>{cartSum(orderedProducts)}₸</b></p>
      </div>

    </div>
  )
}