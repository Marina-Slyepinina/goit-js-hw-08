const list = document.querySelector("#categories");
const categories = document.querySelectorAll("#categories li.item");
const numCatgrs = categories.length;

const result = () => {
    console.log(`Number of categories: ${numCatgrs}`);   
    
    categories.forEach(item => {
        const category = item.querySelector("h2").textContent;
        const numElements = item.querySelectorAll("li").length;
        console.log(`Category: ${category}
Elements: ${numElements}`);
    })
}

result();