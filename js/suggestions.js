let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vehicles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let inputElem = document.querySelector("input");
let autoBoxElem = document.querySelector(".autocom-box");
let searchInputElem = document.querySelector(".search-input");


inputElem.addEventListener("keyup",function () {

    autoBoxElem.innerHTML = "";

    let inputValue = inputElem.value.toLowerCase()

    if(inputValue) {

        let findItems = suggestions.filter(function (item) {
            return item.toLowerCase().includes(inputValue)
        })
        searchInputElem.classList.add("active")

        if (findItems.length > 0) {

            findItems.forEach(function (values) {
                let liElem = document.createElement("li")
                liElem.textContent = values
                autoBoxElem.appendChild(liElem)
                liElem.addEventListener("click",function () {
                    inputElem.value = liElem.textContent
                    searchInputElem.classList.remove("active")
                })
            })

        } else {
            let liElem = document.createElement("li")
            liElem.textContent = inputValue
            autoBoxElem.appendChild(liElem)
             liElem.addEventListener("click",function (event) {
                inputValue = liElem.textContent
                 searchInputElem.classList.remove("active")
            })
        }

    }else {
        searchInputElem.classList.remove("active")
    }
    })

