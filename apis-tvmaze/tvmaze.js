/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  const newSearch = await axios.get("http://api.tvmaze.com/search/shows", {params: {q: query}})
  console.log(newSearch)
  if(newSearch.data.length > 0){
    return newSearch.data.map( show => show.show)
  } else {
    throw new Error("not found")  //throw error if no match found
    // TODO: change this to a user visible error message
  }
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();
  for (let show of shows) { // check if show entry has an image
    let img = ''
    if (!show.image){
    } else { // if yes, add this line to add show image
      img = `<img src=${show.image['original']} class="card-img-top" alt="${show.name}"></img>`
    }
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
          <div class="card m-1" data-show-id="${show.id}">
          ${img}
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">${show.summary}</p>
              <button class="btn btn-primary epBtn" type="button" id="${show.id}">Episodes</button>
            </div>
          </div>
        </div>
      `);
    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});

// event handler for episode button click
$("#shows-list").on("click", ".epBtn", async function (event) {
  event.preventDefault()
  console.log(getEpisodes(this.id))
})


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  const epList = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`)
  const cleanEpList = epList.data.map( ep => ({
    id: ep.id,
    name: ep.name,
    season: ep.season,
    number: ep.number
  }))
  console.log(cleanEpList)
  return cleanEpList

  // TODO: return array-of-episode-info, as described in docstring above
}
