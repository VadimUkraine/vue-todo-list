<template>
  <div class="header">
    <img class="vue-image" alt="Vue logo" src="../assets/logo.png">
    <h1 class="header-title">Vue ToDo List</h1>
  </div>
</template> 

<script>  
export default {
  name: 'TodosHeader',
}
</script>
  
<style scoped>  
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .vue-image {
    width: 30px;
    height: 30px;
    margin-inline: 7px;
    margin-top: -5px;
  }
  
  .header-title {
    margin-block: 0 7px;
  }
</style>
  