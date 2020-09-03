import { logout } from './localStorage'
import moment from 'moment'

// Format moment().format() to date for calendar display.
export const formatDate = date => {
  if (moment(date).format("D") === "1") {
    return moment(date).format("MMM D")
  } else {
    return moment(date).format("D")
  }
}

// Remove a key: value pair from context.
export const removeKey = (obj, prop) => {
  let {[prop]: omit, ...res} = obj
  return res
}

// If req res has tokens, use them. If not, return current token.
export const useTokens = (tokens, user) => {
  if (tokens) {
    const parsedTokens = JSON.parse(tokens)
    localStorage.setItem("token", parsedTokens.access_token)
    localStorage.setItem("refresh_token", parsedTokens.refresh_token)
    return parsedTokens.access_token
  } else {
    return user.token
  }
}

// Add headers to a request
export const headers = token => {
  const refreshToken = localStorage.getItem("refresh_token")
  return {
    "Content-Type": "application/json",
    accessToken: `Bearer ${token}`,
    refreshToken: `Bearer ${refreshToken}`,
  }
}

// If no authentication, logout and redirect.
export const checkAuth = (res, setUser, history) => {
  if (res.data.errors[0].message === "Not Authenticated!") {
    setUser(logout())
    history.push("/")
  }
}

// Get the initials of the user.
export const getInitials = user => {
  let names = user.name.split(' '),
    initials = names[0].substring(0, 1).toUpperCase()
  
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }
  return initials
}

// User population template literal.
export const populatedUser = `
  _id
  tokens
  name
  email
  profile_picture
  posts {
    _id
    title
    description
    img
    created_at
    updated_at
    author {
      _id
      name
      profile_picture
    }
  }
  following {
    name
    email
    profile_picture
    posts {
      _id
      title
      description
      img
      created_at
      updated_at
      author {
        _id
        name
        profile_picture
      }
    }
  }
`

