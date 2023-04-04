import gs from './../global.module.scss'
import s from './CartPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {CartProductCard} from "../common/CartProductCard/CartProductCard";
import {cartSlice} from "../../store/cartSlice";
import {Button} from "../common/Button/Button";
import {cartSum} from "../../helpers/cartSum";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import verticalSmall from "../icons/vertical_small.svg";
import {CartModal} from "../common/CartModal/CartModal";


export const CartPage = () => {

  const [open, setOpen] = useState(s.cartModal__hidden);
  const openModal = () => {
    console.log(open)
    setOpen(s.cartModal__wrapper)
  };

  const closeModal = () => {
    setOpen(s.cartModal__hidden )
  }


  const {orderedProducts} = useAppSelector(state => state.cartReducer);
  const dispatch = useAppDispatch();
  const {deleteCart, removeFromCart} = cartSlice.actions

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id))
  };

  const finishOrder = () => {
    dispatch(deleteCart());
    openModal()
  };


  return (
    <div>
      <div className={gs.container}>

        <div className={s.header__breadcrumbs}>
          <p><Link to="/">{"Главная"}</Link></p>
          <img style={{height: "16px", marginLeft: "10px", marginRight: "20px", marginTop: "15px"}} src={verticalSmall}
               alt=''/>
          <p><Link to="/catalog">{"Каталог"}</Link></p>
          <img style={{height: "16px", marginLeft: "10px", marginRight: "20px", marginTop: "15px"}} src={verticalSmall}
               alt=''/>
          <p>{"Корзина"}</p>
        </div>

        <div className={s.cartPage__wrapper}>
          <h1>Корзина</h1>

          <CartModal show={open} close={closeModal}/>

          <div className={s.cartPage__products}>
            {orderedProducts.map(m => {
              return <CartProductCard
                key={Math.random()}
                id={m.id}
                img={m.img}
                title={m.title}
                icon={m.icon}
                weight={m.weight}
                unit={m.unit}
                description={m.description}
                price={m.price}
                removeFromCart={removeFromCartHandler}
              />
            })}
          </div>

          <div className={s.cartPage__sum}>
            <Button className={gs.buttonMedium}
                    title='Оформить заказ'
                    foo={finishOrder}/>

            <p><b>{cartSum(orderedProducts)}₸</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}
