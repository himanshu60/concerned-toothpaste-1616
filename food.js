  //let data = JSON.parse(localStorage.getItem("cardData")) || [];
  //  console.log(data)

    let mainSection = document.querySelector("#container");

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`)
        .then((res) => {
            return res.json();

        })

        .then((res) => {
            data = res;
            console.log(data);
           //localStorage.setItem('data', JSON.stringify(data));
            let reData = data.meals.map(item => {
                return {

                    name: item.strMeal,
                    img: item.strMealThumb
                }
            })
            // console.log(reData)

            displayData(reData);

            // console.log(reData);

        });




    let cardData = JSON.parse(localStorage.getItem("cardData"))||[];
    function displayData(reData) {
        mainSection.innerHTML = null;
        let cardlist = `<div class = "card-list">${reData.map(item => getCard(item.name, item.img)).join(" ")}</div>`
       let cart = document.querySelector("#addtocartBtn");

        mainSection.innerHTML = cardlist;

        let a = document.querySelectorAll(".addBtn");
        let c = document.querySelectorAll(".images")
        let b = document.querySelectorAll(".card-item");
        let d = document.querySelectorAll(".card-price");
        for(let i = 0; i < a.length; i++){
           
            a[i].addEventListener("click",()=>{
                cardData = JSON.parse(localStorage.getItem("cardData"))||[];
                alert("Add to Cart Product");
               // console.log(c[i].src)
                //console.log(d[i].textContent);
               // console.log(b[i].textContent)
               let obj = {
                name : b[i].textContent,
                img : c[i].src,
                price : d[i].textContent
               }
               cardData.push(obj)
               console.log(cardData)
                localStorage.setItem('cardData', JSON.stringify(cardData));
                window.location.reload();
            })
           // cardData.push(obj)
          
        }
        // a.forEach((ele)=>{
        //     ele.addEventListener("click",()=>{
        //         alert("hello")
        //         console.log(ele)
        //     })
        // })
         console.log(a);
    
         console.log(cart);

    }   

    function getCard(name, img) {
        let card = `
    
    <div class = "card">
    <div class = "card-img"> 
    <img class="images" src = ${img}  alt= "123" />

    </div>
   
    <div class = "card-body">
       <h2 class="card-item">${name} </h2>
       <p  class="card-price"> ${Math.floor(Math.random() * 500)}</p>
       <button id="addtocardBtn" class="addBtn">Add to Cart</button >
      
   
     </div >
   
    </div >
    
    `

    return card;
}
