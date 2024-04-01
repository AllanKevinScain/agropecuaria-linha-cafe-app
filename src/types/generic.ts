import { PRODUCTS } from "@/utils/data/products";
import { ImageProps } from "react-native";

export type ProductProps = (typeof PRODUCTS)[0];

export type ProductDataType = {
  id: string;
  category: string;
  image_url_thumb: string;
  price: number;
  name: string;
  description: string;
  image_url_cover: string;
  quantity?: number;
};
