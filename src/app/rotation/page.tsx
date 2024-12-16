"use client";

import { fetchChampionData } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchRotData } from "../../api/fetchRotData";
import Link from "next/link";
import Image from "next/image";
import { ChampionData } from "@/types/Champion";
import { mappedData, rotData, type Rotation } from "@/types/Rotation";

const Rotation = () => {
  const { data, isPending, isError, refetch } = useQuery<{
    rotData: rotData;
    mappedData: mappedData;
    versionData: string[];
  }>({
    queryKey: ["champData"],
    queryFn: async () => {
      const res = await fetch("api/rotation");
      const data = await res.json();
      return data;
    },
  });

  const { rotData, mappedData, versionData } = data || {};

  if (isPending) {
    console.log(isPending);
    return (
      <div className="pb-24">
        <p className="text-center pt-16 mt-2 text-xl font-semibold">
          로딩 중입니다.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="pb-24">
        <p className="text-center pt-16 mt-2 text-xl font-semibold">
          데이터를 가져오는 과정에서 오류가 발생하였습니다.
        </p>
        <button
          onClick={() => refetch()}
          className="border rounded p-4 hover:shadow-lg"
        >
          다시 시도하기.
        </button>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <p className="text-center pt-16 mt-2 text-xl font-semibold">
        로테이션 챔피언
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotData?.freeChampionIds.map((id) => {
          return (
            <div
              className="border rounded p-4 hover:shadow-lg"
              key={mappedData?.[id].id}
            >
              <Link href={`/champions/${mappedData?.[id].id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${versionData?.[0]}/img/champion/${mappedData?.[id].id}.png`}
                  width={50}
                  height={50}
                  alt="챔피언 이미지"
                ></Image>
                <h2 className="mt-2 text-xl font-semibold">
                  {mappedData?.[id].name}
                </h2>
                <p className="text-gray-500">{mappedData?.[id].title}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-center p-5 mt-2 text-xl font-semibold">
        초심자를 위한 무료 챔피언
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotData?.freeChampionIdsForNewPlayers.map((id) => {
          return (
            <div
              className="border rounded p-4 hover:shadow-lg"
              key={mappedData?.[id].id}
            >
              <Link href={`/champions/${mappedData?.[id].id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${versionData?.[0]}/img/champion/${mappedData?.[id].id}.png`}
                  width={50}
                  height={50}
                  alt="챔피언 이미지"
                ></Image>
                <h2 className="mt-2 text-xl font-semibold">
                  {mappedData?.[id].name}
                </h2>
                <p className="text-gray-500">{mappedData?.[id].title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Rotation;
