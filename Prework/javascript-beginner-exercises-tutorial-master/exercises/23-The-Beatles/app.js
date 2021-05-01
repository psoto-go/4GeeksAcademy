function sing(){
   var cancion = 'let it be,'
    for(var i = 0; i<11;i++){
        if(i == 3){
            cancion += ' words of wisdom,';
        }else if(i == 9){
            cancion += ' there will be an answer,'
        }else if(i == 10){
            cancion += ' let it be'
        }else{
            cancion += ' let it be,'
        }
        

    }
    return cancion
}

//Your code above ^^^

console.log(sing());