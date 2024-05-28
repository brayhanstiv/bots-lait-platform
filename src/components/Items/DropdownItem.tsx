import { MouseEventHandler } from "react";

type DropdownItemProps = {
  title: string;
  icon: string;
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
};

const DropdownItem = (props: DropdownItemProps) => {
  return (
    <li className='flex text-start justify-center cursor-pointer'>
      <i className={props.icon + " m-2"}></i>
      <a
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }
        onClick={props.onClick}
      >
        {props.title}
      </a>
    </li>
  );
};

export default DropdownItem;
