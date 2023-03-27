import React from "react";
import header_contacts from './../icons/header_contacts.svg';
import header_email from './../icons/header_email.svg';
import logo from './../icons/header__logo.svg'
import catalogButton from './../icons/catalog_button.svg'
import vertical from './../icons/vertical.svg'
import verticalSmall from './../icons/vertical_small.svg'
import cta from './../icons/header__cta.png'
import s from "./Header.module.scss";
import gs from "../global.module.scss";
import {Button} from "../common/Button/Button";
import {Input} from "../common/Input/Input";
import {HeaderCart} from "../HeaderCart/HeaderCart";
import priceIcon from "../icons/price_list.svg";


export const Header = () => {
  return (
    <div>
      <div className={s.header__content}>
        <div className={gs.container}>

          <nav className={s.header__nav}>
            <div className={s.header__contacts}>
              <img src={header_contacts} alt=''/>

              <div>
                <a href=" "><b>г. Кокчетав, ул. Ж. Ташенова 129Б</b></a>
                <br/>
                <a href=" ">(Рынок Восточный)</a>
              </div>

              <img style={{height: "40px", marginLeft: "20px", marginRight: "20px"}} src={vertical} alt=''/>

              <img src={header_email} alt=''/>
              <div>
                <a href=" "><b>opt.sultan@mail.ru</b></a>
                <br/>
                <a href=" ">На связи в любое время</a>
              </div>
            </div>

            <div className={s.header__links}>
                <a href=" ">О компании</a>
                <span><img style={{height: "40px", marginLeft: "20px", marginRight: "20px",}} src={vertical} alt=''/></span>
                <a href=" ">Доставка и оплата</a>
                <span><img style={{height: "40px", marginLeft: "20px", marginRight: "20px"}} src={vertical} alt=''/></span>
                <a href=" ">Возврат</a>
                <span><img style={{height: "40px", marginLeft: "20px", marginRight: "20px"}} src={vertical} alt=''/></span>
                <a href=" ">Контакты</a>
            </div>
          </nav>

          <div className={s.header__toolbar}>
            <img className={s.header__logo} src={logo} alt=''/>
            <div className={s.header__buttonAndInputContainer}>
              <Button className={gs.buttonMedium}
                      title='Каталог'
                      icon={catalogButton}
                      foo={() => alert('пока тупая кнопка')}/>
              <Input className={gs.inputWide}
                     placeholder={'      Поиск...'}/>
            </div>


            <div className={s.header__cta}>
              <p><b>+7 (777) 490-00-91</b></p>
              <p>время работы: 9:00-20:00</p>
              <p><u>Заказать звонок</u></p>
            </div>
            <img className={s.cta__img} src={cta} alt=''/>

            <img style={{height: "40px", marginLeft: "20px", marginRight: "20px"}} src={vertical} alt=''/>

            <Button className={gs.buttonBig}
                    title='Прайс-лист'
                    icon={priceIcon}
                    foo={() => alert('пока тупая кнопка')}/>

            <img style={{height: "40px", marginLeft: "30px", marginRight: "20px"}} src={vertical} alt=''/>

            <HeaderCart count={3} sum={'12 478 ₸'}/>
          </div>

          <div className={s.header__breadcrumbs}>
            <p>Главная</p>
            <img style={{height: "16px", marginLeft: "10px", marginRight: "20px", marginTop: "15px"}} src={verticalSmall} alt=''/>
            <p>Косметика и гигиена</p>
          </div>


        </div>
      </div>
    </div>
  )
}