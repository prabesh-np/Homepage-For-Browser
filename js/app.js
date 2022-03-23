window.onload = function () {
   setInterval(updateTime, 1000);
};

function updateTime() {
   const hourEl = document.querySelector("#hour");
   const minuteEl = document.querySelector("#minute");
   const ampmEl = document.querySelector("#ampm");

   let d = new Date();
   let hours = d.getHours();
   let minutes = d.getMinutes();

   let ampm = hours >= 12 ? "PM" : "AM";
   hours = hours % 12;
   hours = hours ? hours : 12;

   if (hours >= 0 && hours <= 9) hours = "0" + hours;
   if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;

   hourEl.innerHTML = hours;
   minuteEl.innerHTML = minutes;
   ampmEl.innerHTML = ampm;

   const dateEl = document.querySelector("#date");
   let date = d.getDate();
   if (date >= 0 && date <= 9) date = "0" + date;

   let month = d.getMonth() + 1;
   if (month >= 0 && month <= 9) month = "0" + month;

   let year = d.getFullYear();
   if (year >= 0 && year <= 9) year = "0" + year;

   dateEl.innerHTML = `${date}/${month}/${year}`;

   const dayEl = document.querySelector("#day");
   let dayNumber = d.getDay(),
      day = "";
   switch (dayNumber) {
      case 0:
         day = "Sunday";
         break;
      case 1:
         day = "Monday";
         break;
      case 2:
         day = "Tuesday";
         break;
      case 3:
         day = "Wednesday";
         break;
      case 4:
         day = "Thursday";
         break;
      case 5:
         day = "Friday";
         break;
      case 6:
         day = "Saturday";
         break;
      default:
         break;
   }

   dayEl.innerHTML = day;
}

// Fetching Random Quotes From API

const randomQuote = document.querySelector("#random-quote");

let apiQuotes = [];

const newQuote = () => {
   let idx = Math.floor(Math.random() * apiQuotes.length);
   const quote = apiQuotes[idx];
   randomQuote.textContent = `" ${quote.text} "`;
};

async function getQuotes() {
   const apiUrl = "https://type.fit/api/quotes";
   try {
      const res = await fetch(apiUrl);
      apiQuotes = await res.json();
      newQuote();
   } catch (err) {}
}

getQuotes();
