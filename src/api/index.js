export const fetchAPI = async (url) => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const api_key = "ae97605229cea5a5f8ab7cc59dd73bc1";
  const urlFinal = `${baseUrl}${url}&api_key=${api_key}`;
  const response = await fetch(urlFinal);
  const data = await response.json();
  return data;
};