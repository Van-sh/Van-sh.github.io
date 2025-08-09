import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren;
export default function Section({ children }: SectionProps) {
   return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-10">
         {children}
      </section>
   );
}
