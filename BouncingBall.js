function bouncingBall(h,  b,  w) {
  let ratio=w/h
  let log=Math.log(ratio)/Math.log(b)
  let result=1+2*Math.floor(log)
  return w===1 && b<=0.5?1:h>0&&(b>0&&b<1)&&w<h?result:-1
}
//test console
