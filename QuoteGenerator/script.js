var button = document.querySelector(".quoteButton");
var display =document.querySelector(".quoteDisplay");

var quotes=[
    "Believe in yourself and all that you are.",
     "Every moment is a fresh beginning.", 
     "Dream big and dare to fail.", 
     "You are stronger than you think.",
      "Happiness is a direction, not a place.",
       "Success is the sum of small efforts repeated daily.",
     "Doubt kills more dreams than failure ever will.", 
     "Be yourself; everyone else is already taken.",
         "Make today ridiculously amazing.",
          "Do it with passion or not at all.", 
          "Stars can't shine without darkness.",
           "You become what you believe.", 
           "A smooth sea never made a skilled sailor.",
            "If not now, when?",
             "Take the risk or lose the chance.",
              "Progress, not perfection.", 
              "Be the change you wish to see in the world.", 
              "Fall seven times, stand up eight.", 
              "Do something today that your future self will thank you for.", 
              "The best time for new beginnings is now.", "Your only limit is your mind.",
               "Wake up with determination, go to bed with satisfaction.", 
               "Don't wait for opportunity. Create it.",
                "Great things never come from comfort zones.",
                 "Little things make big days.", 
                 "Push yourself because no one else is going to do it for you",
                  "Don't stop until you're proud.", 
                  "Difficult roads often lead to beautiful destinations.", 
                  "Believe you can and you're halfway there.", 
                  "The secret of getting ahead is getting started.", 
                  "Stay patient and trust your journey.", 
                  "You are your only limit.",
                   "Work hard in silence, let success make the noise.",
                   "Start where you are. Use what you have. Do what you can.", 
                   "What you get by achieving your goals is not as important as what you become by achieving your goals.",
                   "Success does not just find you. You have to go out and get it.",
                   "The harder you work for something, the greater you will feel when you achieve it.",
                   "Do not watch the clock; do what it does. Keep going."
]

// ~~~~~~~~~~~~~ Random Quote Generator ~~~~~~~~~~~~~~~
function getQuote() {
    display.style.fontweight = "bolder";
    display.style.color = "white";
    var randomIndex = Math.floor(Math.random() * quotes.length);
    display.innerHTML = quotes[randomIndex];                       
    display.style.opacity = 100; 
    randGrad();
}


const gradients = [
  "linear-gradient(135deg, rgba(255,94,98,0.9), rgba(255,195,113,0.9))",
  "linear-gradient(120deg, rgba(43,88,118,0.9), rgba(70,70,151,0.9))",
  "linear-gradient(110deg, rgba(102,255,153,0.9), rgba(0,204,255,0.9))",
  "linear-gradient(120deg, rgba(34,193,195,0.9), rgba(253,187,45,0.9))",
  "linear-gradient(140deg, rgba(255,0,150,0.9), rgba(0,204,255,0.9))",
  "linear-gradient(130deg, rgba(131,58,180,0.9), rgba(253,29,29,0.9), rgba(252,176,69,0.9))",
  "linear-gradient(120deg, rgba(36,198,220,0.9), rgba(81,74,157,0.9))",
  "linear-gradient(120deg, rgba(0,242,96,0.9), rgba(5,117,230,0.9))",
  "linear-gradient(145deg, rgba(33,33,33,0.95), rgba(66,66,66,0.95))", 
  "linear-gradient(135deg, rgba(44,62,80,0.9), rgba(52,73,94,0.9))",    
  "linear-gradient(120deg, rgba(43,88,118,0.9), rgba(70,70,151,0.9))",
  "linear-gradient(120deg, rgba(131,96,195,0.9), rgba(46,191,145,0.9))",
  "linear-gradient(120deg, rgba(0,210,255,0.9), rgba(146,141,255,0.9))"
];

function randGrad(){
    document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)];
}


