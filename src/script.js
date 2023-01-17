const loginPage = document.getElementById('login-page');
const userPage = document.getElementById('user-page');
const cardContainer = document.getElementById('card-container');
const modalCreate = document.getElementById('modalCreate');
const cardUserTemplate = document.getElementById('card-template').innerHTML;
const loginError = document.querySelector('#error');
const formUpdate = document.forms.modal;
let modalTitle = modalCreate.querySelector('.title');
let currentPage = 1;

const getLogin = document.getElementById('loginName');
const getPassword = document.getElementById('loginPass');
const getFirstName = formUpdate.firstName;
const getLastName = formUpdate.lastName;
const getEmail = formUpdate.email;
const getJob = formUpdate.job;

const buttonLogin = document.querySelector('#login-btn');
const buttonPrew = document.getElementById('action-prew');
const buttonNext = document.getElementById('action-next');
const buttonNew = document.getElementById('action-new');
const buttonCreate = document.getElementById('action-create');
const buttonUpdate = document.getElementById('action-update');
const buttonsDelete = document.getElementsByClassName('delete');
const buttonsUpdate = document.getElementsByClassName('update');

buttonLogin.addEventListener ('click',() => {
    api._login(getLogin.value, getPassword.value);
});

buttonNext.addEventListener('click', () => {
    api._getUsers(++currentPage);
});

buttonPrew.addEventListener('click', () => {
    api._getUsers(--currentPage);
});

buttonNew.addEventListener('click', () => {
    modalCreate.classList.remove('hide');
    cardContainer.classList.add('blur');
    buttonCreate.classList.remove('hide');
    buttonUpdate.classList.add('hide');
});

buttonCreate.addEventListener('click', (e) => {
    modalCreate.classList.add('hide');
    cardContainer.classList.remove('blur');
    e.preventDefault();
    user._createUser();
    api._addUser(user);
    formUpdate.reset();
});

buttonUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    const id = formUpdate.id;
    modalCreate.classList.add('hide');
    modalTitle.textContent = 'CREATE USER'
    cardContainer.classList.remove('blur');
    user._createUser()
    user._updateDataset(id);
    api._updateUser(id, user);
    formUpdate.reset();
})




































