// Packages
import { useState } from "react";
import { useTranslation } from "react-i18next";

const QuoteBotForm = () => {
  // State
  const [isActive, setIsActive] = useState<string>();
  const [quantity, setQuantity] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [total, setTotal] = useState(0);

  // Hooks
  const { t } = useTranslation();

  const calcBot = () => {
    let whatsapp = 0;
    const openAI = 0.0016;
    const thread = 25;
    if (isActive === "active") {
      whatsapp = 0.0125;
    } else if (isActive === "passive") {
      whatsapp = 0.006;
    }

    const costByUsers = quantity ? parseInt(quantity, 10) * whatsapp : 0.0;
    const costByThread = openAI * thread;
    const costByThreads = quantity
      ? parseInt(quantity, 10) * costByThread
      : 0.0;
    const x6 = (costByUsers + costByThreads) * 6;
    price
      ? setTotal(Math.ceil(x6 + parseInt(price!)) + total)
      : setTotal(Math.ceil(x6) + total);
  };

  const calcNewBot = () => {
    setIsActive("");
    setQuantity("");
    setPrice("");
  };

  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-1'>
        <div className='rounded-t bg-white mb-0 px-6 py-6'>
          <div className='text-center flex justify-between'>
            <h6 className='text-blueGray-700 text-xl font-bold'>
              {t("quoteBot")}
            </h6>
          </div>
        </div>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <form>
            <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              {t("botInfo")}
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    htmlFor='grid-active'
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  >
                    {t("whatTypeOfWp")}
                  </label>
                  <select
                    name='is-active'
                    value={isActive}
                    onChange={(e) => setIsActive(e.target.value)}
                    className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm w-full'
                  >
                    <option value={""}>{t("selectType")}</option>
                    <option value={"active"}>{t("active")}</option>
                    <option value={"passive"}>{t("passive")}</option>
                  </select>
                </div>
              </div>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    {t("numberOfUser")}
                  </label>
                  <select
                    name='value'
                    value={quantity}
                    className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm w-full'
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    <option value={0}>{t("selectQuantity")}</option>
                    <option value={1000}>1000</option>
                    <option value={5000}>5000</option>
                    <option value={10000}>10000</option>
                    <option value={30000}>30000</option>
                    <option value={50000}>50000</option>
                    <option value={100000}>100000</option>
                    <option value={300000}>300000</option>
                    <option value={500000}>500000</option>
                    <option value={1000000}>1000000</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />

            <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              {t("botServices")}
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'>
                <h3 className='block uppercase text-blueGray-600 text-xs font-bold mb-4'>
                  {t("whatServices")}
                </h3>
                <ul
                  className='w-full flex items-center flex-wrap text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                  style={{ padding: "0 2rem" }}
                >
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='vue-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='vue-checkbox-list'
                        className='w-full py-3 ps text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("audioToText")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center ps-3'>
                      <input
                        id='react-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='react-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("textToAudio")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='angular-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='angular-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("imageProcessing")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("pdfProcessing")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("apiHotelSearch")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("apiRestaurantSearch")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("apiTravelSearch")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("apiPlaceSearch")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("apiCarSearch")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("integrationOwnCRM")}
                      </label>
                    </div>
                  </li>
                  <li style={{ flexBasis: "25%" }}>
                    <div className='flex items-center'>
                      <input
                        id='laravel-checkbox-list'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                      />
                      <label
                        htmlFor='laravel-checkbox-list'
                        className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        style={{ marginInlineStart: "0.5rem" }}
                      >
                        {t("integrationClientCRM")}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />

            <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              {t("bag")}
            </h6>
            <div className='flex flex-wrap items-center'>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    {t("whatTypeOfBag")}
                  </label>
                  <select
                    name='value'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm w-full'
                  >
                    <option value={0}>{t("selectPrice")}</option>
                    <option value={100}>100</option>
                    <option value={300}>300</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                  </select>
                  <div
                    className='absolute'
                    style={{ top: "2rem", right: "2rem" }}
                  >
                    USD
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <button
                className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150'
                style={{ marginLeft: "1rem" }}
                onClick={calcBot}
                type='button'
              >
                {t("calculate")}
              </button>

              <button
                className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150'
                style={{ marginLeft: "1rem" }}
                onClick={calcNewBot}
                type='button'
              >
                {t("quoteAnotherBot")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1
        className='font-bold uppercase text-center'
        style={{ fontSize: "3rem" }}
      >
        ${total} USD
      </h1>
    </>
  );
};

export default QuoteBotForm;
