import { fetchChampionData } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const Champions = async () => {
  const data = await fetchChampionData();
  return (
    <div className="grid grid-cols-4 gap-4 p-24">
      {data.map(([key, value], i) => {
        return (
          <Link
            className="border rounded p-4 hover:shadow-lg"
            href={`/champions/${key}`}
            key={i}
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${key}.png`}
              width={50}
              height={50}
              alt="챔피언 이미지"
            ></Image>
            <h2 className="mt-2 text-xl font-semibold">{value.name}</h2>
            <p className="text-gray-500">{value.title}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default Champions;
