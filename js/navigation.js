let nav = document.getElementById('navigation');
let style = getComputedStyle(nav);


function navigation(){
   if(style.display == "none"){
      nav.style.display = "block";
   }
   else{
      nav.style.display = "none";
   }
}