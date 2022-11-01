const ref = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submit: document.querySelector('.form'),
};
ref.submit.addEventListener('submit', onStartPromise);

function onStartPromise(evt) {
  evt.preventDefault();
  const delay = ref.delay.value;
  const step = ref.step.value;
  const amount = ref.amount.value;
  let time = Number(delay);
  for (let position = 1; position <= amount; position += 1) {
    time += Number(step);
    createPromise(position, time);
  }
  console.log(Number(delay));
}
function createPromise(position, delay) {
  const promice = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, Number(delay));
  });
  promice
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
