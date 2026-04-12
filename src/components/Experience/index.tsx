import { experience } from "~/constants";
import Section from "../Section";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
   month: "long",
   year: "numeric",
});

function formatDateRange(startDate: Date, endDate?: Date) {
   const start = dateFormatter.format(startDate);
   const end = endDate ? dateFormatter.format(endDate) : "Present";

   return `${start} - ${end}`;
}

function Experience() {
   return (
      <Section>
         <h2 className="text-4xl">Experience</h2>
         <div className="relative flex w-[min(88vw,56rem)] flex-col-reverse gap-5">
            <div className="pointer-events-none absolute top-16 bottom-16 w-1 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(var(--surface-glow-rgb),0.34),rgba(255,255,255,0.08))]" />
            {experience.map((item, index) => (
               <div
                  key={`${item.company}-${item.title}-${index}`}
                  className="relative grid grid-cols-[2.75rem_1fr] items-center sm:grid-cols-[4.25rem_1fr]"
               >
                  <div className="pointer-events-none absolute top-1/2 left-0.5 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(var(--surface-glow-rgb),0.24),rgba(var(--surface-rgb),0.96)_72%)] shadow-[0_0_0_3px_rgba(var(--background-rgb),0.9),0_0_14px_rgba(var(--surface-glow-rgb),0.1)]" />
                  <article className="group relative col-start-2 flex min-h-30 flex-col gap-2 overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(180deg,rgba(var(--surface-rgb),0.78),rgba(var(--surface-rgb),0.54))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)] ring-1 ring-white/6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20">
                     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--surface-glow-rgb),0.12),transparent_48%)] opacity-70 transition duration-300 group-hover:opacity-100" />
                     <div className="pointer-events-none absolute inset-px rounded-[calc(var(--radius-3xl)-1px)] border border-white/6" />
                     <p className="relative text-sm text-white/56">
                        {formatDateRange(item.startDate, item.endDate)}
                     </p>
                     <div className="relative flex flex-col gap-1">
                        <h3 className="text-2xl text-white">{item.title}</h3>
                        <p className="text-lg text-white/76">{item.company}</p>
                     </div>
                  </article>
               </div>
            ))}
         </div>
      </Section>
   );
}

export default Experience;
