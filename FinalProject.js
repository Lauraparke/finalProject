$('#submit').click(function(event){
    event.preventDefault();
    var displayNameVal = $('#displayName').val();
    var commentVal = $('#comment').val();
    let output;
    if(displayNameVal === $('#displayName').val() || commentVal ===  $('#comment').val()){
        $('#output').append(`
        <div class="comments">
        <div class="image">
        </div>
        <div id="output3">
          <div class="displayNone">
          <div id="nav2">   
            <input type="text" id="comment2" placeholder="comment"></input>
            <input type="submit" class="submit"></input>
          </div>        
          </div>
            <p class="one">${displayNameVal}</p> 
            <p class="two">${commentVal}</p>
          <div id="output2">
          <button id="editMe"><span style="font-family:Arial">edit</span></button>
        <button id="deleteMe"><span style="font-family:Arial">delete</span></button>
        </div>
        </div>
        </div>
        `);
    }
   
    
  });  
  $('#output').on('click', '#editMe', function(event) {
     event.preventDefault();
     let editMe = $(this);
     let output2 =$(editMe).parent();
     let output3 = $(output2).parent();
     let output3Children = $(output3).children()[0];
           
      
          $(output3Children).toggleClass("displayNone");
  });
  
  $('#output').on('click', '.submit', function(event){
    event.preventDefault();
    let comment2 = $(this).prev().val();
console.log("made it");
    let submit = $(this);
    let nav2 = $(submit).parent();
    let displayNone = $(nav2).parent();
    let output3 = $(displayNone).parent();    
    let output3Children = $(output3).children()[2];
    $(output3Children).text(comment2);


  });

   $('#output').on('click', '#deleteMe', function(event) {
    event.preventDefault();
    let deleteMe = $(this);
    let output2 =$(deleteMe).parent();
    let output3 = $(output2).parent();
    let comments = $(output3).parent();


    $(comments).remove();  
   
     
});

