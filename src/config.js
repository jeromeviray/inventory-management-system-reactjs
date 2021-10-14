const dev = {
  api: {
    private: {
      baseUrl: "http://localhost:4480",
      baseFrontendUrl: "http://localhost:4000",
      prefixFrontendUrl: "",
    },
  },
}

const test = {
  api: {
    private: {
      baseUrl: "https://ec2-13-229-154-20.ap-southeast-1.compute.amazonaws.com",
      baseFrontendUrl: "https://elite-replica-329023.as.r.appspot.com",
      prefixFrontendUrl: "",
    },
  },
}

const getEnv = function () {
  let env = process.env.REACT_APP_ENV
  if (typeof env === "undefined") return dev
  env = env.trim()
  if (env === "dev") return dev
  if (env === "test") return test
}

const config = getEnv()

export default {
  ...config,
}
