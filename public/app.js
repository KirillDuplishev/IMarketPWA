if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("Registration");
  })
  .catch(() => {
    console.log("No Registration");
  })
}