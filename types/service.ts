import { StaticImageData } from "next/image";

export type Service = {
  id: number;
  icon: string | StaticImageData;
  title: string;
  description: string;
};
