import cart from './../icons/header__cart.svg'
import s from './HeaderCart.module.scss'

export const HeaderCart = (props: any) => {
  return (
    <div className={s.header__cart}>
      <div className={s.cart__icon}>
        <div className={s.cart__count}>{props.count}</div>
        <img src={cart} alt=''/>
      </div>

      <div>
        <p>Корзина</p>
        <p><b>{props.sum}</b></p>
      </div>

    </div>
  )
}