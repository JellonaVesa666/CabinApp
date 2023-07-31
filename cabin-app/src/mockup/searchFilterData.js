import { GetCurrentDate } from "../helpers/HelperFunctions";

export const searchParameters = {
  multiSelect: {
    type: "multiSelect",
    isActive: true,
    dropdown: true,
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
    dropdown: true,
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
    dropdown: true,
    info: {
      fi: {
        translation: "huoneet",
      },
      en: {
        translation: "rooms",
      },
    },
    0: {
      fi: {
        translation: "makuuhuoneet",
      },
      en: {
        translation: "bedrooms",
      },
      value: 2,
    },
    1: {
      fi: {
        translation: "kylpyhuoneet",
      },
      en: {
        translation: "bathrooms",
      },
      value: 1,
    },
  },
  slider: {
    type: "slider",
    isActive: true,
    dropdown: true,
    maxDefault: 1000,
    minDefault: 0,
    maxValue: 1000,
    minValue: 0,
    step: 1,
    info: {
      fi: {
        translation: "hinta",
      },
      en: {
        translation: "price",
      },
    },
  },
  checkboxMultiRow: {
    type: "checkboxMulti",
    isActive: true,
    dropdown: true,
    rows: 2,
    info: {
      fi: {
        translation: "mökki tyyppi",
      },
      en: {
        translation: "cabin type",
      },
    },
    0: {
      fi: {
        translation: "Mökki",
      },
      en: {
        translation: "Cabin",
      },
      value: false,
    },
    1: {
      fi: {
        translation: "Rantamökki",
      },
      en: {
        translation: "Cottage",
      },
      value: true,
    },
    2: {
      fi: {
        translation: "Erämökki",
      },
      en: {
        translation: "Hut",
      },
      value: false,
    },
    3: {
      fi: {
        translation: "Huvila",
      },
      en: {
        translation: "Villa",
      },
      value: false,
    },
    5: {
      fi: {
        translation: "Mökkikylä",
      },
      en: {
        translation: "Resort",
      },
      value: false,
    },
    6: {
      fi: {
        translation: "Hirsimökki",
      },
      en: {
        translation: "Log House",
      },
      value: false,
    },
  },
  checkboxMulti: {
    type: "checkboxMulti",
    isActive: true,
    dropdown: true,
    rows: 0,
    info: {
      fi: {
        translation: "mökki tyyppi",
      },
      en: {
        translation: "cabin type",
      },
    },
    0: {
      fi: {
        translation: "Mökki",
      },
      en: {
        translation: "Cabin",
      },
      value: false,
    },
    1: {
      fi: {
        translation: "Rantamökki",
      },
      en: {
        translation: "Cottage",
      },
      value: true,
    },
    2: {
      fi: {
        translation: "Erämökki",
      },
      en: {
        translation: "Hut",
      },
      value: false,
    },
    3: {
      fi: {
        translation: "Huvila",
      },
      en: {
        translation: "Villa",
      },
      value: false,
    },
    5: {
      fi: {
        translation: "Mökkikylä",
      },
      en: {
        translation: "Resort",
      },
      value: false,
    },
    6: {
      fi: {
        translation: "Hirsimökki",
      },
      en: {
        translation: "Log House",
      },
      value: false,
    },
  },
  checkboxSingle: {
    type: "checkboxSingle",
    isActive: true,
    dropdown: true,
    info: {
      fi: {
        translation: "autopaikka",
      },
      en: {
        translation: "parking space",
      },
    },
    0: {
      fi: {
        translation: "kyllä",
      },
      en: {
        translation: "yes",
      },
      value: false,
    },
    1: {
      fi: {
        translation: "ei",
      },
      en: {
        translation: "no",
      },
      value: true,
    },
    2: {
      fi: {
        translation: "ehkä",
      },
      en: {
        translation: "maybe",
      },
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
      fi: {
        translation: "Alue, Kaupunki, Mökki...",
      },
      en: {
        translation: "Area, City, Cabin...",
      },
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
    type: "counter",
    static: true,
    info: {
      fi: {
        translation: "henkilöt",
      },
      en: {
        translation: "persons",
      },
    },
    0: {
      fi: {
        translation: "aikuiset",
      },
      en: {
        translation: "adults",
      },
      value: 1,
    },
    1: {
      fi: {
        translation: "lapset",
      },
      en: {
        translation: "children",
      },
      value: 0,
    },
  },
  rooms: {
    type: "counter",
    static: true,
    info: {
      fi: {
        translation: "huoneet",
      },
      en: {
        translation: "rooms",
      },
    },
    0: {
      fi: {
        translation: "makuuhuoneet",
      },
      en: {
        translation: "bedrooms",
      },
      value: 2,
    },
    1: {
      fi: {
        translation: "kylpyhuoneet",
      },
      en: {
        translation: "bathrooms",
      },
      value: 1,
    },
  },
};