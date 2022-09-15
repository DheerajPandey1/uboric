var obj_data = [
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-grey-shoptool-original-imafxu7e79mt5vkw.png",
      // name: "Vijay Shankar Sharma",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹749.00",
      price:"₹599.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-01-shoptool-original-imafw2fyakfmze5m.png",
      Name: "Shoptool New Grocery Containers – 800..",
      // position: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹349.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-72.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      // position: "Shoptool New Grocery Containers – 800..",
      strprice:"₹849.00",
      price:"₹599.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-blue-shoptool-original-imafw2fyahryzhhf.png",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹849.00",
      price:"₹599.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-grey-shoptool-original-imafxu7e79mt5vkw.png",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1149.00",
      price:"₹999.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-01-shoptool-original-imafw2fyakfmze5m.png",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1349.00",
      price:"₹999.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-72.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹949.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-blue-shoptool-original-imafw2fyahryzhhf.png",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹999.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/12/handi-800ml-grey-shoptool-original-imafxu7e79mt5vkw.png",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹989.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/10.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1249.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/10-1.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/200.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹1249.00"

    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/1-1.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹1449.00",
      price:"₹1249.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/10-630-ml-container-shoptool-original-imafzpuav2pk2fhf.jpeg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹949.00",
      price:"₹899.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2020/08/shoptool-72.jpg",
      Name: "Shoptool New Grocery Containers – 800..",
      strprice:"₹649.00",
      price:"₹449.00"
    },
    {
      avtar: "https://www.uboric.com/wp-content/uploads/2021/06/10-2.jpeg",
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

