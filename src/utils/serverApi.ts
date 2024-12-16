import { ChampionData, ChampionDetail } from "@/types/Champion";
import { Item, ItemData, ItemKeyandValue } from "@/types/Items";

export const getLatestVersion = async (): Promise<string> => {
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

export const fetchChampionData = async (
  version: string
): Promise<ChampionData> => {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
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
  param: string,
  version: string
): Promise<ChampionDetail> => {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${param}.json`
    );
    const { data } = await res.json();
    const ChampionDetail: ChampionDetail = data[param];
    return ChampionDetail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchItemData = async (
  version: string
): Promise<{
  ItemData: ItemData;
  data: ItemKeyandValue;
}> => {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );
    const { data } = await res.json();
    const ItemData: ItemData = Object.entries(data);
    return { ItemData, data };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
