// Packages
import { useTranslation } from "react-i18next";

// Images
import Lait from "@/assets/img/logo-lait-white.png";
import NextAi from "@/assets/img/hlogo-nexAi-white.png";

type FooterSmallProps = {
  absolute: boolean;
};

const FooterSmall = ({ absolute }: FooterSmallProps) => {
  const { t } = useTranslation();

  return (
    <>
      <footer
        className={absolute ? "absolute w-full bottom-0" : "relative"}
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4'>
              <div className='text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left'>
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  target='_blank'
                  href='https://www.lait.com.co'
                  className='text-white hover:text-blueGray-300 text-sm font-semibold py-1'
                >
                  <img
                    src={NextAi}
                    alt='Logo'
                    className='w-20 h-20 inline-block'
                  />
                </a>
              </div>
            </div>
            <div className='w-full md:w-8/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center items-center'>
                <li>
                  <a
                    target='_blank'
                    href='https://www.lait.com.co/?ref=nr-footer-small'
                    className='text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3'
                  >
                    <img
                      src={Lait}
                      alt='Logo'
                      className='w-20 h-20 inline-block'
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.lait.com.co/about'
                    className='text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3'
                  >
                    {t("aboutUs")}
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.lait.com.co/api'
                    className='text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3'
                  >
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.lait.com.co/contact'
                    className='text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3'
                  >
                    {t("contactUs")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSmall;
