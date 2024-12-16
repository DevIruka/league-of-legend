import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";

type ChampionDetailShowProps = {
  ChampionDetailData: ChampionDetail;
  versionData: string[];
};

const ChampionDetailShow = ({
  ChampionDetailData,
  versionData,
}: ChampionDetailShowProps) => {
  return (
    <div className="max-w-3xl mx-auto p-24">
      <h1 className="text-4xl font-bold mb-4">{ChampionDetailData.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">
        {ChampionDetailData.title}
      </h2>
      <Image
        className="mx-auto"
        src={`https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/img/champion/${ChampionDetailData.id}.png`}
        width={200}
        height={200}
        alt="챔피언 이미지"
      ></Image>
      <p className="text-lg font-bold mt-4">챔피언 스토리</p>
      <p className="mt-4">{ChampionDetailData.lore}</p>
      <p className="text-lg font-bold mt-4">
        {ChampionDetailData.name} 챔피언이 아군일 경우, 유용한 팁.
      </p>
      {ChampionDetailData.enemytips &&
      ChampionDetailData.allytips.length > 0 ? (
        ChampionDetailData.allytips.map((tip, i) => (
          <p className="mt-2" key={i}>
            {i + 1} : {tip}
          </p>
        ))
      ) : (
        <p className="mt-2">DB에 등록된 팁이 없습니다.</p>
      )}
      <p className="text-lg font-bold mt-4">
        {ChampionDetailData.name} 챔피언이 적군일 경우, 유용한 팁.
      </p>
      {ChampionDetailData.enemytips &&
      ChampionDetailData.enemytips.length > 0 ? (
        ChampionDetailData.enemytips.map((tip, i) => (
          <p className="mt-2" key={i}>
            {i + 1} : {tip}
          </p>
        ))
      ) : (
        <p className="mt-2">DB에 등록된 팁이 없습니다.</p>
      )}
    </div>
  );
};
export default ChampionDetailShow;
