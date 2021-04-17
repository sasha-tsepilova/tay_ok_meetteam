const url = "https://6079c4d9460a6600174fc43e.mockapi.io/api/tayok/team";
let team = {}

const fetchTeams = () => {
    fetch(url)
    .then((response) => {
    response.mode = 'no-cors';
    return response.json();
    
    })
    .then((data) => {
        let array =  {...data};
        console.log(data)
        team = array;
        return true;
    
    })
    .catch(() => {
        return true
    });
}

fetchTeams();


let search=(names) => {
    let subjects = ['calculus', 'discrete', 'programming', 'english', 'probability', 'algorithms', 'literary', 'history']
    console.log('I WAS HERE')
    if (names){
        let my_key ='';
        for (let key in team){
        if (team[key]['name'] == names){
            my_key=key;
        }
        }
        if (my_key!=''){
        document.getElementById('team').innerHTML=
            `<div class="row team-row"><div class="col-sm-2"><img src="images/rocket.jpg" alt="" class = "image-team"></div><div class="col-sm-6"><p class = "team-name">${team[my_key]['name']} | Free positions: <span style = "color: red;">${team[my_key]['free_number']}</span></p><p class = "team-name">Description: ${team[my_key]['description']}</p><p class = "team-name">Requirements: ${team[my_key]['requirements']}</p></div><div class="col-sm-3"><button type="button" class="btn btn-outline-dark join-button" onclick=" relocate_home()">REQUEST TO JOIN</button><script>function relocate_home(){window.open("command_page.html", '_blank');} </script></div>`;
        } else{
            document.getElementById('team').innerHTML= "<p>Nothing found</p>";
        }
    }
    else{

        let needed_subjects = [];
        for(let i = 0; i < subjects.length; i++){
            if(document.getElementById(subjects[i]).checked){
                needed_subjects = [...needed_subjects, subjects[i]]
            }
            
        }
        new_html = ''
        console.log(needed_subjects);
        for (let key in team){
            if (needed_subjects.includes(team[key]['subject']) ){
                new_html += `<div class="row team-row"><div class="col-sm-2"><img src="images/rocket.jpg" alt="" class = "image-team"></div><div class="col-sm-6"><p class = "team-name">${team[key]['name']} | Free positions: <span style = "color: red;">${team[key]['free_number']}</span></p><p class = "team-name">Description: ${team[key]['description']}</p><p class = "team-name">Requirements: ${team[key]['requirements']}</p></div><div class="col-sm-3"><button type="button" class="btn btn-outline-dark join-button" onclick=" relocate_home()">REQUEST TO JOIN</button><script>function relocate_home(){window.open("command_page.html", '_blank');} </script></div></div>`;
            }
            }
        
        if (new_html != ''){
            document.getElementById('team').innerHTML= new_html;
        } else{
            document.getElementById('team').innerHTML= "<p>Nothing found</p>";
        }

    }

}

