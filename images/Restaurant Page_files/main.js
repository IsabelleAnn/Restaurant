(()=>{"use strict";function t(t){const e=document.createElement("h1");e.textContent="Alamo",t.appendChild(e);const n=document.createElement("h3");n.textContent="Tex-Mex Restaurant",t.appendChild(n);const c=document.createElement("img");c.src="/src/images/logo.png",t.appendChild(c)}const e=document.getElementById("content"),n=document.querySelector("nav");!function(){const c=document.createElement("div");c.setAttribute("id","home"),c.setAttribute("class","navlink"),c.textContent="Home",c.addEventListener("click",(()=>{t(e)}));const o=document.createElement("div");o.setAttribute("id","menu"),o.setAttribute("class","navlink"),o.textContent="Menu",o.addEventListener("click",(()=>{!function(t){const e=document.createElement("h1");e.textContent="Menu",t.appendChild(e),console.log([{itemName:"Fruit Bowl",itemDescription:"A small bowl of fresh fruit",itemPrice:"$3",itemImgSrc:"/src/images/logo.png"}])}(e)}));const i=document.createElement("div");i.setAttribute("id","contact"),i.setAttribute("class","navlink"),i.textContent="Contact",i.addEventListener("click",(()=>{!function(t){const e=document.createElement("h1");e.textContent="Contact",t.appendChild(e)}(e)})),n.appendChild(c),n.appendChild(o),n.appendChild(i)}(),t(e)})();