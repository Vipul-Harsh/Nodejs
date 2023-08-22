function delay(time){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve();
},time);
});
}

async function placeorder(){
await delay(2000);
console.log("order taken");
}
async function start(){
await delay(2000);
console.log("production started");
}
async function printId(){
await delay(2000);
console.log("Id printed")
}

async function main(){
console.log("order is now going to take place");
await placeorder();
console.log("Product is in production....")
await start();
console.log("Id printing stated");
await printId();

}
main();