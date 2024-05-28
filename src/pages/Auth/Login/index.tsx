// Packages
import { auth, googleProvider, microsoftProvider } from "@/firebase_config";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";

// Components
import CredentialButton from "@/components/Buttons/credentialButton";
import CredentialLogo from "@/components/Images/credentialLogo";

const LoginPage = () => {
  // Hooks
  const { t } = useTranslation();

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Unexpected error: ", error);
    }
  };

  const signInWithMicrosoft = async () => {
    try {
      const result = await signInWithPopup(auth, microsoftProvider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("Unexpected error: ", error);
    }
  };

  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center items-center'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <CredentialLogo />
                <div className='text-center mb-3 mt-10'>
                  <h5 className='text-blueGray-500 text-lg font-bold'>
                    {t("signIn")}
                  </h5>
                </div>
                <div className='btn-wrapper text-center'>
                  <CredentialButton
                    text={"microsoft"}
                    color={"bg-black"}
                    icon={"fa-windows"}
                    textColor={"text-white"}
                    onClick={signInWithMicrosoft}
                  />
                  <CredentialButton
                    text={"google"}
                    color={"bg-white"}
                    icon={"fa-google"}
                    textColor={"text-black"}
                    onClick={signInWithGoogle}
                  />
                </div>
                <div className='flex justify-start mt-10 relative text-blueGray-500'>
                  <div className='w-1/2'>
                    <a onClick={(e) => e.preventDefault()}>
                      <small>{t("didYouForget")}</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
