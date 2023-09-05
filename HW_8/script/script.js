// task 1

// const divNumbers = document.querySelector('.numbers');
// for (let i = 100; i >= 50; i -= 10) {
   
//     const paragraph = document.createElement('p');
//     paragraph.textContent = i;
//     divNumbers.append(paragraph);
// }

// task 2

// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// const divCont = document.querySelector('.strings_container')
// for(let i = 0; i < words.length; i++){
//     const pElem = document.createElement('p')
//     pElem.innerText = words[i]
//     divCont.append(pElem)
// }


// task 3

const users = [
    {first_name: 'James', last_name: 'Shiffer', age: 22},
    {first_name: 'John', last_name: 'Smith', age: 19},
    {first_name: 'Tom', last_name: 'Tatum', age: 15},
    {first_name: 'Timothe', last_name: 'Brown', age: 35}
]

// найти совершеннолетних пользователей (возраст >= 18)
const adults = users.filter(user => user.age >= 18);

const usersContainer = document.querySelector('.users_container');
        adults.forEach(user => {
        const userCard = document.createElement('div');
        userCard.setAttribute('class', 'user_card');
        userCard.textContent = `Name: ${user.first_name}, Surname: ${user.last_name}, Вік: ${user.age}`;
        usersContainer.appendChild(userCard);

})