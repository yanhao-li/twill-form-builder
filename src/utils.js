import LZString from 'lz-string'

export const encodeJSON = (json) => {
  return LZString.compressToEncodedURIComponent(JSON.stringify(json))
}

export const decodeFromJSON = (str) => {
  return LZString.decompressFromEncodedURIComponent(str)
}

export const updateUrlQuery = (query) => {
  history.pushState('', '', '?code=' + query)
}
