import { ItemKeyandValue } from "@/types/Items";
import { cleanText } from "@/utils/cleanText";
import Image from "next/image";

type ItemDetailShowProps = {
  data: ItemKeyandValue;
  versionData: string[];
  id: string;
};

const ItemDetailShow = ({ data, versionData, id }: ItemDetailShowProps) => {
  return (
    <div className="max-w-3xl mx-auto p-24">
      <h1 className="text-4xl font-bold mb-4">{data[id].name}</h1>
      <Image
        className="mx-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/img/item/${id}.png`}
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
export default ItemDetailShow;
