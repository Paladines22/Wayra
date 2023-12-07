import React from "react";
import Image from "next/image";

function SocialMediaIcons() {
  return (
    <div className="flex  justify-center my-auto gap-8 md:pt-12">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/instagram.png"
          width={35}
          height={20}
          alt="instagram-link"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/facebook.png" width={35} height={20} alt="facebook-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://Wa.me/3158395109 "
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/whatsapp.png" width={35} height={40} alt="facebook-link" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
