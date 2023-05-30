document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!');

    init();

});

const init = () => {
    console.log('init() CALLED!');

    createEvents();
    modifyEvents();
    deleteEvents();

}

const createEvents = () => {
    console.log('createEvents() CALLED!');

    let createButton = document.querySelector('.create_wrap .createBtn');
    createButton.addEventListener('click', function() {
        console.log('createButton() CLICKED!');

        let u_id = document.querySelector('div.create_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.create_wrap input[name="u_pw"]').value;
        let u_gender = document.querySelector('div.create_wrap input[name="u_gender"]').value;
        let u_mail = document.querySelector('div.create_wrap input[name="u_mail"]').value;
        let u_phone = document.querySelector('div.create_wrap input[name="u_phone"]').value;

    let userObj = new User(u_id, u_pw, u_gender, u_mail, u_phone);

    user_db.set(u_id, userObj);

    console.log(user_db.get(u_id));

    })
}

const modifyEvents = () => {
    let modifyButton = document.querySelector('.account_wrap .modify');
    modifyButton.addEventListener('click', function() {
        console.log('modifyButton() CLICKED!');    

        let u_id = user_db.get('0');
        console.log(u_id);




        // let u_id = document.querySelector('div.modify_wrap input[name="u_id"]').value;
        // let u_pw = document.querySelector('div.modify_wrap input[name="u_pw"]').value;
        // let u_gender = document.querySelector('div.modify_wrap input[name="u_gender"]').value;
        // let u_mail = document.querySelector('div.modify_wrap input[name="u_mail"]').value;
        // let u_phone = document.querySelector('div.modify_wrap input[name="u_phone"]').value;

    // let userObj = new User(u_id, u_pw, u_gender, u_mail, u_phone);

    // user_db.get(u_id, userObj);

    // console.log(user_db.get(u_id));
})
}

const deleteEvents = () => {
    let deleteButton = document.querySelector('.delete_wrap .deleteBtn');
    deleteButton.addEventListener('click', function() {
        console.log('deleteButton() CLICKED!'); 

        let u_id = document.querySelector('div.delete_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.delete_wrap input[name="u_pw"]').value;
        

        if(user_db.get(u_id).u_id === u_id) {
            user_db.delete(u_id); //key : 이 키와 관련된 요소는 맵에서 제거됩니다.
            console.log(user_db.get(u_id));
        }
       
        
})
}