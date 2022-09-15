var obj_data = [
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/05/51FhZHveTvS._AC_SL1080_-400x397.jpg",
      // name: "Vijay Shankar Sharma",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹749.00",
      price:"₹599.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2022/01/519bIfsYsYS._SL1500_-400x400.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      // position: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹349.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/02/SONIC_GREEN1_result.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      // position: "Shoptool New Grocery Containers – 800..",
      strprice:"₹849.00",
      price:"₹599.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/02/SONIC1_ORANGE_result-e1614411329411.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹849.00",
      price:"₹599.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/photo_2021-06-13_09-51-29-400x400.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1149.00",
      price:"₹999.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/1_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1349.00",
      price:"₹999.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/1_4475c045-47e6-48c2-81e2-fa8f4d7d5a94_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹949.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/NECTORPROCOR1135-2_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹999.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/1_4475c045-47e6-48c2-81e2-fa8f4d7d5a94_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹989.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/NECTORPROCOR1135-2_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1249.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/Untitleddesign_2_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/NECTORPROCOR1135-7_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹1249.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/Untitleddesign_1_500x-1.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹1249.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/1_952024d0-9cc5-4911-9bd1-2f8687d2150d_500x.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹949.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/07/1-71.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹649.00",
      price:"₹449.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/07/Ambrane-Elite-Wireless-Earphones-400x287.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹649.00",
      price:"₹449.00"
      
    },

  ]

  var cartLs=[];
localStorage.setItem("home",JSON.stringify(obj_data))

  obj_data.forEach(function (elem) {
    var box = document.createElement("div");

    var investor_avtar = document.createElement("img");
    investor_avtar.setAttribute("src", elem.avtar)
    investor_avtar.setAttribute("class", "spicesImg")
    console.log(investor_avtar)

    var product_name = document.createElement("h3");
    product_name.innerText = elem.Name;
    product_name.setAttribute("class", "inline")
    // console.log(product_name)

    // var investor_role = document.createElement("p");
    // investor_role.innerText = elem.position
   
    var button=document.createElement("button")
    button.innerText="Add to Cart"
    button.setAttribute("class", "btn")

    var price=document.createElement("h2")
    price.innerText=elem.price;
    // console.log(price);
   price.setAttribute("class", "att")


    var strprice=document.createElement("strike")
    strprice.innerText=elem.strprice;
    strprice.setAttribute("class", "fon")

   button.addEventListener("click",function(){
    AddtoCart(elem)
   })

    box.append(investor_avtar,product_name,strprice,price,button)
    document.querySelector("#big").append(box)
  });

  function  AddtoCart(elem){
    cartLs.push(elem)
    localStorage.setItem("home",JSON.stringify(cartLs));
   alert("Product Added Sucessfully")
 
  }

  // document.querySelector(".cartIcon").addEventListener("click", onCartClick);
       
  //      function onCartClick() {
  //             event.preventDefault();
  //          document.getElementById("cartData").style.display = "block";
   
  //      }
   
  //      document.getElementById("cartBack").addEventListener("click", cartBack);
  //      function cartBack() {
  //          document.getElementById("cartData").style.display = "none";
  //      }
  //       let data = JSON.parse(localStorage.getItem("home"))||[];
       
  //       data.forEach(e => {
  //           let div = document.createElement("div")
  //           let img = document.createElement("img");
  //           img.src=e.avtar;
  //           let price = document.createElement("h1");
  //           price.innerText=e.price;
   
  //           var input=document.createElement("input")
  //           input.innerText=e.input;
   
  //          div.append(img,price)
         
           
           
           
            
  //          // let div1 = document.createElement(div);
  //          // div1.append(sum)
  //          document.getElementById("team").append(div);
   
  //       });