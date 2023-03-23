import React from "react";
import header_contacts from './../icons/header_contacts.svg';
import header_email from './../icons/header_email.svg';
import logo from './../icons/header__logo.svg'
import cta from './../icons/header__cta.png'
import s from "./Header.module.scss";
import gs from "../global.module.scss";
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";
import {HeaderCart} from "../HeaderCart/HeaderCart";


export const Header = () => {
  return (
    <div>
      <div className={s.header__content}>
        <div className={gs.container}>

          <nav className={s.header__nav}>
            <div className={s.header__contacts}>
              <img src={header_contacts} alt=''/>
              <div>
                <a href=" ">г. Кокчетав, ул. Ж. Ташенова 129Б</a>
                <br/>
                <a href=" ">(Рынок Восточный)</a>
              </div>

              <div>!</div>

              <img src={header_email} alt=''/>
              <div>
                <a href=" ">opt.sultan@mail.ru</a>
                <br/>
                <a href=" ">На связи в любое время</a>
              </div>
            </div>

            <div className={s.header__links}>
              <ul>
                <li><a href=" ">О компании</a></li>
                <li>!</li>
                <li><a href=" ">Доставка и оплата</a></li>
                <li>!</li>
                <li><a href=" ">Возврат</a></li>
                <li>!</li>
                <li><a href=" ">Контакты</a></li>
              </ul>
            </div>
          </nav>

          <div className={s.header__toolbar}>
            <img className={s.header__logo} src={logo} alt=''/>
            <Button className={gs.buttonBig}
                    title='Каталог'
                    foo={() => alert('пока тупая кнопка')}/>
            <Input className={gs.inputWide}
                   placeholder={'      Поиск...'}/>
            <ul className={s.header__cta}>
              <li><b>+7 (777) 490-00-91</b></li>
              <li><p>время работы: 9:00-20:00</p></li>
              <li><u>Заказать звонок</u></li>
            </ul>
            <img className={s.cta__img} src={cta} alt=''/>
            <Button className={gs.buttonBig}
                    title='Прайс-лист'
                    foo={() => alert('пока тупая кнопка')}/>

            <HeaderCart count={3} sum={'12 478 ₸'}/>
          </div>

          <div className={s.header__breadcrumbs}>
            <p>Главная</p>
            <p>!</p>
            <p>Косметика и гигиена</p>
          </div>


        </div>
      </div>
    </div>
  )
}