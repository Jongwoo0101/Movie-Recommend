function recommendMovies() {
    const movieInput = document.getElementById("movieInput").value;
    fetch(`http://localhost:5000/recommend?movie=${movieInput}`, {mode: 'no-cors'})
        .then(response => response.json())
        .then(data => displayRecommendations(data))
        .catch(error => console.error("오류:", error));
}

function displayRecommendations(data) {
    const recommendations = document.getElementById("recommendations");
    recommendations.innerHTML = "";

    if (data.length === 0) {
        recommendations.textContent = "추천할 영화를 찾지 못했습니다.";
        return;
    }

    const ul = document.createElement("ul");
    data.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = `${movie.Title} (상관계수: ${movie.Correlation})`;
        ul.appendChild(li);
    });

    recommendations.appendChild(ul);
}
