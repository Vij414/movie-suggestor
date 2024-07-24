document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        { title: "Piper", type: "short film", mood: "happy", time: "1hr" },
        { title: "Paperman", type: "short film", mood: "romantic", time: "1hr" },
        { title: "Bao", type: "short film", mood: "sad", time: "1hr" },
        { title: "The Present", type: "short film", mood: "low", time: "1hr" },
        
        { title: "Inception", type: "movie", mood: "happy", time: "2-3hr" },
        { title: "The Pursuit of Happyness", type: "movie", mood: "sad", time: "2-3hr" },
        { title: "Rocky", type: "movie", mood: "low", time: "2-3hr" },
        { title: "The Notebook", type: "movie", mood: "romantic", time: "2-3hr" },
        
        { title: "Stranger Things", type: "series", mood: "happy", time: "more3hr" },
        { title: "Friends", type: "series", mood: "sad", time: "more3hr" },
        { title: "Breaking Bad", type: "series", mood: "low", time: "more3hr" },
        { title: "Outlander", type: "series", mood: "romantic", time: "more3hr" }
    ];

    let selectedMood = null;
    let selectedTime = null;

    const emojiOptions = document.querySelectorAll(".emoji");
    const timeOptions = document.querySelectorAll(".time-options button");
    const overlay = document.getElementById("permission-overlay");

    emojiOptions.forEach(emoji => {
        emoji.addEventListener("click", (e) => {
            selectedMood = e.target.dataset.mood;
            if (selectedTime) showRecommendations();
        });
    });

    timeOptions.forEach(button => {
        button.addEventListener("click", (e) => {
            selectedTime = e.target.dataset.time;
            if (selectedMood) showRecommendations();
        });
    });

    function showRecommendations() {
        overlay.style.display = "none";

        const shortFilmsContainer = document.getElementById("short-films-container");
        const moviesContainer = document.getElementById("movies-container");
        const seriesContainer = document.getElementById("series-container");

        shortFilmsContainer.innerHTML = "";
        moviesContainer.innerHTML = "";
        seriesContainer.innerHTML = "";

        movies.forEach(movie => {
            if (movie.mood === selectedMood && movie.time === selectedTime) {
                if (movie.type === "short film") {
                    shortFilmsContainer.innerHTML += `<div>${movie.title}</div>`;
                } else if (movie.type === "movie") {
                    moviesContainer.innerHTML += `<div>${movie.title}</div>`;
                } else if (movie.type === "series") {
                    seriesContainer.innerHTML += `<div>${movie.title}</div>`;
                }
            }
        });

        if (selectedTime === "1hr") {
            shortFilmsContainer.innerHTML += movies
                .filter(movie => movie.time === "1hr")
                .map(movie => `<div>${movie.title}</div>`)
                .join("");
        } else if (selectedTime === "2-3hr") {
            moviesContainer.innerHTML += movies
                .filter(movie => movie.time === "2-3hr")
                .map(movie => `<div>${movie.title}</div>`)
                .join("");
        } else if (selectedTime === "more3hr") {
            seriesContainer.innerHTML += movies
                .filter(movie => movie.time === "more3hr")
                .map(movie => `<div>${movie.title}</div>`)
                .join("");
        }
    }
});
