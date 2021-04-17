const link = 'https://trello.com/b/kapwRjKL/spacex-mini-project'
const id = '607ae1c2f259ed48bc717b8f'

// const make_trello = (name) => {
//     const fetch = require('node-fetch');
//     fetch(`https://api.trello.com/1/boards/?key=7916a0c56a7dc8f66957d4cbdf9e1690&token=702e1d4b1b7918bdd91b0b943b41a04b9b561c43e2b356d6747a7c9e0a916682&name=${name}`, {
//         method: 'POST'
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(text => {console.log(text); return text})
//     .catch(err => console.error(err));
// }

// const make_dict = async () => {
//     const dict = await make_trello('SpaceX mini-project');
//     // const id = await dict['id']
//     console.log(dict)
//     return dict
// }

// make_dict()


let tasks = {}
const take_tasks = (id) => {

    fetch(`https://api.trello.com/1/boards/${id}/cards?key=7916a0c56a7dc8f66957d4cbdf9e1690&token=702e1d4b1b7918bdd91b0b943b41a04b9b561c43e2b356d6747a7c9e0a916682&filter=all`, {
    method: 'GET'
    })
    .then(response => {
        console.log(
        `Response: ${response.status} ${response.statusText}`
        );
        return response.json();
    })
    .then(text => {tasks = text; console.log(tasks[0])})
    .catch(err => console.error(err));

}

take_tasks(id);

let show_tasks = () =>{
    take_tasks(id);
    let all_tasks = '<p class = "heading-second">Tasks for today</p><button type="button" class="btn btn-outline-dark refresh1" onclick="show_tasks()">Refresh tasks</button>'
    for (let i = 0; i < tasks.length; i++){
        all_tasks += `<div class = "task"><p class = "text-in-task">${tasks[i]['name']}</p></div>`
    }
    all_tasks += '<div style="margin-top: 7%;"><button type="button" class="btn btn-outline-primary refresh" onclick="document.location = `https://discord.gg/BCQgJRsxv3`" style="margin-right: 6px;"><i class="fab fa-discord"></i> Discord</button><button type="button" class="btn btn-outline-primary refresh" onclick="document.location = `https://trello.com/b/kapwRjKL/spacex-mini-project`"><i class="fab fa-trello"></i> Trello</button></div>'
    document.getElementById('tasks_div').innerHTML = all_tasks
}

// }

// const nametask = async () => {
//     const dict = await take_tasks('')
//     const namee = await dict[0]['name']
//     return namee
// }

// const tasks = nametask();
// console.log(tasks);
