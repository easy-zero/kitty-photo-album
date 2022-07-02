// Only GET
const fetchAPI = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Http Error: ", response.status);
    return;
  }
};

export default fetchAPI;
