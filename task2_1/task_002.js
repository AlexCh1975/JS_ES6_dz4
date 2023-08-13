const dogs = document.querySelector('.dogs');
const url = 'https://dog.ceo/api/breed/hound/afghan/images/random';

const getData = (url) => 
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    });  

for (let i = 0; i < 10; i++){
    setTimeout(() => {
        getData(url)
            .then((data) => renderImg(data.message))
            .catch((error) => console.error('Что-то пошло не так!'));   
    }, 3000);
}


const renderImg = (el) =>{
    console.log(el)
    dogs.insertAdjacentHTML('beforeend', `
            <img src='${el}' alert="pic" />`);
}