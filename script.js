var app = new Vue({
  el: '#app',
  data: {
    apiURL: 'http://localhost/php-ajax-dischi/db/index.php?',
    disks :'',
    diskGenre : '',
    newUrl : '',
    genreChosed:'',
  },
  methods:{
    getApi(url){
      axios.get(url).then(r=>{
        this.disks = r.data
      })
    },
    getGenre(){
      this.genreChosed=''
      this.newUrl = this.apiURL
        if(event.originalTarget.value!=="ALL"){
          this.diskGenre = event.originalTarget.value    
          this.newUrl=this.apiURL+"genre="+this.diskGenre
          this.genreChosed='chosed',
          this.getApi(this.newUrl)
        }
        this.getApi(this.newUrl)
    },
  },
  mounted(){
    this.getApi(this.apiURL)
  }
})

