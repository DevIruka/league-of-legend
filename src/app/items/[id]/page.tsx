import { cleanText } from "@/utils/cleanText";
import { fetchItemData, getLatestVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import ItemDetailShow from "../_components/ItemDetailShow";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const versionData = await getLatestVersion();
  const { data } = await fetchItemData(versionData[0]);
  return {
    title: `${data[id].name}`,
    description: `${data[id].name}의 데이터를 제공합니다.`,
  };
}

const ItemDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const versionData = await getLatestVersion();
  const { data } = await fetchItemData(versionData[0]);
  return <ItemDetailShow data={data} versionData={versionData} id={id} />;
};
export default ItemDetail;
