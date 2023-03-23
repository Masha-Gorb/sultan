import {Button} from "../common/Button/Button";
import gs from "../global.module.scss";
import s from './CatalogCard.module.scss'
import {data} from "../../state/state";

export const CatalogCard = () => {
  return (
    <div className={s.catalogCard}>
      <img src='' alt='product img'/>
      <img alt='icon'/>
      <p>{JSON.stringify(data[0].weight)}{JSON.stringify(data[0].unit)}</p>
      <h2>{JSON.stringify(data[0].title)}</h2>
      <p>Штрихкод: {JSON.stringify(data[0].barcode)}</p>
      <p>Производитель: {JSON.stringify(data[0].manufacturer)}</p>
      <p>Бренд: {JSON.stringify(data[0].brand)}</p>
      <p>{JSON.stringify(data[0].price)}</p>
      <Button className={gs.buttonSmall}
              title='В корзину'
              foo={() => alert('пока тупая кнопка')}/>
    </div>
  )
}