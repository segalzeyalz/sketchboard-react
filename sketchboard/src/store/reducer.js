import * as actionTypes from './actions';

const initialState = {
    shapes:[],
    selectedShapes:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECT:
            return {
                ...state,
            }
        case actionTypes.SELECT:
            
            return {
                ...state,
            }

    }
    return state;
};

export default reducer;