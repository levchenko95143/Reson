document.getElementById("sell-service").addEventListener('click', function(){
   alert("hello world!");
})

document.getElementById('find-service-btn').addEventListener('click', function(){
   alert("Поиск услуг");
})

function f_feedback1(){
   let feed1 = document.getElementById('text-feed-1');
   let style1 = getComputedStyle(feed1);
   if (style1.display === 'none'){
      document.getElementById('text-feed-1').style.display = 'block';
   }
   else if(style1.display === 'block'){
      document.getElementById('text-feed-1').style.display = 'none';
   }
}
function f_feedback2(){
   let feed2 = document.getElementById('text-feed-2');
   let style2 = getComputedStyle(feed2);
   if (style2.display === 'none'){
      document.getElementById('text-feed-2').style.display = 'block';
   }
   else if(style2.display === 'block'){
      document.getElementById('text-feed-2').style.display = 'none';
   }
}
function f_feedback3(){
   let feed3 = document.getElementById('text-feed-3');
   let style3 = getComputedStyle(feed3);
   if (style3.display === 'none'){
      document.getElementById('text-feed-3').style.display = 'block';
   }
   else if(style3.display === 'block'){
      document.getElementById('text-feed-3').style.display = 'none';
   }
}
