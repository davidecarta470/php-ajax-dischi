var app = new Vue({
  el: '#app',
  data: {
    apiURL: 'http://localhost/php-ajax-dischi/db/index.php?',
    disks :[],
    newUrl : '',
    genreChosed:'',
    isLoading:true
  },
  methods:{
    getApi(url){
      axios.get(url)
      .then(r=>{
        this.disks = r.data
        
      })
      .catch(e=>{
        console.log('errore --->>>>> ',e)
      })
      this.isLoading=false
    },
    getGenre(){
      this.genreChosed=''
      this.newUrl = this.apiURL
        if(event.originalTarget.value!=="ALL"){
          diskGenre = "genre="+event.originalTarget.value
          this.newUrl=this.apiURL+diskGenre
          this.genreChosed='chosed'
          this.getApi(this.newUrl)
        }
         
        this.getApi(this.newUrl)
    },
    getYear(){
      this.genreChosed=''
      diskYear=''
      this.newUrl = this.apiURL
        if(event.originalTarget.value!=="ALL"){
          this.diskYear = "year="+event.originalTarget.value
          this.newUrl=this.apiURL+this.diskYear
          this.getApi(this.newUrl)
        }
         
        this.getApi(this.newUrl)
    },
  },
  mounted(){
    this.getApi(this.apiURL)
  }
})

