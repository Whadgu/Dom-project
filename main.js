const header = document.getElementById('page-header')
const mainHeading = document.getElementById('main-heading')
const para1 = document.getElementById('para1')
const para2 = document.getElementById('para2')
const para4 = document.getElementById('para4')
const btn = document.getElementById('btn')
const red = document.getElementById('red')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const black = document.getElementById('black')

header.textContent = 'New DOM Layout';
header.classList.remove('bg-dark');
header.classList.add('bg-success');

para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure'
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'

btn.addEventListener("click", function(){
    para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'; 
});

red.classList.remove('bg-white');
red.classList.add('bg-danger');

blue.classList.remove('bg-white');
blue.classList.add('bg-primary');

yellow.classList.remove('bg-white');
yellow.classList.add('bg-warning');

green.classList.remove('bg-white');
green.classList.add('bg-success');

black.classList.remove('bg-white');
black.classList.add('bg-dark');
black.classList.add('text-white');
