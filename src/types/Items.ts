export type ItemData = [string, Item][];

export type Item = {
  name: string;
  description: string;
};

export type ItemKeyandValue = {
  [key: string]: Item;
};