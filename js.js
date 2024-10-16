$(".moon").click(function (e) { 
   $(".new").removeClass("bg-white")
   $(".new").addClass("bg-[#25273C] text-[#c0bebe]");
    $("section").removeClass("bg-[#F7F7F9]");
    $("section").addClass("bg-[#25273C]");
    $(".list").removeClass("bg-white").addClass("bg-[#25273C] text-white");
    $(".moon").toggle();
    $(".sun").toggle();
});
$(".sun").click(function (e) { 
   $(".new").removeClass("bg-[#25273C] text-[#c0bebe]")
   $(".new").addClass("bg-white");
    $("section").removeClass("bg-[#25273C]");
    $("section").addClass("bg-[#F7F7F9]");
    $(".list").removeClass("bg-[#25273C] text-white").addClass("bg-white");
    $(".moon").toggle();
    $(".sun").toggle();
});

let input = document.querySelector("input")
let list = JSON.parse(localStorage.getItem("list")) || []

    if (list.length > 0) {
        
        display(list)
    }

function add(){
    let x = {
        "input" : input.value,
        "checked":false
        
    }
    list.push(x)
    localStorage.setItem("list",JSON.stringify(list))
    console.log(list);
    display(list)
    set()
}

function display(list){
    let box = ``
    for (let index = 0; index < list.length; index++) {
        box += `
           <div class="unit h-10 flex items-center justify-between px-3">
                    <div class="flex items-center ps-3 gap-3 pt-2 text-xs ">
                        <div onclick="check(${index})" class="size-4 checked hover:cursor-pointer rounded-full border border-[#c0bebe]">
                            <div class="${list[index].checked ? 'flex' : 'hidden'} colored size-4  justify-center items-center rounded-full border border-[#555555a9] bg-gradient-to-r from-[#69A0FB] to-[#9548DE]">
                                <img src="./images/icon-check.svg" alt="">
                            </div>
    
                        </div>
                        <p class="notes ${list[index].checked ? 'line-through text-[#c0bebe]' : ''}">${list[index].input}</p>
                        </div>
                        <div onclick="remove(${index})" class="close hover:cursor-pointer "><img class="size-3" src="./images/icon-cross.svg" alt=""></div>
                </div>
                <hr>`
        
    }
    document.querySelector(".all").innerHTML=box
 
}






$(".check").click(function (e) { 
    if($(".color").hasClass("hidden")){

        add()
    }
    $(".color").toggleClass("hidden flex");
    
});
$(".list").on("click", ".checked", function (e) {
    $(this).find(".colored").removeClass("hidden ");
    $(this).find(".colored").addClass("flex ");
    $(this).siblings(".notes").addClass("line-through text-[#c0bebe]");
    $(this).siblings(".notes").list
    
    
    
});




function remove(i){
list.splice(i,1)
localStorage.setItem("list",JSON.stringify(list))
set()
display(list);
}


   function removeAll() {
    localStorage.removeItem("list")
    set()
    document.querySelector(".all").innerHTML = `<div class="flex justify-center min-h-[10rem] items-center ">
                           List is Empty now
                    </div>`  
 } 
set()
 function set(){
    $("#num").html(list.length);

 }
//  $(".active").click(function (e) { 
     
//      $(".list").on("click", ".checked", function (e) {
//         $(this).parent().parent().addClass("hidden")
//     });
    
// });

// let checked = document.querySelectorAll(".colored")

// checked.forEach(function(item) {
//     if (item.classList.contains("hidden")) {
//         document.querySelector(".unit").classList.add("hidden");
//     }
// });

$(".active").click(function (e) { 
    let activeList = list.filter(item => item.checked === false);
    
    display(activeList);
});
$(".completed").click(function (e) { 
    let complist = list.filter(item => item.checked === true);
    
    display(complist);
});


function check(i){
    let listcheck = JSON.parse(localStorage.getItem("list")) || []
    listcheck[i].checked = true
    localStorage.setItem("list",JSON.stringify(listcheck))

}


// let listcheck = JSON.parse(localStorage.getItem("list")) || []
// if( listcheck[i].checked == true){
//     $(".checked").removeClass("hidden");
// }

let listcheck = JSON.parse(localStorage.getItem("list")) || []
function active(){
    let box = ``
    for (let i = 0; i < listcheck.length; i++) {
        if(listcheck[i].checked == true){
          box += `
            <div class="unit h-10 flex items-center justify-between px-3">
                    <div class="flex items-center ps-3 gap-3 pt-2 text-xs ">
                        <div onclick="check(${i})" class="size-4 checked hover:cursor-pointer rounded-full border border-[#c0bebe]">
                            <div class="${listcheck[i].checked ? 'flex' : 'hidden'} colored size-4  justify-center items-center rounded-full border border-[#555555a9] bg-gradient-to-r from-[#69A0FB] to-[#9548DE]">
                                <img src="./images/icon-check.svg" alt="">
                            </div>
    
                        </div>
                        <p class="notes">${listcheck[i].input}</p>
                        </div>
                        <div onclick="remove(${i})" class="close hover:cursor-pointer "><img class="size-3" src="./images/icon-cross.svg" alt=""></div>
                </div>
                <hr>
          `
    }

    }
    document.querySelector(".all").innerHTML=box

}