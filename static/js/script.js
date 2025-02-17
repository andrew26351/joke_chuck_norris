let btn = document.querySelector("#loadJokeButton")
let url = "https://api.chucknorris.io/jokes/random"
let jokeParagraph = document.querySelector("#joke")
let categorySelect = document.querySelector("#categorySelect")

btn.addEventListener("click", function (e) {
    e.preventDefault()

    let category = categorySelect.value 
    let fetchUrl = url

    if (category !== "none") {
        fetchUrl = url + "?category=" + encodeURIComponent(category)
    }
    

    fetch(fetchUrl)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            jokeParagraph.textContent = data.value
        })
        .catch(function (err) {
            console.error(err)
            jokeParagraph.textContent = "Errore nel caricamento della barzelletta."
        })
})
