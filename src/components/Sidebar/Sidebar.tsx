// Packages
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "@/components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  // Hooks
  const { t } = useTranslation();

  const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            {t("title")}
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              {t("statistics")}
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/dashboard"
                >
                  <i className={"fas fa-tv mr-2 text-sm "}></i>
                  {t("home")}
                </NavLink>
              </li>

              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/settings"
                >
                  <i className={"fa-solid fa-robot mr-2 text-sm "}></i>
                  {t("myBots")}
                </NavLink>
              </li>

              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/tables"
                >
                  <i className={"fas fa-map-marked mr-2 text-sm "}></i>{" "}
                  {t("requestsByLocation")}
                </NavLink>
              </li>

              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/maps"
                >
                  <i
                    className={"fa-regular fa-calendar-days mr-2 text-sm "}
                  ></i>{" "}
                  {t("requestsPerHour")}
                </NavLink>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              {t("bots")}
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/quote-bot"
                >
                  <i className={"fa-brands fa-bots mr-2 text-lg"}></i>{" "}
                  {t("quoteYourBot")}
                </NavLink>
              </li>
              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/create-type"
                >
                  <i className={"fa-brands fa-bots mr-2 text-lg"}></i> Create
                  Type
                </NavLink>
              </li>

              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/create-template"
                >
                  <i className={"fa-brands fa-bots mr-2 text-lg"}></i> Create
                  Template
                </NavLink>
              </li>

              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/create-bot"
                >
                  <i className={"fa-brands fa-bots mr-2 text-lg"}></i> Create
                  Bot
                </NavLink>
              </li>

              <li className="items-center py-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lightBlue-500"
                      : "text-blueGray-400 text-xs font-bold uppercase block"
                  }
                  to="/admin/bots"
                >
                  <i className={"fa-brands fa-bots mr-2 text-lg"}></i> See
                  Messages
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
