const t={bodyRef:document.querySelector("body"),buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-Stop]")};let o=null;t.buttonStart.addEventListener("click",(function(){o=setInterval((()=>{t.bodyRef.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.buttonStart.disabled=!0,t.buttonStop.disabled=!1})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStart.disabled=!1,t.buttonStop.disabled=!0})),t.buttonStop.disabled=!0;
//# sourceMappingURL=01-color-switcher.7f9e487f.js.map