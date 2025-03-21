function navOpen() {
    const navSection = document.querySelector('.navbar ul');
    const navBtn = document.querySelector('.navBtn');
    const loginBtn = document.querySelector('.login-Btn');
    const title = document.querySelector('.logo');
    const hamburg = document.querySelector('.openNavbtn');

    navSection.classList.add('active');
    navBtn.classList.add('active');
    loginBtn.classList.add('active');
    title.classList.add('active');
    hamburg.classList.add('active');
}

function navClose() {
    const navSection = document.querySelector('.navbar ul');
    const navBtn = document.querySelector('.navBtn');
    const loginBtn = document.querySelector('.login-Btn');
    const title =document.querySelector('.logo');
    const hamburg = document.querySelector('.openNavbtn');

    navSection.classList.remove('active');
    navBtn.classList.remove('active');
    loginBtn.classList.remove('active');
    title.classList.remove('active');
    hamburg.classList.remove('active');
}









const cards=[
    {title:'“I’m addicted to <br> the Cleanic!”',para:'"I’m a testimonial. Click to edit <br> me and add text that says <br> something nice about you and <br> your services."',span:'Jane Deirs, AR'},
    {title:'“My flat looks like a <br> boutique hotel”',para:'"I’m a testimonial. Click to edit <br> me and add text that says <br> something nice about you and <br> your services."',span:'Jane Deirs, AR'},
    {title:'“Soft perfection”',para:'"I’m a testimonial. Click to edit <br> me and add text that says <br> something nice about you and <br> your services."',span:'Jane Deirs, AR'},
    {title:'“I’m obsessed”',para:'"I’m a testimonial. Click to edit <br> me and add text that says <br> something nice about you and <br> your services."',span:'Jane Deirs, AR'}
]

document.getElementById('cards-review').innerHTML=cards.map(item => `
    <div class="cards">
        <div class="icons">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <h2>${item.title}</h2>
        <p>${item.para}</p>
        <span>${item.span}</span>
    </div>
`).join('')









const images = [
    { heading: "Window cleaning", before: "./images/window dirty.png", after: "./images/window clean.png" },
    { heading: "Carpet cleaning", before: "./images/carpet dirty.png", after: "./images/carpet clean.png" },
    { heading: "Couch cleaning", before: "./images/couch dirty.png", after: "./images/couch clean.png" }
];

document.getElementById("imageContainer").innerHTML = images.map((img, i) => `
    <div class="image-box ${i === 0 ? "active" : ""}" data-heading="${img.heading}">
        <div class="image-item"><img src="${img.before}"></div>
        <div class="image-item"><img src="${img.after}"></div>
    </div>
`).join("");

let index = 0, boxes = document.querySelectorAll('.image-box'), heading = document.getElementById('imageHeading');
heading.textContent = boxes[0].dataset.heading;
setInterval(() => {
    boxes[index].classList.remove('active');
    index = (index + 1) % boxes.length;
    setTimeout(() => {
        boxes[index].classList.add('active');
        heading.textContent = boxes[index].dataset.heading;
    }, 50);
}, 3000);