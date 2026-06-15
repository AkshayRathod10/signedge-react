import { StaticImageData } from "next/image";

export type Service = {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
};
