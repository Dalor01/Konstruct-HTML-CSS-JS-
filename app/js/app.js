import $ from 'jquery'
window.jQuery = $
window.$ = $
document.addEventListener('DOMContentLoaded', () => {
//code here
})
import Typed from 'typed.js';
let typed = new Typed('#typed', {
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 200,
    loop: true,
    showCursor: false,
    autoInsertCss: true,
    stringsElement: '#typed-strings'
})
