// TODO: use Observable instead of Promise
export const getData = (date) => {
  return fetch(getURL(date))
    .then(response => response.json())
    .then(({ ukraine }) => ukraine)
}

export const getURL = (date) => {
  return `https://api-covid19.rnbo.gov.ua/data?to=${date}`
}