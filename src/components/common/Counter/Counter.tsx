import {Button} from "../Button/Button";
import gs from "../../global.module.scss";
import React, {useState} from "react";
import s from "./Counter.module.scss";
import {ProductType} from "../../../types";

type CounterPropsType = {
  add: (product: ProductType) => void
  product: ProductType
}


export const Counter = (props: CounterPropsType) => {
  let [count, setCount] = useState(1);

  const addProductHandler = () => {
    console.log(props.product)
    props.add(props.product)
    setCount(count+1)
  }

  return (
    <div className={s.counter__wrapper}>
      <Button className={gs.buttonRound}
              title='+'
              foo={addProductHandler}/>
      {count}
      <Button className={gs.buttonRound}
              title='-'
              foo={() => setCount(count-1)}/>
    </div>
  )
}