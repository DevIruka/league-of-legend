import { fetchChampionDetailData, getLatestVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import ChampionDetailShow from "../_components/ChampionDetailShow";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const versionData = await getLatestVersion();
  const ChampionDetailData = await fetchChampionDetailData(id, versionData[0]);

  return {
    title: `챔피언 정보 : ${ChampionDetailData.name}`,
    description: `${ChampionDetailData.name}의 데이터를 제공합니다.`,
  };
}

const ChampionDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const versionData = await getLatestVersion();
  const ChampionDetailData = await fetchChampionDetailData(id, versionData[0]);
  return (
    <ChampionDetailShow
      ChampionDetailData={ChampionDetailData}
      versionData={versionData}
    />
  );
};
export default ChampionDetail;
