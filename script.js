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


    //selector = getRandomQuote()
    //signature fuction for all quotes
    function getRandomQuote(quotesArray) {
        const randomIndex = Math.floor(Math.random()* quotesArray.length);
        return quotesArray[randomIndex];
    }

    function displayQuote (element, quoteArray) {
        element.textContent = getRandomQuote(quoteArray);
        getRandomQuote(quoteArray);
    }

   //Entry quotes on app load
    const entryQuoteEl = document.getElementById("entry-quote");

    displayQuote(entryQuoteEl, entryQuotes);

    //Study form
    //Declaring js variable names for the HTML tag names.
    const studyForm = document.getElementById("study-form");
    const focusQuoteEl = document.getElementById("focus-quote");
    const closureQuoteEl = document.getElementById("closure-quote");

    //
    studyForm.addEventListener("submit", lockedInFocus);
    function lockedInFocus (event) {
        event.preventDefault (); //prevents page refresh or flashes. 
        // A non-nego line in handling forms
        displayQuote (focusQuoteEl, focusQuotes);
    };


        //Closure quote
    const saveReflectionBtn = document.getElementById("save-reflection");
    //Event type is not equals to function name
    //Events describe user action, function names describe intention o what code does
    saveReflectionBtn.addEventListener("click", handleReflectionSave) ;    
    function handleReflectionSave() {
        displayQuote (closureQuoteEl, closureQuotes);
    }
}); 