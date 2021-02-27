for (let index = 0; index < 10; index = index + 1) {
   let newImage = $('<img src="http://placeimg.com/640/480/nature" alt=""></img>' + index)
   $('body').prepend(newImage)
  }

