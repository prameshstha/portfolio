//aws base url
// export const baseUrl = "http://172.20.10.13:8000/"; //without connection at home(mobile hotspot)
// export const baseUrl = "http://192.168.1.107:8000/"; //with wifi connection - but different ip in different wifi connection
export const baseUrl = "https://praprimus.azurewebsites.net/";
export const tmdb_image_url = "https://image.tmdb.org/t/p/w500/";
export const DEVELOPMENT = false;
const baseLptPath = "api/lpt/";
const baseMrPath = "api/mr/";

// api links
//movie
export const movieListApi = baseUrl + baseMrPath + "movie/";
export const recommendedMovieApi = baseUrl + baseMrPath + "recommended-movie/";

//laptop
export const laptopFeaturesApi = baseUrl + baseLptPath + "laptop-features/";
export const predictPriceApi = baseUrl + baseLptPath + "predict-price/";
