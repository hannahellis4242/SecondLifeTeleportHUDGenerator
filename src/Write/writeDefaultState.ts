const writeDefaultState = (
  writeStateEntry: () => string,
  writeTouch: () => string,
  writeRunTimePermissions: () => string,
  writeTimer: () => string
): string => {
  return `default{
      ${writeStateEntry()}
      ${writeTouch()}
      ${writeRunTimePermissions()}
      ${writeTimer()}
    }`;
};

export default writeDefaultState;
