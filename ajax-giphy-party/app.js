const searchForm = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const delButton = document.getElementById("delAll");
const gifArea = document.getElementById("gifArea");
const giphyAPIKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

class gifSearch {
    constructor(q, api_key) {
        this.q = q,
            this.api_key = api_key
    }
    async findGif() {
        const gifSearch = await axios.get("https://api.giphy.com/v1/gifs/search", { params: this })

        console.log(gifSearch);
        let result = gifSearch.data.data
        // console.log(result);
        return result
    }
    errorMsg(message) {
        const searchArea = document.getElementById('searchArea')
        const errorPop = document.createElement('article');
        const p = document.createElement('div');
        errorPop.classList.add('message', 'is-danger')
        errorPop.setAttribute('id', 'errorPop')
        p.classList.add('message-body', 'py-1')
        p.innerText = message
        errorPop.append(p)
        searchArea.append(errorPop)
    }
    async getRandomGif() {
        const errorPop = document.getElementById('errorPop')
        const result = await this.findGif();
        const totalResults = result.length
        const gifNumber = Math.floor(Math.random() * totalResults)
        // console.log(result[gifNumber])
        if (totalResults > 0) {
            if(errorPop){
                errorPop.remove()
            }
            return result[gifNumber].images.original.url
        } else {
            throw this.errorMsg("no results were found");
        }
    }
    async addNewGif() {
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

async function newSearch () {
    const searchTerm = searchBar.value;
        const newSearch = new gifSearch(searchTerm, giphyAPIKey)
        console.log("searching for ", searchTerm)
        searchBar.value = ''
        await newSearch.addNewGif()
}

delButton.addEventListener("click", function(event){
    event.preventDefault();
    while (gifArea.firstChild){
            gifArea.removeChild(gifArea.firstChild);
        }
})

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    newSearch();
})

// const bananaGif = new gifSearch("banana", giphyAPIKey)





