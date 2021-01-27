let app = new Vue({
  el: '#app',
  data: {
    rows: ''
  },
  mounted: function() {
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1OnYhi2LzL_xxOD-T5tXYKsx6PP8DMc6YOXGFJuQ9MZY&sheet=1')
      .then(response => {
        // this.section1 = response.data.rows
        console.log(response.data.rows)
        this.rows = response.data.rows
      })
  }
})