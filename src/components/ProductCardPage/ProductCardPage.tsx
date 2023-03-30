import { useParams} from "react-router-dom";
import s from './ProductCardPage.module.scss'
import gs from './../global.module.scss'
import {Button} from "../common/Button/Button";
import cart from "../icons/cart_button.svg";
import share from "../icons/share.svg";
import priceIconBlack from "../icons/priceIconBlack.svg";
import {data} from "../../state/state";
import {firstWord} from "../../helpers/firstWord";
import {titleWithoutFirstWord} from "../../helpers/titleWithoutFirsWord";

export const ProductCardPage = () => {
  const {id} = useParams();
  let product = data.find(el => el.id === id);

  if(!product) {
    console.error('No data here!');
    return null
  }

  return (
    <div className={gs.container}>

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
            <span>{' ' +product.unit}</span>
          </span>

          <div className={s.productCardPage__priceBlock}>
            <p>{product.price}₸</p>

            <div>счетчик компонентом</div>

            <Button className={gs.buttonSmall}
                    title='В корзину'
                    icon={cart}
                    foo={() => alert('пока тупая кнопка')}/>
          </div>

          <div className={s.productCardPage__share}>
            <div className={s.productCardPage__shareIcon}><a href=' '><img src={share} alt={'share icon'}/></a></div>
            <div className={s.productCardPage__shareAdd}><a href=' '>При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</a></div>
            <div className={s.productCardPage__sharePriceList}><a href=' '><b>Прайс лист  <img src={priceIconBlack} alt={' pricelist icon'}/></b></a></div>
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