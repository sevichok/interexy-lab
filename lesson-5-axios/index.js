import axios from 'axios';

const characterUrl = 'https://rickandmortyapi.com/api/character'

const getCharacters = (url) => {
    axios.get(url)
        .then(response => {
            const length = response.data.info.pages
            const array = []
            for (let elem = 0; elem < length; elem++) {
                if (elem % 2 == 0) {
                    array.push(axios.get(url + `/?page=${elem}`))
                }
            }
            return Promise.all(array)
        }
        ).then(response => {
            const results = response.map(elem => elem.data.results)
            return results
        })

}
getCharacters(characterUrl)