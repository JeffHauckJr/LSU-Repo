$('.one button').click(function () {
    $('.one span').text("Good Job!")
  });
$('.two button').click(function () {
    $('.two').slideUp();
  });

$('.three button').click(function () {
    let threeDiv = $('.three')
    threeDiv.append('<div>Some Text</div>')
})
$('.four button').click(function () {
    $('.template-target').html(`<h3>Hello, World</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos delectus, quod enim error molestias officia consequuntur modi atque facere quia. Dolores, alias? Tenetur corrupti voluptatem commodi placeat facilis nulla.</p>`)
})
$('.five button').click(function () {
    $('.five').clone().prependTo('.prepend-target')
})
$('.six button').click(function () {
    $('.six').css( "transform", "rotate(180deg)")
})
$('.seven button').click(function () {
    let newButton = $('<button>Click to Disapear</button>')
    $('.seven').append(newButton)
    newButton.css("padding", "10px").css("margin", "10px")
    newButton.click(function () {
        let clickedElement = $(this)
        clickedElement.fadeOut()
    })
})