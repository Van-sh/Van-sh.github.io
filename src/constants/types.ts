export type Tech = {
   name: string;
   icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
   color?: string;
};

export type Project = {
   title: string;
   description: string;
   stack: Tech[];
   github: string;
   link?: string;
};
