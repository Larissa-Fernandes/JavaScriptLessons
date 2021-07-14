// Objeto anime

const animes = require('./dataBase.js')
const readline = require ('readline-sync') //realine-sync recebe a entrada do usuário, é preciso declarar

if (readline.keyInYN('Do you want find a Anime by genre? ')){  //reconhece YN sem o enter
    // 'Y' selecionado    
    const genreFilter = readline.question ("Select a genre:\nComedy | Mecha | Shoujo | Shounen\n")

    const genre = animes.filter (animes => animes.genre === genreFilter)

    console.table (genre)
}else {
    console.table (animes)
}
