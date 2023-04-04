import s from './CartProductCard.module.scss'
import {Button} from "../Button/Button";
import gs from "../../global.module.scss";
import trashBin from "../../icons/trashBin.svg";
import {Counter} from "../Counter/Counter";
import {addToCart} from "../../../store/cartSlice";
import {useAppDispatch} from "../../../store/hooks";


export const CartProductCard = (props: any) => {

  const dispatch = useAppDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(props));
    alert('Товар добавлен в корзину')
  }

  return (
    <div className={s.cartProductCard__main}>


      <div className={s.cartProductCard__img}>
        <img src={props.img} alt={' '}/>
      </div>


      <div className={s.cartProductCard__info}>
        <p className={s.cartProductCard__weight}>
          <img src={props.icon} alt='product icon'/>
          <span>{props.weight}</span>
          <span>{props.unit}</span>
        </p>
        <p className={s.cartProductCard__title}>{props.title}</p>
        <p>{props.description}</p>
      </div>

      <div>
        <Counter product={props} add={addToCartHandler}/>
      </div>

      <div className={s.cartProductCard__price}>
        <span>{props.price}₸</span>
      </div>

      <Button className={gs.buttonRound}
              title=''
              icon={trashBin}
              foo={() => (props.removeFromCart(props.id))}/>
    </div>
  )
}