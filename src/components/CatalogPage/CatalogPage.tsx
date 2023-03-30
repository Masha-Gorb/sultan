import React from "react";
import s from "./CatalogPage.module.scss";
import gs from "../global.module.scss"
import {ProductCardSmall} from "../common/ProductCardSmall/ProductCardSmall";
import {data} from "../../state/state";
import {FilterPanel} from "../common/FilterPanel/FilterPanel";
import {Button} from "../common/Button/Button";
import cart from "../icons/cart_button.svg";


export const CatalogPage = () => {


  return (
    <div className={gs.container}>
    <div className={s.catalog__page}>


      <div className={s.catalog__titleAndSorting}>
        <h1 className={s.h1}>Косметика и гигиена</h1>
        <div className={s.catalog__sorting}>
          <label>
            <b>{'Сортировка: '}</b>
            <select>
              <option>Название</option>
              <option>Цена: по убыванию</option>
              <option>Цена: по возрастанию</option>
            </select>
          </label>

        </div>
      </div>


      <div className={s.catalog__categories}>
        <div className={s.categories__first}>Уход за телом</div>
        <div>Уход за руками</div>
        <div>Уход за ногами</div>
        <div>Уход за лицом</div>
        <div>Уход за волосами</div>
        <div>Средства для загара</div>
        <div>Средства для бритья</div>
        <div>Подарочные наборы</div>
        <div>Гигиеническая продукция</div>
        <div>Гигиена полости рта</div>
        <div>Бумажная продукция</div>
      </div>
        <section className={s.catalog__main}>
          <aside className={s.catalog__aside}>

            <h3>Подбор по параметрам</h3>
            <p>тут еще подбор по цене будет</p>

            <FilterPanel title={'Производитель'}/>
            <hr/>
            <FilterPanel title={'Бренд'}/>

            <div className={s.catalog__filterButtons}>
              <Button className={gs.buttonSmall}
                      title='Показать'
                      foo={() => alert('пока тупая кнопка')}/>

              <Button className={gs.buttonRound}
                         title=''
                         icon={cart}
                         foo={() => alert('пока тупая кнопка')}/>
            </div>

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

          </aside>

          <div className={s.catalog__cards}>
            {data.map( m => {
              return <ProductCardSmall
                key={m.id}
                id={m.id}
                img={m.img}
                icon={m.icon}
                weight={m.weight}
                unit={m.unit}
                title={m.title}
                barcode={m.barcode}
                manufacturer={m.manufacturer}
                brand={m.brand}
                price={m.price}
                description={m.description}
                categories={m.categories}
              />
            })}

          </div>
        </section>

      <div className={s.catalog__bottomText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
      </div>

      </div>
    </div>
  )
}