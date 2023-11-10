const elTableBody = document.querySelector(".table__body")
const elTemplete = document.querySelector(".template").content
const elForm = document.querySelector(".form")
const elFormSelect = elForm.querySelector(".form__select")
const elFormInput = elForm.querySelector(".form__input")

// let renderArr = JSON.parse(window.localStorage.getItem("todos")) ||

elForm.addEventListener("submit", e => {
    e.preventDefault()

    let inputValue = elFormInput.value.trim()
    let filterByName = users.filter(item => item.first_name == inputValue)

    renderArr(filterByName, elTableBody)
})

elFormSelect.addEventListener("change", e => {
    let inputValue = e.target.value
    let filtragetByCountriy = inputValue == "ALL" ? users : users.filter(element => element.countiry == inputValue)
    
    renderArr(filtragetByCountriy, elTableBody)
})


function uniqueSelectDate(arr, List) {
    let resalt = []
    arr.map(item => {
        if (!resalt.includes(item.countiry)) {
            resalt.push(item.countiry)
        }
    })

    resalt.map(countr => {
        let newOption = document.createElement("option")
        newOption.textContent = countr
        newOption.value = countr

        List.appendChild(newOption)
    })

}

uniqueSelectDate(users, elFormSelect)



function renderArr(arr, List) {
    List.innerHTML = null
    arr.map(item => {

        let cloneTemplate = elTemplete.cloneNode(true)
        let fristName = cloneTemplate.querySelector(".first__name")
        let lastName = cloneTemplate.querySelector(".last__name")
        let companyName = cloneTemplate.querySelector(".comName")
        let countriy = cloneTemplate.querySelector(".countriy")

        fristName.textContent = item.first_name
        lastName.textContent = item.last_name
        companyName.textContent = item.companyName
        countriy.textContent = item.countiry
        List.appendChild(cloneTemplate)
        // window.localStorage.setItem("todos", JSON.stringify(todos))
    })
}

renderArr(users, elTableBody)

