// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMeta {
  env: {
    VITE_APP_BASE_URL: string;
    // Add other environment variables as needed
  };
}

declare global {
  const BigNumber: BigNumberConstructor;
  type BigNumber = BigNumberInstance;
  namespace BigNumber {
    type Config = BigNumberConfig;
    type Constructor = BigNumberConstructor;
    type Format = BigNumberFormat;
    type Instance = BigNumberInstance;
    type ModuloMode = BigNumberModuloMode;
    type RoundingMode = BigNumberRoundingMode;
    type Value = BigNumberValue;
  }
}