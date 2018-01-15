// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
// Your code goes here!
let okot = $('#sizePicker');
console.log(okot);
let issubmited = false;
okot.submit(function(event){
  let pixel = $('#pixel_canvas');
  let pixelOrginal = $('#pixel_canvas').clone();
  let gridH = $('.height').val();
  let gridW = $('.width').val();
  if (pixel.children().length) {
		pixel.empty();
	}
  function grid(gridH, gridW){
    event.preventDefault();
      for (i=0; i<gridH; i++){
      issubmited = true;
        pixel.append('<tr></tr>');


      }
      for (j=0; j<gridW; j++){
        let pixelinner = $('#pixel_canvas tr');
        pixelinner.append('<td></td>');

      }

    }
  grid(gridH,gridW);

  $('#pixel_canvas').click(function(evt) {
  		let color = $('#colorPicker').val();
  		$(evt.target).css('background-color', color);
  	});

});
}
makeGrid();
