let form_text = document.getElementById('form-textblock');
let style_form = getComputedStyle(form_text);

function invisible_form(){
   if(style_form.display == 'none'){
      form_text.style_form.display == 'block';
   }
   else{
      form_text.style_form.display == 'none';
   }
}