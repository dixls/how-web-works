const searchForm = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const giphyAPIKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

class gifSearch {
    constructor (q, api_key) {
            this.q = q,
            this.api_key = api_key
    }
    async findGif() {
        const gifSearch = await axios.get("https://api.giphy.com/v1/gifs/search", {params : this})
        const gifNumber = Math.floor(Math.random()*50)
        let result = gifSearch.data.data
        // console.log(result);
        return result
    }
    async getRandomGif () {
        const result = await this.findGif();
        const gifNumber = Math.floor(Math.random()*50)
        // console.log(result[gifNumber])
        return result[gifNumber].images.original.url
    }
    async addNewGif () {
        const gifArea = document.getElementById("gifArea");
        const newGifCardImage = document.createElement("div");
        const newGifCard = document.createElement("div");
        const newGif = document.createElement("div");
        const gifURL = await this.getRandomGif();
        newGif.classList.add("column", "is-3",)
        newGifCard.classList.add("card")
        newGifCardImage.classList.add("card-image")
        newGifCardImage.innerHTML = `<img class="image" src="${gifURL}">`
        newGifCard.append(newGifCardImage)
        newGif.append(newGifCard)
        gifArea.append(newGif)
        console.log(newGif)
    }
}

searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const searchTerm = searchBar.value;
    const newSearch = new gifSearch(searchTerm, giphyAPIKey)
    console.log("searching for ", searchTerm)
    await newSearch.addNewGif()
    searchTerm = ''
})

// const newSearch = (q, api_key) => {
//     return params = {
//         q,
//         api_key
//     }
// }

const bananaGif = new gifSearch("banana", giphyAPIKey)





