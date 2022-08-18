let images = [{
    url: "./images/chair.png",
    title: "Rostov-on-Don, Admiral",
    textCity: "Rostov-on-Don LCD admiral",
    textApartament: "81 m2",
    textRepairTime: "3.5 months",
    textRepairCost: "Upon request"
}, {
    url: "./images/tv.png",
    title: "Sochi Thieves",
    textCity: "Sochi Thieves",
    textApartament: "105 m2",
    textRepairTime: "4 months",
    textRepairCost: "Upon request"
}, {
    url: "./images/green.png",
    title: "Rostov-on-Don Patriotic",
    textCity: "Rostov-on-Don Patriotic",
    textApartament: "93 m2",
    textRepairTime: "3 months",
    textRepairCost: "Upon request"
}];

//функция для переключения элементов слайдера
function initSliders() {


    let containerImage = document.querySelector(".block-1__container");
    let arrowLeft = document.querySelector(".left");
    let arrowRight = document.querySelector(".right");
    let points = document.querySelector(".block-1__switchs--points");
    let titles = document.querySelector(".block-1__nav");
    let textCity = document.querySelector(".description__cont-1");
    let textApartament = document.querySelector(".description__cont-2");
    let textRepairTime = document.querySelector(".description__cont-3");
    let textRepairCost = document.querySelector(".description__cont-4");

    initSliders();
    initArrows();
    initPoints();
    initTitles();
    
//добавление элементов на страницу
    function initSliders() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="container__image n${index} ${index === 0 ? "active" : ""} " style="background-image:url(${images[index].url});" data-index="${index}"></div>`
            containerImage.innerHTML += imageDiv;

            let City = `<p class="block-1__description--text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].textCity}</p>`
            textCity.innerHTML += City;

            let Apartament = `<p class="block-1__description--text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].textApartament}</p>`
            textApartament.innerHTML += Apartament;

            let RepairTime = `<p class="block-1__description--text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].textRepairTime}</p>`
            textRepairTime.innerHTML += RepairTime;

            let RepairCost = `<p class="block-1__description--text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].textRepairCost}</p>`
            textRepairCost.innerHTML += RepairCost;
        });
    }
    
// инициализация стрелок для прокрутки картинок
    function initArrows() {
        arrowLeft.addEventListener("click", function () {
            let curNumber = +containerImage.querySelector(".active").dataset.index;
            let nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;

            moveSlider(nextNumber);
        });
        arrowRight.addEventListener("click", function () {
            let curNumber = +containerImage.querySelector(".active").dataset.index;
            let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;

            moveSlider(nextNumber);
        });
    };

    // добавление точек для прокрутки картинок
    function initPoints() {
        images.forEach((image, index) => {
            let pointDiv = `<div class="block-1__switchs--points-point n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`
            points.innerHTML += pointDiv;
        });
        points.querySelectorAll(".block-1__switchs--points-point").forEach(point => {
            point.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            });
        });

    };

    // добавление названий к картинкам
    function initTitles() {
        images.forEach((image, index) => {
            let title = `<h2 class="block-1__nav--link n${index}  ${index === 0 ? "active" : ""}"  data-index="${index}">${images[index].title}</h2>`
            titles.innerHTML += title;
        });

        titles.querySelectorAll(".block-1__nav--link").forEach(title => {
            title.addEventListener("click", function () {
                moveSlider(this.dataset.index);
            });
        });
    };







// смена состояния картинок, точек и текста при переключении.
    function moveSlider(num) {
        containerImage.querySelector(".active").classList.remove("active");
        containerImage.querySelector(".n" + num).classList.add("active");
        points.querySelector(".active").classList.remove("active");
        points.querySelector(".n" + num).classList.add("active");
        titles.querySelector(".active").classList.remove("active");
        titles.querySelector(".n" + num).classList.add("active");
        textCity.querySelector(".active").classList.remove("active");
        textCity.querySelector(".n" + num).classList.add("active");
        textApartament.querySelector(".active").classList.remove("active");
        textApartament.querySelector(".n" + num).classList.add("active");
        textRepairTime.querySelector(".active").classList.remove("active");
        textRepairTime.querySelector(".n" + num).classList.add("active");
        textRepairCost.querySelector(".active").classList.remove("active");
        textRepairCost.querySelector(".n" + num).classList.add("active");
    }

};

document.addEventListener("DOMContentLoaded", function () {
    initSliders();
});

