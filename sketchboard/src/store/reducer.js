import * as actionTypes from './actions';
import LOGICS from './shapesLogics';

function generateShape(shapeName){
    let randomColor = LOGICS.randomizeColor()
    let randomShape = LOGICS.randomizeShape(shapeName);
    let uniqueId =  shapeName + randomColor + Math.floor(Math.random()*1000)
    return {
      ...randomShape,
      color: randomColor,
      uniqueId:uniqueId
    }
}

const initialState = {
    shapes:[],
    selectedShapes:[],
    // loadOptions:[],
    showSave:false,
    showLoad:false
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
            let savedShapes = {};
            savedShapes = JSON.parse(localStorage.getItem("savedShapes"))
            if(!savedShapes) {
                savedShapes = {};
            }
            let chosenName = action.chosenName
            savedShapes[action.chosenName]  = JSON.stringify(state.shapes)
            
            localStorage.setItem("savedShapes",JSON.stringify(savedShapes))
            return {
                ...state
            }
            case actionTypes.LOAD:
                let load=JSON.parse(localStorage.getItem("savedShapes"))
                let loadOptions = Object.keys(load)
                var shapes;
                for(var i=0; i<loadOptions.length; i++){
                    if(loadOptions[i]===action.chosenName){
                        shapes = JSON.parse(load[action.chosenName])
                    }
                }
              return {
                  ...state,
                  shapes:shapes,
                  loadOptions:loadOptions
              }
        case actionTypes.DELETE:
            let shapesToRemove = action.shapesToRemove
            let shapesArr = [...state.shapes];
            let i=0;
            while(i<shapesToRemove.length && shapesToRemove[i]-i<shapesArr.length){
                shapesArr.splice(shapesToRemove[i]-i,1)
                ++i;
            }
              return {
                  ...state,
                  shapes: shapesArr
              }
        case actionTypes.SHOW_SAVE:
          return {
              ...state,
              showSave: true
          }
        case actionTypes.SHOW_LOAD:
          return {
              ...state,
              showLoad:true
          }
      case actionTypes.SELECTED:
            return {
                ...state
            }
        case actionTypes.CLOSE_POPUP:
          return {
              ...state,
              showLoad:false,
              showSave:false
          }
        
    }
        
    return state;
};

export default reducer;