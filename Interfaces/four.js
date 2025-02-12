// interface hello{
//     name : string;
//     age : number;
//     sayHello() : void
// }
var movie1 = {
    movieName: "Dell",
    movieDuration: 100,
    movieRating: 5,
    genra: "Action",
    play: function (name, duration) {
        return "Playing ".concat(name, " for ").concat(duration, " minutes");
    }
};
console.log(movie1.play(movie1.movieName, movie1.movieDuration));
console.log(movie1.genra);
