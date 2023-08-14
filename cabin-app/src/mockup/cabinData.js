export const cabinData = {
  type: 1,
  reserved: {
    value: false,
    fi:
      "varattu",
    en:
      "reserved"
  },
  price: 200,
  discount: 50,
  discountFromDays: 5,
  discountExpriration: "2023-07-04T13:33:03.969Z",
  discountMultiplier: 150,
  name: "Ekin Mesta",
  location: "Etelä-Suomi / Vihti, Uusimaa",
  features: `Pinnasänky(Pyynnöstä), Astianpesukone, Pakastin, Syöttötuoli, Sauna, BBQ-Grilli, Soutuvene
    , Kahvinkeitin, Takka, Jääkaappi, Mikroaaltouuni, TV, Yksityinen ranta`,
  description: `Mökin tilavat makuuhuoneet on sisustettu rauhallisesti ja sopusoinnussa hirsiseinien kanssa.
    Täällä nukut hyvät yöunet ja heräät virkeänä aamuun. Hirsimökissä on upea sauna, jonka järeät lauteet
    on tehty tervaleppä lankusta ja kokonaisuuden kruunaa Veto -kiuas.

    Hirsimökissä on tilava katettu terassi, jolta voi ihailla järveä. Terassilla nautit aamukahvit tai
    vaikka illallisen ympäri vuoden luonnosta nauttien. Mökin omasta rannasta pääset rauhassa uimaan tai
    soutelemaan järvelle. Villa Einon nuotiopaikka on aivan järven rannalla. Siinä keität mukavasti 
    nokipannukahvit, paistat makkarat tai vaikka muurinpohjalettuja. Nuotiopaikalle mahtuu kahdeksan henkeä.`,
  beds: {
    fi: {
      0: {
        kerros: 1,
        koko: 1
      },
      1: {
        kerros: 1,
        koko: 1
      },
      2: {
        kerros: 2,
        koko: 2
      }
    }
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