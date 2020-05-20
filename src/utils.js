import LZString from 'lz-string'

export const encodeFromJSON = (json) => {
  return LZString.compressToEncodedURIComponent(JSON.stringify(json))
}

export const decodeToJSON = (str) => {
  return LZString.decompressFromEncodedURIComponent(str)
}

export const updateUrlQuery = (query) => {
  history.pushState('', '', '?code=' + query)
}

export const getCurrentUrl = () => {
  return window.location.href
}

export const getUrlParam = (name) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}