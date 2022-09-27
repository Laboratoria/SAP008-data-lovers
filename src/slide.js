function slide() {
    let titleHome = document.getElementById('titleHome')
    let description = document.getElementById('description')
    let slide = document.getElementsByName('slides')
    let link = document.getElementById('link')
    let image = document.getElementById('image')



    if (slide[0].checked) {
        //document.body.style.background='url(./imagens/chirriro1.jpg)'
        image.setAttribute('src', './img/chihiro.jpg')
        titleHome.innerHTML = "Spirited away"
        description.innerHTML = "Is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?"
        link.setAttribute('href', 'https://www.youtube.com/watch?v=SgZI655GgHk')
    }

    else if (slide[1].checked) {
        image.setAttribute('src', './img/princesa-mononoke.jpg')
        titleHome.innerHTML = "Princess Mononoke"
        description.innerHTML = "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict."
        link.setAttribute('href', 'https://www.youtube.com/watch?v=4OiMOHRDs14')
    }

    else if (slide[2].checked) {
        image.setAttribute('src', './img/kikis.jpg')
        titleHome.innerHTML = "Kiki's Delivery"
        description.innerHTML = "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service."
        link.setAttribute('href', 'https://www.youtube.com/watch?v=4bG17OYs-GA')
    }

}