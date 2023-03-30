export type ProductsType = ProductType[]

export type ProductType = {
  id: string,
  categories: CategoriesType[],
  img: string,
  icon: string,
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
