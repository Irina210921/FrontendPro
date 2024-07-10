class Coach{

    constructor(name, specializ, rating ) {
        this.name = name;
        this.specializ = specializ;
        this.rating = rating;
    }
    displayInfo(){
        alert(this.name);
        alert(this.specializ);
        alert(this.rating);
    }
}
const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();

coach2.displayInfo();