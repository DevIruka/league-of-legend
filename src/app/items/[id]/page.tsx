import { cleanText } from "@/utils/cleanText";
import { fetchItemData } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const { data } = await fetchItemData();
  return {
    title: `${data[id].name}`,
    description: `${data[id].name}의 데이터를 제공합니다.`,
  };
}

const ItemDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data } = await fetchItemData();
  return (
    <div className="max-w-3xl mx-auto p-24">
      <h1 className="text-4xl font-bold mb-4">{data[id].name}</h1>
      <Image
        className="mx-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${id}.png`}
        width={200}
        height={200}
        alt="챔피언 이미지"
      ></Image>
      <p className="text-lg font-bold mt-4">아이템 설명</p>
      {data[id].description ? (
        <p className="mt-4">{cleanText(data[id].description)}</p>
      ) : (
        <p className="mt-4">아이템 설명이 없습니다.</p>
      )}
    </div>
  );
};
export default ItemDetail;
