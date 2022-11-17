import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    console.log(position, delay);

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formRef.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event)
  const { elements: { delay, step, amount },
  } = event.currentTarget;
  
  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

console.log('delayValue->',delayValue)
console.log('stepValue->',stepValue)
console.log('amountValue->',amountValue)



  for (let position = 1; position <= amountValue; position += 1) {
    const delay = delayValue + stepValue * (position - 1);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

