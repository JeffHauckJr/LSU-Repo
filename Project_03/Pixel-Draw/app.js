
function makePalette() {
    const PALETTE = [
      "red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "black"
    ];
  
    const paletteElement = $('.palette');
  
    for (let i = 0; i < PALETTE.length; i = i + 1) {
      let button = $('<button>');
      button.css('background-color', PALETTE[i]);
      paletteElement.append(button);

      $('.palette button').first().addClass('active');
    }

  }
  
makePalette();
  
  function makeGrid() {
    const gridElement = $('.grid');
    
    for (let i = 0; i < 64; i = i + 1) {
      let cell = $('<div class="cell"></div>');
      gridElement.append(cell);
    }
  }
makeGrid()

  function onPaletteClick() {
      $('.palette .active').removeClass('active')
      $(this).addClass('active')
  }
  $('.palette button').click(onPaletteClick);

  function onGridClick() {
    let activeColor = $('.palette .active').css("background-color")
    let gridColor = $(this).css('backgroundColor', activeColor)
    $(this).css("background-color", activeColor)

      if (gridColor === activeColor) {
        $(this).css('backgroundColor', '')
      } else {
        $(this).css('backgroundColor', activeColor)
      }
  }
$('.grid .cell').click(onGridClick)

function onClearClick() {
  $('.grid .cell').css('backgroundColor', "")
}
$('.controls .clear').click(onClearClick)

  function onFillAllClick() {
    let activeColor = $('.active').css('backgroundColor')
    $('.cell').css('backgroundColor', activeColor)
}
$('.controls .fill-all').click(onFillAllClick)

  function onFillEmptyClick() {
    const element = $('.cell')
    let activeColor = $('.active').css('backgroundColor')
    for (let index = 0; index < element.length; index = index + 1) {
      let nextElement = $(element[index]);

      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
        nextElement.css('backgroundColor', activeColor)
  }
 }
}
$('.controls .fill-empty').click(onFillEmptyClick)