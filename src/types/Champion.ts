export type ChampionData = [string, Champion][];

export type Champion = {
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
  // info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
};
