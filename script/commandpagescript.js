const make_trello = (name, desc) => {
    const fetch = require('node-fetch');
    fetch(`https://api.trello.com/1/boards/?key=210705d1bfa05556e66f87ecbdd31ba2&token=883c9edd80c3ad5c32c0f0edbc0715637c616ebd7c63ebc4f056fc754d488674&name=${name}&desc=${desc}`, {
        method: 'POST'
    })
    .then(response => {
        console.log(
        `Response: ${response.status} ${response.statusText}`
        );
        return response.json();
    })
    .then(text => {console.log(text); return text})
    .catch(err => console.error(err));
}

make_trello('name_1','description')