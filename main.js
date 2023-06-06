let string = "";
let buttons = document.querySelectorAll('.button');
let button = document.querySelectorAll('.button_0');

Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '=')
      {
        string = eval(string);
        document.querySelector('input').value = string;
      } 
      
      else if(e.target.innerHTML == 'C')
      {
        string = " ";
        document.querySelector('input').value = string;
      }

      else if(e.target.innerHTML == 'M-')
      {
        string = string.slice(0, -1)
        document.querySelector('input').value = string;
      }


      else
      {
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }

    })
})