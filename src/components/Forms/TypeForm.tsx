const TypeForm = () => {
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <div className='rounded-t bg-white mb-0 px-6 py-6'>
          <div className='text-center flex justify-between'>
            <h6 className='text-blueGray-700 text-xl font-bold'>Form Type</h6>
          </div>
        </div>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <form>
            <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              Type Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Bot name'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Description
                  </label>
                  <textarea
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Write the type description'
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
              type='button'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TypeForm;
