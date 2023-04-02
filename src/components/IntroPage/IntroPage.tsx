import {Link} from "react-router-dom";
import s from './IntroPage.module.scss'
import gs from './../global.module.scss'



export const IntroPage = () => {
  return (
    <div className={gs.container}>
      <div className={s.introPage__wrapper}>
        <h1>Это главная страница</h1>
        <div>Перейдите в <Link to="/catalog">каталог</Link></div>
        <div>В админку можно перейти из каталога, слева внизу</div>
      </div>

    </div>
  )
}