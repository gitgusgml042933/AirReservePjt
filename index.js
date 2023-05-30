
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!!');

    init();
});


const init = () => {
    console.log('init() READY!!');

    initViews();

    changeView();

    //booking_btn();
}

const changeView = () => {
    console.log('addEvent() READY!!');

    let sign_create_btn = document.querySelector('div.account_wrap a.create');
    sign_create_btn.addEventListener('click', function(){
        console.log('sign_create_btn CLICKED!!');

        showSelectedView(SIGN_UP_VIEW);

        createEvents();
    });

    let sign_modify_btn = document.querySelector('div.account_wrap a.modify');
    sign_modify_btn.addEventListener('click', function(){
        console.log('sign_modify_btn CLICKED!!');

        showSelectedView(SIGN_MOD_VIEW);
    });

    let sign_delete_btn = document.querySelector('div.account_wrap a.delete');
    sign_delete_btn.addEventListener('click', function(){
        console.log('sign_delete_btn CLICKED!!');

        showSelectedView(SIGN_DEL_VIEW);

        deleteEvents();
    });

    let air_reserve_btn = document.querySelector('div.account_wrap a.airplane_reserve');
    air_reserve_btn.addEventListener('click', function(){
        console.log('air_reserve_btn CLICKED!!');

        showSelectedView(AIR_RESERVE);
    });

    let reserve_list_btn = document.querySelector('div.account_wrap a.reserve_list');
    reserve_list_btn.addEventListener('click', function(){
        console.log('reserve_list_btn CLICKED!!');

        showSelectedView(RESERVE_LIST);
    });
}