import { cleanText } from "@/utils/cleanText";
import { fetchItemData } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const Items = async () => {
  const { ItemData } = await fetchItemData();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-24">
      {ItemData.map(([key, value]) => {
        return (
          <Link
            href={`/items/${key}`}
            className="border rounded p-4 hover:shadow-lg"
            key={key}
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${key}.png`}
              width={100}
              height={100}
              alt={`${value.name}에 대한 이미지입니다.`}
            ></Image>
            <h2 className="mt-2 text-xl font-semibold">{value.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
export default Items;
