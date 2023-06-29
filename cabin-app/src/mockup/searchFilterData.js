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
      value: "> 10m",
      selected: false,
    },
    1: {
      value: "> 20m",
      selected: false,
    },
    2: {
      value: "> 30m",
      selected: false,
    },
    3: {
      value: "> 40m",
      selected: false,
    },
    4: {
      value: "> 50m",
      selected: false,
    }
  },
  option: {
    type: "option",
    isActive: false,
    dropdown: true,
    selected: "test",
    name: "numero",
    0: {
      value: "test 1",
    },
    1: {
      value: "test 2",
    },
    2: {
      value: "test 3",
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
  checkboxMulti: {
    type: "checkboxMulti",
    isActive: false,
    dropdown: true,
    0: {
      value: "hirsi",
      selected: false,
    },
    1: {
      value: "hirsihuvila",
      selected: true,
    },
    2: {
      value: "huvila",
      selected: false,
    },
    3: {
      value: "mökki",
      selected: false,
    },
  },
  checkboxSingle: {
    type: "checkbox",
    isActive: false,
    dropdown: true,
    selected: false,
    0: {
      value: "hirsi",
    },
    1: {
      value: "hirsihuvila",
    },
    2: {
      value: "huvila",
    },
    3: {
      value: "mökki",
    },
  },
};