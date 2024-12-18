import { fetchItemData, getLatestVersion } from "@/utils/serverApi";
import ItemDataCards from "./_components/ItemDataCards";

const Items = async () => {
  const versionData = await getLatestVersion();
  const { ItemData } = await fetchItemData(versionData[0]);
  return <ItemDataCards ItemData={ItemData} versionData={versionData} />;
};
export default Items;
