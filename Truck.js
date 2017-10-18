const LinkedList = require('./LinkedList.js');

const Truck = function(){
    let type = size;
    let inventory = new LinkedList();
    let capacity = setCapacity(size);
    function setCapacity(){
        s = s.toLowerCase();
        if(size == "small"){
            return 1000;
        }
        else if(size == "medium"){
            return 2000;
        }
        else if(size == "large"){
            return 5000;
       }
       else{
           console.log("Please give a size of small, medium, or large");
       }
    }
}
