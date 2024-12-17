import { ChampionData } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardsProps = {
  data: ChampionData;
  versionData: string[];
};

const ChampionCards = ({ data, versionData }: ChampionCardsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-24">
      {data.map((champ, i) => {
        return (
          <Link
            className="border rounded p-4 hover:shadow-lg"
            href={`/champions/${champ.id}`}
            key={i}
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/img/champion/${champ.id}.png`}
              width={50}
              height={50}
              alt="챔피언 이미지"
            ></Image>
            <h2 className="mt-2 text-xl font-semibold">{champ.name}</h2>
            <p className="text-gray-500">{champ.title}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default ChampionCards;
