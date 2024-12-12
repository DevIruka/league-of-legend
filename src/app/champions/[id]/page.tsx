import { fetchChampionDetailData } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const ChampionDetailData = await fetchChampionDetailData(id);

  return {
    title: `챔피언 정보 : ${ChampionDetailData.name}`,
    description: `${ChampionDetailData.name}의 데이터를 제공합니다.`,
  };
}

const ChampionDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const ChampionDetailData = await fetchChampionDetailData(id);
  return (
    <div className="max-w-3xl mx-auto p-24">
      <h1 className="text-4xl font-bold mb-4">{ChampionDetailData.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">
        {ChampionDetailData.title}
      </h2>
      <Image
        className="mx-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${ChampionDetailData.id}.png`}
        width={200}
        height={200}
        alt="챔피언 이미지"
      ></Image>
      <p className="text-lg font-bold mt-4">챔피언 스토리</p>
      <p className="mt-4">{ChampionDetailData.lore}</p>
      <p className="text-lg font-bold mt-4">
        {ChampionDetailData.name} 챔피언이 아군일 경우, 유용한 팁.
      </p>
      {ChampionDetailData.allytips.map((tip, i) => {
        return (
          <p className="mt-2" key={i}>
            {i + 1} : {tip}
          </p>
        );
      })}
      <p className="text-lg font-bold mt-4">
        {ChampionDetailData.name} 챔피언이 적군일 경우, 유용한 팁.
      </p>
      {ChampionDetailData.enemytips.map((tip, i) => {
        return (
          <p className="mt-2" key={i}>
            {i + 1} : {tip}
          </p>
        );
      })}
    </div>
  );
};
export default ChampionDetail;
