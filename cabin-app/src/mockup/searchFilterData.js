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
    isActive: false,
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
    isActive: false,
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
  date: {
    type: "date",
    isActive: false,
    dropdown: true,
    arrivalDate: "",
    departureDate: "",
  },
  slider: {
    type: "slider",
    isActive: false,
    dropdown: true,
    maxDefault: 10,
    minDefault: 0,
    maxValue: 10,
    minValue: 0,
    step: 1,
  },
  checkboxMultiRow: {
    type: "checkboxMulti",
    isActive: false,
    dropdown: true,
    rows: 2,
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
    name: {
      fi: {
        name: "mökki tyyppi",
      },
      en: {
        name: "cabin type",
      },
      value: false,
    },
    isActive: false,
    dropdown: true,
    rows: 0,
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
    name: {
      fi: {
        name: "autopaikka",
      },
      en: {
        name: "parking space",
      },
      value: false,
    },
    isActive: false,
    dropdown: true,
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
};