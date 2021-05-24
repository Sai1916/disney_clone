import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popular: null,
    now_playing: null,
    trending: null,
    top_rated: null,
    upcoming: null,
    tv_airing_today: null,
    tv_top_rated: null,
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers : {
        setMovies : (state,action) => {
            state.popular = action.payload.popular;
            state.now_playing = action.payload.now_playing;
            state.trending = action.payload.trending;
            state.top_rated = action.payload.top_rated;
            state.upcoming = action.payload.upcoming;
            state.tv_airing_today = action.payload.tv_airing_today;
            state.tv_top_rated = action.payload.tv_top_rated;
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectPopular = (state) => state.movie.popular;
export const selectNowPlaying = (state) => state.movie.now_playing;
export const selectTrending = (state) => state.movie.trending;
export const selectTopRated = (state) => state.movie.top_rated;
export const selectUpcoming = (state) => state.movie.upcoming;
export const selectTvAiringToday = (state) => state.movie.tv_airing_today;
export const selectTvTopRated = (state) => state.movie.tv_top_rated;

export default movieSlice.reducer;