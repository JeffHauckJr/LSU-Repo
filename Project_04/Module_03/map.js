function onMapClick(event) {
    const appElement = $(this);
    const target = $(event.target);
    const userPressedShiftKey = event.shiftKey;
    console.log(appElement, target, userPressedShiftKey)
    const isPin = target.hasClass('pin')

    if (userPressedShiftKey && isPin) {
        target.remove()
    } else if (! isPin) {
        const pinX = event.offsetX;
        const pinY = event.offsetY;
        $('.app').append('<div class ="pin"></div>')
        $('.pin').css("top", pinY).css("left", pinX)
    }
}
$('.app').click(onMapClick)