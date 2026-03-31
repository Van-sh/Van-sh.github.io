import { SiDiscord } from "@icons-pack/react-simple-icons";

import { Mail, Phone } from "~/assets";
import { contact } from "~/constants";
import ContactButton from "./ContactButton";

function Contact() {
   return (
      <div className="my-8 flex flex-col items-center justify-center gap-10">
         <h2 className="text-4xl">Contact Me</h2>
         <ul className="flex flex-col items-center gap-3 lg:flex-row">
            <li>
               <ContactButton icon={<SiDiscord className="size-6" />} text={contact.discord} />
            </li>
            <li>
               <ContactButton icon={<Mail className="size-6" />} text={contact.email} />
            </li>
            <li>
               <ContactButton icon={<Phone className="size-6" />} text={contact.phone} />
            </li>
         </ul>
      </div>
   );
}

export default Contact;
