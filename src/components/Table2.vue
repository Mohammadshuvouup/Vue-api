<template>
  <div>
    <b-table hover :items="items"></b-table>
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
          {
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _rowVariant: 'danger'
          },
          {
            age: 40,
            first_name: 'Thor',
            last_name: 'MacDonald',
            _cellVariants: { age: 'info', first_name: 'warning' }
          },
          { age: 29, first_name: 'Dick', last_name: 'Dunlap' }
        ]
      }
    },
       methods:{
  ...mapActions('BLOCKAPI',["FETCH_TAGS"]),
    async fetchTags(){
      console.log('fetching');
      try{
        let data = await this.FETCH_TAGS()
        this.items= data.data
        console.log(data, 'data');
      }catch(e){
        console.log(e);
      }
    },
  },
  created(){
      this.fetchTags()
    }
  }
</script>