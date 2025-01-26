import { type SVGProps } from "react";

function ExternalLink(props: SVGProps<SVGSVGElement>) {
   return (
      <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M18.6071 11.0353V18.9638C18.6089 19.2656 18.5506 19.5648 18.4355 19.8438C18.3204 20.1228 18.1509 20.3761 17.9368 20.5889C17.7228 20.8017 17.4685 20.9698 17.1888 21.0832C16.9092 21.1967 16.6097 21.2533 16.3079 21.2498H5.04939C4.74646 21.2534 4.44589 21.1963 4.16533 21.082C3.88476 20.9677 3.62988 20.7985 3.41567 20.5843C3.20145 20.3701 3.03222 20.1152 2.91793 19.8346C2.80363 19.5541 2.74658 19.2535 2.75012 18.9506V7.69209C2.74658 7.38916 2.80363 7.08859 2.91793 6.80803C3.03222 6.52747 3.20145 6.27258 3.41567 6.05837C3.62988 5.84415 3.88476 5.67492 4.16533 5.56063C4.44589 5.44633 4.74646 5.38928 5.04939 5.39283H12.9779"
            stroke="currentColour"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
         <path
            d="M21.25 2.75L10.6786 13.3213"
            stroke="currentColour"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
         <path
            d="M15.9644 2.75H21.25V8.03567"
            stroke="currentColour"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
      </svg>
   );
}

export default ExternalLink;
