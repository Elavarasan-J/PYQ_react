import React from "react";
import {
  IconBrandTelegram,
  IconBrandYoutubeFilled,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const SocialIcons = () => {
  return (
    <div className="social-media__icons">
      <a
        target="_blank"
        className="whatsapp"
        href="https://whatsapp.com/channel/0029Va9UUwpBA1euuBJLCD32"
      >
        <IconBrandWhatsapp />
      </a>
      <a
        target="_blank"
        className="youtube"
        href="https://www.youtube.com/@TNPSCPYQ"
      >
        <IconBrandYoutubeFilled />
      </a>
      <a target="_blank" className="telegram" href="https://t.me/tnpscpyq">
        <IconBrandTelegram />
      </a>
      {/* <a
        target="_blank"
        className="instagram"
        href="https://www.instagram.com/app.pagir.in/"
      >
        <i className="ti ti-brand-instagram"></i>
      </a>
      <a
        target="_blank"
        className="twitter"
        href="https://twitter.com/app_pagir_in"
      >
        <i className="ti ti-brand-x"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
