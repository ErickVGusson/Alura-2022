var listaFilmes = [
    "https://br.web.img3.acsta.net/c_310_420/pictures/21/12/15/16/51/3899884.jpg", "https://br.web.img2.acsta.net/c_310_420/pictures/22/03/02/19/26/3666027.jpg", "https://ingresso-a.akamaihd.net/img/cinema/cartaz/21550-cartaz.jpg", "http://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/7739/filme_7739.jpg"
]
for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}