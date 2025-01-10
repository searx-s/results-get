import wikipedia from 'wikipedia';
fetch(getElementByIdName("search?q"))
const query = prompt("Enter query: ");
wikipedia.summary(query).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
