export type ProductsType = ProductType[]

export type ProductType = {
  id: string,
  categories: CategoryType[],
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

export type CategoryType = string
export type FilterType = Record<'categories' | 'brand' | 'manufacturer', string[]>
