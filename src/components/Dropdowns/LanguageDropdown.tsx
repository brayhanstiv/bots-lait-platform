// Packages
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

// Common
import { LANGUAGES } from "@/common/constants/language";

// Components
import DropdownItem from "../Items/DropdownItem";
import { openLanguageDropdown } from "@/redux/slices/dropdownSlice";

type LanguageDropdownProps = {
  rightPadding?: string;
};

const LanguageDropdown = (props: LanguageDropdownProps) => {
  // Hooks
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: any) => state.dropdown.isLanguageDropdownOpen
  );

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const toogleDropdownPopover = () => {
    dispatch(openLanguageDropdown());
    setDropdownPopoverShow(!dropdownPopoverShow);
  };
  const onChangeLang = (key: string) => {
    localStorage.setItem("locale", key);
    i18n.changeLanguage(key);
    toogleDropdownPopover();
  };

  return (
    <>
      <a
        className=' flex items-center text-blueGray-500 relative'
        onClick={(e) => {
          e.preventDefault();
          toogleDropdownPopover();
        }}
      >
        <i className='fa-solid fa-language mr-4 text-white cursor-pointer fa-xl'></i>
      </a>
      <div
        className={
          (dropdownPopoverShow && isOpen ? "block " : "hidden ") +
          "bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg min-w-48 absolute"
        }
        style={{
          top: "4.5rem",
          right: props.rightPadding ? props.rightPadding : "",
        }}
      >
        <ul>
          {LANGUAGES.map(({ code, value, icon }) => (
            <DropdownItem
              key={code}
              title={t(value)}
              icon={icon}
              onClick={() => onChangeLang(code)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default LanguageDropdown;
