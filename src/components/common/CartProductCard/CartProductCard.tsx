import s from './CartProductCard.module.scss'
import {Button} from "../Button/Button";
import gs from "../../global.module.scss";
import trashBin from "../../icons/trashBin.svg";
import {Counter} from "../Counter/Counter";


export const CartProductCard = (props: any) => {
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

      <div><Counter/></div>

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