const SIGN_UP_VIEW = 1;
const SIGN_MOD_VIEW = 2;
const SIGN_DEL_VIEW = 3;
const AIR_RESERVE = 4;
const RESERVE_LIST = 5;

let signUpWrap = '';
let signModWrap = '';
let signDelWrap = '';
let airReserveWrap = '';
let reserveListWrap = '';

const initViews = () => {
    console.log('initViews() READY!!');

    signUpWrap = document.querySelector('div.create_wrap');
    signModWrap = document.querySelector('div.modify_wrap');
    signDelWrap = document.querySelector('div.delete_wrap');
    airReserveWrap = document.querySelector('div.reserve_form_wrap');
    reserveListWrap = document.querySelector('div.result_reserve');
}



const showSelectedView = (viewNo) => {
    console.log('showSelectedView() READY!!');

    switch(viewNo){
        case SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signModWrap.style.display = 'none';
            signDelWrap.style.display = 'none';
            airReserveWrap.style.display = 'none';
            reserveListWrap.style.display = 'none';
            break;

        case SIGN_MOD_VIEW:
            signUpWrap.style.display = 'none';
            signModWrap.style.display = 'block';
            signDelWrap.style.display = 'none';
            airReserveWrap.style.display = 'none';
            reserveListWrap.style.display = 'none';
        break;

        case SIGN_DEL_VIEW:
            signUpWrap.style.display = 'none';
            signModWrap.style.display = 'none';
            signDelWrap.style.display = 'block';
            airReserveWrap.style.display = 'none';
            reserveListWrap.style.display = 'none';
            break;

        case AIR_RESERVE:
            signUpWrap.style.display = 'none';
            signModWrap.style.display = 'none';
            signDelWrap.style.display = 'none';
            airReserveWrap.style.display = 'block';
            reserveListWrap.style.display = 'none';
            break;
        
        case RESERVE_LIST:
            signUpWrap.style.display = 'none';
            signModWrap.style.display = 'none';
            signDelWrap.style.display = 'none';
            airReserveWrap.style.display = 'none';
            reserveListWrap.style.display = 'block';
            break;


        


            
    }

}