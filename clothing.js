var obj_data = [
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.47.57-AM-400x600.jpeg",
      // name: "Vijay Shankar Sharma",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹749.00",
      price:"₹599.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/08/374f71cb-67ad-4c87-9f46-061b9d2ac6a6-400x539.jpg",
      Name: "Rubi cotton With digital print Half..",
      // position: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹349.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.47.57-AM-1-400x600.jpeg",
      Name: "Rubi cotton With digital print Half..",
      // position: "Shoptool New Grocery Containers – 800..",
      strprice:"₹849.00",
      price:"₹599.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.47.58-AM-400x600.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹849.00",
      price:"₹599.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.47.58-AM-1-400x600.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1149.00",
      price:"₹999.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.47.59-AM-400x601.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1349.00",
      price:"₹999.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.48.00-AM-400x600.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹949.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.47.59-AM-1-400x600.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹999.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.48.01-AM-400x600.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹989.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.48.00-AM-1.jpeg",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹1249.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.48.02-AM-576x1024.jpeg",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹1449.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.48.01-AM1-400x556.jpeg",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹1449.00",
      price:"₹1249.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-27-at-11.48.03-AM.jpeg",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹1449.00",
      price:"₹1249.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-07-at-6.29.41-PM-400x600.jpeg",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹949.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/09/e6156abe-854f-41c4-9917-dadf65da3b7d-400x600.jpg",
      Name: "Rubi cotton With digital print Half..",
      strprice:"₹649.00",
      price:"₹449.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/08/4cc6a415-bd2f-4007-a654-38c07e4819c4-400x446.jpg",
      Name: "Rubi cotton With digital print Half..",
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

