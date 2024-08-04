document.addEventListener("DOMContentLoaded", () => {
  // Define a list of movies with their titles, types, moods, time durations, and images
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

  // Initialize variables to store the user's selected mood and time
  let selectedMood = null;
  let selectedTime = null;

  // Select all emoji elements
  const emojiOptions = document.querySelectorAll(".emoji");
  // Select all time option buttons
  const timeOptions = document.querySelectorAll(".time-options button");
  // Select the overlay element
  const overlay = document.getElementById("permission-overlay");

  // Add click event listeners to each emoji
  emojiOptions.forEach((emoji) => {
    emoji.addEventListener("click", (e) => {
      // Set the selected mood to the data-mood attribute of the clicked emoji
      selectedMood = e.target.dataset.mood;
      // If the user has already selected a time, show recommendations
      if (selectedTime) showRecommendations();
    });
  });

  // Add click event listeners to each time option button
  timeOptions.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Set the selected time to the data-time attribute of the clicked button
      selectedTime = e.target.dataset.time;
      // If the user has already selected a mood, show recommendations
      if (selectedMood) showRecommendations();
    });
  });

  // Function to show movie recommendations
  function showRecommendations() {
    // Hide the overlay
    overlay.style.display = "none";

    // Select containers for short films, movies, and series
    const shortFilmsContainer = document.getElementById(
      "short-films-container"
    );
    const moviesContainer = document.getElementById("movies-container");
    const seriesContainer = document.getElementById("series-container");

    // Clear previous recommendations
    shortFilmsContainer.innerHTML = "";
    moviesContainer.innerHTML = "";
    seriesContainer.innerHTML = "";

    // Loop through each movie in the list
    // Loop through each movie in the list
    movies.forEach((movie) => {
      // Check if the movie's mood and time match the user's selections
      if (movie.mood === selectedMood && movie.time === selectedTime) {
        // Create the HTML for a movie item
        const movieHTML = `
          <div class="movie-item">
              <img src="${movie.image}" alt="${movie.title}">
              <p>${movie.title}</p>
          </div>`;

        // Add the movie to the appropriate container based on its type
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
