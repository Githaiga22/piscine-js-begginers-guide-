var multiply = (a, b) => {
    return a * b;
}

var modulo = (a, b) => {

    let negativeResult = (a < 0 && b > 0) || (a<0&&b<0) ;

    a=  Math.abs(a);
    b=Math.abs(b)
    var first = a;   
    var counter = 0;

    if (b == 0){
        return NaN
    }
    if (a == 0){
        return NaN
    }
    
    while (a >= b) {
        a -= b
        counter++;
    }

    var result =first - multiply(b, counter);
      return negativeResult ? -result:result
}



var round=(item)=>{
               if(item==0){
                return 0
               }

    let number=item-modulo(item,1)
    if (Math.abs(modulo(item,1))>=0.5){
        return  number < 0 ? number-1:number+1;
    }

    return number 
}

const ceil = (item) => {
    if (item === 0) {
        return 0;
    }

    let result = 0;

    if (item > 0xfffffffff) {
        item -= 0xfffffffff;
        result += 0xfffffffff;
    }

    let fractionalPart = modulo(item,1); 
    let number = item - fractionalPart; 

    return fractionalPart > 0 ? result + number + 1 : result + number;
}



var floor=(item)=>{
    if(item==0){
        return 0
       }

let number=item-modulo(item,1)

return number<0?number-1:number
}


var trunc=(item)=>{

    if(item==0){
        return 0
       }
let result=0;

    if (item > 0xfffffffff) {
        item -= 0xfffffffff;
        result += 0xfffffffff;
    }

    return (item-modulo(item,1))+result
}

