"use client";

import { ChampionData } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ChampionCardsProps = {
  data: ChampionData;
  versionData: string[];
};

const ChampionCards = ({ data, versionData }: ChampionCardsProps) => {
  const [input, setInput] = useState("");
  const filteredData = data.filter((champ) => champ.name.includes(input));
  return (
    <>
      <div className="pt-20 ps-10 pr-10">
        <input
          type="text"
          placeholder="챔피언 검색..."
          className="w-full p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-5 ps-10 pr-10 pb-24">
        {filteredData.map((champ, i) => {
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
    </>
  );
};
export default ChampionCards;
