// Common
import CardTableEnum from "@/common/enum/cardTable";

// Components
import CardTable from "@/components/Cards/CardTable";

const TablesPage = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color={CardTableEnum.Dark} />
        </div>
      </div>
    </>
  );
};

export default TablesPage;
