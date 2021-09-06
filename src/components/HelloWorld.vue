

<template>
  <div id="app">
    <div id="nav">
       <div class="nav-line"> 
                  <b-navbar toggleable="lg" type="dark" variant="info">
                    <b-navbar-brand href="#">Visualize-Website</b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                      <b-navbar-nav>
                        <b-nav-item href="#">Solutions</b-nav-item>
                        <b-nav-item href="#" disabled>Products</b-nav-item>
                        <b-nav-item href="#">Gallary</b-nav-item>
                        <b-nav-item href="#">Pricing</b-nav-item>
                        <b-nav-item href="#">Resources</b-nav-item>
                        <b-nav-item href="#">Company</b-nav-item>

                        <button>Get Started Free</button>
                          <button>Log in</button>
                      </b-navbar-nav>

                   
                    </b-collapse></b-navbar> </div>
                           
    </div>
    <router-view/>
  </div>

</template>



<script>
import {mapActions} from 'vuex'
export default {
  // data(){
  //   return{
  //     list : null

  //   }

  // },
  methods:{
  ...mapActions('BLOCKAPI',["FETCH_TAGS"]),
    async fetchTags(){
      console.log('fetching');
      try{
        let data = await this.FETCH_TAGS()
        // this.list= data
        console.log(data, 'data');
      }catch(e){
        console.log(e);
      }
    },
  },
  created(){
      this.fetchTags()
    }
  
};

</script>



<style scoped>
button{
  padding: 0rem 3rem;
}


</style>