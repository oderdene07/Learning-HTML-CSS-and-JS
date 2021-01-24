var text = document.querySelectorAll('.text');
text.forEach(function(texts){
    texts.onclick = function(){
        if(texts.className.includes('orange')){
            texts.nextElementSibling.classList.toggle('active');
        }
        if(texts.className.includes('purple')){
            texts.nextElementSibling.classList.toggle('active');
        }
        if(texts.className.includes('green')){
            texts.nextElementSibling.classList.toggle('active');
        }
        if(texts.className.includes('blue')){
            texts.nextElementSibling.classList.toggle('active');
        }
      };
})