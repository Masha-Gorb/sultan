import {Button} from "../Button/Button";
import gs from "../../global.module.scss";
import React, {useState} from "react";
import s from "./Counter.module.scss";


export const Counter = () => {
  let [count, setCount] = useState(1)

  return (
    <div className={s.counter__wrapper}>
      <Button className={gs.buttonRound}
              title='+'
              foo={() => setCount(count+1)}/>
      {count}
      <Button className={gs.buttonRound}
              title='  -'
              foo={() => setCount(count-1)}/>
    </div>
  )
}