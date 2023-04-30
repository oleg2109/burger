

export function create(tag, clas, append, inner) {
const el = document.createElement(tag);
el.className = clas;
if(append) append.appendChild(el);
if(inner) el.innerHTML = inner;
return el
}