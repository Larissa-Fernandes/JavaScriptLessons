// Objeto anime

class Anime {
    constructor(id, name, studio, category, episodes, recomended, finished) {
        this.id = id
        this.name = name
        this.studio = studio
        this.category = category
        this.episodes = episodes
        this.recomended = recomended
        this.finished = finished
    }
}

const aoHaruRide = new Anime (1, "Ao Haru Ride", "Production I.G", "Shoujo", 12, true, true)
const ouran = new Anime (2, "Ouran Koukou Host Club", "Bones", "Shoujo", 26, true, true)
const kokkuri = new Anime (3, "Gugure! Kokkuri-san", "TMS Entertainment", "Comedy", 12, true, true)
const shingeki = new Anime (4, "Shingeki no Kyojin", "Production I.G", "Shounen", 75, true, false)