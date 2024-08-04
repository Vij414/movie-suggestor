document.addEventListener("DOMContentLoaded", () => {

  const movies = [
    {
      title: "Piper",
      type: "short film",
      mood: "happy",
      time: "1hr",
      image: "images/thepiper.jpg",
    },
    {
      title: "Daredevil",
      type: "series",
      mood: "happy",
      time: "more3hr",
      image: "images/daredevil.jpeg",
    },
    {
      title: "furiosia",
      type: "short film",
      mood: "sad",
      time: "1hr",
      image: "https://path_to_image.com/bao.jpg",
    },
    {
      title: "The Present",
      type: "short film",
      mood: "low",
      time: "1hr",
      image: "https://path_to_image.com/the_present.jpg",
    },
    {
      title: "Inception",
      type: "movie",
      mood: "happy",
      time: "2-3hr",
      image: "images/inception.jpg",
    },
    {
      title: "The Pursuit of Happyness",
      type: "movie",
      mood: "sad",
      time: "2-3hr",
      image: "images/pursuitofhappines.jpg",
    },
    {
      title: "Rocky",
      type: "movie",
      mood: "low",
      time: "2-3hr",
      image: "images/rocky.jpg",
    },
    {
      title: "The Notebook",
      type: "movie",
      mood: "romantic",
      time: "2-3hr",
      image: "images/thenotebook.jpeg",
    },
    {
      title: "Stranger Things",
      type: "series",
      mood: "happy",
      time: "more3hr",
      image: "images/strangerthings.jpeg",
    },
    {
      title: "Friends",
      type: "series",
      mood: "sad",
      time: "more3hr",
      image: "images/friends.jpg",
    },
    {
      title: "Breaking Bad",
      type: "series",
      mood: "low",
      time: "more3hr",
      image: "images/breakingbad.jpeg",
    },
    {
      title: "whiplash",
      type: "short film",
      mood: "romantic",
      time: "1hr",
      image: "images/whiplash.jpeg",
    },
    {
      title: "battleship",
      type: "movie",
      mood: "low",
      time: "2-3hr",
      image: "images/battleship.jpg",
    },
    {
      title: "Social Network",
      type: "series",
      mood: "sad",
      time: "more3hr",
      image: "images/outlander.jpeg",
    },
    {
      title: "Source code",
      type: "movie",
      mood: "low",
      time: "2-3hr",
      image: "images/sourcecode.jpeg",
    },
    {
      title: "wolf of wall",
      type: "movie",
      mood: "low",
      time: "2-3hr",
      image: "images/outlander.jpeg",
    },
    {
      title: "The Raid",
      type: "movie",
      mood: "happy",
      time: "2-3hr",
      image: "images/theraid.jpeg",
    },
  ];

 
  let selectedMood = null;
  let selectedTime = null;


  const emojiOptions = document.querySelectorAll(".emoji");

  const timeOptions = document.querySelectorAll(".time-options button");

  const overlay = document.getElementById("permission-overlay");

  emojiOptions.forEach((emoji) => {
    emoji.addEventListener("click", (e) => {
 
      selectedMood = e.target.dataset.mood;
 
      if (selectedTime) showRecommendations();
    });
  });


  timeOptions.forEach((button) => {
    button.addEventListener("click", (e) => {
    
      selectedTime = e.target.dataset.time;
  
      if (selectedMood) showRecommendations();
    });
  });


  function showRecommendations() {

    overlay.style.display = "none";

    const shortFilmsContainer = document.getElementById(
      "short-films-container"
    );
    const moviesContainer = document.getElementById("movies-container");
    const seriesContainer = document.getElementById("series-container");

    shortFilmsContainer.innerHTML = "";
    moviesContainer.innerHTML = "";
    seriesContainer.innerHTML = "";


    movies.forEach((movie) => {
   
      if (movie.mood === selectedMood && movie.time === selectedTime) {

        const movieHTML = `
          <div class="movie-item">
              <img src="${movie.image}" alt="${movie.title}">
              <p>${movie.title}</p>
          </div>`;

        if (movie.type === "short film") {
          shortFilmsContainer.innerHTML += movieHTML;
        } else if (movie.type === "movie") {
          moviesContainer.innerHTML += movieHTML;
        } else if (movie.type === "series") {
          seriesContainer.innerHTML += movieHTML;
        }
      }
    });
  }
});
