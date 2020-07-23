export const thorttle =(function thorttle(){
  var firstTime = 0;
  return function(callback,time){
      var lastTime = new Date().getTime();
      if(lastTime -firstTime >time ){
          callback()
          firstTime=lastTime;
      }
  }
}
)()
