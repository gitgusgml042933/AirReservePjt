//사용자 계정 클래스
class User{
    constructor(u_id, u_pw, u_gender, u_mail, u_phone, u_reg_date, u_mod_date){
        this.u_id = u_id;   //사용자 계정
        this.u_pw = u_pw;   //비밀번호
        this.u_gender = u_gender;   //성구분
        this.u_mail = u_mail;   //메일
        this.u_phone = u_phone; //연락처
        this.u_reg_date = u_reg_date;   //가입일
        this.u_mod_date = u_mod_date;   //최근 수정일
    }
}

//비행기 예약 클래스
class Reserve{
    constructor(r_no, u_id, r_name, r_mail, r_phone, depart_location_no, r_depart_datetime, arrival_location_no, r_arrival_datetime, r_adult_cnt, r_infant_cnt, r_child_cnt, r_reg_date, r_mod_date){
        this.r_no = r_no;   //예약번호
        this.u_id = u_id;   //예약자ID
        this.r_name = r_name;   //예약자 이름
        this.r_mail = r_mail;   //예약자 메일
        this.r_phone = r_phone; //예약자 연락처
        this.depart_location_no = depart_location_no;   //출발지 코드
        this.r_depart_datetime = r_depart_datetime;     //출발 날짜
        this.arrival_location_no = arrival_location_no; //도착지 코드
        this.r_arrival_datetime = r_arrival_datetime;   //도착지 날짜
        this.r_adult_cnt = r_adult_cnt;    //
        this.r_infant_cnt = r_infant_cnt;
        this.r_child_cnt = r_child_cnt;
        this.r_reg_date = r_reg_date;
        this.r_mod_date = r_mod_date;
    }
}