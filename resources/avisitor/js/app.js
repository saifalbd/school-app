import Splide from '@splidejs/splide';


document.addEventListener( 'DOMContentLoaded', function() {
  const fileBox = document.getElementById('fileBox');
  let input = fileBox.querySelector('input.file-input');
  let imageBox = fileBox.querySelector('.image-box');
  let fileNameTag = fileBox.querySelector('.file-name');
  input.addEventListener('change',(event)=>{
    const target = event.target;
    let files = target.files;
    if(files.length){
      let file = files[0];
      fileNameTag.textContent = file.name;
      let reader = new FileReader;
      reader.onload = function(){
        imageBox.style.display = 'block';
        imageBox.querySelector('img').src = reader.result;

      }
      reader.readAsDataURL(file)


    }else{
      fileNameTag.textContent = '';
      imageBox.style.display = 'none';
    }
  })
})


 document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
      type   : 'loop',
      autoplay:true
    } ).mount();
    splide.on( 'active', function () {
     
    } );



    const tabWrapper = document.getElementById('tabWrapper');
    const urls = tabWrapper.getElementsByTagName('ul');
    const tabMenus = urls[0].getElementsByTagName('li');
    const tabContents = urls[1].getElementsByTagName('li');

    Array.prototype.forEach.call(tabMenus,((li,index)=>{



      li.addEventListener('click',function(){
        Array.prototype.forEach.call(tabMenus,(menu,ii)=>{
          if(ii==index){
            menu.classList.add('active')
          }else{
            menu.classList.remove('active')
          }
        })

        Array.prototype.forEach.call(tabContents,(content,i)=>{
          if(i==index){
            content.classList.add('active')
            content.animate([
              // keyframes
              { transform: 'translateY(80%)' },
              { transform: 'translateY(0%)' }
            ], {
              // timing options
              duration: 1000,
           
            })
          }else{
            content.classList.remove('active')
          }
        })

      })
    }))



  } );

  