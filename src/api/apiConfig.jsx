const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: "aaea35b8186e97b19af8a3c45e66e499",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
