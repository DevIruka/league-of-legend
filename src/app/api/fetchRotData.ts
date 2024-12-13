import { Rotation } from "@/types/Rotation";

export const fetchRotData = async (): Promise<{
  freeChampionIds: Rotation;
  freeChampionIdsForNewPlayers: Rotation;
}> => {
  const API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  try {
    const res = await fetch(
      `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`
    );
    const data = await res.json();
    const { freeChampionIds, freeChampionIdsForNewPlayers } = data;
    return { freeChampionIds, freeChampionIdsForNewPlayers };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
