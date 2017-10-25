const Product = require('./Product.js');
const Queue = require('./queue.js');
const Truck = require('./Truck.js');
//require all of the other files, with node.js,  linkedlist.js, and queue.js

function configureWareHouse(numberofitems){
    let Warehouse = new Queue();
    //fill the warehouse with new Products
    for(let x=0;x<numberofitems;x++){
        Warehouse.enqueue(new Product());
    }
    return Warehouse;

}
function configureTruckFleet(numberoftrucks){
    let theFleet = new Queue();
    //fill the fleet with different sized trucks using math.random()
    for(let x=0;x<numberoftrucks;x++){
        let truckSize;
        let rando = Math.random()*100;
        if(rando >= 66){
          size = "large";
        }
        else if(rando < 66 && rando >= 33){
          size = "medium";
        }
        else{
          size = "small";
        }
        theFleet.enqueue(new Truck());
    }
    return theFleet;
}
function distribute(wh,tf){
  let ready = new Queue();
  while(!wh.isEmpty() && !tf.isEmpty()){
    let currentTruck = tf.dequeue();
    while(currentTruck.spaceEfficency()<1){
      currentTruck.inventory.push(Warehouse.dequeue);
    }
    if(currentTruck.spaceEfficency()>1){
      Warehouse.enqueue(currentTruck.inventory.pop());
    }
    ready.enqueue(currentTruck);
  }
  return ready;
    //distribute the products in the warehouse to the truck fleet.
    }


function main(){
    let flemhouse = configureWareHouse(10);
    let flemfleet = configureTruckFleet(10);
    let ready = distribute(flemhouse,flemfleet, 0.95);
    ready.print();
    console.log(ready);
    for(let s=0;s<ready.length;s++){
        console.log("Truck "+s+" is in route");
        console.log("-----------------------");
        while(!ready.isEmpty()){
          let ct = ready.dequeue();
            console.log(ct.spaceEfficency());
            for(let x = 0;x<ct.inventory.length;x++){
              console.log(ct.inventory[x].name);
            }
        }
    }
}

main();
