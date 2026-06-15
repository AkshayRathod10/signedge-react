import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
};
