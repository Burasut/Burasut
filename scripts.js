document.getElementById("cta-button").addEventListener("click", function() {
    alert("もっと見るボタンがクリックされました！");
});
function shareOnTwitter() {
    let tweetText = resultText;  // 結果のテキストを取得
    let tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    window.open(tweetURL, '_blank');  // 新しいタブでTwitterを開く
}
