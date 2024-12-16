import { fetchChampionData, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import ChampionCards from "./_components/ChampionCards";

const Champions = async () => {
  const versionData = await getLatestVersion();
  const data = await fetchChampionData(versionData[0]);
  return <ChampionCards data={data} versionData={versionData} />;
};
export default Champions;
