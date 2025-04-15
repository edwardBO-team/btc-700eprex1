var names = [
  'Jenny Wilson',
  'Annette Black',
  'Cameron Williamson',
  'Guy Hawkins',
  'Wade Warren',
  'Leslie Alexander',
  'Jerome Bell',
  'Darlene Robertson',
  'Conrad Horn',
  'Ahmet Öztürk',
  'Melanie Efthymiadis',
  'Isaac Granados',
  'Jörgen Björklund',
  'Hannah van Dongen',
  'Maria Leroy',
  'Rosella Nicolas',
  'Kang Jun Rui',
  'Archie Mitchell',
  'Bruno Maia',
  'Dario Moretti',
  'Olga Hrušková',
  'Ricardo Fuentes',
  'Paulina Grabowska',
]
var city = [
  'Argentina',
  'Brazil',
  'Canada',
  'Cyprus',
  'Germany',
  'Greece',
  'India',
  'Poland',
  'Germany',
  'Turkey',
  'Greece',
  'Peru',
  'Sweden',
  'Netherlands',
  'France',
  'New Zeland',
  'Singapore',
  'Australia',
  'Portugal',
  'Italy',
  'Czech Republic',
  'Spain',
  'Poland',
]
var cryptoCurrency = [
  'ETH/LTC',
  'EOS/ETH',
  'EOS/ETH',
  'BTC/ETH',
  'EOS/ETH',
  'EOS/ETH',
  'BTC/ETH',
  'ETH/LTC',
  'ETH/LTC',
  'EOS/ETH',
  'EOS/ETH',
  'BTC/ETH',
  'EOS/ETH',
  'EOS/ETH',
  'BTC/ETH',
  'ETH/LTC',
  'EOS/ETH',
  'EOS/ETH',
  'BTC/ETH',
  'EOS/ETH',
  'EOS/ETH',
  'BTC/ETH',
  'ETH/BTC',
]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

$(document).ready(function () {
  const totalEl = names.length
  const paintElTotal = 8
  for (var i = 0; i < paintElTotal; i++) {
    templatateRow(i)
  }
  let currEl = paintElTotal

  setInterval(function () {
    templatateRow(currEl)
    currEl++
    if (currEl >= totalEl) {
      currEl = 0
    }
    $('.table_row').last().remove()
  }, 3000)
})

function templatateRow(index) {
  let currencySymbol = $('.currency').text().split('')[0]
  if (!currencySymbol) {
    currencySymbol = '$'
  }
  let minute = new Date().getMinutes() - 1
  if (minute < 10) {
    minute = `0${minute}`
  }
  let sec = Math.floor(getRandomArbitrary(0, 60))
  if (sec < 10) {
    sec = `0${sec}`
  }
  let todayProfit = parseFloat(getRandomArbitrary(450, 2000)).toFixed(0)
  let tradeTime = new Date().getHours() + ':' + minute + ':' + sec
  // let status = Math.random() > 0.15 ? 'Completed' : 'In progress'
  // if (status == 'Completed') {
  //   statusImg = 'check'
  // } else {
  //   statusImg = 'info'
  // }

  if ($(document).width() <= 767) {
    table_row = $(' <div class="table_row"></div>')
    table_row.append(
      $(
        `<div class="column first-column"> <img src="images/live-result/avatar-${index}.jpg" alt="avatar" /><div><p>${names[index]}</p><p>${cryptoCurrency[index]}</p></div>
        </div>`
      )
    )
    table_row.append(
      $(`<div class="column center-column"><p class="profit">${city[index]}</p><p class="today">${tradeTime}</p></div>`)
    )
    table_row.append(
      $(
        `<div class="column last-column"><p class="cryptoCurrency">${currencySymbol} ${todayProfit}</p><p class="status">Completed</p></div>`
      )
    )
    $('.table_template').prepend(table_row)
    return table_row
  }
  table_row = $(' <div class="table_row"></div>')
  table_row.append(
    $(
      `<div class="column column-1"> <img src="images/live-result/avatar-${index}.jpg" alt="avatar" /><p>${names[index]}</p></div>`
    )
  )
  table_row.append($(`<p class="column column-2">${city[index]}</p>`))
  table_row.append($(`<p class="column column-3">${currencySymbol} ${todayProfit}</p>`))
  table_row.append($(`<p class="column column-4">${cryptoCurrency[index]}</p>`))
  table_row.append($(`<p class="column column-5">${tradeTime}</p>`))
  table_row.append($(`<div class="column column-6">	<img src="images/live-result/check.svg" alt="tiket" />	<p>Completed</p></div>`))

  $('.table_template').prepend(table_row)
  return table_row
}
