
(function() {

  let dateEnd = new Date("2022-04-18 00:00:00");
   dateNow = new Date();
   date = Math.floor((dateEnd - dateNow) / 1000);

  function countdown() {
      let dateLeft = date
          dateTemp = 0;
      dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
      dateLeft -= dateTemp * 24 * 60 * 60;
      if (dateTemp < 10)
          dateTemp = "0" + dateTemp;
      document.querySelector("#days span").innerHTML = dateTemp;

      dateTemp = Math.floor(dateLeft / (60 * 60));
      dateLeft -= dateTemp * 60 * 60;
      if (dateTemp < 10)
          dateTemp = "0" + dateTemp;
      document.querySelector("#hours span").innerHTML = dateTemp;

      dateTemp = Math.floor(dateLeft / 60);
      dateLeft -= dateTemp * 60;
      if (dateTemp < 10)
          dateTemp = "0" + dateTemp;
      document.querySelector("#minutes span").innerHTML = dateTemp;

      if (dateTemp < 10)
          dateTemp = "0" + dateLeft;
      document.querySelector("#seconds span").innerHTML = dateLeft;

      date--;
  }

  setInterval(countdown, 1000);

  countdown();

}
)();
