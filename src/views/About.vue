<template>
  
    
    <div>
         <Carousel :hell0="hello" />
         <Table />
         
    </div>
  
</template>

<script>

import Carousel from '@/components/Carousel.vue'
import Table from '@/components/Table.vue'
// import Table from '../components/Table.vue'




export default {
  data(){
    return{
      hello:"hello"
    }
  },
  name: 'Home',
  components: {
    Carousel,
    
    Table
    
   
    
    
    

  }
}
</script>
