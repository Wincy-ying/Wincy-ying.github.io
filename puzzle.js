var ans=["3,0,8,1","1,2,3,5","7142","5936","4238","2649","1,3,5,2","378146","8347","3698"];
var tips=["两个三位数相加,得到4位数,千位肯定是?","圆形","数字九宫格","封口","上下分割，左右移动","先上后下",
"周围六边形","看阴影","拆开左边","同色拼接"];
var score=0;
var curi=0;
var obj=["img0","img1","img2","img3","img4","img5","img6","img7","img8","img9"];
var img=["im0","im1","im2","im3","im4","im5","im6","im7","im8","im9"]
var x=1;

function starting(){
    while (x) {
       var response=prompt("What's the answer?");
      if(response===ans[curi]){
        alert("CORRECT!");
        score++;
        x=0;
        }
      else if(response===null){
             break;
          }
      else{
        alert("error"+"\n"+"tips: "+tips[curi]);
     }
    }
}
// function changephoto(){
//   document.getElementById(obj[curi-1]).style.display="none";
//   document.getElementById(obj[curi]).style.display="block";
// }
function nextqus(){
  document.getElementById(obj[curi]).style.display="none";
  document.getElementById(img[curi]).style.display="none";
  curi++;
  document.getElementById(obj[curi]).style.display="block";
  x=1;
}
function analysis(){
  document.getElementById(img[curi]).style.display="block";
}
function finish(){
   alert("game over"+"\n"+"your score:"+score);
   score=0;
}
