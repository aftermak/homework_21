
async function authError (error) {
    const data = await error.json()
    loginError.innerText = data.error
    getPassword.value = null;
}

async function authOK (token) {
    const data = await token.json()
    onSuccess(data.token)
}

function onSuccess (token) {
    if (token == 'QpwL5tke4Pnpja7X4') {
        loginPage.classList.add('hide');
        userPage.classList.remove('hide');
        api._getUsers(1)
    } else {
        console.log('Something Wrong');
    }
}

function deleteCard (id) {
    const userCard = document.getElementById(`card-${id}`);
    userCard.remove()
};

function updateCard (id, user) {
    const card = document.getElementById(`card-${id}`);
    card.querySelector('.user-name').innerHTML = user.fullname;
    card.querySelector('.user-info').innerHTML = user.email;
    card.querySelector('.user-job').innerHTML = user.job;
}

function updateForm (id) {
    const user = document.getElementById(`card-${id}`);
    getFirstName.value = user.dataset.firstname;
    getLastName.value = user.dataset.lastname;
    getEmail.value = user.dataset.email;
    getJob.value = user.dataset.job;  
}

function updateButtons () {

    [...buttonsUpdate].forEach((btn) => {
        btn.addEventListener('click',(e) => {
            const id = e.target.getAttribute('data-update');
            buttonCreate.classList.add('hide');
            buttonUpdate.classList.remove('hide')
            modalTitle.textContent = 'UPDATE USER INFO';
            modalCreate.classList.remove('hide');
            cardContainer.classList.add('blur');
            updateForm(id);
            formUpdate.id = id;
        } )
    });

    [...buttonsDelete].forEach((btn) => {
        btn.addEventListener('click',(e) => {
            const id = e.target.getAttribute('data-delete');
            api._deleteUser(id);
        })
    }); 
}










