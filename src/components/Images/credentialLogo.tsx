// Images
import Icon from "@/assets/img/icon-nexAi-black.png";

const CredentialLogo = () => {
  return (
    <div className='w-full flex justify-center'>
      <div
        className=' absolute bg-white inline-block'
        style={{
          top: "-3rem",
          borderRadius: "50%",
        }}
      >
        <img src={Icon} alt='Logo' style={{ width: "6rem" }} />
      </div>
    </div>
  );
};

export default CredentialLogo;
