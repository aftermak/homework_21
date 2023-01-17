
class User {

    _createUser () {
        this.first_name = getFirstName.value;
        this.last_name = getLastName.value;
        this.email = getEmail.value;
        this.job = getJob.value;
        this.fullname = `${getFirstName.value} ${getLastName.value}`;
        this.avatar = 'https://img.freepik.com/free-vector/hand-painted-watercolour-ukraine-flag-background_1048-15614.jpg?w=1800&t=st=1671795340~exp=1671795940~hmac=ab2132d02553809b756ff1f91a5d35278d1a05e84b5f1567eb5603189ae2311f';
    }

    _updateDataset (id) {
        const user = document.getElementById(`card-${id}`);
        user.dataset.firstname = getFirstName.value;
        user.dataset.lastname = getLastName.value;
        user.dataset.email = getEmail.value;
        user.dataset.job = getJob.value;  
    };
};

const user = new User;