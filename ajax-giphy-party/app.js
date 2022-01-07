console.log("Let's get this party started!");

const searchForm = document.getElementById("id");
const giphyAPIKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

const newSearch = (q, api_key) => {
    return params = {
        q,
        api_key
    }
}

async function findGif(searchParams) {
    const gifSearch = await axios.get("https://api.giphy.com/v1/gifs/search", {params : searchParams})
    const gifNumber = Math.floor(Math.random()*50)
    let result = gifSearch.data.data
    // console.log(result);
    return result
}

async function getRandomGif (searchTerm) {
    const result = await findGif(newSearch(searchTerm, giphyAPIKey));
    gifNumber = Math.floor(Math.random()*50)
    // return result[gifNumber].embed_url
    console.log(result[gifNumber].embed_url)
}

function addNewGif (searchResults) {
    const gifArea = document.getElementById("gifArea");
    const newGif = document.createElement("div");
    newGif.classList.add("column card")
    newGif.innerHTML = `<img class="image" src="searchResults"`
}