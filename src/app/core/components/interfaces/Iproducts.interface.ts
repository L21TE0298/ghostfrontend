export interface products {
  idProduct: number;
  comercialName: string;
  price: number;
  stock: number;
  servingSize: number;
  unitServingSize: string;
  servings: number;
  netContent: number;
  unitNetContent: string;
  presentation: string;
  description: string;
  caducity: string; 
  lote: string;
  flavor: string;
  productRecomendation: string;
  imgProductPath: string;
  idCategory: number;
  idBrand: number;
  idAdministrationVia: number;
}

export interface productDTO {
  comercialName: string;
  stock: number;
  description: string;
  imgProductPath: string;
}