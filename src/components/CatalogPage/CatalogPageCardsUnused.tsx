import s from "./CatalogPage.module.scss";
import {ProductCardSmall} from "../common/ProductCardSmall/ProductCardSmall";
import React, {useState} from "react";
import {ProductType} from "../../types";
import {Pagination} from "./Pagination";

type PropsType = {
  paginatedProducts: ProductType[]
}

export const CatalogPageCardsUnused = (props: PropsType) => {

  const [paginatedProducts, setPaginatedProducts] = useState(props.paginatedProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProductsPerPage] = useState(4);

  const lastProductIndex = currentPage * paginatedProductsPerPage;
  const firstProductIndex = lastProductIndex - paginatedProductsPerPage;
  const currentProducts = paginatedProducts.slice(firstProductIndex, lastProductIndex)


  console.log(props.paginatedProducts)

  return (
    <div>
      {/*<button disabled={disabled} className={s.commandButton}*/}
      {/*        onClick={() => (dispatch(filterProducts()))}>*/}
      {/*  отфильтровать (эти кнопки для удобства: фильтрация так же работает при клике на категорию или по кнопке*/}
      {/*  Применить в сайдбаре)*/}
      {/*</button>*/}
      {/*<button disabled={disabled} className={s.commandButton}*/}
      {/*        onClick={removeFilterHandler}*/}
      {/*>*/}
      {/*  сбросить фильтры (эти кнопки для удобства: сброс фильтров так же работает по повторному клику на категорию и*/}
      {/*  на кнопке с корзиной в сайдбаре)*/}
      {/*</button>*/}

      <div className={s.catalog__cards}>
        {currentProducts.map(m => {
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

      <Pagination totalProducts={paginatedProducts.length} productsPerPage={paginatedProductsPerPage}/>
    </div>
  )
}