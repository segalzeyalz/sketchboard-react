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
    loadOptions:[],
    showSave:false,
    showLoad:false,
    savedName:'',
    color:'',
    moveElem: false,
    selectedPos:{
        startX: 0,
        startY:0,
        offsetX:0,
        offsetY:0,
        dragElement:''
    }
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
            
            savedShapes[state.savedName]  = JSON.stringify(state.shapes)
            
            localStorage.setItem("savedShapes",JSON.stringify(savedShapes))
            return {
                ...state,
                showSave:false
            }
            case actionTypes.LOAD:
                let load=JSON.parse(localStorage.getItem("savedShapes"))
                let loadOptions = Object.keys(load)
                var shapes;
                for(var i=0; i<loadOptions.length; i++){
                    if(loadOptions[i]===state.savedName){
                        shapes = JSON.parse(load[state.savedName])
                    }
                }
              return {
                  ...state,
                  shapes:shapes,
                  showLoad:false,
                  loadOptions:loadOptions
              }
            case actionTypes.UPDATE_SAVE_NAME:
            return {
                ...state,
                savedName:action.chosenName
            }
        case actionTypes.DELETE:
        //triggered by 'del' key of click
            if(action.typeEvent==="click" || action.delClicked){
                let shapesToRemove = state.selectedShapes;
                let shapesArr = [...state.shapes];
                // Delte all the shapes to remove
                for(var i=0; i<shapesToRemove.length; i++){
                    let idxSelected = shapesArr.findIndex((elem)=>elem.uniqueId==shapesToRemove[i])
                    shapesArr.splice(idxSelected,1)
                }
                  return {
                      ...state,
                      shapes: shapesArr,
                      selectedShapes: []
                  }
            }
            return {...state}          
        case actionTypes.SHOW_SAVE:
          return {
              ...state,
              showSave: true
          }
        case actionTypes.SHOW_LOAD:
        var load=JSON.parse(localStorage.getItem("savedShapes"))
        var loadOptions = Object.keys(load)
          return {
              ...state,
              showLoad:true,
              loadOptions:loadOptions
          }
      case actionTypes.SELECT:
        let { selectedShapes } = state;
        let idxSelected = selectedShapes.findIndex((elem)=>elem==action.id)
        if(idxSelected>-1){
            selectedShapes.splice(idxSelected,1)
        } else if(action.ctrlCliked){
            selectedShapes=[...selectedShapes, action.id]
        }else{
            selectedShapes = [action.id]
        }
        //IF EXIST - DELETE FROM ARRAY
            return {
                ...state,
                selectedShapes:selectedShapes
            }
        case actionTypes.CLOSE_POPUP: 
          return {
              ...state,
              showLoad:false,
              showSave:false
          }
        case actionTypes.CHANGE_COLOR:
            let shapesToChangeColor = state.selectedShapes;
            let arrayOfShapes = [...state.shapes];
            for(var i=0; i<shapesToChangeColor.length; i++){
                let idxSelected = arrayOfShapes.findIndex((elem)=>elem.uniqueId==shapesToChangeColor[i])
                arrayOfShapes[idxSelected].color = action.color
            }
          return {
              ...state,
              shapes: arrayOfShapes
          }
        case actionTypes.UPDATE_OFFSET:
          let {id, startX, startY, offsetX, offsetY} = action;
          let shapesToChangePos= state.shapes
          let selectedPosUpdate = state.selectedPos;
           //if click on a shape
           if(id){
            selectedPosUpdate.dragElement = id
            selectedPosUpdate.startX = parseFloat(startX);
            selectedPosUpdate.startY = parseFloat(startY);
            selectedPosUpdate.offsetX=parseFloat(offsetX);
            selectedPosUpdate.offsetY=parseFloat(offsetY);
           }
          return {
              ...state,
              selectedPos:{...selectedPosUpdate},
              moveElem: id? true:false
          }
        case actionTypes.CHANGE_POSITION:
          let {selectedPos} = state;
          let {dragElement} = selectedPos;
          let shapesChange = state.shapes;
          let dragElementIdx = shapesChange.findIndex((elem)=>elem.uniqueId==dragElement)
          if(dragElementIdx>-1){
              shapesChange[dragElementIdx].posX = parseFloat(selectedPos.offsetX + action.clientX - selectedPos.startX)
              shapesChange[dragElementIdx].posY = parseFloat(selectedPos.offsetY + action.clientY - selectedPos.startY)
            }
            if(state.moveElem){
                return {
                ...state,
                shapes: shapesChange,
                selectedPos: {
                    ...selectedPos,
                    offsetX: (shapesChange[dragElementIdx] && shapesChange[dragElementIdx].posX) || selectedPos.offsetX,
                    offsetY: (shapesChange[dragElementIdx] && shapesChange[dragElementIdx].posY) || selectedPos.offsetY,
              }
                }
            }else{
                return {...state}
            }
        case actionTypes.STOP_CHANGE_POSITION:
          return {
              ...state,
            moveElem: false,
            selectedPos:{...state.selectedPos, dragElement:''}
          }
    }
        
    return state;
};

export default reducer;