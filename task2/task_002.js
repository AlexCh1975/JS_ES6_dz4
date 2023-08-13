/**
 * Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с      интервалом в 3 секунды.
 */

const dogs = document.querySelector('.dogs');
const url = 'https://dog.ceo/api/breed/hound/afghan/images/random/10';

const getData = async (url) => {
    const res = await fetch(url); 
    const data = await res.json(); 
    return data; 
};


try{
    const data = await getData(url); 
    console.log(data);

    data.message.forEach(el => {
        setTimeout(() => 
            renderImg(el), 3000);
    });

    const renderImg = (el) =>{
        dogs.insertAdjacentHTML('beforeend', `
                <img src='${el}' alert="pic" />`);
    }
} catch (error) {
    console.error('Что-то пошло не так!');
}