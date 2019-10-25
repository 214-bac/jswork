function bb(str){
    var sum = 0;
    for(var i = 1;i <=str;i++){
        if(str % i == 0){
            sum++;
        }
    }
    if(sum == 2){
        return true;
    }else{
        return false;
        }
    }
 function goldbach(odd){
    odd= document.getElementById("odd").value
    odd = parseInt(odd)
    let sushu = ''
    var d;
    for(var f=2;f<odd-2;f++){
        d = odd -f;
        if(bb(f)&&bb(d)&&f<=d){
        sushu += (odd +"可以拆分为两个质数"+ f + "与" + d + "的和" + '<br>');
          }
    }
    document.getElementById("goldbach").innerHTML =sushu;
  }
