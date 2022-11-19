const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const fulfill = Math.random() > 0.5;
    console.log('fulfill->',fulfill)

    if (fulfill) {
       
      resolve('все добре ');
    }
   
    reject('Errore: все погано'), 5000;
  });
});

promise
  .then(result => console.log(result),
 console.error())

console.log('promis->', promise);
