const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://quotes-api-self.vercel.app/quote";


const getquote = async(url) => {
  try{
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  }
  catch(e){
    quote.innerHTML = `error in fetching the data `;
  }

}

getquote(api_url);
