async function getData() {
    const response = await axios.get('https://swapi.dev/api/films')
    console.log(response);
    console.log("this line is after axios.get")
    for (let film of response.data.results) {
        console.info(film.title);
    }
}