console.log("Let's get this party started!");

const searchForm = document.getElementById("id");
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
        const newGif = document.createElement("div");
        const gifURL = await this.getRandomGif();
        newGif.classList.add("column", "is-3", "card")
        newGif.innerHTML = `<img class="image" src="${gifURL}">`
        gifArea.append(newGif)
        console.log(newGif)
    }
}

// const newSearch = (q, api_key) => {
//     return params = {
//         q,
//         api_key
//     }
// }

const bananaGif = new gifSearch("banana", giphyAPIKey)





