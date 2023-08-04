class Storage {
  static getNews(){
      let news;
      if(localStorage.getItem("news")){
          news = JSON.parse(localStorage.getItem("news"));
      }
      else{
          news = [];
      }
      return news;
  }

  static addtolocalstorage(e){
      let news = Storage.getNews();
      news.push(e);
      localStorage.setItem("news", JSON.stringify(news));
  }
  // static removenews(id){
  //     let news = Storage.getNews();
  //     news.forEach((p,i) => {
  //         if(p.id ==id){
  //             news.splice(i,1);
  //         }
  //         localStorage.setItem("news",JSON.stringify(news));
  //     });
  // }
}
window.Storage = Storage;

const displayLS=() =>{
  let news = Storage.getNews();
  console.log(news);
  news.map((e) => {
      document.querySelector("#add").innerHTML += `
      <div class="info">
        <div>
          <p>By <span>${e.author}</span></p>
          <div class="cat">
            <p>CATEGORY <span>${e.category}</span></p>
          </div>
        </div>
        <p>${e.content}
        </p>
        <a href="${e.url}">READ MORE</a>
        <div class="heart">
          <button ><i class="fa-solid fa-heart heart-color"></i></button>
        </div>
      </div>`;
  });
}
document.addEventListener('DOMContentLoaded',displayLS());

class News {
  constructor(author,category,content,url){
      this.author = author;
      this.category = category;
      this.content = content;
      this.url = url;
  }
}

const render = () => {
  let info = document.getElementById("value");
  info.innerHTML = "";
  fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((e) => {
        let content =e.content;
        let conarr = content.split(" ");
        let val = conarr.join(" ");

        // content.join(" ");
        console.log(conarr);

        let value = ` 
      <div class="info">
        <div>
          <p>By <span>${e[" author"]}</span></p>
          <div class="cat">
            <p>CATEGORY <span>${e[" category"]}</span></p>
          </div>
        </div>
        <p>${e.content}
        </p>
        <a href="${e.url}">READ MORE</a>
        <div class="heart">
          <button class="heart-button" ><i class="fa-solid fa-heart" author=${e[" author"]} category=${e[" category"]} content=${conarr} url=${e.url}></i></button>
        </div>
      </div>`;
        // console.log(value);
        info.innerHTML += value;
      });

      let heartButtons = document.querySelectorAll(".heart-button");

      heartButtons.forEach((button) => {
        button.onclick = (event) =>{
          const author = event.target.getAttribute("author");
          const category = event.target.getAttribute("category");
          const content = event.target.getAttribute("content");
          const splitValues = content.split(',');
          let val = splitValues.join(" ");
          const url = event.target.getAttribute("url");
          console.log(splitValues.join(' '));

          let data = new News(author,category,val,url);
          console.log(data);
          Storage.addtolocalstorage(data);
        }
          
      });
    });
};

render();

const hideButton = () => {
  let select = document.getElementById("select");
  select.classList.toggle("hidden");
};

const selectCategory = (e) => {
  let info = document.getElementById("value");
  info.innerHTML = "";
  fetch("https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let newData = data.filter((val) => {
        return val[" category"] == e;
      });
      // console.log(newData);
      newData.map((e) => {
        // console.log(e);
        let value = ` 
      <div class="info">
        <div>
          <p>By <span>${e[" author"]}</span></p>
          <div class="cat">
            <p>CATEGORY <span>${e[" category"]}</span></p>
          </div>
        </div>
        <p>${e.content}
        </p>
        <a href="${e.url}">READ MORE</a>
        <div class="heart">
          <button class ="heart-button"><i class="fa-solid fa-heart"></i></button>
        </div>
      </div>`;
        // console.log(value);
        info.innerHTML += value;
      });
        let heartButtons = document.querySelectorAll(".heart-button");

      heartButtons.forEach((button) => {
        button.onclick = (event) =>{
          const author = event.target.getAttribute("author");
          const category = event.target.getAttribute("category");
          const content = event.target.getAttribute("content");
          const splitValues = content.split(',');
          let val = splitValues.join(" ");
          const url = event.target.getAttribute("url");
          console.log(splitValues.join(' '));

          let data = new News(author,category,val,url);
          console.log(data);
          Storage.addtolocalstorage(data);
        }
      });
    });
};


