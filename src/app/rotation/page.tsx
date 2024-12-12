"use client";

import { fetchChampionData } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchRotData } from "../api/fetchRotData";
import Link from "next/link";
import Image from "next/image";
import { ChampionData } from "@/types/Champion";
import { type Rotation } from "@/types/Rotation";

const Rotation = () => {
  const { data: champData } = useQuery<ChampionData, Error>({
    queryKey: ["champData"],
    queryFn: fetchChampionData,
  });
  const { data: rotData } = useQuery<
    {
      freeChampionIds: Rotation;
      freeChampionIdsForNewPlayers: Rotation;
    },
    Error
  >({
    queryKey: ["rotData"],
    queryFn: fetchRotData,
  });

  const mappedData = useMemo(() => {
    const map = new Map();
    champData?.forEach((champ) => {
      map.set(Number(champ.key), {
        id: champ.id,
        name: champ.name,
        title: champ.title,
      });
    });
    return map;
  }, [champData]);

  return (
    <div className="pb-24">
      <p className="text-center pt-16 mt-2 text-xl font-semibold">로테이션 챔피언</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotData?.freeChampionIds.map((id) => {
          return (
            <div
              className="border rounded p-4 hover:shadow-lg"
              key={mappedData.get(id).id}
            >
              <Link href={`/champions/${mappedData.get(id).id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${
                    mappedData.get(id).id
                  }.png`}
                  width={50}
                  height={50}
                  alt="챔피언 이미지"
                ></Image>
                <h2 className="mt-2 text-xl font-semibold">
                  {mappedData.get(id).name}
                </h2>
                <p className="text-gray-500">{mappedData.get(id).title}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-center p-5 mt-2 text-xl font-semibold">초심자를 위한 무료 챔피언</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotData?.freeChampionIdsForNewPlayers.map((id) => {
          return (
            <div
              className="border rounded p-4 hover:shadow-lg"
              key={mappedData.get(id).id}
            >
              <Link href={`/champions/${mappedData.get(id).id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${
                    mappedData.get(id).id
                  }.png`}
                  width={50}
                  height={50}
                  alt="챔피언 이미지"
                ></Image>
                <h2 className="mt-2 text-xl font-semibold">
                  {mappedData.get(id).name}
                </h2>
                <p className="text-gray-500">{mappedData.get(id).title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Rotation;
