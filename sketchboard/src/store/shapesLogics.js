const LOGICS = {
    randomizeShape: function(shapeName){
        let width = Math.random() * 250 + 50;
        let height = Math.random() * 250 + 50;
        let posX = Math.round(Math.random() * 1270);
        let posY = Math.round(Math.random() * 600);
        if(shapeName==="Rectangle"){
          return {
            width:width,
            height:height,
            posX:posX,
            posY:posY,
            shapeName:shapeName
          }
        }
        if(shapeName==="TRAINGLE"){
            let typesTriangle = [
                {"type": "left","borderWidth":`${0.5*height}px ${width}px ${0.5*height}px 0`},
                {"type": "right", "borderWidth": `${0.5*height}px 0 ${0.5*height}px ${width}px`},
                {"type":"bottom", "borderWidth":`${height}px ${0.5*width}px  0 ${0.5*width}px`},
                {"type":"top", "borderWidth": `0 ${0.5*width}px ${height}px ${0.5*width}px`},
                {"type":"top-right", "borderWidth": `0 ${width}px ${width}px 0`},
                {"type":"bottom-right", "borderWidth": `0 0 ${width}px ${width}px`},
                {"type":"bottom-left", "borderWidth": `${width}px 0 0 ${width}px`},
                {"type":"top-left", "borderWidth": `${width}px ${width}px 0 0`},
            ]
            let randTriangle = typesTriangle[Math.floor(Math.random()*8)]
            return {
              borderWidth:randTriangle.borderWidth,
              typeTriangle:randTriangle.type,
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
    },
    randomizeColor: function(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }
};

export default LOGICS;
