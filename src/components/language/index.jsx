/** @format */
import React from "react";
import { withTranslation } from "react-i18next";
function LanguageSelector(props) {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-x-2 items-center cursor-pointer">
      <img
        onClick={() => onChangeLanguage("aze")}
        src="https://flagsapi.com/AZ/flat/24.png"
        alt="AZE Flag"
        className="w-4 transition-transform transform active:scale-125 duration-300 ease-in-out "
      />

      <img
        onClick={() => onChangeLanguage("tr")}
        src="https://flagsapi.com/TR/flat/24.png"
        alt="Turkish Flag"
        className="w-4 transition-transform transform active:scale-125 duration-300 ease-in-out "
      />

      <img
        onClick={() => onChangeLanguage("en")}
        src="https://flagsapi.com/US/flat/24.png"
        alt="USA Flag"
        className="w-4 transition-transform transform active:scale-125 duration-300 ease-in-out "
      />
    </div>
  );
}

export default withTranslation()(LanguageSelector);
