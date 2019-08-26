//随机颜色
function randomRGBColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+r+","+g+","+b+")";
};


//十六进制颜色
function randomHexColor(){
  var r = Math.random(255).toString(16);
  var g = Math.random(255).toString(16);
  var b = Math.random(255).toString(16);
  //255数字转化为16进制
  if(r.length<2) r = "0"+r;
  if(g.length<2) g = "0"+g;
  if(b.length<2) b = "0"+b;
  return "#" + r + g + b;
}