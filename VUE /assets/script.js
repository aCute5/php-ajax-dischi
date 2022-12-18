new Vue({
  el: "#app",
  data: {
    arrDiscs: [],
    urlApi: location.href + "/database/arrDiscs.php",
  },
  created() {
    axios.get(this.urlApi).then((axResult) => {
      console.log(axResult);
      this.arrDiscs = axResult.data;
    });
  },
});
