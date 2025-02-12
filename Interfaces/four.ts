// interface hello{
//     name : string;
//     age : number;
//     sayHello() : void
// }

// const person : hello = {
//     name : "John",
//     age : 30,
//     sayHello() : void {
//         console.log("Hello " + this.name + " you are " + this.age + " years old");
//     }
// }

// console.log(person.name);
// person.sayHello();

// interface song{
//     name : string;
//     artist : string;
//     duration : number;
//     play(name : string, artist : string) : string;
// }

// const song1 : song = {
//     name : "Song 1",
//     artist : "Artist 1",
//     duration : 200,
//     play(name,artist) : string {
//         return `Playing ${name} by ${artist}`;
//     }
// }

// console.log(song1.play("downer at dusk","talha anjum"));






// interface Movies {
//     movieName: string;
//     movieDuration: number;
//     movieRating: number;
//     play(name: string, duration: number): string;
// }

// // Define an object that follows the interface structure
// const movie1: Movies = {
//     movieName: "Dell",
//     movieDuration: 100,
//     movieRating: 5,
//     play(name: string, duration: number): string {
//         return `Playing ${name} for ${duration} minutes`;
//     }
// };

// console.log(movie1.play(movie1.movieName, movie1.movieDuration));
// Output: Playing Dell for 100 minutes




interface Movies {
    readonly movieName: string;
    movieDuration: number;
    movieRating: number;
    play(name: string, duration: number): string;
}

interface NewMovies extends Movies {
    genra : string;
}

const movie1 : NewMovies = {
    movieName: "Dell",
    movieDuration: 100,
    movieRating: 5,
    genra : "Action",
    play(name: string, duration: number): string {
        return `Playing ${name} for ${duration} minutes`;
    }
};

console.log(movie1.play(movie1.movieName, movie1.movieDuration));
console.log(movie1.genra);

