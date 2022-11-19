const o=new Promise(((o,e)=>{setTimeout((()=>{const l=Math.random()>.5;console.log("fulfill->",l),l&&o("все добре "),e("Errore: все погано")}))}));o.then((o=>console.log(o)),console.error()),console.log("promis->",o);
//# sourceMappingURL=04-delll.1eaa8588.js.map
