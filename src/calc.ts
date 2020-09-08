const calcMen = (menType: string): number => {
  switch (menType) {
    case "minShunz":
      return 0;
      break;
    case "anShunz":
      return 0;
      break;
    case "chunchangMinKoz":
      return 2;
      break;
    case "chunchangAnKoz":
      return 4;
      break;
    case "yaoMinKoz":
      return 4;
      break;
    case "chunchangMinKanz":
      return 8;
      break;
    case "yaoAnKoz":
      return 8;
      break;
    case "chunchangAnKanz":
      return 16;
      break;
    case "yaoMinKanz":
      return 16;
      break;
    case "yaoAnKanz":
      return 32;
      break;
    default:
      return -1;
      break;
  }
};

const calcAtama = (atamaType: string): number => {
  switch (atamaType) {
    case "suuji":
      return 0;
      break;
    case "kyakufu":
      return 0;
      break;
    case "bakaze":
      return 2;
      break;
    case "jikaze":
      return 2;
      break;
    case "sangen":
      return 2;
      break;
    default:
      return -1;
      break;
  }
};

const calcMachi = (machiType: string): number => {
  switch (machiType) {
    case "ryanmen":
      return 0;
      break;
    case "shanpon":
      return 0;
      break;
    case "tanki":
      return 2;
      break;
    case "kanchan":
      return 2;
      break;
    case "penchan":
      return 2;
      break;
    default:
      return -1;
      break;
  }
};

const calcAgari = (agariType: string): number => {
  switch (agariType) {
    case "ron":
      return 0;
      break;
    case "tsumo":
      return 2;
      break;
    default:
      return -1;
      break;
  }
};

const calcMenzen = (menList: string[]): number => {
  let isMenzen = true;
  for (const men of menList) {
    if (
      [
        "minShunz",
        "chunchangMinKoz",
        "chunchangMinKanz",
        "yaoMinKoz",
        "yaoMinKanz",
      ].includes(men)
    ) {
      isMenzen = false;
      break;
    }
  }
  return isMenzen ? 10 : 0;
};

const calcCeilFu = (fu: number): number => {
  return Math.ceil(fu / 10) * 10;
};

export { calcAgari, calcMenzen, calcMen, calcMachi, calcAtama, calcCeilFu };
