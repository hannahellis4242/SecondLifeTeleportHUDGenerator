const writeDefaultState = (
  writeStateEntry: () => string,
  writeTouch: () => string,
  writeRunTimePermissions: () => string
): string => {
  return `default{
      ${writeStateEntry()}
      ${writeTouch()}
      ${writeRunTimePermissions()}
    }`;
};

export default writeDefaultState;
