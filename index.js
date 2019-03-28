

function AddEntry() {
    $('#js-shopping-list-form').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      const entry = $('#shopping-list-entry').val();
      
      // $(event.currentTarget).find('#number-choice');
      // $('input:number').val();
      console.log(entry);
      $('.shopping-list').append(
        "<li><span class='shopping-item'>"+entry+"</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>"
        )
        $('.shopping-item-toggle').on( "click", function() {
          
          $(this).parent("div").prev().toggleClass('shopping-item__checked');
          
           });
      
      $('.shopping-item-delete').on( "click", function() {
        console.log( "click" );  
        $(this).parent().parent().remove();
            
             }); 


      })
  
  }

function CheckEntry()  { 
    // $('.shopping-item-toggle').submit(event => {
    //   console.log('got here');
    //   // event.preventDefault();
      
    //   $(this).addClass('.shopping-item__checked');
    
    $('.shopping-item-toggle').on( "click", function() {
      
      $(this).parent("div").prev().toggleClass('shopping-item__checked');
      
       }); 
      }

function DeleteEntry(){

  $('.shopping-item-delete').on( "click", function() {
    console.log( "click" );  
    $(this).parent().parent().remove();
    
     }); 
    }




        
//     })
  
// }




CheckEntry();
AddEntry();
DeleteEntry();
