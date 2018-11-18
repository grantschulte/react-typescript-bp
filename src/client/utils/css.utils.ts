export function cssStringFromArray (cssArray: string[] = []): string {
  return joinAndTrim(cssArray)
}

export function cssString (...cssStrings: string[]): string {
  return joinAndTrim(cssStrings)
}

function joinAndTrim (cssArray: string[] = []): string {
  return cssArray.join(' ').trim()
}
