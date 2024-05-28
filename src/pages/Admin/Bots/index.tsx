// Components
import CardBotsInfo from "@/components/Cards/CardBotsInfo";

const BotsInfoPage = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 xl:mb-0 px-4">{<CardBotsInfo />}</div>
      </div>
    </>
  );
};

export default BotsInfoPage;
