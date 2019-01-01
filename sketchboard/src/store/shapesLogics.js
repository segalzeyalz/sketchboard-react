const LOGICS = {
    randomizeShape: function(shapeName){
        var width = Math.random() * 250 + 50;
        var height = Math.random() * 250 + 50;
        var posX = Math.round(Math.random() * 1270);
        var posY = Math.round(Math.random() * 600);
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
            return {
              borderWidth:`0 ${0.5*width}px ${height}px ${0.5*width}px`,
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
