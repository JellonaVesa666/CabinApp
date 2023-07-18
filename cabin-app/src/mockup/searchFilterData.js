export const countByStatus = {
  0: {
    name: "kaikki",
    count: "100",
    selected: false,
  },
  1: {
    name: "varattu",
    count: "30",
    selected: false,
  }
};

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
        name: "huoneet",
      },
      en: {
        name: "rooms",
      },
    },
    0: {
      fi: {
        name: "makuuhuoneet",
      },
      en: {
        name: "bedrooms",
      },
      value: 2,
    },
    1: {
      fi: {
        name: "kylpyhuoneet",
      },
      en: {
        name: "bathrooms",
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
  },
  checkboxMultiRow: {
    type: "checkboxMulti",
    isActive: true,
    dropdown: true,
    rows: 2,
    info: {
      fi: {
        name: "mökki tyyppi",
      },
      en: {
        name: "cabin type",
      },
    },
    0: {
      fi: {
        name: "Mökki",
      },
      en: {
        name: "Cabin",
      },
      value: false,
    },
    1: {
      fi: {
        name: "Rantamökki",
      },
      en: {
        name: "Cottage",
      },
      value: true,
    },
    2: {
      fi: {
        name: "Erämökki",
      },
      en: {
        name: "Hut",
      },
      value: false,
    },
    3: {
      fi: {
        name: "Huvila",
      },
      en: {
        name: "Villa",
      },
      value: false,
    },
    5: {
      fi: {
        name: "Mökkikylä",
      },
      en: {
        name: "Resort",
      },
      value: false,
    },
    6: {
      fi: {
        name: "Hirsimökki",
      },
      en: {
        name: "Log House",
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
        name: "mökki tyyppi",
      },
      en: {
        name: "cabin type",
      },
    },
    0: {
      fi: {
        name: "Mökki",
      },
      en: {
        name: "Cabin",
      },
      value: false,
    },
    1: {
      fi: {
        name: "Rantamökki",
      },
      en: {
        name: "Cottage",
      },
      value: true,
    },
    2: {
      fi: {
        name: "Erämökki",
      },
      en: {
        name: "Hut",
      },
      value: false,
    },
    3: {
      fi: {
        name: "Huvila",
      },
      en: {
        name: "Villa",
      },
      value: false,
    },
    5: {
      fi: {
        name: "Mökkikylä",
      },
      en: {
        name: "Resort",
      },
      value: false,
    },
    6: {
      fi: {
        name: "Hirsimökki",
      },
      en: {
        name: "Log House",
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
        name: "autopaikka",
      },
      en: {
        name: "parking space",
      },
    },
    0: {
      fi: {
        name: "kyllä",
      },
      en: {
        name: "yes",
      },
      value: false,
    },
    1: {
      fi: {
        name: "ei",
      },
      en: {
        name: "no",
      },
      value: true,
    },
    2: {
      fi: {
        name: "ehkä",
      },
      en: {
        name: "maybe",
      },
      value: true,
    },
  },
  // Persons - Counter
  passive: {
    type: "counter",
    passive: true,
    info: {
      fi: {
        name: "henkilöt",
      },
      en: {
        name: "persons",
      },
    },
    0: {
      fi: {
        name: "aikuiset",
      },
      en: {
        name: "adults",
      },
      value: 2,
    },
    1: {
      fi: {
        name: "lapset",
      },
      en: {
        name: "children",
      },
      value: 1,
    },
  },
};