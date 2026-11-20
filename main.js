const destinations = [
    {
        counter: "01 / 04",
        country: "FRANCE",
        city: "Paris",
        desc: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        badge: "01",
        image: "paris.jpg"
    },
    {
        counter: "02 / 04",
        country: "JAPAN",
        city: "Tokyo",
        desc: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        badge: "02",
        image: "tokyo.jpg"
    },
    {
        counter: "03 / 04",
        country: "ITALY",
        city: "Rome",
        desc: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        badge: "03",
        image: "roma.jpg"
    },
    {
        counter: "04 / 04",
        country: "EGYPT",
        city: "Cairo",
        desc: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        badge: "04",
        image: "cairo.jpg"
    }
];

let currentIndex = 0;

function updateCard() {
    const data = destinations[currentIndex];

    document.getElementById("counter").textContent = data.counter;
    document.getElementById("country").textContent = data.country;
    document.getElementById("city").textContent = data.city;
    document.getElementById("desc").textContent = data.desc;
    document.getElementById("continent").textContent = data.continent;
    document.getElementById("food").textContent = data.food;
    document.getElementById("place").textContent = data.place;
    document.getElementById("language").textContent = data.language;
    document.getElementById("badge-num").textContent = data.badge;
    document.getElementById("city-img").src = data.image;

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

document.getElementById("next-btn").addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= destinations.length) {
        currentIndex = 0;
    }
    updateCard();
});

document.getElementById("prev-btn").addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = destinations.length - 1;
    }
    updateCard();
});

function goToSlide(index) {
    currentIndex = index;
    updateCard();
}