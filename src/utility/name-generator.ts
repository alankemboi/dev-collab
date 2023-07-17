const getVersionNumber = () =>
  "v" +
  Math.floor(Math.random() * 50 + 1) +
  "." +
  Math.floor(Math.random() * 100 + 1);

const getMkNumeral = () =>
  "Mk " + romanNumeral(Math.floor(Math.random() * 100 + 1));

type RomanNumerals = {
  [key: string]: number;
};

type Vowel = {
  [key: string]: string[];
};
const romanNumeral = (number: any) => {
  const numerals: RomanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let numeralStr = "";
  while (number > 0) {
    for (let a in numerals) {
      if (numerals[a] <= number) {
        numeralStr += a;
        number -= numerals[a];
        break;
      }
    }
  }
  return numeralStr;
};

const nameGenerator = () => {
  let vowels: Vowel = {
      "1": [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      "2": ["a", "e", "o", "u"],
      "3": [
        "br",
        "cr",
        "dr",
        "fr",
        "gr",
        "pr",
        "str",
        "tr",
        "bl",
        "cl",
        "fl",
        "gl",
        "pl",
        "sl",
        "sc",
        "sk",
        "sm",
        "sn",
        "sp",
        "st",
        "sw",
        "ch",
        "sh",
        "th",
        "wh",
      ],
      "4": [
        "ae",
        "ai",
        "ao",
        "au",
        "a",
        "ay",
        "ea",
        "ei",
        "eo",
        "eu",
        "e",
        "ey",
        "ua",
        "ue",
        "ui",
        "uo",
        "u",
        "uy",
        "ia",
        "ie",
        "iu",
        "io",
        "iy",
        "oa",
        "oe",
        "ou",
        "oi",
        "o",
        "oy",
      ],
      "5": [
        "turn",
        "ter",
        "nus",
        "rus",
        "tania",
        "hiri",
        "hines",
        "gawa",
        "nides",
        "carro",
        "rilia",
        "stea",
        "lia",
        "lea",
        "ria",
        "nov",
        "phus",
        "mia",
        "nerth",
        "wei",
        "ruta",
        "tov",
        "zuno",
        "vis",
        "lara",
        "nia",
        "liv",
        "tera",
        "gantu",
        "yama",
        "tune",
        "ter",
        "nus",
        "cury",
        "bos",
        "pra",
        "thea",
        "nope",
        "tis",
        "clite",
      ],
      "6": [
        "una",
        "ion",
        "iea",
        "iri",
        "illes",
        "ides",
        "agua",
        "olla",
        "inda",
        "eshan",
        "oria",
        "ilia",
        "erth",
        "arth",
        "orth",
        "oth",
        "illon",
        "ichi",
        "ov",
        "arvis",
        "ara",
        "ars",
        "yke",
        "yria",
        "onoe",
        "ippe",
        "osie",
        "one",
        "ore",
        "ade",
        "adus",
        "urn",
        "ypso",
        "ora",
        "iuq",
        "orix",
        "apus",
        "ion",
        "eon",
        "eron",
        "ao",
        "omia",
      ],
    },
    mtx = [
      [1, 1, 2, 2, 5, 5],
      [2, 2, 3, 3, 6, 6],
      [3, 3, 4, 4, 5, 5],
      [4, 4, 3, 3, 6, 6],
      [3, 3, 4, 4, 2, 2, 5, 5],
      [2, 2, 1, 1, 3, 3, 6, 6],
      [3, 3, 4, 4, 2, 2, 5, 5],
      [4, 4, 3, 3, 1, 1, 6, 6],
      [3, 3, 4, 4, 1, 1, 4, 4, 5, 5],
      [4, 4, 1, 1, 4, 4, 3, 3, 6, 6],
    ],
    fn = function (i: number) {
      return Math.floor(Math.random() * vowels[i].length);
    },
    name,
    comp,
    i,
    il,
    c = 0;

  name = "";
  comp = mtx[c % mtx.length];
  for (i = 0, il = comp.length / 2; i < il; i++) {
    name += vowels[comp[i * 2]][fn(comp[i * 2 + 1])];
  }

  name +=
    Math.random() < 0.4
      ? Math.random() < 0.5
        ? " " + getVersionNumber()
        : " " + getMkNumeral()
      : "";

  return name.charAt(0).toUpperCase() + name.slice(1);
};

export default nameGenerator;
