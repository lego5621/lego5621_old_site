window.onload = function(){
    let section_one = document.querySelector('.section_one');
    let section_two = document.querySelector('.section_two');
    let section_three = document.querySelector('.section_three');
    let back = document.querySelector('.back');
    let text_menu = document.querySelectorAll('.menu');
    let text_menu1 = document.querySelectorAll('.text_menu');
    let menu_list = document.querySelector('.menu_list');
    let backs = document.querySelectorAll('.back1');


    for (let elem of text_menu1) {
        elem.addEventListener('click', shov_content)
    };

    function shov_content(){
        section_one.classList.add('one_activ');
        section_two.classList.add('two_activ');
        section_three.classList.add('three_activ');
        back.classList.add('back1_activ');
        for (let elem of text_menu) {
            elem.classList.add('menu_list_activ');
        };
        setTimeout(function h(){
            section_three.classList.add('scroll_activ');
        }, 60);
    };
    
    for (let elem of backs) {
        elem.addEventListener('click', hide_content);
    };

    function hide_content(){
        section_one.classList.remove('one_activ');
        section_two.classList.remove('two_activ');
        section_three.classList.remove('three_activ');
        menu_list.classList.remove('menu_list_activ');
        back.classList.remove('back1_activ'); 
        for (let elem of text_menu) {
            elem.classList.remove('menu_list_activ');
        };
        setTimeout(function e(){
            // event.stopPropagation();
            section_three.classList.remove('scroll_activ');
        }, 61);
    };      


}