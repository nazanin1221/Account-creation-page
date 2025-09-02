const ArrayForm = [];

const Form = document.querySelector("#Form");
Form.addEventListener("submit", function (e) {
    e.preventDefault()
    const formm = ["#UserName", "#LastName", "#PhoneNumber", "#Age"];


    for (const child of formm) {
        const item = document.querySelector(child)
        ArrayForm.push(item.value);

    }

    console.log(ArrayForm)

})

