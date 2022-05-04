const writeDefaultState = (
  writeStateEntry: () => string,
  writeTouch: () => string,
  writeRunTimePermissions: () => string,
  writeTimer: () => string,
  writeListen: () => string
): string => {
  return `default{
      ${writeStateEntry()}
      ${writeTouch()}
      ${writeRunTimePermissions()}
      ${writeTimer()}
      ${writeListen()}
    }`;
};

export default writeDefaultState;
