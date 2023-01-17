const addCardsList = (users, template) => {
    let result = '';
    
    users
        .map ((user) => {
            return {
                ...user,
                fullname: `${user.first_name} ${user.last_name}`
            }
        })
        .forEach(user => {
            result += template
                .replaceAll('{{name}}', user.fullname)
                .replaceAll('{{email}}', user.email)
                .replaceAll('{{avatar}}', user.avatar)
                .replaceAll('{{job}}', '')
                .replaceAll('{{user-id}}',`card-${user.id}`)
                .replaceAll('{{data-update}}',user.id)
                .replaceAll('{{data-del}}',user.id)
                .replaceAll('{{data-firstName}}', user.first_name)
                .replaceAll('{{data-lastName}}', user.last_name)
                .replaceAll('{{data-email}}', user.email)
                .replaceAll('{{data-job}}', '')
        });

    cardContainer.innerHTML = result;
    updateButtons();
};

const addNewUser = (newUser, template) => {
    let result = cardContainer.innerHTML;

    result += template
        .replaceAll('{{name}}', newUser.fullname)
        .replaceAll('{{email}}', newUser.email)
        .replaceAll('{{avatar}}', newUser.avatar)
        .replaceAll('{{job}}', newUser.job)
        .replaceAll('{{user-id}}',`card-${newUser.id}`)
        .replaceAll('{{data-update}}',newUser.id)
        .replaceAll('{{data-del}}',newUser.id)
        .replaceAll('{{data-firstName}}', newUser.first_name)
        .replaceAll('{{data-lastName}}', newUser.last_name)
        .replaceAll('{{data-email}}', newUser.email)
        .replaceAll('{{data-job}}', newUser.job)

    cardContainer.innerHTML = result;
    updateButtons();
}