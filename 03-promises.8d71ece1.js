const e={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submit:document.querySelector(".form")};function o(e,o){new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),Number(o))})).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}e.submit.addEventListener("submit",(function(t){t.preventDefault();const n=e.delay.value,l=e.step.value,u=e.amount.value;let m=Number(n);for(let e=1;e<=u;e+=1)m+=Number(l),o(e,m);console.log(Number(n))}));
//# sourceMappingURL=03-promises.8d71ece1.js.map
