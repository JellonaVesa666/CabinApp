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
  checkboxMulti: {
    type: "checkboxMulti",
    isActive: false,
    dropdown: true,
    0: {
      name: "hirsi",
      value: false,
    },
    1: {
      name: "hirsihuvila",
      value: true,
    },
    2: {
      name: "huvila",
      value: false,
    },
    3: {
      name: "mökki",
      value: false,
    },
  },
  checkboxSingle: {
    type: "checkboxSingle",
    isActive: false,
    dropdown: true,
    value: false,
    0: {
      name: "hirsi",
    },
    1: {
      name: "hirsihuvila",
    },
    2: {
      name: "huvila",
    },
    3: {
      name: "mökki",
    },
  },
};