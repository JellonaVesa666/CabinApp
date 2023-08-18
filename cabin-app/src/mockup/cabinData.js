/* Cabin Features */
export const cabinFeatures = {
  0: {
    fi: "astianpesukone",
  },
  1: {
    fi: "mikroaaltouuni",
  },
  2: {
    fi: "uuni",
  },
  3: {
    fi: "liesi",
  },
  4: {
    fi: "takka",
  },
  5: {
    fi: "sähkösauna",
  },
  6: {
    fi: "savusauna",
  },
  7: {
    fi: "puusauna",
  },
  8: {
    fi: "kuivausrumpu",
  },
  9: {
    fi: "kuivauskaappi",
  },
  10: {
    fi: "jääkaappi",
  },
  11: {
    fi: "pakastin",
  },
  12: {
    fi: "sisä-wc",
  },
  13: {
    fi: "ulko-wc",
  },
  14: {
    fi: "televisio",
  },
  15: {
    fi: "internet",
  },
  16: {
    fi: "pyykinpesukone",
  },
  17: {
    fi: "kahvinkeitin",
  },
  18: {
    fi: "ilmanlämpöpumppu",
  },
  19: {
    fi: "syöttötuoli",
  },
  20: {
    fi: "vauvasänky",
  },
  21: {
    fi: "parvi",
  },
  22: {
    fi: "suihku",
  },
  23: {
    fi: "ulkoporeallas",
  },
  24: {
    fi: "poreamme",
  },
  25: {
    fi: "uima-allas",
  },
  26: {
    fi: "palju",
  },
  27: {
    fi: "kantovesi",
  },
  28: {
    fi: "pyörätuolisopivuus",
  },
  29: {
    fi: "lemmikit sallittu",
  },
  30: {
    fi: "mökissä ei sähköjä",
  },
  31: {
    fi: "sähköauton latausmahdollisuus",
  },
  32: {
    fi: "laituri",
  },
  33: {
    fi: "soutuvene",
  },
  34: {
    fi: "kanootti / kajakki",
  },
  35: {
    fi: "grillikota",
  }
}

/* Cabin Data */
export const cabinData = {
  type: 1,
  reserved: {
    value: false,
    fi:
      "varattu",
    en:
      "reserved"
  },
  dayPrice: 99,
  weekendPrice: 290,
  weekPrice: 500,
  discount: 50,
  discountFromDays: 5,
  discountExpriration: "2023-07-04T13:33:03.969Z",
  discountMultiplier: 150,
  cuponCode: "",
  cuponDiscount: 0,
  name: "Ekin Mesta",
  location: "Etelä-Suomi / Vihti, Uusimaa",
  features: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  description: `Mökin tilavat makuuhuoneet on sisustettu rauhallisesti ja sopusoinnussa hirsiseinien kanssa.
    Täällä nukut hyvät yöunet ja heräät virkeänä aamuun. Hirsimökissä on upea sauna, jonka järeät lauteet
    on tehty tervaleppä lankusta ja kokonaisuuden kruunaa Veto -kiuas.

    Hirsimökissä on tilava katettu terassi, jolta voi ihailla järveä. Terassilla nautit aamukahvit tai
    vaikka illallisen ympäri vuoden luonnosta nauttien. Mökin omasta rannasta pääset rauhassa uimaan tai
    soutelemaan järvelle. Villa Einon nuotiopaikka on aivan järven rannalla. Siinä keität mukavasti 
    nokipannukahvit, paistat makkarat tai vaikka muurinpohjalettuja. Nuotiopaikalle mahtuu kahdeksan henkeä.`,
  ratings: {
    0: {
      id: "",
      tidiness: 4.5,
      condition: 2,
      furnishing: 4,
      location: 2.5,
      reliability: 5,
    },
    1: {
      id: "",
      tidiness: 4.5,
      condition: 3,
      furnishing: 4,
      location: 5,
      reliability: 5,
    },
    2: {
      id: "",
      tidiness: 2.5,
      condition: 3,
      furnishing: 4,
      location: 4,
      reliability: 5,
    },
    3: {
      id: "",
      tidiness: 4.5,
      condition: 3,
      furnishing: 4,
      location: 4,
      reliability: 5,
    },
    4: {
      id: "",
      tidiness: 4.5,
      condition: 3,
      furnishing: 4,
      location: 4,
      reliability: 5,
    },
    5: {
      tidiness: 4.5,
      condition: 3.5,
      furnishing: 4,
      location: 1,
      reliability: 5,
    },
  },
  images: {
    0: {
      src: "../images/icon_preview"
    },
    1: {
      src: "../images/icon_preview"
    },
    2: {
      src: "../images/icon_preview"
    },
    3: {
      src: "../images/icon_preview"
    },
    4: {
      src: "../images/icon_preview"
    },
    5: {
      src: "../images/icon_preview"
    },
    6: {
      src: "../images/icon_preview"
    },
    7: {
      src: "../images/icon_preview"
    },
    8: {
      src: "../images/icon_preview"
    },
    9: {
      src: "../images/icon_preview"
    },
    10: {
      src: "../images/icon_preview"
    },
    11: {
      src: "../images/icon_preview"
    }
  }
}

/* [
  {
      "id": 1,
      "ownerId": 8,
      "name": "Ekin Mesta",
      "region": "Pohjois-Pohjanmaa",
      "address": "HattiWattikuja 1",
      "postalCode": "90500",
      "mapCoordinates": "x:200, y:500",
      "isActive": 1,
      "status": 0,
      "capacity": "2",
      "floors": 1,
      "bedrooms": 1,
      "bathrooms": 1,
      "squares": 30,
      "plotSize": 0,
      "type": 0,
      "features": "",
      "description": "Mökin tilavat makuuhuoneet on sisustettu rauhallisesti ja sopusoinnussa hirsiseinien kanssa.Täällä nukut hyvät yöunet ja heräät virkeänä aamuun. Hirsimökissä on upea sauna, jonka järeät lauteet on tehty tervaleppä lankusta ja kokonaisuuden kruunaa Veto -kiuas.Hirsimökissä on tilava katettu terassi, jolta voi ihailla järveä. Terassilla nautit aamukahvit tai vaikka illallisen ympäri vuoden luonnosta nauttien. Mökin omasta rannasta pääset rauhassa uimaan tai soutelemaan järvelle. Villa Einon nuotiopaikka on aivan järven rannalla. Siinä keität mukavasti nokipannukahvit, paistat makkarat tai vaikka muurinpohjalettuja. Nuotiopaikalle mahtuu kahdeksan henkeä.",
      "arrivalTime": "16:00:00",
      "departureTime": "12:00:00",
      "price": 230,
      "discount": 0,
      "discountPercent": 0,
      "discountExpriration": "2019-01-06T17:16:40",
      "discountMultiplier": 0,
      "discountFromDays": 0,
      "createdDate": "2019-01-06T17:16:40",
      "modifiedDate": "2019-01-06T17:16:40"
  }
] */