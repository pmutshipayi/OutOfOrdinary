export type ProductModel = {
  name: string;
  price: number;
}

export type BasketModel = {
  product: ProductModel;
  qty: number;
}

export type SaleModel = {
  products: BasketModel[]
}
