import {Input} from "../Input/Input";
import gs from "../../global.module.scss";
import s from "./FilterPanel.module.scss";
import React from "react";

export const FilterPanel = (props: any) => {
  return (
    <div className={s.filter__container}>
      <h4>{props.title}</h4>
      <Input className={gs.inputRegular}
             placeholder={'    Поиск...'}/>


      <div className={s.filter__options}>
        <label>
          <input
            name="manufacturer"
            value="Grifon"
            type="checkbox"
            className="input-checkbox"
          />Grifon
        </label>


        <label>
          <input
            name="manufacturer"
            value="Boyscout"
            type="checkbox"
            className="input-checkbox"
          />Boyscout
        </label>

        <label>
          <input
            name="manufacturer"
            value="Paclan"
            type="checkbox"
            className="input-checkbox"
          />Paclan
        </label>

        <label>
          <input
            name="manufacturer"
            value="Булгари Грин"
            type="checkbox"
            className="input-checkbox"
          />Булгари Грин
        </label>
      </div>


    </div>
  )
}