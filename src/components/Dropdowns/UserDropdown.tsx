// Packages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase_config";

// Components
import DropdownItem from "../Items/DropdownItem";

// Images
import User from "@/assets/img/user.png";

// Slices
import { openUserDropdown } from "@/redux/slices/dropdownSlice";

const UserDropdown = () => {
  // Hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state: any) => state.dropdown.isUserDropdownOpen);

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  // local Storage
  const {
    providerData: [{ photoURL }],
  } = JSON.parse(localStorage.getItem("user")!);

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  const toogleDropdownPopover = () => {
    dispatch(openUserDropdown());
    setDropdownPopoverShow(!dropdownPopoverShow);
  };

  return (
    <>
      <a
        className='text-blueGray-500 block relative'
        onClick={(e) => {
          e.preventDefault();
          toogleDropdownPopover();
        }}
      >
        <div className='items-center flex'>
          <span className='w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full'>
            <img
              alt='...'
              className='w-full rounded-full align-middle border-none shadow-lg'
              src={photoURL ? photoURL : User}
            />
          </span>
        </div>
      </a>
      <div
        className={
          (dropdownPopoverShow && isOpen ? "block " : "hidden ") +
          "bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg min-w-48 absolute right-2 top-0"
        }
        style={{ top: "4.5rem", right: "1rem" }}
      >
        <ul>
          <DropdownItem
            title={t("myProfile")}
            icon='fa-regular fa-user'
            onClick={() => {
              navigate("/admin/my-profile");
              toogleDropdownPopover();
            }}
          />
          <DropdownItem
            title={t("editProfile")}
            icon='fa-regular fa-pen-to-square'
            onClick={() => {
              navigate("/admin/edit-profile");
              toogleDropdownPopover();
            }}
          />
          <DropdownItem
            title={t("settings")}
            icon='fa-solid fa-gear'
            onClick={() => {
              navigate("/admin/settings");
              toogleDropdownPopover();
            }}
          />
          <div className='h-0 my-2 border border-solid border-blueGray-100' />
          <DropdownItem
            title={t("logout")}
            icon='fa-solid fa-arrow-right-from-bracket'
            onClick={logout}
          />
        </ul>
      </div>
    </>
  );
};

export default UserDropdown;
