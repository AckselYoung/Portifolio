document.getElementById('tweetButton').addEventListener('click', function() {
    const tweetInput = document.getElementById('tweetInput');
    const tweetText = tweetInput.value;

    if (tweetText) {
        const tweetsContainer = document.getElementById('tweetsContainer');
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.textContent = tweetText;
        tweetsContainer.prepend(tweetDiv);
        tweetInput.value = ''; // Limpa o campo de entrada
    }
});