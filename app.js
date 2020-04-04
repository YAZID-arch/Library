class Media {
  constructor(title){
    this._title = "";
    this._isCheckedOut = false;
    this._ratings = [];
  };
  get title (){
    return this._title
  };
  get isCheckedOut(){
    return this._isCheckedOut
  };
  set isCheckedOut(trueOrNot){
    if(typeof trueOrNot ==='boolean') {
       return this._isCheckedOut
    } else {
      console.log("You must choose true or false")
    }
   
  }
  get ratings(){
    return this._ratings
  };
  toggleCheckOutStatus(){
     this._isCheckedOut = !this._isCheckedOut
  };
  getAverageRating(){
  return this._ratings
  let result = this._ratings.reduce((currentSum,rating) => currentSum + rating,0);
  return result /= this._ratings.length
  };
  addRating(rate){
    if(rate > 0 && rate < 6 ){
      this._ratings.push(rate)
      }else {
      console.log('Rate must be between 0 and 5')
      }  
  };
};
// The child class : Book
class Book extends Media {
  constructor(title,author,pages){
    super(title);
    this._author = "";
    this._pages = 2;
  }
  get author (){
    return this._author
  }
  get pages(){
    return this._pages
  }
}; // last one  of Books
// The child class Movie
class Movie extends Media{
  constructor(title,director,runTime){
    super(title);
    this._director = "";
    this._runtime = 20;
  }
  get runtime (){
    return this._runtime
  }
};// last One of Movie
// book instance
const historyOfEverything = new Book ("Bill Bryson", "A Short History of Nearly Everything",544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())
// movie instance
const speed = new Movie("Speed","Jan de Bont",116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());