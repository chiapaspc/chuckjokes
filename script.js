document.getElementById("loadJoke").addEventListener("click", function() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById("jokeContainer").innerText = data.value;
            return data.value;
        })
        .then(joke => {
            const apiUrl = 'https://libretranslate.de/translate';
            fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({
                    q: joke,
                    source: "en",
                    target: "es",
                    format: "text"
                }),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("translatedJokeContainer").innerText = data.translatedText;
            });
        })
        .catch(error => console.error('Error:', error));
});