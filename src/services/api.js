const API_URL = 'https://reqres.in/api/';

class Api {
        
   _login (email, password) {

        fetch(API_URL + 'login', {

            method: 'POST',
        
            headers: {
            'Content-Type': 'application/json'
            },
        
            body: JSON.stringify(
                {
                    email,
                    password
                }
            ) 
        })
        .then ((res) => {
            if(res.ok) {
                authOK (res);
            }
            if (!res.ok) {
                authError(res);
                throw `Error ${res.status}`
            }
        })
        .catch (res => console.log(res))     
    }

    _getUsers (page) {
        fetch (API_URL + `users?page=${page}`)
            .then (res => res.json())
            .then (res => {
                if(currentPage == 0) {
                    ++currentPage
                }
                if (res.data.length){
                    addCardsList(res.data, cardUserTemplate)
                } else {
                    currentPage--;
                }
            } )
    }

    _addUser (user) {

            fetch(API_URL + 'users', {
    
                method: 'POST',
            
                headers: {
                'Content-Type': 'application/json'
                },
            
                body:JSON.stringify(user) 

            })
            .then (res => res.json()) 
            .then (res => addNewUser(res, cardUserTemplate));   
    }

    _deleteUser (id) {
        fetch(API_URL + `users/${id}`, {
    
            method: 'DELETE',
        
            headers: {
            'Content-Type': 'application/json'
            },

        })
        .then (res => {
            if (res.status == 204) {
                deleteCard(id);
            } else {
                console.log('User not found');
            }
        }) 
    }

    _updateUser (id, user) {
        fetch(API_URL + `users/${id}`, {
    
            method: 'PUT',
        
            headers: {
            'Content-Type': 'application/json'
            },

            body: JSON.stringify(user) 
        })
        .then (res => {
            if (res.status == 200) {
                updateCard(id, user)
            } else {
                console.log('User not found');
            }
        }) 
    }
};

const api = new Api;



