export function useDimension() {
  const cmToIn = (cm: number): number => {
    return Number((cm * 0.393701).toFixed(2))
  }

  return {
    cmToIn,
  }
}
