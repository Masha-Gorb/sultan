export type ProductsType = {
  state: ProductType[]
}

export type ProductType = {
  id: string,
  categories: CategoriesType[],
  img: string,
  title: string,
  unit: string,
  weight: number,
  barcode: string,
  manufacturer: string,
  brand: string,
  description: string,
  price: number,
}

export type CategoriesType = string
