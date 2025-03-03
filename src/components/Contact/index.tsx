import { contact } from "../../constants";
import ContactButton from "./ContactButton";

import Discord from "../../assets/Discord.svg?react";
import Mail from "../../assets/Mail.svg?react";
import Phone from "../../assets/Phone.svg?react";

function Contact() {
   return (
      <div className="my-8 flex flex-col items-center justify-center gap-10">
         <h2 className="text-4xl">Contact Me</h2>
         <ul className="flex flex-col items-center gap-3 lg:flex-row">
            <li>
               <ContactButton icon={<Discord />} text={contact.discord} />
            </li>
            <li>
               <ContactButton icon={<Mail />} text={contact.email} />
            </li>
            <li>
               <ContactButton icon={<Phone />} text={contact.phone} />
            </li>
         </ul>
      </div>
   );
}

export default Contact;
