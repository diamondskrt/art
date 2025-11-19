import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { useDimension } from '~/shared/hooks'

type useDrawingDimensionParams = {
  length: number
  width: number
  depth: number
}

export function useDrawingDimension({
  length,
  width,
  depth,
}: useDrawingDimensionParams) {
  const { cmToIn } = useDimension()
  const tDimension = useTranslations('Dimension')

  const drawingDimensionStr = useMemo(
    () =>
      `${length}x${width}x${depth}${tDimension('value.cm')} (${cmToIn(length)}x${cmToIn(width)}x${cmToIn(depth)}${tDimension('value.in')})`,
    [length, width, depth, tDimension, cmToIn]
  )

  return {
    drawingDimensionStr,
  }
}
