import type { IconType } from "@icons-pack/react-simple-icons";

export type Tech = {
   name: string;
   icon: IconType;
   color?: string;
};

export type Project = {
   title: string;
   description: string;
   stack: Tech[];
   github: string;
   link?: string;
};
