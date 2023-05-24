

function get() {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes")
  .then(response => response.json())
  .then(data => {
    
    const author = document.querySelector('#author') ;
    const quote = document.querySelector('#quote') ;
    author.innerHTML = data[0].author ;
    quote.innerHTML = data[0].quote ;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

get()

const otherQuote = document.querySelector("#newQuote")
otherQuote.addEventListener("click" ,()=>{get()} )

