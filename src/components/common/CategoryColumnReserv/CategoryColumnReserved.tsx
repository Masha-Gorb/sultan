import s from "../../CatalogPage/CatalogPage.module.scss";
import React from "react";

export const CategoryColumnReserved = () => {
  return (
    <div>
      <div className={s.catalog__column}>
        <h4>УХОД ЗА ТЕЛОМ</h4>
        <ul>
          <li>Эпиляция и депиляция</li>
          <li>Средства для ванны и душа</li>
          <li>Скрабы, пилинги и пр.</li>
          <li>Мочалки и губки для тела</li>
          <li>Кремы, лосьоны, масла</li>
          <li>Интимный уход</li>
          <li>Дезодоранты, антиперспиранты</li>
          <li>Гели для душа</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>УХОД ЗА РУКАМИ</h4>
        <ul>
          <li>Увлажнение и питание</li>
          <li>Средства для ногтей</li>
          <li>Мыло твердое</li>
          <li>Мыло жидкое</li>
          <li>Крем для рук</li>
          <li>Защита рук</li>
          <li>Жидкость для снятия лака</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>УХОД ЗА НОГАМИ</h4>
        <ul>
          <li>Скрабы, пилинги</li>
          <li>Пилки, ролики</li>
          <li>Крем для ног</li>
          <li>Дезодоранты для ног</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>УХОД ЗА ЛИЦОМ</h4>
        <ul>
          <li>Тональные средства</li>
          <li>Средства для снятия макияжа</li>
          <li>Средства для очищения</li>
          <li>Маски, скрабы, сыворотки</li>
          <li>Крем для лица</li>
          <li>Крем для век</li>
          <li>Жидкость для снятия макияжа</li>
          <li>Гигиеническая помада</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>УХОД ЗА ВОЛОСАМИ</h4>
        <ul>
          <li>Шампуни</li>
          <li>Средства для укладки</li>
          <li>Средства для окрашивания волос</li>
          <li>Маски, сыворотки, масла</li>
          <li>Кондиционеры, бальзамы</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>СРЕДСТВА ДЛЯ ЗАГАРА</h4>
        <ul>
          <li>Средства после загара</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>СРЕДСТВА ДЛЯ БРИТЬЯ</h4>
        <ul>
          <li>Станки и кассеты</li>
          <li>После бритья</li>
          <li>Для бритья</li>
        </ul>
      </div>
      <div className={s.catalog__column}>
        <h4>ПОДАРОЧНЫЕ НАБОРЫ</h4>
        <ul>
          <li>Для мужчин</li>
          <li>Для женщин</li>
        </ul>
      </div>
    </div>
  )
}