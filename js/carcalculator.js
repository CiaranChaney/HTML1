function calculate() {
    var rentaldays = document.getElementById('days').value;	
    var result = document.getElementById('result');	

    if(rentaldays < 7){
        var myResult = rentaldays * 55;
    } else{
        var myResult = rentaldays * 55 * 0.75;
    }
    
    result.value = myResult;
  
    
}  