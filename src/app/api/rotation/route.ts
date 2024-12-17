import { fetchRotData } from "@/api/fetchRotData";
import { fetchChampionData, getLatestVersion } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  const versionData = await getLatestVersion();
  const champData = await fetchChampionData(versionData[0]);
  const rotData = await fetchRotData();
  const mappedData = (() => {
    const map = new Map();
    champData.forEach((champ) => {
      map.set(Number(champ.key), {
        id: champ.id,
        name: champ.name,
        title: champ.title,
      });
    });
    return Object.fromEntries(map);
  })();

  return NextResponse.json({ rotData, mappedData, versionData });
}
