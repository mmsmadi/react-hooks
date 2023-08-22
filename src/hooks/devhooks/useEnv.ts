// this hook checks the environment and return appropriate value

const useEnv = (developmentValue, productionValue) => {
  if (process.env.NODE_ENV === "development") {
    return developmentValue;
  }

  return productionValue;
};

export default useEnv;

/**
 * USAGE
 *
 * console.log(useEnv("dev", "prod"));
 */
