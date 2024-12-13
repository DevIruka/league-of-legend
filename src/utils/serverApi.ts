import { ChampionData, ChampionDetail } from "@/types/Champion";
import { Item, ItemData, ItemKeyandValue } from "@/types/Items";

const getLatestVersion = async (): Promise<string[]> => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchChampionData = async (): Promise<ChampionData> => {
  const versionData = await getLatestVersion();
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/champion.json`,
      { next: { revalidate: 86400 } }
    );
    const { data } = await res.json();
    const ChampionData: ChampionData = Object.values(data);
    return ChampionData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchChampionDetailData = async (
  param: string
): Promise<ChampionDetail> => {
  const versionData = await getLatestVersion();
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/champion/${param}.json`
    );
    const { data } = await res.json();
    const ChampionDetail: ChampionDetail = data[param];
    return ChampionDetail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchItemData = async (): Promise<{
  ItemData: ItemData;
  data: ItemKeyandValue;
}> => {
  const versionData = await getLatestVersion();
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/item.json`
    );
    const { data } = await res.json();
    const ItemData: ItemData = Object.entries(data);
    return { ItemData, data };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
