const listElemet = document.getElementById('categories');

console.log(`Number of categories: ${listElemet.children.length}`);

Array.from(listElemet.children).forEach((element) => {
    const title = element.querySelector('h2').textContent;
    const items = element.querySelectorAll('li');
    
    console.log(`Category: ${title} \n Elements: ${items.length}`);
})
