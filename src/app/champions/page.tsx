import { ChampionData } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const Champions = async () => {
  const fetchChampionData = async (): Promise<ChampionData> => {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json"
    );
    const { data } = await res.json();
    return Object.entries(data);
  };

  const data = await fetchChampionData();

  return (
    <div className="grid grid-cols-4 gap-4 p-24">
        {data.map(([key, value], i) => {
          return (
            <Link
              className="border rounded p-4 hover:shadow-lg"
              href={"/"}
              key={i}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${key}.png`}
                width={50}
                height={50}
                alt="챔피언 이미지"
              ></Image>
              <p>{value.name}</p>
            </Link>
          );
        })}

    </div>
  );
};
export default Champions;
