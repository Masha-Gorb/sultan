import {Input} from "../Input/Input";
import gs from "../../global.module.scss";
import s from "./FilterPanel.module.scss";
import React, {FC} from "react";

type Props = {
  onSelect(value:string):void
  title:string
  options:string[]
  checked:string[]
}

export const FilterPanel:FC<Props> = (props) => {
  const {onSelect,title,options,checked} = props
  return (
    <div className={s.filter__container}>
      <h4>{title}</h4>
      <Input className={gs.inputRegular}
             placeholder={'    Поиск...'}/>


      <div className={s.filter__options}>
        {options.map(el => (
          <label key={el}>
            <input
              name="manufacturer"
              value={el}
              type="checkbox"
              className="input-checkbox"
              checked={!!checked.find(name => name === el)}
              onChange={({currentTarget:{value}})=> onSelect(value)}
            />{el}
          </label>
        ))}
      </div>
    </div>
  )
}