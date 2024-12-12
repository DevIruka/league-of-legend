export const cleanText = (input: string): string => {
  return input.replace(/<\/?[^>]+(>|$)|\{[^}]*\}/g, "");
};
