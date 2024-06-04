const form = document.querySelector('form');
const inputFields = form.getElementsByClassName("form-control");
for (const item of inputFields) {
    item.addEventListener("blur", (event) => {
        validateForm(event);
    });
}
form.addEventListener("submit", (event)=>{

    const name = document.getElementById('name');
    const message = document.getElementById('message');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
        console.log(name.value);
        console.log(message.value);
        console.log(phone.value);
        console.log(email.value);
        event.preventDefault();
    }
)
const setError =(element, message)=>{
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = message;
    element.classList.add("invalid");
    element.classList.remove("valid");
}

const setValid = (element)=>{
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = "";
    element.classList.remove("invalid");
    element.classList.add("valid");
}
const validateName = (name)=> {
    const regex = /^[a-z0-9_*]{3,16}$/;

    if (name.value === "") {
        setError(name, "Заповніть поле ім'я!");
    } else if (!regex.test(name.value))
        setError(name, "Ім'я некоректне!");
 else {
    setValid(name);

}};

const validateMessage = (message)=> {
    const regex = /(\w{5})/;

    if (message.value === "") {
        setError(message, "Напишіть повідомлення");
    } else if (!regex.test(message.value))
        setError(message, "Текстове поле не меньше 5 символів");
    else {
        setValid(message);

    }};

const validatePhone = (phone) => {
    const regex = /^(\+3|)[0-9]{10,11}$/;

    if (phone.value === "") {
        setError(phone, "Введіть номер телефона");
    } else if (!regex.test(phone.value)) {
        setError(phone, "Номер некоректний");
    } else {
        setValid(phone);
    }
};
const validateEmail = (email) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (email.value === "") {
        setError(email, "Введіть електрону пошту");
    } else if (!regex.test(email.value)) {
        setError(email, "Електроний адрес некоректний");
    } else {
        setValid(email);
    }
};

const validateForm = (event) => {
    switch (event.target.id) {
        case "name":
            validateName(event.target);
            break;
        case "message":
            validateMessage(event.target);
            break;
        case "phone":
            validatePhone(event.target);
            break;
        case "email":
            validateEmail(event.target);
            break;
        default:
            alert("Validation error!");
    }
};

