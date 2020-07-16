window.onload = function(){
	randomQuoteStart()
}

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = `${random.quote}`;
  source.innerText = random.source;
  document.getElementById("quotebox").focus();
  setTimeout(() => { document.activeElement.blur(); }, 300);
}

function randomQuoteStart() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = `${random.quote}`;
  source.innerText = random.source;
}

const quotes = [
  { 
    "quote" : "Смысл жизни не так уж и нужен... Просто берёшь и живёшь» (Автор цитаты Неро Ванетти)", 
    "source" : "Цитата из аниме: 91 день" 
  },
  {
    "quote" : "Чем быстрее ты бежишь, тем больше вероятность споткнуться и упасть» (Автор цитаты Неро Ванетти)", 
    "source" : "Цитата из аниме: 91 день"
  },
  {
    "quote" : "Чрезмерная осторожность становится трусостью» (Автор цитаты Авилио Бруно)", 
    "source" : "Цитата из аниме: 91 день"
  },
  {
    "quote" : "«Человек живет только ради того, чтобы править, и дружба сейчас куда более надежное оружие, чем нож» (Автор цитаты Авилио Бруно)", 
    "source" : "Цитата из аниме: 91 день"
  },
];
