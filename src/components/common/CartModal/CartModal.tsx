import modalIcon from './../../icons/ModalIcon.svg'
import {Link} from "react-router-dom";
import React from "react";

type propsType = {
  show: string
  close: () => void
}
export const CartModal = (props: propsType) => {
  return (
      <div className={props.show}>
        <img src={modalIcon} alt='modal icon'/>
        <h3>СПАСИБО ЗА ЗАКАЗ</h3>
        <p>Наш менеджер свяжется с вами в ближайшее время</p>
        <button onClick={props.close}><Link to="/">{"Главная"}</Link></button>
    </div>
  );
}