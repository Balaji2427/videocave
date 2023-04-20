export const GOOGLE_API_KEY = "AIzaSyDi0mFcugXqZTl9bZJ7n4Afr2tyQK-ctlM";
//const GOOGLE_API_KEY = "AIzaSyCfXXzU7wimn1HnC_vecAn1ss7Ss0DDyUs";

export const YOUTUBE_VIDEOS_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;

export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
//export const YOUTUBE_SEARCH_API = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const VIDEO_INFO =
  "https://www.googleapis.com/youtube/v3/videos?key=" +
  GOOGLE_API_KEY +
  "&maxResults=50&part=snippet&id=";