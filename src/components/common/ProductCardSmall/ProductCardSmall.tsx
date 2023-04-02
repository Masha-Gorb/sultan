import {Button} from "../Button/Button";
import cart from './../../icons/cart_button.svg'
import gs from "../../global.module.scss";
import s from './ProductCardSmall.module.scss'
import {firstWord} from "../../../helpers/firstWord";
import {titleWithoutFirstWord} from "../../../helpers/titleWithoutFirsWord";
import {ProductType} from "../../../types";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../store/hooks";
import {addToCart} from "../../../store/cartSlice";

export const ProductCardSmall = (props: ProductType) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(props));
    alert('Товар добавлен в корзину')
  }

  return (
    <div className={s.catalogCard}>
      <div className={s.productCardSmall__img}>
        <img src={props.img} alt='product img'/>
      </div>


      <p className={s.productCardSmall__weight}>
        <img src={props.icon} alt='product icon'/>
        <span>{props.weight}</span>
        <span>{props.unit}</span>
      </p>

        <span>
          <Link to={`${props.id}`}>
            <b>{firstWord(props.title) + ' '}</b>
            {titleWithoutFirstWord(props.title)}
          </Link>
        </span>

      <div className={s.productCardSmall__description}>
        <p>Штрихкод: <b>{props.barcode}</b></p>
        <p>Производитель: <b>{props.manufacturer}</b></p>
        <p>Бренд: <b>{props.brand}</b></p>
      </div>


      <div className={s.productCardSmall__price}>
        <span><b>{props.price} ₸</b></span>
        <Button className={gs.buttonSmall}
                title='В корзину'
                icon={cart}
                foo={addToCartHandler}/>
      </div>



    </div>
  )
};