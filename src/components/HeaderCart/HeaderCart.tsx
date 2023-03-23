import cart from './../icons/header__cart.svg'
import s from './HeaderCart.module.scss'

export const HeaderCart = (props: any) => {
  return (
    <div className={s.header__cart}>
      <div>
        <img src={cart} alt=''/>
        <div className={s.cart__count}>{props.count}</div>
      </div>

      <div>
        <p>Корзина</p>
        <p>{props.sum}</p>
      </div>

    </div>
  )
}