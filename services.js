document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!!');

    init();
});


const init = () => {
    console.log('init() READY!!');

    booking_btn();
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
        
        // console.log(user_account);


    })
};
