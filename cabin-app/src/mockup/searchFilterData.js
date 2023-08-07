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
  price: {
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
  distance: {
    type: "slider",
    isActive: true,
    static: false,
    info: {
      header: {
        fi:
          "hinta",
        en:
          "price",
      }
    },
    0: {
      maxDefault: 1000,
      minDefault: 0,
      maxValue: 1000,
      minValue: 0,
      step: 1,
    },
  },
/*   slider: {
    type: "slider",
    isActive: true,
    static: false,
    info: {
      header: {
        fi:
          "hinta",
        en:
          "price",
      }
    },
    0: {
      maxDefault: 1000,
      minDefault: 0,
      maxValue: 1000,
      minValue: 0,
      step: 1,
    },
    1: {
      maxDefault: 1000,
      minDefault: 0,
      maxValue: 1000,
      minValue: 0,
      step: 1,
    },
  }, */
  class: {
    type: "checkbox",
    isActive: true,
    static: false,
    multiSelect: false,
    rows: 0,
    value: 0,
    info: {
      header: {
        fi:
          "luokka",
        en:
          "class",
      }
    },
    0: {
      fi:
        "basic",
      en:
        "basic",
      value: 0,
    },
    1: {
      fi:
        "premium",
      en:
        "premium",
      value: 0,
    },
  },
  housing: {
    type: "checkbox",
    isActive: true,
    static: false,
    multiSelect: true,
    rows: 2,
    info: {
      header: {
        fi:
          "majoitustyyppi",
        en:
          "housing type",
      }
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
  features: {
    type: "checkbox",
    isActive: true,
    static: false,
    multiSelect: false,
    rows: 2,
    value: 0,
    info: {
      header: {
        fi:
          "mökin tiedot",
        en:
          "cabin info",
      }
    },
    0: {
      fi:
        "wi-fi",
      en:
        "wi-fi",
      value: 0,
    },
    1: {
      fi:
        "yksityinen ranta",
      en:
        "private waterfront",
      value: 0,
    },
    2: {
      fi:
        "palju",
      en:
        "bathing tub",
      value: 0,
    },
    3: {
      fi:
        "syöttötuoli",
      en:
        "highchair",
      value: 0,
    },
    5: {
      fi:
        "astianpesukone",
      en:
        "dishwasher",
      value: 0,
    },
    6: {
      fi:
        "lemmikit sallitty",
      en:
        "pets allowed",
      value: 0,
    },
    7: {
      fi:
        "poreallas",
      en:
        "jacuzzi",
      value: 0,
    },
    8: {
      fi:
        "pinnasänky",
      en:
        "crib",
      value: 0,
    },
    9: {
      fi:
        "pyykinpesukone",
      en:
        "washing machine",
      value: 0,
    },
    10: {
      fi:
        "sauna",
      en:
        "sauna",
      value: 0,
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