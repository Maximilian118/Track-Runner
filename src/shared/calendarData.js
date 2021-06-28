import moment from 'moment'

// Return calendar array with default location and img data.
export const sortCalArr = () => {
  const lsCal = JSON.parse(localStorage.getItem('cal'))
  
  if (lsCal) {
    return lsCal
  } else {
    const calArr = []

    const startDate = moment().subtract(18, "d").format()

    for (let i = 0; i < 365; i++) {
      const date = moment(startDate).add(i, "d").format()
      let roundData = {}

      f12021.forEach(round => {
        if (moment(date).isAfter(round.from) && moment(date).isBefore(round.to)) {
          roundData = {
            confirmed: true,
            ...round,
          }
        } 
      })

      calArr.push({
        date: date,
        events: [],
        ...roundData,
      })
    }

    localStorage.setItem('cal', JSON.stringify(calArr))
    return calArr
  }
}

const f12021 = [
  {
    from: "2021-03-22T00:00:00+00:00",
    to: "2021-03-29T00:00:00+00:00",
    country: "Bahrain",
    location: "Sakhir",
    track: "Bahrain International Circuit",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/Bahrain_International_Circuit_logo.png",
    lat: 26.037,
    lon: 50.5112,
    round: 1,
    sessions: {
      fp1: "2021-03-26T11:30:00Z",
      fp2: "2021-03-26T15:00:00Z",
      fp3: "2021-03-27T12:00:00Z",
      qualifying: "2021-03-27T15:00:00Z",
      gp: "2021-03-28T15:00:00Z"
    }
  },
  {
    from: "2021-04-12T00:00:00+00:00",
    to: "2021-04-19T00:00:00+00:00",
    country: "Italy",
    location: "Imola",
    track: "Autodromo Enzo e Dino Ferrari",
    logo: "https://s3.amazonaws.com/gt7sp-prod/decal/44/93/12/5837329235603129344_1.png",
    lat: 44.344576,
    lon: 11.713808,
    round: 2,
    sessions: {
      fp1: "2021-04-16T09:00:00Z",
      fp2: "2021-04-16T12:30:00Z",
      fp3: "2021-04-17T09:00:00Z",
      qualifying: "2021-04-17T12:00:00Z",
      gp: "2021-04-18T13:00:00Z"
    }
  },
  {
    from: "2021-04-26T00:00:00+00:00",
    to: "2021-05-03T00:00:00+00:00",
    country: "Portugal",
    location: "Portimao",
    track: "Autodromo international do algarve",
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQH9cYTQDhs7MA/company-logo_200_200/0?e=2159024400&v=beta&t=GCCQOYnxa58L9EeTdJyatqPY778PUM3LYombb0Z_heU",
    lat: 37.232191,
    lon: -8.628495,
    round: 3,
    sessions: {
      fp1: "2021-04-30T10:30:00Z",
      fp2: "2021-04-30T14:00:00Z",
      fp3: "2021-05-01T11:00:00Z",
      qualifying: "2021-05-01T14:00:00Z",
      gp: "2021-05-02T14:00:00Z"
    }
  },
  {
    from: "2021-05-03T00:00:00+00:00",
    to: "2021-05-10T00:00:00+00:00",
    country: "Spain",
    location: "Catalunya",
    track: "Barcelona-Catalunya",
    logo: "https://pbs.twimg.com/profile_images/899536171092541440/9vpVeaIl_400x400.jpg",
    lat: 41.5638,
    lon: 2.2585,
    round: 4,
    sessions: {
      fp1: "2021-05-07T09:30:00Z",
      fp2: "2021-05-07T13:00:00Z",
      fp3: "2021-05-08T10:00:00Z",
      qualifying: "2021-05-08T13:00:00Z",
      gp: "2021-05-09T13:00:00Z"
    },
    stats: {
      turns: {name: "Turns", value: 16},
      distance: {name: "Distance", value: 4.65, unit: "km"},
      minElev: {name: "Min Elev", value: 124, unit: "m"},
      maxElev: {name: "Max Elev", value: 150, unit: "m"},
      maxGrad: {name: "Max Grad", value: 5.9, unit: "%"},
      elevation: [132, 133, 133, 134, 134, 131, 128, 126, 124, 125, 126, 128, 130, 133, 135, 137, 140, 143, 145, 145, 144, 139, 135, 129, 126, 130, 135, 140, 145, 145, 144, 143, 142, 140, 139, 142, 145, 148, 150, 147, 145, 141, 138, 134, 132, 131, 130],
    },
  },
  {
    from: "2021-05-17T00:00:00+00:00",
    to: "2021-05-24T00:00:00+00:00",
    country: "Monaco",
    location: "Monte Carlo",
    track: "Circuit De Monaco",
    logo: "https://www.global-tickets.com/Rennstrecken-Tipps/img/imgblock/monaco-grand-prix-logo@2x.png",
    lat: 43.7338,
    lon: 7.4215,
    round: 5,
    sessions: {
      fp1: "2021-05-20T09:30:00Z",
      fp2: "2021-05-20T13:00:00Z",
      fp3: "2021-05-22T10:00:00Z",
      qualifying: "2021-05-22T13:00:00Z",
      gp: "2021-05-23T13:00:00Z"
    }
  },
  {
    from: "2021-05-31T00:00:00+00:00",
    to: "2021-06-07T00:00:00+00:00",
    country: "Azerbaijan",
    location: "Baku",
    track: "Baku City Circuit",
    logo: "https://i.pinimg.com/564x/3c/36/b8/3c36b850c1c5808e7aa9492f75a6d93e.jpg",
    lat: 40.3699,
    lon: 49.8433,
    round: 6,
    sessions: {
      fp1: "2021-06-04T08:30:00Z",
      fp2: "2021-06-04T12:00:00Z",
      fp3: "2021-06-05T09:00:00Z",
      qualifying: "2021-06-05T12:00:00Z",
      gp: "2021-06-06T12:00:00Z"
    }
  },
  {
    from: "2021-06-14T00:00:00+00:00",
    to: "2021-06-21T00:00:00+00:00",
    country: "France",
    location: "Paul Ricard",
    track: "Circuit Paul Ricard",
    logo: "https://prod.r3eassets.com/assets/content/track/paul-ricard-2866-logo-original.webp",
    lat: 43.2517,
    lon: 5.7935,
    round: 7,
    sessions: {
      fp1: "2021-06-18T09:30:00Z",
      fp2: "2021-06-18T13:00:00Z",
      fp3: "2021-06-19T10:00:00Z",
      qualifying: "2021-06-19T13:00:00Z",
      gp: "2021-06-20T13:00:00Z"
    }
  },
  {
    from: "2021-06-21T00:00:00+00:00",
    to: "2021-06-28T00:00:00+00:00",
    country: "Austria",
    location: "Spielberg",
    track: "Red Bull Ring",
    logo: "https://lemagsportauto.ouest-france.fr/wp-content/uploads/2018/06/Formule-1-Pluie-annonce-pour-les-qualifications-du-GP-dAutriche-2018.jpg",
    lat: 47.2225,
    lon: 14.7607,
    round: 8,
    sessions: {
      fp1: "2021-06-25T09:30:00Z",
      fp2: "2021-06-25T13:00:00Z",
      fp3: "2021-06-26T10:00:00Z",
      qualifying: "2021-06-26T13:00:00Z",
      gp: "2021-06-27T13:00:00Z"
    }
  },
  {
    from: "2021-06-28T00:00:00+00:00",
    to: "2021-07-05T00:00:00+00:00",
    country: "Austria",
    location: "Spielberg",
    track: "Red Bull Ring",
    logo: "https://lemagsportauto.ouest-france.fr/wp-content/uploads/2018/06/Formule-1-Pluie-annonce-pour-les-qualifications-du-GP-dAutriche-2018.jpg",
    lat: 47.2225,
    lon: 14.7607,
    round: 9,
    sessions: {
      fp1: "2021-07-02T09:30:00Z",
      fp2: "2021-07-02T13:00:00Z",
      fp3: "2021-07-03T10:00:00Z",
      qualifying: "2021-07-03T13:00:00Z",
      gp: "2021-07-04T13:00:00Z"
    }
  },
  {
    from: "2021-07-12T00:00:00+00:00",
    to: "2021-07-19T00:00:00+00:00",
    country: "England",
    location: "Silverstone",
    track: "Silverstone",
    logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jn8zeb7gh1ocns3kidlj",
    lat: 52.0706,
    lon: -1.0174,
    round: 10,
    sessions: {
      fp1: "2021-07-16T13:30:00Z",
      qualifying: "2021-07-16T17:00:00Z",
      fp2: "2021-07-17T11:00:00Z",
      "sprintQualifying": "2021-07-17T15:30:00Z",
      gp: "2021-07-18T14:00:00Z"
    }
  },
  {
    from: "2021-07-26T00:00:00+00:00",
    to: "2021-08-02T00:00:00+00:00",
    country: "Hungary",
    location: "Budapest",
    track: "Hungaroring",
    logo: "https://thesmg.com/wp-content/uploads/2019/03/Hungaroring-Logo.png",
    lat: 47.583,
    lon: 19.2526,
    round: 11,
    sessions: {
      fp1: "2021-07-30T09:30:00Z",
      fp2: "2021-07-30T13:00:00Z",
      fp3: "2021-07-31T10:00:00Z",
      qualifying: "2021-07-31T13:00:00Z",
      gp: "2021-08-01T13:00:00Z"
    }
  },
  {
    from: "2021-08-23T00:00:00+00:00",
    to: "2021-08-30T00:00:00+00:00",
    country: "Belgium",
    location: "Spa-Francorchamps",
    track: "Circuit De Spa-Francorchamps",
    logo: "https://www.tourismejalhaysart.be/wp-content/uploads/2016/03/spa-francorchamps.jpg",
    lat: 50.444,
    lon: 5.9687,
    round: 12,
    sessions: {
      fp1: "2021-08-27T09:30:00Z",
      fp2: "2021-08-27T13:00:00Z",
      fp3: "2021-08-28T10:00:00Z",
      qualifying: "2021-08-28T13:00:00Z",
      gp: "2021-08-29T13:00:00Z"
    },
    stats: {
      turns: {name: "Turns", value: 20},
      distance: {name: "Distance", value: 6.9, unit: "km"},
      minElev: {name: "Min Elev", value: 366, unit: "m"},
      maxElev: {name: "Max Elev", value: 467, unit: "m"},
      maxGrad: {name: "Max Grad", value: 23.1, unit: "%"},
      elevation: [416, 417, 419, 421, 424, 415, 405, 395, 389, 384, 395, 405, 415, 420, 425, 430, 435, 439, 444, 446, 449, 454, 459, 464, 467, 466, 463, 459, 453, 448, 442, 433, 422, 418, 410, 405, 398, 389, 382, 375, 369, 368, 369, 372, 376, 378, 376, 376, 372, 366, 367, 370, 375, 377, 380, 382, 384, 386, 389, 391, 393, 396, 399, 401, 403, 406, 409, 412, 414, 416],
    },
  },
  {
    from: "2021-08-30T00:00:00+00:00",
    to: "2021-09-06T00:00:00+00:00",
    country: "Netherlands",
    location: "Zandvoort",
    track: "Circuit Zandvoort",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Circuit_Zandvoort_Logo.jpg",
    lat: 52.388408,
    lon: 4.547122,
    round: 13,
    sessions: {
      fp1: "2021-09-03T09:30:00Z",
      fp2: "2021-09-03T13:00:00Z",
      fp3: "2021-09-04T10:00:00Z",
      qualifying: "2021-09-04T13:00:00Z",
      gp: "2021-09-05T13:00:00Z"
    }
  },
  {
    from: "2021-09-06T00:00:00+00:00",
    to: "2021-09-13T00:00:00+00:00",
    country: "Italy",
    location: "Monza",
    track: "Autodromo Nazionale Monza",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Autodromo_Nazionale_Monza_circuit_logo.png",
    lat: 45.6169,
    lon: 9.2825,
    round: 14,
    sessions: {
      fp1: "2021-09-10T09:30:00Z",
      fp2: "2021-09-10T13:00:00Z",
      fp3: "2021-09-11T10:00:00Z",
      qualifying: "2021-09-11T13:00:00Z",
      gp: "2021-09-12T13:00:00Z"
    },
    stats: {
      turns: {name: "Turns", value: 11},
      distance: {name: "Distance", value: 5.7, unit: "km"},
      minElev: {name: "Min Elev", value: 140, unit: "m"},
      maxElev: {name: "Max Elev", value: 153, unit: "m"},
      maxGrad: {name: "Max Grad", value: 2.4, unit: "%"},
    },
  },
  {
    from: "2021-09-20T00:00:00+00:00",
    to: "2021-09-27T00:00:00+00:00",
    country: "Russia",
    location: "Sochi",
    track: "Sochi Autodrom",
    logo: "https://static.tildacdn.com/tild3263-3338-4537-b037-653430326665/2018-05-17_09-35-13.png",
    lat: 43.6203,
    lon: 39.712,
    round: 15,
    sessions: {
      fp1: "2021-09-24T08:30:00Z",
      fp2: "2021-09-24T12:00:00Z",
      fp3: "2021-09-25T09:00:00Z",
      qualifying: "2021-09-25T12:00:00Z",
      gp: "2021-09-26T12:00:00Z"
    }
  },
  {
    confirmed: false,
    from: "2021-09-27T00:00:00+00:00",
    to: "2021-10-04T00:00:00+00:00",
    country: "Turky",
    location: "Istanbul",
    track: "Istanbul Park",
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0013/4849/brand.gif?itok=2LgcptJN",
    lat: 40.957914,
    lon: 29.411675,
    round: 16,
    sessions: {
      fp1 : "2021-10-01T08:00:00Z",
      fp2 : "2021-10-01T12:00:00Z",
      fp3 : "2021-10-02T09:00:00Z",
      qualifying : "2021-10-02T12:00:00Z",
      gp : "2021-10-03T10:10:00Z"
    }
  },
  {
    from: "2021-10-04T00:00:00+00:00",
    to: "2021-10-11T00:00:00+00:00",
    country: "Japan",
    location: "Suzuka",
    track: "Suzuka International Racing Course",
    logo: "https://s100.iracing.com/wp-content/uploads/2012/10/47.png",
    lat: 35.3689,
    lon: 138.9256,
    round: 17,
    sessions: {
      fp1: "2021-10-08T02:30:00Z",
      fp2: "2021-10-08T06:00:00Z",
      fp3: "2021-10-09T03:00:00Z",
      qualifying: "2021-10-09T06:00:00Z",
      gp: "2021-10-10T05:00:00Z"
    }
  },
  {
    from: "2021-10-18T00:00:00+00:00",
    to: "2021-10-25T00:00:00+00:00",
    country: "United States",
    location: "Austin",
    track: "Circuit of the Americas",
    logo: "https://images.motorsportstats.com/large/venueProfilePicture/venueProfilePicture-f726a2cc-bf3e-4323-8724-1b1a03ab9c72.png",
    lat: 30.1328,
    lon: -97.6411,
    round: 18,
    sessions: {
      fp1: "2021-10-22T16:30:00Z",
      fp2: "2021-10-22T20:00:00Z",
      fp3: "2021-10-23T18:00:00Z",
      qualifying: "2021-10-23T21:00:00Z",
      gp: "2021-10-24T19:00:00Z"
    }
  },
  {
    from: "2021-10-25T00:00:00+00:00",
    to: "2021-11-01T00:00:00+00:00",
    country: "Mexico",
    location: "Mexico City",
    track: "Autódromo Hermanos Rodríguez",
    logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092020/logo_autodromohr_1.jpg?KfCS7aURgmVHEtCiY4wBm9Z9Tco8HF77&itok=9VMLerMO",
    lat: 19.4028,
    lon: -99.0986,
    round: 19,
    sessions: {
      fp1: "2021-10-29T16:30:00Z",
      fp2: "2021-10-29T20:00:00Z",
      fp3: "2021-10-30T16:00:00Z",
      qualifying: "2021-10-30T19:00:00Z",
      gp: "2021-10-31T19:00:00Z"
    }
  },
  {
    from: "2021-11-01T00:00:00+00:00",
    to: "2021-11-08T00:00:00+00:00",
    country: "Brazil",
    location: "Sao Paulo",
    track: "Autódromo José Carlos Pace",
    logo: "https://gtswiki.gt-beginners.net/decal/png/04/87/04/7215338420567048704_1.png",
    lat: -23.7014,
    lon: -46.6969,
    round: 20,
    sessions: {
      fp1: "2021-11-05T14:30:00Z",
      fp2: "2021-11-05T18:00:00Z",
      fp3: "2021-11-06T15:00:00Z",
      qualifying: "2021-11-06T18:00:00Z",
      gp: "2021-11-07T17:00:00Z"
    }
  },
  {
    from: "2021-11-15T00:00:00+00:00",
    to: "2021-11-22T00:00:00+00:00",
    country: "Australia",
    location: "Melbourne",
    track: "Melbourne Grand Prix Circuit",
    logo: "https://cdn.shopify.com/s/files/1/2318/5725/products/melbournelogo_600x600.jpg?v=1532681920",
    lat: -37.8373,
    lon: 50.5112,
    round: 21,
    sessions: {
      fp1: "2021-11-19T01:30:00Z",
      fp2: "2021-11-19T05:00:00Z",
      fp3: "2021-11-20T03:00:00Z",
      qualifying: "2021-11-20T06:00:00Z",
      gp: "2021-11-21T06:00:00Z"
    }
  },
  {
    from: "2021-11-29T00:00:00+00:00",
    to: "2021-12-06T00:00:00+00:00",
    country: "Saudi Arabia",
    location: "Jeddah",
    track: "Jeddah Street Circuit",
    logo: "https://tilke.de/wp-content/uploads/2021/03/21-03-10_Aerial_Cam02-FX.jpg",
    lat: 21.485811,
    lon: 39.192505,
    round: 22,
    sessions: {
      fp1: "2021-12-03T12:30:00Z",
      fp2: "2021-12-03T16:00:00Z",
      fp3: "2021-12-04T13:00:00Z",
      qualifying: "2021-12-04T16:00:00Z",
      gp: "2021-12-05T16:00:00Z"
    }
  },
  {
    from: "2021-12-06T00:00:00+00:00",
    to: "2021-12-13T00:00:00+00:00",
    country: "Abu Dhabi",
    location: "Yas Marina",
    track: "Yas Marina Circuit",
    logo: "https://img.favpng.com/16/19/5/yas-marina-circuit-logo-race-track-brand-font-png-favpng-tvMRb29ubhVq8YdmrLh2nz2rU.jpg",
    lat: 24.4821,
    lon: 54.3482,
    round: 23,
    sessions: {
      fp1: "2021-12-10T09:30:00Z",
      fp2: "2021-12-10T13:00:00Z",
      fp3: "2021-12-11T10:00:00Z",
      qualifying: "2021-12-11T13:00:00Z",
      gp: "2021-12-12T13:00:00Z"
    }
  },
]