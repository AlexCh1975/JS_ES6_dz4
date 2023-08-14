// Вазиант задачи 2 который работает как надо!

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

    let i = 0;
    let time = setInterval(renderImg, 3000);

    function renderImg(){
        if (i < data.message.length){
            console.log(data.message[i]);
            dogs.innerHTML += `<img src="${data.message[i]}" alte="pic" width="360px" height="360px"  />`;
            i++;
        }else{
            clearInterval(time);
        }
    }   
   
} catch (error) {
    console.error('Что-то пошло не так!');
}
