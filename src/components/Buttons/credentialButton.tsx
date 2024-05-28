// Packages
import { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";

type CredentialButtonProps = {
  text: string;
  color: string;
  icon: string;
  textColor: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CredentialButton = (props: CredentialButtonProps) => {
  // Hooks
  const { t } = useTranslation();

  return (
    <button
      className={`${props.color} active:bg-blueGray-50 ${props.textColor} w-full px-4 py-4 rounded outline-none focus:outline-none mr-1 mt-3 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150`}
      onClick={props.onClick}
      type='button'
    >
      <i className={`fa-brands ${props.icon} fa-2xl mr-2`}></i>
      {t(props.text)}
    </button>
  );
};

export default CredentialButton;
