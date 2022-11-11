const element= x =>document.querySelector(x);

console.log( element(".timer"))

const date =Date.now();
console.log(date)

setInterval(()=>{
    const date2=Date.now()
    console.log(date2)
}
    ,10000)