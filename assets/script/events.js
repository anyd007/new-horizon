let couterDisplay = document.querySelector("#counter");
const br = document.createElement('br');

// ustawiamy datę docelową
const countDownDate = new Date("Apr 01, 2023 19:00:00").getTime();

// wywołujemy funkcję co 1 sekundę
const counter = setInterval(function () {

    // pobieramy aktualną datę i godzinę
    const now = new Date().getTime();

    // obliczamy różnicę między aktualną datą a datą docelową
    const distance = countDownDate - now;

      // obliczamy dni, godziny, minuty i sekundy pozostałe do daty docelowej
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  let hoursDisplay = document.createElement("p")
  
  if(hours === 1){
    hoursDisplay.textContent = "godzina"
  }if(hours <= 4){
    hoursDisplay.textContent = "godziny"
  }if(hours <=  20 || hours === 0){
        hoursDisplay.textContent = "godzin"
    }
  else{
    hoursDisplay.textContent = "godziny"
  }

    // wyświetlamy wynik w konsoli
   couterDisplay.innerHTML = `${days} dni <br> ${hours} ${hoursDisplay.textContent} ${minutes} min. ${seconds} sek.`

     // zatrzymujemy odliczanie, gdy osiągnięto datę docelową
  if (distance < 0) {
    clearInterval(counter);
    couterDisplay.textContent = "ZACZYNAMY !!!"
  }

}, 1000)