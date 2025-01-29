import { type SVGProps } from "react";

export type Tech = {
   name: string;
   icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export type Project = {
   title: string;
   description: string;
   stack: Tech[];
   github: string;
   link?: string;
};
