type SVGComponent = React.FunctionComponent<
   React.SVGProps<SVGSVGElement> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
   }
>;

export type Tech = {
   name: string;
   icon: SVGComponent;
};

export type Project = {
   title: string;
   description: string;
   stack: Tech[];
   github: string;
   link?: string;
};

export type Skill = Tech & { amount: number };
