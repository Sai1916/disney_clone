const API_KEY = "796582a8773b51fe608b5f4f0eef6d20"

const requests = {
    now_playing :`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    popular : `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    trending : `/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    topRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    upcoming : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    tv_airing_today : `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    tv_topRated : `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    
}

export default requests;
