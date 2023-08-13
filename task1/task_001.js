/**
 * Задача
    Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
 */

const url = 'https://jsonplaceholder.typicode.com/users';

const users = document.querySelector('.users');

const getData = async (url) => {
    const res = await fetch(url); 
    const data = await res.json(); 
    return data; 
};

try{
    const data = await getData(url); 
    console.log(data);
    data.forEach((element) => {
        users.innerHTML += `
        <div class="user-box">
            <ul>
                <li>id: ${element.id}</li>
                <li>name: ${element.name}</li>
                <li>email: ${element.email}</li>
                <li>phone: ${element.phone}</li>
                <li>username: ${element.username}</li>
                <li>website: ${element.website}</li>
                <li>address:</li>
                <ul class="address">
                    <li>street: ${element.address.street}</li>
                    <li>suite: ${element.address.suite}</li>
                    <li>city: ${element.address.city}</li>
                    <li>zipcode: ${element.address.zipcode}</li>
                    <li>geo:</li>
                    <ul class="geo">
                        <li>lat: ${element.address.geo.lat}</li>
                        <li>lng: ${element.address.geo.lng}</li>
                    </ul>
                </ul>
                <li>company:</li>
                <ul class="company">
                    <li>bs: ${element.company.bs}</li>
                    <li>catchPhrase: ${element.company.catchPhrase}</li>
                    <li>name: ${element.company.name}</li>
                </ul>
            </ul>  
            <button class="reset-btn" type="reset">delete</button>   
        </div>`;

        const key = `user${element.id}`;
        console.log(key)
        localStorage.setItem(key, JSON.stringify(element));
    });
} catch (error) {
    console.error('Что-то пошло не так!');
}

const btn = document.querySelectorAll('button');


btn.forEach((el, index) =>{
    const key = `user${index + 1}`;
    const user = document.querySelectorAll('.user-box');
    el.addEventListener('click', () => {
        user[index].remove();
        localStorage.removeItem(key);
    });
})
