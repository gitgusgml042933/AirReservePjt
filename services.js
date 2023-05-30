// 계정 생성
const createEvents = () => {
    console.log('createEvents() CALLED!');

    let createButton = document.querySelector('.create_wrap input[value="createBtn"]');
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
    console.log(user_db.size);

    })
}

//계정 삭제
const deleteEvents = () => {
    let deleteButton = document.querySelector('.delete_wrap input[value="reserve"]');
    deleteButton.addEventListener('click', function() {
        console.log('deleteButton() CLICKED!'); 

        let u_id = document.querySelector('div.delete_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.delete_wrap input[name="u_pw"]').value;
        

        if(user_db.get(u_id).u_id === u_id) {
            user_db.delete(u_id); //key : 이 키와 관련된 요소는 맵에서 제거됩니다.
            console.log(user_db.get(u_id));
            console.log(user_db.size);
        }
       
        
})
}

// 2. 비행기 예약하기
const booking_btn = () => {
    console.log('booking_btn() READY!!');

    let booking_btn = document.querySelector('div.reserve_form_wrap button.reserveBtn');
    
    booking_btn.addEventListener('click', function() {
        console.log('booking_btn() CLICKED!!');
        let u_id = document.querySelector('div.reserve_form_wrap input[name = "u_id"]').value;
        let r_name = document.querySelector('div.reserve_form_wrap input[name = "r_name"]').value;
        let r_mail = document.querySelector('div.reserve_form_wrap input[name = "r_mail"]').value;
        let r_phone = document.querySelector('div.reserve_form_wrap input[name = "r_phone"]').value;
        let depart_location_no = document.querySelector('div.reserve_form_wrap input[name = "depart_location_no"]').value;
        let r_depart_datetime = document.querySelector('div.reserve_form_wrap input[name = "r_depart_datetime"]').value;
        let arrival_location_no = document.querySelector('div.reserve_form_wrap input[name = "arrival_location_no"]').value;
        let r_arrival_datetime = document.querySelector('div.reserve_form_wrap input[name = "r_arrival_datetime"]').value;
        let r_adult_cnt = document.querySelector('div.reserve_form_wrap input[name = "r_adult_cnt"]').value;
        let r_infant_cnt = document.querySelector('div.reserve_form_wrap input[name = "r_infant_cnt"]').value;
        let r_child_cnt = document.querySelector('div.reserve_form_wrap input[name = "r_child_cnt"]').value;

        let user_account = new User(u_id, r_name, r_mail, r_phone, depart_location_no, 
            r_depart_datetime, arrival_location_no, r_arrival_datetime, r_adult_cnt, r_infant_cnt, r_child_cnt);
        
        u_id = document.querySelector('div.reserve_form_wrap input[name = "u_id"]').value = '';
        r_name = document.querySelector('div.reserve_form_wrap input[name = "r_name"]').value = '';
        r_mail = document.querySelector('div.reserve_form_wrap input[name = "r_mail"]').value = '';
        r_phone = document.querySelector('div.reserve_form_wrap input[name = "r_phone"]').value = '';
        depart_location_no = document.querySelector('div.reserve_form_wrap input[name = "depart_location_no"]').value = '';
        r_depart_datetime = document.querySelector('div.reserve_form_wrap input[name = "r_depart_datetime"]').value = '';
        arrival_location_no = document.querySelector('div.reserve_form_wrap input[name = "arrival_location_no"]').value = '';
        r_arrival_datetime = document.querySelector('div.reserve_form_wrap input[name = "r_arrival_datetime"]').value = '';
        r_adult_cnt = document.querySelector('div.reserve_form_wrap input[name = "r_adult_cnt"]').value = '';
        r_infant_cnt = document.querySelector('div.reserve_form_wrap input[name = "r_infant_cnt"]').value = '';
        r_child_cnt = document.querySelector('div.reserve_form_wrap input[name = "r_child_cnt"]').value = '';


    })
};
