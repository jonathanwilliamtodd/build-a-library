class Media {

    constructor(title){
        this._title = title;
        this.isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckedOut (value){
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus(){
        this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating(){
        let ratingsSum =
        this.ratings.reduce((accumulator, rating) =>
        accumulator + rating);
        return ratingsSum / this.ratings.length;
    }

    addRating(value) {
        this.ratings.push(value);
    }
}

class book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title , runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;

    }

    get director() {
        return this._director;
    }
    get runTime () {
        return this._runTime;
    }
}

const historyofEverything = new book ('Bill Bryson',' A Short History of Nearly Everything', 544);
historyofEverything.toggleCheckOutStatus();
console.log(historyofEverything.isCheckedOut);
historyofEverything.addRating(4);
historyofEverything.addRating(5);
historyofEverything.addRating(5);
console.log(historyofEverything.getAverageRating());

const speed = new Movie ('Jan de Bont','speed',
116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());