<template>
  <div class="table">
      <b-spinner type="grow" v-if="loder"></b-spinner>
      <b-table    v-else striped hover :items="items"></b-table>
  

  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        loder: false

      }


    },
    methods:{
  ...mapActions('BLOCKAPI',["FETCH_TAGS"]),
    async fetchTags(){
      console.log('fetching');
      this.loder=true
      try{
        let data = await this.FETCH_TAGS()
        this.items= data.data
        console.log(data, 'data');
      }catch(e){
        console.log(e);
      }
      this.loder= false
    },
  },
  created(){
      this.fetchTags()
    }

  }
</script>

<style scoped>
.table{
    margin-top: 5rem;
}


</style>