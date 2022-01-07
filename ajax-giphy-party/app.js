console.log("Let's get this party started!");

const searchForm = document.getElementById("id");
const giphyAPIKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

class gifSearch {
    constructor (q, api_key) {
        q,
        api_key
    }
    async findGif(searchParams) {
        const gifSearch = await axios.get("https://api.giphy.com/v1/gifs/search", {params : searchParams})
        const gifNumber = Math.floor(Math.random()*50)
        let result = gifSearch.data.data
        // console.log(result);
        return result
    }
    async getRandomGif (searchTerm) {
        const result = await findGif(this.newSearch(searchTerm, giphyAPIKey));
        gifNumber = Math.floor(Math.random()*50)
        // return result[gifNumber].embed_url
        console.log(result[gifNumber].embed_url)
    }
    addNewGif (searchResults) {
        const gifArea = document.getElementById("gifArea");
        const newGif = document.createElement("div");
        newGif.classList.add("column card")
        newGif.innerHTML = `<img class="image" src="searchResults"`
    }
}

// const newSearch = (q, api_key) => {
//     return params = {
//         q,
//         api_key
//     }
// }

new gifSearch ("banana", giphyAPIKey)





