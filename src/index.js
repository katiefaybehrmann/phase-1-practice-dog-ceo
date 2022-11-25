console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const listItems = document.getElementsByTagName("li")



document.addEventListener("DOMContentLoaded", () => {
    const dropDown = document.getElementById("breed-dropdown")

    fetch(imgUrl)
        .then(response => response.json())
        .then(json => {
            renderDogs(json)
        })

    function renderDogs(dogs) {
        const dogList = document.querySelector('#dog-image-container');
        const urls = dogs.message
        urls.forEach(i => {
            const pic = document.createElement('img');
            pic.setAttribute("src", i)
            pic.setAttribute("width", "250")
            pic.setAttribute("height", "250")
            dogList.appendChild(pic);
        });
    }
    fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            renderBreeds(json)
        })



    function renderBreeds(breeds) {
        const breedList = document.querySelector("#dog-breeds")
        const breedArray = breeds["message"]
        const dogBreeds = Object.keys(breedArray)
        for (let x in dogBreeds) {
            const li = document.createElement('li')
            li.textContent = dogBreeds[x]
            breedList.appendChild(li)
            li.addEventListener("click", (e) => {
                let red = Math.random() * 255
                let green = Math.random() * 255
                let blue = Math.random() * 255
                let randomColor = "rgb(" + red + "," + green + "," + blue + ")"
                e.target.style.color = randomColor
            })

        }
        dropDown.addEventListener('change', function (e) {
            breedList.innerHTML = '';
            for (let x in dogBreeds) {
                if (dogBreeds[x].startsWith(e.target.value)) {
                    
                    const dropdownLi = document.createElement('li')
                    dropdownLi.textContent = dogBreeds[x]
                    breedList.appendChild(dropdownLi)
                }


            }
        })
    }

})
