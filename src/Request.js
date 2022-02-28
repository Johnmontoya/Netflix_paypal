const API_KEY = "d442b1d268055e730f64d3df51270743";

//endpoints

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchOriginal: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
}

export default requests;
