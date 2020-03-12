//Biggie Size
function biggie(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr;
}

//Print Low, Return High
function printlow_returnhigh(arr){
    var min = arr[0];
    var max = arr[0];
    
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);

return max, min;
}

//Print One, Return Another
function printone_returnanother(arr){
    var odd = arr[i];
 
         for( var i = 0; i < arr.length; i++){
             if(arr[i] % 2 > 0){
                 odd = arr[i];
                 {
                     break;
                 }
                 
             }
         }
         console.log(arr[arr.length - 2]);
         return odd;
     }

     //Double Vision
     function double(arr){
  
        for(var i = 0; i < arr.length; i++){
            arr[i] = arr[i] * 2;
        }
        return arr;
    }

    //count positive
    function countP(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > 0){
                count++;
            }
        }
        arr[arr.length - 1] = count;
        return arr;
    }

    //Evens and Odds
    function EvOd(arr){
       
        for(var i = 0; i < arr.length; i ++){
            if(arr[i] % 2 == 0){
                if(arr[i+1] % 2 == 0){
                    if(arr[i+2] % 2 == 0){
                        console.log("Even more so!");
                    } 
                }
            }
            if(arr[i] % 2 > 0){
                if(arr[i+1] % 2 > 0){
                    if(arr[i+2] % 2 > 0){
                        console.log("That's odd!")
                    }
                }

            }

        }
        return arr;
    }
    
    
    //Increment the Seconds
    function IncrementSec(arr){
        for(var i = 1; i < arr.length; i++){
            arr[i] = arr[i] + 1;
        }
   return arr;
    }   

    //Pervious Lengths 
    function PrevLeng(arr){
        
        for(var i = arr.length - 1; i > 0; i--){
            arr[i] = arr[i - 1].length;
        }
        return arr;
    }

    // 9. Add Seven
    function addseven(arr){
        
        for(var i = 0; i < arr.length; i++){
           arr[i] = arr[i] + 7;
        }
        return arr;
    }
    
    // 10. Reverse Array
    function reversearr(arr){
       arr.reverse()
        
        return arr;
    }

    // 11. Outlook: Negative
    function outlookN(arr){
        for(var i = 0; i < arr.length; i++){
            arr[i] = -Math.abs(arr[i]);
        }
     return arr;
    }

    //12. Always Hungry
    function hungry(arr){
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] =="food"){
                console.log("yummy");
                count++;
            }
           
        }
        if(count == 0){
            console.log("I'm hungry");
        }        
    }  

    //13. swap toward the center 
    function swaptowardCenter(arr){
        var temp = arr[0];  
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
        var temp2 = arr[2];
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp2;
    return arr;
    }


//14. Scale the Array
function ScaletheArray(arr,num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}

  

    
