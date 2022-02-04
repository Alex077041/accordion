
class NextAccordion {

  constructor(){
  
  this.accordion = document.querySelector('.accordion');
  this.title = document.querySelectorAll('.accordion__title');
  // console.log(this.accordion)
  
    }

// showAccordionElements(){
//   this.accordion.forEach((elem)=>(console.log(elem)))
// }

  
    toggleAccordion(){
      let thisItem = this.parentNode;
      let items = document.querySelectorAll('.accordion__item');
        
  
    items.forEach(item => {
  
        if(thisItem == item) {
  
         thisItem.classList.toggle('active');
          return
        }
         item.classList.remove('active');
      })
    } 
     
     
    // initToggleAccordion(){
    //   document.addEventListener('DOMContentLoaded')
    // }   
    
    showToggleAccordion(){
      this.title.forEach(el=>el.addEventListener('click', this.toggleAccordion))
    }
  
  }
  


let a = new NextAccordion()
document.addEventListener('DOMContentLoaded',a.showToggleAccordion())

