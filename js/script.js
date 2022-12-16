new Vue({
  el: "#app",
  data: {
    posts: [],
    urlApi: location.href + "api.php",
  },
  created() {
    axios.get(this.urlApi).then((axiosResponse) => {
      console.log(axiosResponse);
      this.posts = axiosResponse.data;
    });
  },
});
