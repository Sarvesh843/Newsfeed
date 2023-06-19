
fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
.then((response) => {
  return response.json()
})
.then((data)=> {
let name = document.getElementById("name");
let category = document.getElementById("category");
let news = document.getElementById("news");
let link = document.getElementById("link");
let name2 = document.getElementById("name2");
let category2 = document.getElementById("category2");
let news2 = document.getElementById("news2");
let link2 = document.getElementById("link2");

name.innerText='Ankush Verma';
category.innerHTML = "BUSSINES";
news.textContent = data[0].content;
link.href = data[0].url;

name2.innerText='Anmol Sharma';
category2.innerHTML = "SPORTS";
news2.textContent = data[1].content;
link2.href = data[1].url;
  
});

function getData(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let name2 = document.getElementById("name2");
  let category2 = document.getElementById("category2");
  let news2 = document.getElementById("news2");
  let link2 = document.getElementById("link2");
  let info2 = document.getElementById("info2");

  info2.style.display ="block";
  name.innerText='Swati Dubey';
  category.innerHTML = "WORLD";
  news.textContent = data[2].content;
  link.href = data[2].url;

  name2.innerText='Shreyasi Bansal';
  category2.innerHTML = "POLITCS";
  news2.textContent = data[3].content;
  link2.href = data[3].url;
    
});
}
function getDatab(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let info2 = document.getElementById("info2");

  info2.style.display ="none";
  name.innerText='Ankush Verma';
  category.innerHTML = "BUSSINES";
  news.textContent = data[0].content;
  link.href = data[0].url;    
});
}

function getDatas(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let info2 = document.getElementById("info2");

  info2.style.display ="none";
  name.innerText='Anmol Sharma';
  category.innerHTML = "SPORTS";
  news.textContent = data[1].content;
  link.href = data[1].url;    
});
}

function getDataw(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let info2 = document.getElementById("info2");

  info2.style.display ="none";
  name.innerText="Swati Dubey";
  category.innerHTML = "WORLD";
  news.textContent = data[2].content;
  link.href = data[2].url;    
});
}
function getDatap(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let info2 = document.getElementById("info2");

  info2.style.display ="none";
  name.innerText="Shreyasi Bansal";
  category.innerHTML = "POLITCS";
  news.textContent = data[3].content;
  link.href = data[3].url;    
});
}
function getDatah(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let info2 = document.getElementById("info2");

  info2.style.display ="none";
  name.innerText="Anmol Sharma";
  category.innerHTML = "HATKE";
  news.textContent = data[4].content;
  link.href = data[4].url;    
});
}
function getDatas(){
  fetch('https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news')
  .then((response) => {
    return response.json()
})
  .then((data)=> {
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
  let info2 = document.getElementById("info2");

  info2.style.display ="none";
  name.innerText="Pragya Swastik";
  category.innerHTML = "SCIENCE";
  news.textContent = data[5].content;
  link.href = data[5].url;    
});
}
let btn1 = document.getElementById("save1");
 btn1.addEventListener('click' ,function(){
  let name = document.getElementById("name");
  let category = document.getElementById("category");
  let news = document.getElementById("news");
  let link = document.getElementById("link");
 

  localStorage.setItem("name", name.innerHTML);
  localStorage.setItem("category", category.innerHTML);
  localStorage.setItem("news", news.innerHTML);
  localStorage.setItem("link", link.href);

  
  let add = document.getElementById("add")
  let value =`<div class="info">
  <div>
    <p>By <span>${localStorage.getItem("name")}</span></p>
    <div class="cat">
      <p>CATEGORY <span id="category2">${localStorage.getItem("category")}</span></p>
    </div>
  </div>
  <p>${localStorage.getItem("news")}</p>
  <a href="${localStorage.getItem("link")}">READ MORE</a>
  <div class="heart">
    <button><i class="fa-solid fa-heart heart-color"></i></button>
  </div>
  </div>`;
  add.innerHTML = value;
 });
 let btn2 = document.getElementById("save2");
 btn2.addEventListener('click' ,function(){
  let name2 = document.getElementById("name2");
  let category2 = document.getElementById("category2");
  let news2 = document.getElementById("news2");
  let link2 = document.getElementById("link2");
 

  localStorage.setItem("name2", name2.innerHTML);
  localStorage.setItem("category2", category2.innerHTML);
  localStorage.setItem("news2", news2.innerHTML);
  localStorage.setItem("link2", link2.href);

  
  let add = document.getElementById("add");
  let value =`<div class="info">
  <div>
    <p>By <span>${localStorage.getItem("name2")}</span></p>
    <div class="cat">
      <p>CATEGORY <span id="category2">${localStorage.getItem("category2")}</span></p>
    </div>
  </div>
  <p>${localStorage.getItem("news2")}</p>
  <a href="${localStorage.getItem("link2")}">READ MORE</a>
  <div class="heart">
    <button><i class="fa-solid fa-heart heart-color"></i></button>
  </div>
  </div>`;
  let div = document.createElement("div");
  div.innerHTML = value;
  add.appendChild(div);
 })
function hideButton(){
  let select = document.getElementById("select");
  select.classList.toggle("hiddden");
}