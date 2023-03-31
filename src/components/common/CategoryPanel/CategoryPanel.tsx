import s from "./CategoryPanel.module.scss";
import gs from "../../global.module.scss"
import React from "react";
import {ProductCategory} from "../../../enums/categories";

export const CategoryPanel = (props: any) => {

  const getCn = (filters: string[], filterName: ProductCategory) => {
    return filters.includes(filterName) ? s.buttonActive : s.button
  };


  return (
    <div className={gs.container}>
      <div className={props.class}>
        <div><button className={getCn(props.filters, ProductCategory.Body)} onClick={() => props.setFilters(ProductCategory.Body)}>Уход за телом</button></div>
        <div><button className={getCn(props.filters, ProductCategory.Hands)} onClick={() => props.setFilters(ProductCategory.Hands)}>Уход за hands</button></div>
        <div><button className={getCn(props.filters, ProductCategory.Hygiene)} onClick={() => props.setFilters(ProductCategory.Hygiene)}>Уход за hygiene</button></div>
        <div><button onClick={() => alert('knopka')}>Уход за руками</button></div>
        <div><button onClick={() => alert('knopka')}>Уход за ногами</button></div>
        <div><button onClick={() => alert('knopka')}>Уход за лицом</button></div>
        <div><button onClick={() => alert('knopka')}>Уход за волосами</button></div>
        <div><button onClick={() => alert('knopka')}>Средства для загарa</button></div>
        <div><button onClick={() => alert('knopka')}>Средства для бритья</button></div>
        <div><button onClick={() => alert('knopka')}>Подарочные наборы</button></div>
        <div><button onClick={() => alert('knopka')}>Гигиеническая продукция</button></div>
        <div><button onClick={() => alert('knopka')}>Гигиена полости рта</button></div>
        <div><button onClick={() => alert('knopka')}>Бумажная продукция</button></div>
      </div>
    </div>
  )
}