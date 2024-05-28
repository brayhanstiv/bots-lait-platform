import { useRef } from "react";

const MapExample = () => {
  const mapRef = useRef(null);

  return (
    <>
      <div className='relative w-full rounded h-600-px'>
        <div className='rounded h-full' ref={mapRef} />
      </div>
    </>
  );
};

export default MapExample;
