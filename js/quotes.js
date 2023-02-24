function loadQuotes() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data))
    .catch((error) => console.log(error));
}

//async
const loadQuotes2 = async () => {
  try {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    displayQuotes(data);
  } catch (error) {
    console.log(error);
  }
};

const displayQuotes = (quote) => {
  const blockQuote = document.getElementById("quote");
  blockQuote.innerText = quote.quote;
};

loadQuotes();
