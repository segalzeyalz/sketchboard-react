import * as actionTypes from './actions';
import LOGICS from './shapesLogics';

function generateShape(shapeName){
    var randomColor = LOGICS.randomizeColor()
    var randomShape = LOGICS.randomizeShape(shapeName);
    return {
      ...randomShape,
      color: randomColor
    }
}

const initialState = {
    shapes:[],
    selectedShapes:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECT:
            let rect = generateShape("Rectangle");
            let { shapes } = state;
            //adding shape to arreay after generating it
            shapes= [...shapes, rect]
            return {
                ...state,
                shapes:shapes
            }
        case actionTypes.SELECT:
            
            return {
                ...state,
            }
        case actionTypes.ADD_OVAL:
            let Oval = generateShape("Oval");
            var currentShapes= state.shapes;
            //adding shape to arreay after generating it
            shapes= [...currentShapes, Oval]
            return {
                ...state,
                shapes:shapes
            }
        case actionTypes.ADD_TRAINGLE:
            let Trian = generateShape("TRAINGLE");
            var currentShapes= state.shapes;
            //adding shape to arreay after generating it
            shapes= [...currentShapes, Trian]
            return {
                ...state,
                shapes:shapes
            }
        case actionTypes.SAVE:
          localStorage.setItem(action.chosenName,JSON.stringify(state.shapes))
            return {
                ...state
            }
        case actionTypes.LOAD:
            let load=JSON.parse(localStorage.getItem(action.chosenName))
            console.log(load)
          return {
              ...state,
            shapes: load
          }
    }
        
    return state;
};

export default reducer;