const SET_PHOTOS = 'SET_PHOTOS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    photos: [],
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