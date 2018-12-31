import * as actionTypes from './actions';

const initialState = {
    shapes:[],
    selectedShapes:[]
};

function randomizeShape(shapeName){
    var width = Math.random() * 250 + 50;
    var height = Math.random() * 250 + 50;
    var posX = Math.round(Math.random() * 930);
    var posY = 150 + Math.round(Math.random() * 600);
    if(shapeName==="Rectangle" || shapeName==="TRAINGLE"){
      return {
        width:width,
        height:height,
        posX:posX,
        posY:posY,
        shapeName:shapeName
      }
    }
    if(shapeName==="Oval"){
        return {
            width:width,
            height:height,
            posX:posX,
            posY:posY,
            borderRadius:"50%",
            shapeName:shapeName
        }
    }
  }
function randomizeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
function generateShape(shapeName){
    var randomColor = randomizeColor()
    var randomShape = randomizeShape(shapeName);
    return {
      ...randomShape,
      color: randomColor
    }
}

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
    }
        
    return state;
};

export default reducer;