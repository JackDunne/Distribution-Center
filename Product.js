const Product = function(){
    this.name = determineName();
    this.price = determineNumber();
    this.space = determineNumber();
    this.prime = determinePrime();

    function determineName(){
        let word = "";
        for(let x = 0;x<5;x++){
            let c = Math.floor(25*Math.random())+65;
            let letter = String.fromCharCode(c);
            word += letter;
        }
        return word;
    }
    function determineNumber(){
        let pricearino = Math.round(10000*Math.random())/100;
        return pricearino;
    }
    function determinePrime(){
        let randoNum = Math.random()*100;
        if(randoNum > 50){
            this.prime = true;
        }
        else{
            this.prime = false;
        }
    }
    return{name,price,space,prime};
}
module.exports = Product;
