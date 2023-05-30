



// 비행기 예약하기
const booking_btn = () => {
    console.log('booking_btn() READY!!');

    let booking_btn = document.querySelector('div.reserve_form_wrap input[type="button"]');
    
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

        let user_account = new Reserve(index, u_id, r_name, r_mail, r_phone, depart_location_no, 
            r_depart_datetime, arrival_location_no, r_arrival_datetime, r_adult_cnt, r_infant_cnt, r_child_cnt, Date(), Date());
        
        reserve_db.set(u_id, user_account);
        
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
        c = document.querySelector('div.reserve_form_wrap input[name = "r_child_cnt"]').value = '';
        
        index++;

    })
};

// 예약 리스트 보기
const search_booking_list_btn = () => {
    console.log('search_booking_list_btn() READY!!');

    let search_booking_list_btn = document.querySelector('div.account_wrap .reserve_list');
    
    search_booking_list_btn.addEventListener('click', function() {
        console.log('search_booking_list_btn() CLICKED!!');
        
        signinSession = '1';

        if(signinSession == ''){
            console.log('로그인 해주세요');
            alert('로그인해주세요');
        }
        else{
            if(reserve_db.get(signinSession)) {
                let reserve_values = reserve_db.get(signinSession);
                document.querySelector('div.result_reserve .result_r_no').innerHTML = "예약번호: "+reserve_values.r_no;
                document.querySelector('div.result_reserve .result_u_id').innerHTML = "예약자 ID: "+reserve_values.u_id;
                document.querySelector('div.result_reserve .result_r_name').innerHTML = "예약자 이름: "+ reserve_values.r_name;
                document.querySelector('div.result_reserve .result_r_mail').innerHTML = "예약자 메일: "+ reserve_values.r_mail;
                document.querySelector('div.result_reserve .result_r_phone').innerHTML = "예약자 연락처: "+reserve_values.r_phone;
                document.querySelector('div.result_reserve .result_depart_location_no').innerHTML = "출발지 코드: "+ reserve_values.depart_location_no;
                document.querySelector('div.result_reserve .result_r_depart_datetime').innerHTML = "출발 날짜: "+ reserve_values.r_depart_datetime;
                document.querySelector('div.result_reserve .result_arrival_location_no').innerHTML = "도착지 코드: "+ reserve_values.arrival_location_no;
                document.querySelector('div.result_reserve .result_r_arrival_datetime').innerHTML = "도착지날짜: "+ reserve_values.r_arrival_datetime;
                document.querySelector('div.result_reserve .result_r_adult_cnt').innerHTML = "성인 수: "+ reserve_values.r_adult_cnt;
                document.querySelector('div.result_reserve .result_r_infant_cnt').innerHTML = "소아 수: "+ reserve_values.r_infant_cnt;
                document.querySelector('div.result_reserve .result_r_child_cnt').innerHTML = "유아 수: "+ reserve_values.r_child_cnt;
                document.querySelector('div.result_reserve .result_r_reg_date').innerHTML = "등록일: "+ reserve_values.r_reg_date;
                document.querySelector('div.result_reserve .result_r_mod_date').innerHTML = "최근 수정일: "+ reserve_values.r_mod_date;
            } else {
                console.log('예약된 정보가 없습니다.');
                alert('예약된 정보가 없습니다.');
            }
           
        }

        


    })

   
    
           
    
       
};

