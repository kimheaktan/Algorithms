//Get 1 to 255

function print(){
    var arr =[];
    for( var i = 1; i < 256; i++){
        arr.push(i);
    }
return arr;  
}

//Get even 1 to 1000

function evensum(){
    var sum = 0;
    for(var i = 1; i < 1001; i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}

//Sum odd 5000

function oddsum(){
    var sum = 0;
    for(var i = 1; i < 5001; i++){
        if(i % 2 > 0){
            sum += i;
        }
    }
    return sum;
}

// Iterate an array
function Iterarr(arr){
    var sum = 0;
    for( var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
return sum;
}

//Find Max
function Max(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
        }   
    }
    return max;
}

//Find average
function avg(arr){
   var sum = 0;
   for(var i = 0; i < arr.length; i++){
       sum = sum + arr[i];
    } 
   var avg = sum / arr.length;
   return avg;
}

//Array odd
function arrodd(){
    var arr = [];
    for(var i = 1; i < 51; i++){
        if(i % 2 > 0){
            arr.push(i);
        }
    }
   return arr; 
}

//Squares
function square(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

//Negative
function Negative(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

//Max/Min/Avg
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    
    return arrnew;
}

//Swap Values
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

//Number to String
function NumtoStr(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }  
    }
    return arr;
}
