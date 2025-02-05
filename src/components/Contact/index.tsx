import { contact } from "../../constants";
import ContactButton from "./ContactButton";

import Mail from "../../assets/Mail.svg?react";
import Discord from "../../assets/Discord.svg?react";
import Phone from "../../assets/Phone.svg?react";

function Contact() {
   return (
      <div className="flex flex-col items-center justify-center gap-10 mt-16 mb-8">
         <h2 className="text-4xl">Contact Me</h2>
         <ul className="flex gap-3">
            <li>
               <ContactButton icon={<Discord />} type="Discord username" text={contact.discord} />
            </li>
            <li>
               <ContactButton icon={<Mail />} type="Email" text={contact.email} />
            </li>
            <li>
               <ContactButton icon={<Phone />} type="Phone Number" text={contact.phone} />
            </li>
         </ul>
      </div>
   );
}

export default Contact;
