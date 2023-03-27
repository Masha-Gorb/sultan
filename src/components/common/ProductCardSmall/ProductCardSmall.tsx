import {Button} from "../Button/Button";
import cart from './../../icons/cart_button.svg'
import gs from "../../global.module.scss";
import s from './ProductCardSmall.module.scss'
import {firstWord} from "../../../helpers/firstWord";
import {titleWithoutFirstWord} from "../../../helpers/titleWithoutFirsWord";
import {ProductType} from "../../../types";

export const ProductCardSmall = (props: ProductType) => {
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
          <b>{firstWord(props.title) + ' '}</b>
          {titleWithoutFirstWord(props.title)}
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
                foo={() => alert('пока тупая кнопка')}/>
      </div>



    </div>
  )
};