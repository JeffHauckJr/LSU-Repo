const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {
    cardElement = (`<div class="card">
    <h3>${card.text}</h3>
    <h4>${card.text}</h4>
    <h5 class="set-name">${card.name}</h5>
    <pre>${card.text}</pre>
    <img src="${card.imageUrl}">
    </div>`)

    cardElement
    .find('.set-name')
    .data('setName', card.set)

    return cardElement
}

function renderCardList(cardList) {
    let results = $('#results')
    results.empty()
    cardList.forEach((card) => {
        let cardElement = renderCard(card)
        $('#results').append(renderCard(card))
    })
}

function fetchCardList(url) {
    $('.searching').addClass('active')
    fetch(url)
    .then(function (response) {
        return response.json()
    }).then((data) => {
        $('.searching').removeClass('active')
        renderCardList(data.cards)
        console.log(data.cards)
    }).catch(() => {
        console.log('Error')
    })
}



$('#card-search').on('submit', function (event) {
  event.preventDefault()
  $('#card-search').empty()
  let cardName = $('#cname').val()
  let cardText = $('#ctext').val()
 
  
  fetchCardList(`${ CARD_URL }${ 
    cardName ? `&name=${ cardName }` : ''
  }${
    cardText ? `&text=${ cardText}&` : ''
  }`);
});

$('#results').on('click', '.card .set-name', function () {
    const setName = $(this).data('setName');
    fetchCardList(`${ CARD_URL }&set=${ setName }`);
});

