import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */let l={email:"",message:""};const t=document.querySelector(".feedback-form"),i=t.elements.email,r=t.elements.message,n="feedback-form-state",o=JSON.parse(localStorage.getItem(n));o&&(i.value=o.email,r.value=o.message,l=o);t.addEventListener("input",e=>{l[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(l))});t.addEventListener("submit",e=>{if(e.preventDefault(),i.value===""||r.value===""){alert("Fill please all fields");return}localStorage.removeItem(n),console.log(l),t.reset()});const a=document.querySelectorAll(".feedback-form input");for(const e of a)e.style.border="1px solid #808080",e.style.borderRadius="4px",e.style.width="360px",e.style.marginTop="8px",e.style.paddingTop="8px",e.style.paddingBottom="8px",e.style.paddingLeft="16px",e.style.fontWeight="400",e.style.fontSize="16px",e.style.lineHeight="150%",e.style.letterSpacing="0.04em",e.style.color="#2e2f42",e.style.fontFamily="Montserrat, sans-serif",e.onmouseover=function(){this.style.border="1px solid #000"},e.onmouseout=function(){this.style.border="1px solid #808080"},e.onfocus=function(){this.style.border="1px solid #808080",this.style.outline="none"};const y=document.querySelectorAll(".feedback-form textarea");for(const e of y)e.style.border="1px solid #808080",e.style.borderRadius="4px",e.style.width="360px",e.style.height="80px",e.style.marginTop="8px",e.style.paddingTop="8px",e.style.paddingBottom="8px",e.style.paddingLeft="16px",e.style.fontWeight="400",e.style.fontSize="16px",e.style.lineHeight="150%",e.style.letterSpacing="0.04em",e.style.color="#2e2f42",e.style.resize="none",e.style.fontFamily="Montserrat, sans-serif",e.onmouseover=function(){this.style.border="1px solid #000"},e.onmouseout=function(){this.style.border="1px solid #808080"},e.onfocus=function(){this.style.border="1px solid #808080",this.style.outline="none"};t.style.display="flex";t.style.flexDirection="column";t.style.gap="8px";t.style.alignItems="center";t.style.borderRadius="8px";t.style.padding="24px";t.style.width="408px";t.style.height="256px";t.style.backgroundColor="#fff";t.style.marginLeft="auto";t.style.marginRight="auto";t.style.fontFamily="Montserrat, sans-serif";const s=document.querySelector(".feedback-form button");s.style.borderRadius="8px";s.style.border="none";s.style.padding="8px 16px";s.style.width="95px";s.style.height="40px";s.style.background="#4e75ff";s.style.fontWeight="500";s.style.fontSize="16px";s.style.lineHeight="150%";s.style.letterSpacing="0.04em";s.style.color="#fff";s.style.fontFamily="Montserrat, sans-serif";s.style.marginRight="auto";s.style.marginTop="8px";s.style.cursor="pointer";s.onmouseover=function(){this.style.background="#6c8cff"};s.onmouseout=function(){this.style.background="#4e75ff"};
//# sourceMappingURL=commonHelpers2.js.map
