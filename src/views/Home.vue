<template>
  
    
    <div>
         <HelloWorld />
         <Table />
         <Footer />
         <Table2 />
    </div>
  
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Table from '@/components/Table.vue'
import Footer from '@/components/Footer.vue'
import Table2 from '@/components/Table2.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    Table,
    Footer,
    Table2
    
    
    

  }
}
</script>
