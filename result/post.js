// initail modules for node

const fetch = require('node-fetch');
const fs = require('fs');


//create variable for JSON link

const url = 'http://jsonplaceholder.typicode.com/posts'

 //use asyn and await to fetch data from JSONPlaceholder               
const fetchData = async url => {  //fetch data
    try {
        const response = await fetch (url);
        const data = await response.json();
        fs.writeFile('./post.json', JSON.stringify(data, null, 4), (error) => {
            if (error) throw error;
            console.log('Written successfully');
        }) 
    } catch (error) {
            return (error)
    }
}
//fetch data
fetchData(url); 