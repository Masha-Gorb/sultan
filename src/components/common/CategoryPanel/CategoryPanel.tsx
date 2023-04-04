import s from "./CategoryPanel.module.scss";
import gs from "../../global.module.scss"
import React from "react";
import {ProductCategory} from "../../../enums/categories";

type PropsType = {
  class: string
  filters: string[]
  setFilters: (category: string) => void
  filterState: () => void
}

export const CategoryPanel = (props: PropsType) => {

  const getCn = (filters: string[], filterName: ProductCategory) => {
    return filters.includes(filterName) ? s.buttonActive : s.button
  };

  const filterHandler = (category: string) => {
    props.setFilters(category)
    props.filterState()
  }


  return (
    <div className={gs.container}>
      <div className={props.class}>
        <div><button className={getCn(props.filters, ProductCategory.Body)} onClick={() => filterHandler(ProductCategory.Body)}>Уход за телом</button></div>
        <div><button className={getCn(props.filters, ProductCategory.Hands)} onClick={() => filterHandler(ProductCategory.Hands)}>Уход за руками</button></div>
        <div><button className={getCn(props.filters, ProductCategory.Hygiene)} onClick={() => filterHandler(ProductCategory.Hygiene)}>Гигиеническая продукция</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Уход за ногтями</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Уход за ногами</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Уход за лицом</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Уход за волосами</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Средства для загарa</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Средства для бритья</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Подарочные наборы</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Гигиена полости рта</button></div>
        <div><button onClick={() => alert('Заглушка: в целяx простоты фильтрует только по первым трем категориям')}>Бумажная продукция</button></div>
      </div>
    </div>
  )
}