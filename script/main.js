/* Inject text content, no markup & DOM manipulation (alternative DOMPurify)*/
const source = document.getElementById('year');
const year = new Date().getFullYear();
source.textContent = year;
