import { ChampionData, ChampionDetail } from "@/types/Champion";

export const fetchChampionData = async (): Promise<ChampionData> => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json",
      { next: { revalidate: 86400 } }
    );
    const { data } = await res.json();
    const ChampionData: ChampionData = Object.entries(data);
    return ChampionData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchChampionDetailData = async (
  param: string
): Promise<ChampionDetail> => {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/${param}.json`
    );
    const { data } = await res.json();
    const ChampionDetail: ChampionDetail = data[param];
    return ChampionDetail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};