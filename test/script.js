document.querySelector(".current-location").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (data) => {
      let cordinates = `${data.coords.latitude},${data.coords.longitude}`;
      console.log(cordinates);
      document.querySelector(".cord").innerHTML = cordinates;
    },
    (err) => {
      console.log(err);
    }
  );
});
