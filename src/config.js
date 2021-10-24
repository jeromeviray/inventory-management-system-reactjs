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
      baseUrl: "https://api.inventory-mng-system.com",
      baseFrontendUrl: "https://inventory-mng-system.com",
      prefixFrontendUrl: "",
    },
  },
}

const getEnv = function () {
  let env = "test"
  if (typeof env === "undefined") return dev
  env = env.trim()
  if (env === "dev") return dev
  if (env === "test") return test
}

const config = getEnv()

export default {
  ...config,
}
