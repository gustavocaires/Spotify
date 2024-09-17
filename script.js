document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg'},
        {name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
        {name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg'},
    ]
    
    const albumsData = [
        {name: 'White Noise (Sleep & Relaxation Sounds)', artists: 'Sleepy John', image: './img/album-white-noise.jpg'},
        {name: 'O Céu Explica Tudo (Ao Vivo)', artists: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
        {name: 'Nada Como um Dia Após o Outro', artists: 'Racionais', image: './img/album-vida-loka.jpg'},
        {name: 'HIT ME HARD AND SOFT', artists: 'Billie Eilish', image: './img/album-hit-me.jpg'},
        {name: 'CAJU', artists: 'Liniker', image: './img/album-caju.jpg'},
        {name: 'Escândalo Íntimo', artists: 'Luíza Sonza', image: './img/album-escandalo.jpg'},
    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    const artistCard = document.createElement('div')
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src= "${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src= "${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artists}</p>
            </div>
        `

        albumsGrid.appendChild(albumCard)
    })
})

