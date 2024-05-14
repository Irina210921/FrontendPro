let contacts = [
    {
        name: "Tom",
        tel: "805015835025",
        email: "Tom@gmail.com",
    },
    {
        name: "Anna",
        tel: "80675826958",
        email: "Anna@gmail.com",
    },
    {
        name: "Bob",
        tel: "80526585745",
        email: "Bob@gmail.com",
    }
]

let contact = contacts.find(contact => contact.name === "Tom");
console.log(contact)

let newContact = {
    name: "Dad",
    tel: "3568596",
    email: "Dad@gmail.com",
}
contacts.push(newContact);
console.log(contacts)