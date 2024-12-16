import { Champion } from "./Champion";
export type Rotation = number[];

export type rotData = {
  freeChampionIds: Rotation;
  freeChampionIdsForNewPlayers: Rotation;
};

export type mappedData = {
  [key: string]: Champion;
};
