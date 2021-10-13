const dev = {
  api: {
    private: {
      baseUrl: "http://localhost:4480",
      baseFrontendUrl: "http://localhost:4000",
    },
  },
}

const test = {
  api: {
    private: {
      baseUrl: "https://inventory-mng-api.herokuapp.com/",
      baseFrontendUrl: "https://d3dw1h6vufmuro.cloudfront.net/",
    },
  },
}

const prod = {
  api: {
    private: {
      baseUrl:
        "https://lva53xan1f.execute-api.ap-southeast-2.amazonaws.com/Prod",
    },
  },
}

const getEnv = function () {
  let env = process.env.REACT_APP_ENV
  if (typeof env === "undefined") return dev
  env = env.trim()
  if (env === "dev") return dev
  if (env === "test") return test
  if (env === "prod") return prod
}

const config = getEnv()

export default {
  ...config,
}
