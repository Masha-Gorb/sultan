import {Link} from "react-router-dom";
import s from './NotFoundPage.module.scss'
import gs from './../global.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={gs.container}>
      <div className={s.notFoundPage__wrapper}>
        <h1>Такой страницы нет, извините!</h1>
        <div>Вернутся на  <Link to="/">главную</Link></div>
      </div>

    </div>
  )
}