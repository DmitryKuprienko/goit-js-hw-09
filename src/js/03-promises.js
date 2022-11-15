import Notiflix from 'notiflix';

console.log(Notiflix);
const formRef = document.querySelector('.form')
console.log(formRef)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notify.success('Sol lucet omnibus');
  } else {
    // Reject
  }
}

createPromise()


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });




// import Notiflix from 'notiflix';

// const formRef = document.querySelector('.form');

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// formRef.addEventListener('submit', event => {
//   event.preventDefault();

//   const {
//           elements: { delay, step, amount },
//   } = event.currentTarget;
//   const delayValue = Number(delay.value);
//   const stepValue = Number(step.value);
//   const amountValue = Number(amount.value);

//   for (let position = 1; position <= amountValue; position += 1) {
//     const delay = delayValue + stepValue * (position - 1);

//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }
// });
