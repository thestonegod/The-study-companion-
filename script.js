//JS waits until HTML exists
document.addEventListener("DOMContentLoaded",function() {
    //List of quotes
    const entryQuotes = [
      "Don't you wanna be smart?",
      "One session everyday is a ton of knowledge.",
      "Do what makes you feel you.",
      "Procrastination is a sign of indiscipline.",
      "Focus is a deliberate decision.",
      "knowledge never gets old"
    ];

    const focusQuotes = [
        "Attention is power.",
        "Deep work builds sharp minds.",
        "Repeatition isn't failure. It's quiet mastery.",
        "Stay grounded.",
        "Dont stop at challenges,stop at solutions."
    ]

    const closureQuotes = [
        "You logged in to a self-upgrade system today.",
        "Progress was made!",
        "Baby steps train you for the big leaps.",
        "Successful at heart",
        "I made this with people like you in mind",
        "Reflect. Reset. Repeat."
    ]

    function getRandomQuote(quotesArray) {
        const randomIndex = Math.floor(Math.random()* quotesArray.length);
        return quotesArray[randomIndex];
    }

   //Entry quotes on app load
    const entryQuoteEl = document.getElementById("entry-quote");

    entryQuoteEl.textContent = getRandomQuote(entryQuotes);
});