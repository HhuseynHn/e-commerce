/** @format */

import React from "react";
import { withTranslation } from "react-i18next";
import i18n from "./i18n";

function Language(props) {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-x-px w-4 items-center justify-center cursor-pointer">
      <img
        onClick={() => onChangeLanguage("aze")}
        src="https://flagsapi.com/AZ/flat/24.png"
        alt="AZE Flag"
      />
      <img
        onClick={() => onChangeLanguage("en")}
        src="https://flagsapi.com/US/flat/24.png"
        alt="USA Flag"
      />
    </div>
  );
}

export default withTranslation()(Language);
