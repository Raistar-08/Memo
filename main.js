


  let containerModal = document.querySelector(".container-modal");
  let buttonOpen = document.querySelector(".cta");
  let buttonClose = document.querySelector(".button-Open")
  let modal = document.querySelector(".modal")
  
  /*Le pongo el visibility*/
 buttonOpen.addEventListener("click",()=>{ containerModal.classList.add('container-modal--show');
     
     modal.classList.add('modal--animation')
 })

   /*Le quito el visibility*/ buttonClose.addEventListener("click",()=>{ containerModal.classList.remove('container-modal--show')
       
       modal.classList.remove('modal--animation')
 })

/*MENU*/
  let buttonMenu = document.querySelector(".img-menu");
  let menu = document.querySelector(".menun");
  let menuBack = document.querySelector(".select");
  
  buttonMenu.addEventListener("click",()=>{
      menu.classList.add("menu")     
  });
  
  menuBack.addEventListener("click",()=>{
      menu.classList.remove("menu")
  })

menu.addEventListener("click",()=>{
      menu.classList.remove("menu")
  })

/*STIKERS*/
let buttonStikers = document.querySelector(".stikers");
let container = document.querySelector(".container-post");

buttonStikers.addEventListener("click",()=>{
    container.innerHTML = ` <h1>Stikers para ver</h1>
     <div class="post">
           <img src="stk1.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk2.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk3.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk4.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk5.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk6.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk7.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk8.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="stk9.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="stk10.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="stk11.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="stk12.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="stk13.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="stk14.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="stk15.jpg" alt="">
       </div>
       <br/>
    `
})


let buttonMemes = document.querySelector(".memes")

buttonMemes.addEventListener("click",()=>{
    container.innerHTML = `   <h1>Memes:</h1>
      
       <div class="post">
           <img src="meme1.jpg" alt="">
       </div>
       <br/>
       <div class="post" id="post">
           <img src="meme2.jpg" alt="">
       </div>
       <br/>
       <div class="post">
           <img src="meme3.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme4.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme5.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme6.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme7.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme8.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme9.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme10.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme11.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme12.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme13.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme14.jpg" alt="">
       </div>
       <br/>
        <div class="post">
           <img src="meme15.jpg" alt="">
       </div>
       <br/>`
});

/*CREADORES Y AYUDANTES*/
let buttonHelp = document.querySelector(".create-p");
let res = document.querySelector(".innerco")

buttonHelp.addEventListener("click",()=>{
    res.innerHTML = `KevinGloo84<br/>DeadPool07<br/>Yandriel999`
})
