export type ChampionData = Champion[];

export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
};

type tips = string[];

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  allytips: tips;
  enemytips: tips;
};
