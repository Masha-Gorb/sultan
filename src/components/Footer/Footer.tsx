import React from "react";
import footer__logo from './../icons/footer__logo.svg'
import footer__telegram from './../icons/footer__telegram.svg'
import footer__whatsup from './../icons/footer__whatsup.svg'
import footer__visa from './../icons/footer__visa.svg'
import footer__mastercard from './../icons/footer__mastercard.svg'
import s from "./Footer.module.scss";
import gs from "../global.module.scss"
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";


export const Footer = () => {
  return (
    <div>
        <div className={gs.container}>
          <div className={s.footer__content}>

          <div className={s.footer__info}>
            <img src={footer__logo} alt=''/>
            <p className="footer-description">Компания «Султан» — снабжаем розничные магазины товарами
              "под ключ" в Кокчетаве и Акмолинской области
            </p>
            <p>Подпишись на скидки и акции</p>
            <Input className={gs.inputFooter}
                   placeholder={'      Введите ваш E-mail'}/>
          </div>

          <div className={s.footer__column}>
            <h4>Меню сайта: </h4>
            <ul>
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className={s.footer__column}>
            <h4>Категории: </h4>
            <ul>
              <li>Бытовая химия</li>
              <li>Косметика и гигиена</li>
              <li>Товары для дома</li>
              <li>Товары для детей и мам</li>
              <li>Посуда</li>
            </ul>
          </div>

            <div className={s.footer__column}>
              <h4>Скачать прайс-лист:</h4>
              <Button className={gs.buttonBig}
                      title='Прайс-лист'
                      foo={() => alert('пока тупая кнопка')}/>
              <p>Связь в мессенджерах:</p>
              <div>
                <img src={footer__whatsup} alt=''/>
                <img src={footer__telegram} alt=''/>
              </div>
            </div>

            <div className={s.footer__column}>
              <h4>Контакты:</h4>
              <ul className={s.header__cta}>
                <li><b>+7 (777) 490-00-91</b></li>
                <li><p>время работы: 9:00-20:00</p></li>
                <li><u>Заказать звонок</u></li>
              </ul>
              <a href=" ">opt.sultan@mail.ru</a>
              <br/>
              <a href=" ">На связи в любое время</a>
              <div>
                <img src={footer__visa} alt=''/>
                <img src={footer__mastercard} alt=''/>
              </div>

            </div>


        </div>
      </div>
    </div>
  )
}