// Return calendar array with default location and img data.
export const defaultCal = () => {
  const calArr = []

  for (let i = 0; i <= 199; i++) {
    calArr.push({
      date: moment().add(i, "d").format(),
      location: "",
      img: "",
      stats: {
        country: {name: "Country", value: "Spain"},
        turns: {name: "Turns", value: 0},
        distance: {name: "Distance", value: 0, unit: "km"},
        minElev: {name: "Min Elev", value: 0, unit: "m"},
        maxElev: {name: "Max Elev", value: 0, unit: "m"},
        maxGrad: {name: "Max Grad", value: 0, unit: "%"},
      },
      elevation: [],
      events: [],
    })
  }

  return calArr.map(date => {
    if (moment(date.date).isAfter("2020-08-10T00:00:00+00:00") && moment(date.date).isBefore("2020-08-17T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Barcelona-Catalunya", 
        img: "https://pbs.twimg.com/profile_images/899536171092541440/9vpVeaIl_400x400.jpg",
        stats: {
          country: {name: "Country", value: "Spain"},
          turns: {name: "Turns", value: 16},
          distance: {name: "Distance", value: 4.65, unit: "km"},
          minElev: {name: "Min Elev", value: 124, unit: "m"},
          maxElev: {name: "Max Elev", value: 150, unit: "m"},
          maxGrad: {name: "Max Grad", value: 5.9, unit: "%"},
        },
        elevation: [132, 133, 133, 134, 134, 131, 128, 126, 124, 125, 126, 128, 130, 133, 135, 137, 140, 143, 145, 145, 144, 139, 135, 129, 126, 130, 135, 140, 145, 145, 144, 143, 142, 140, 139, 142, 145, 148, 150, 147, 145, 141, 138, 134, 132, 131, 130],
      }
    } else if (moment(date.date).isAfter("2020-08-24T00:00:00+00:00") && moment(date.date).isBefore("2020-08-31T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Spa-Francorchamps", 
        img: "https://www.tourismejalhaysart.be/wp-content/uploads/2016/03/spa-francorchamps.jpg",
        stats: {
          country: {name: "Country", value: "Belgium"},
          turns: {name: "Turns", value: 20},
          distance: {name: "Distance", value: 6.9, unit: "km"},
          minElev: {name: "Min Elev", value: 366, unit: "m"},
          maxElev: {name: "Max Elev", value: 467, unit: "m"},
          maxGrad: {name: "Max Grad", value: 23.1, unit: "%"},
        },
        elevation: [416, 417, 419, 421, 424, 415, 405, 395, 389, 384, 395, 405, 415, 420, 425, 430, 435, 439, 444, 446, 449, 454, 459, 464, 467, 466, 463, 459, 453, 448, 442, 433, 422, 418, 410, 405, 398, 389, 382, 375, 369, 368, 369, 372, 376, 378, 376, 376, 372, 366, 367, 370, 375, 377, 380, 382, 384, 386, 389, 391, 393, 396, 399, 401, 403, 406, 409, 412, 414, 416],
      }
    } else if (moment(date.date).isAfter("2020-08-31T00:00:00+00:00") && moment(date.date).isBefore("2020-09-07T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Autodromo Nazionale Monza", 
        img: "https://upload.wikimedia.org/wikipedia/en/f/f1/Autodromo_Nazionale_Monza_circuit_logo.png",
        stats: {
          country: {name: "Country", value: "Italy"},
          turns: {name: "Turns", value: 11},
          distance: {name: "Distance", value: 5.7, unit: "km"},
          minElev: {name: "Min Elev", value: 140, unit: "m"},
          maxElev: {name: "Max Elev", value: 153, unit: "m"},
          maxGrad: {name: "Max Grad", value: 2.4, unit: "%"},
        },
      }
    } else if (moment(date.date).isAfter("2020-09-07T00:00:00+00:00") && moment(date.date).isBefore("2020-09-14T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Mugello Circuit", 
        img: "https://book4track.com/pub/media/lof/seller/Mugello_Circuit.jpg",
      }
    } else if (moment(date.date).isAfter("2020-09-21T00:00:00+00:00") && moment(date.date).isBefore("2020-09-28T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Sochi Autodrom", 
        img: "https://static.tildacdn.com/tild3263-3338-4537-b037-653430326665/2018-05-17_09-35-13.png",
      }
    } else if (moment(date.date).isAfter("2020-10-05T00:00:00+00:00") && moment(date.date).isBefore("2020-10-12T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Nürburgring", 
        img: "https://pbs.twimg.com/profile_images/2504045977/wsb13l05s8wpb07jll89_400x400.jpeg",
      }
    } else if (moment(date.date).isAfter("2020-10-12T00:00:00+00:00") && moment(date.date).isBefore("2020-10-19T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Algarve International Circuit", 
        img: "https://media-exp1.licdn.com/dms/image/C4E0BAQH9cYTQDhs7MA/company-logo_200_200/0?e=2159024400&v=beta&t=GCCQOYnxa58L9EeTdJyatqPY778PUM3LYombb0Z_heU",
      }
    } else if (moment(date.date).isAfter("2020-10-26T00:00:00+00:00") && moment(date.date).isBefore("2020-11-02T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Autodromo Enzo e Dino Ferrari", 
        img: "https://s3.amazonaws.com/gt7sp-prod/decal/44/93/12/5837329235603129344_1.png",
      }
    } else if (moment(date.date).isAfter("2020-11-09T00:00:00+00:00") && moment(date.date).isBefore("2020-11-16T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Shanghai International Circuit", 
        img: "https://cdn.shopify.com/s/files/1/2318/5725/products/shanghailogo_1024x1024.jpg?v=1544215890",
      }
    } else if (moment(date.date).isAfter("2020-11-16T00:00:00+00:00") && moment(date.date).isBefore("2020-11-23T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Hanoi Street Circuit", 
        img: "https://ih1.redbubble.net/image.1228383534.7848/fposter,small,wall_texture,product,750x1000.jpg",
      }
    } else if (moment(date.date).isAfter("2020-11-30T00:00:00+00:00") && moment(date.date).isBefore("2020-12-07T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Bahrain International Circuit", 
        img: "https://upload.wikimedia.org/wikipedia/en/d/d1/Bahrain_International_Circuit_logo.png",
      }
    } else if (moment(date.date).isAfter("2020-12-07T00:00:00+00:00") && moment(date.date).isBefore("2020-12-14T00:00:00+00:00")) {
      return {
        ...date, 
        location: "Yas Marina Circuit", 
        img: "https://pictures.attention-ngn.com//portal/24/377840/logo/1455539094.7892_114_o.jpg",
      }
    } else {
      return date
    }
  })
}