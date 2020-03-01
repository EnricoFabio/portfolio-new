window.addEventListener("scroll", parallax, false);

function parallax() {

    //Left
    var item1 = document.getElementById('p-1');
    var item2 = document.getElementById('p-2');
    var item3 = document.getElementById('p-3');
    var item4 = document.getElementById('p-4');

    //left top
    var item9 = document.getElementById('p-9');

    //Right
    var item5 = document.getElementById('p-5');
    var item6 = document.getElementById('p-6');
    var item7 = document.getElementById('p-7');
    var item8 = document.getElementById('p-8');

    //Middle
    var item10 = document.getElementById('p-10');


    // one
    item1.style.top = (window.pageYOffset/20) + 'px';
    item1.style.transform = 'rotate(' + (window.pageYOffset/20) + 'deg)';

    // two
    item2.style.top = (window.pageYOffset/16) + 'px';
    item2.style.transform = 'rotate(' + (-window.pageYOffset/40) + 'deg)';

    // three
    item3.style.top = (window.pageYOffset/13) + 'px';
    item3.style.transform = 'rotate(' + (-window.pageYOffset/30) + 'deg)';

    // four
    item4.style.top = (window.pageYOffset/40) + 'px';
    item4.style.transform = 'rotate(' + (window.pageYOffset/80) + 'deg)';

    // vife
    item5.style.top = (window.pageYOffset/16) + 'px';
    item5.style.transform = 'rotate(' + (-window.pageYOffset/20) + 'deg)';

    // six
    item6.style.top = (window.pageYOffset/16) + 'px';
    item6.style.transform = 'rotate(' + (window.pageYOffset/40) + 'deg)';

    // seven
    item7.style.top = (window.pageYOffset/40) + 'px';
    item7.style.transform = 'rotate(' + (window.pageYOffset/60) + 'deg)';

    // eight
    item8.style.top = (window.pageYOffset/20) + 'px';
    item8.style.transform = 'rotate(' + (-window.pageYOffset/30) + 'deg)';

    // nine
    item9.style.top = (window.pageYOffset/20) + 'px';
    item9.style.transform = 'rotate(' + (-window.pageYOffset/20) + 'deg)';

    // ten
    item10.style.top = (window.pageYOffset/100) + 'px';
    item10.style.transform = 'rotate(' + (-window.pageYOffset/300) + 'deg)';
}
