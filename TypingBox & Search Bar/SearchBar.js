let data=document.getElementById("data");
let contents=document.getElementsByClassName("contents");
// let name= document.getElementsByTagName("p");
let x=Array.from(contents);

data.addEventListener("input",()=>{
    x.forEach(function(fruit) {
        // console.log(fruit.children[1]);
        let product= fruit.children[1].innerText.toLowerCase();
        if(product.includes(data.value.toLowerCase())){
            fruit.style.display="block";
        }
        else{
            fruit.style.display="none";
        }
    })
})
