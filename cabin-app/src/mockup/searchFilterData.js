import { GetCurrentDate } from "../helpers/HelperFunctions";

export const searchParameters = {
  multiSelect: {
    type: "multiSelect",
    isActive: true,
    static: false,
    0: {
      name: "> 10m",
      value: false,
    },
    1: {
      name: "> 20m",
      value: false,
    },
    2: {
      name: "> 30m",
      value: false,
    },
    3: {
      name: "> 40m",
      value: false,
    },
    4: {
      name: "> 50m",
      value: false,
    }
  },
  option: {
    type: "option",
    isActive: true,
    static: false,
    value: "test",
    name: "numero",
    0: {
      name: "test 1",
    },
    1: {
      name: "test 2",
    },
    2: {
      name: "test 3",
    },
  },
  counter: {
    type: "counter",
    isActive: true,
    static: false,
    info: {
      fi:
        "huoneet",
      en:
        "rooms",
    },
    0: {
      fi:
        "makuuhuoneet",
      en:
        "bedrooms",
      value: 2,
    },
    1: {
      fi:
        "kylpyhuoneet",
      en:
        "bathrooms",
      value: 1,
    },
  },
  slider: {
    type: "slider",
    isActive: true,
    static: false,
    maxDefault: 1000,
    minDefault: 0,
    maxValue: 1000,
    minValue: 0,
    step: 1,
    info: {
      fi: 
        "hinta",
      en: 
        "price",
    },
  },
  checkboxMultiRow: {
    type: "checkbox",
    isActive: true,
    static: false,
    multi: true,
    rows: 2,
    info: {
      fi:
        "mökki tyyppi",
      en:
        "cabin type",
    },
    0: {
      fi:
        "Mökki",
      en:
        "Cabin",
      value: false,
    },
    1: {
      fi:
        "Rantamökki",
      en:
        "Cottage",
      value: true,
    },
    2: {
      fi:
        "Erämökki",
      en:
        "Hut",
      value: false,
    },
    3: {
      fi:
        "Huvila",
      en:
        "Villa",
      value: false,
    },
    5: {
      fi:
        "Mökkikylä",
      en:
        "Resort",
      value: false,
    },
    6: {
      fi:
        "Hirsimökki",
      en:
        "Log House",
      value: false,
    },
  },
  checkboxMulti: {
    type: "checkbox",
    isActive: true,
    static: false,
    multi: true,
    rows: 0,
    info: {
      fi:
        "mökki tyyppi",
      en:
        "cabin type",
    },
    0: {
      fi:
        "Mökki",
      en:
        "Cabin",
      value: false,
    },
    1: {
      fi:
        "Rantamökki",
      en:
        "Cottage",
      value: true,
    },
    2: {
      fi:
        "Erämökki",
      en:
        "Hut",
      value: false,
    },
    3: {
      fi:
        "Huvila",
      en:
        "Villa",
      value: false,
    },
    5: {
      fi:
        "Mökkikylä",
      en:
        "Resort",
      value: false,
    },
    6: {
      fi:
        "Hirsimökki",
      en:
        "Log House",
      value: false,
    },
  },
  checkboxSingle: {
    type: "checkbox",
    isActive: true,
    static: false,
    multi: false,
    single: true,
    rows: 0,
    info: {
      fi:
        "autopaikka",
      en:
        "parking space",
    },
    0: {
      fi:
        "kyllä",
      en:
        "yes",
      value: false,
    },
    1: {
      fi:
        "ei",
      en:
        "no",
      value: true,
    },
    2: {
      fi:
        "ehkä",
      en:
        "maybe",
      value: true,
    },
  },

  // ---Static Filters--- //
  searchWord: {
    type: "text",
    context: "field",
    static: true,
    modal: false,
    value: "",
    placeholder: {
      fi:
        "Alue, Kaupunki, Mökki...",
      en:
        "Area, City, Cabin...",
    },
  },
  searchDate: {
    type: "button",
    context: "date",
    static: true,
    modal: true,
    count: 2,
    reservations: false,
    value: {
      0: "",
      1: "",
    },
    defaultValue: {
      0: GetCurrentDate(0),
      1: GetCurrentDate(1),
    }
  },
  persons: {
    type: "button",
    context: "counter",
    static: true,
    modal: true,
    info: {
      fi:
        "henkilöt",
      en:
        "persons",
    },
    0: {
      fi:
        "aikuista",
      en:
        "adults",
      value: 2,
    },
    1: {
      fi:
        "lasta",
      en:
        "children",
      value: 0,
    },
  },
  rooms: {
    type: "button",
    context: "counter",
    static: true,
    modal: true,
    info: {
      fi:
        "huoneet",

      en:
        "rooms",

    },
    0: {
      fi:
        "makuuhuoneet",

      en:
        "bedrooms",

      value: 2,
    },
    1: {
      fi:
        "kylpyhuoneet",

      en:
        "bathrooms",

      value: 1,
    },
  },
};