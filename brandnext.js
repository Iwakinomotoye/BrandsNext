const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const ul = document.getElementById('ul');
const nav = document.getElementById('nav');
const links = document.getElementById('links');
const article = document.getElementById('article');
// function for navbar on smaller screen
function closeNavLinks() {
    if(window.outerWidth < 768) {
        ul.classList.toggle('show');
        nav.classList.toggle('fixed');
        menu.classList.toggle('hide');
        menuClose.classList.toggle('hide');
        article.classList.toggle('stay-position');
    }
};
menu.addEventListener('click', closeNavLinks);
menuClose.addEventListener('click', closeNavLinks);
ul.addEventListener('click', (e) => {
    if(e.target.matches(".links li .search-input")) {
        return;
    } else if (!e.target.matches(".links li a")) {
        closeNavLinks();
    }
});

const allCategories = document.getElementById('allCategories');
const imageParent = document.getElementById('imageParent');

window.onresize = function () {
    document.location.reload()
};

allCategories.addEventListener('click', () => {
    if(window.outerWidth < 992) {
        if(allCategories.textContent == "See All Categories") {
            allCategories.textContent = "Hide Categories";
        } else {
            allCategories.textContent = "See All Categories";
        }
        
        let imageChildren = imageParent.querySelectorAll('.image-thumbnail');
        for(let i = 0; i < (imageChildren.length - 4); i++){
            imageChildren[4 + i].classList.toggle('show');
        }

    }
});

const scrollRight = document.getElementById("scroll-right");
const scrollLeft = document.getElementById("scroll-left");
const div = document.querySelector(".image-thumbnails-parent");

scrollRight.onclick = function () {
    div.scrollBy(50, 0);
}
scrollLeft.onclick = function () {
    div.scrollBy(-50, 0);
}

