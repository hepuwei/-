export const NewsText = (endTime)=>{
  let newTime = new Date().getTime()
  let Tseconds = endTime - newTime
  var _d=Math.floor((Tseconds)/(3600000*24));
  var _h=Math.floor((Tseconds-_d*(3600000*24))/3600000);
  var _m=Math.floor((Tseconds-_d*(3600000*24)-_h*3600000)/60000);
  var _s=Math.floor((Tseconds-_d*(3600000*24)-_h*3600000-_m*60000)/1000);
  if(_s<10){
      _s="0"+_s;
  }
  if(_m<10){
      _m="0"+_m;
  }
  if(_h<10){
    _h="0"+_h;
  }
  if(_d>0){
      return {
          flag:1,
          day:_d,
          hour:_h,
          minutes:_m,
          seconds:_s
      };
  }else{
      return {
          flag:0,
          day:_d,
          hour:_h,
          minutes:_m,
          seconds:_s
      };
  }
}