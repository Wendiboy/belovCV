const SET_PHOTOS = 'SET_PHOTOS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    photos: [
        'https://sun9-80.userapi.com/impf/c854016/v854016503/5d999/lOZf_k6rzbc.jpg?size=2160x2160&quality=96&sign=65f1a71503952f9b26edec16f92ced89&type=album',
        'https://sun9-50.userapi.com/impf/c840227/v840227873/24738/roblcxAKXB0.jpg?size=1080x1211&quality=96&sign=f99742e03deb352543df940c52efcab6&type=album',
        'https://sun1-26.userapi.com/s/v1/if1/kcJABZkFFjPepTPins4WmI7knL1B1IecbKN3haukrwi-Nw79guj5ItPVEfPjuYCM08Kz3t1K.jpg?size=200x200&quality=96&crop=412,0,1707,1707&ava=1',
    ],
    totalCount: 0,
    currentPage: 1,
    isFetching: true
};

const photosReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHOTOS: {
            return {
                ...state,
                photos: action.photo
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT:{
            return {...state, totalCount: action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}


export const setPhotos = (photo) => ({type: SET_PHOTOS, photo});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default photosReduser;