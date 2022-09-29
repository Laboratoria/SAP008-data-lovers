function slide() {
    var titleHome = document.getElementById('titleHome')
    var description = document.getElementById('description')
    var slide = document.getElementsByName('slides')
    var link = document.getElementById('link')
    var image = document.getElementById('image')



    if (slide[0].checked) {
        document.body.style.background = ' linear-gradient(275deg, #003A6F 4.45%, #007BA5 27.47%, #1E7A75 63.85%, #5CAF69 101.72%)'
        image.setAttribute('src', './imagens/chirriro.jpg')
        titleHome.innerHTML = "Spirited away"
        description.innerHTML = "Is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?"
        link.setAttribute('href', 'https://www.youtube.com/watch?v=SgZI655GgHk')
    }

    else if (slide[1].checked) {
        document.body.style.background = 'linear-gradient(275deg, rgba(173, 1, 0, 0.84) 14.49%, rgba(0, 7, 181, 0.62) 96.28%)'
        image.setAttribute('src', './imagens/monoke.jpg')
        titleHome.innerHTML = "Princess Mononoke"
        description.innerHTML = "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict."
        link.setAttribute('href', 'https://www.youtube.com/watch?v=4OiMOHRDs14')
    }

    else if (slide[2].checked) {
        document.body.style.background = 'linear-gradient(275deg, #008961 21.18%, rgba(0, 66, 140, 0.68) 57.34%, rgba(140, 7, 0, 0.6) 114.66%)'
        image.setAttribute('src', './imagens/kiki.jpg')
        titleHome.innerHTML = "Kiki's Delivery"
        description.innerHTML = "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
        link.setAttribute('href', 'https://www.youtube.com/watch?v=4bG17OYs-GA')
    }

}