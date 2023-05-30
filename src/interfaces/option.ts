export default interface IProductOptions {
  type: string;
  names: Array<string>;
  options: Array<IOption>;
  customs: Array<any>;
}

export interface IOption {
  name: string;
  value: string;
  id?: number;
  addPrice?: number;
  stock?: number;
  level: number;
  images?: Array<string>;
  options: Array<IOption>;
  minAddPrice?: number;
  maxAddPrice?: number;
  hasSoldOut?: boolean;
  soldOut?: boolean;
}
