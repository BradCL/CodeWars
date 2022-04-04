//If you can't sleep, just count sheep!!

const countSheep = function (num){
  let ret = "";
  for (let i = 1; i <= num; i++){
    ret = `${ret}${i} sheep...`
  }
  return ret;
}