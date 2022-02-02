export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQB39zhCcsWN4rOfkhWv7RrZDYZO3PgC77L8yBeNf3TXCGHtritDeUpPJzSaQAZIR9S3TYWkxGdcD-DuDTotBRxxf1cemPnqI772InSiiPL5PybKZxWk8hQyJratcxYIx7IXloh58GWuABnTU8ojBUAehxiN1Q",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }



}

export default reducer;