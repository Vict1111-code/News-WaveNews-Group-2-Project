<script setup>
import {onMounted, computed} from 'vue';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';

const store = useStore();
const route = useRoute();

onMounted(async () => {
    await store.dispatch('fetchNewsByCategory',route.params.categories);
})

const selectedNewsCategory= computed (() => store.state.selectedNewsCategory);
</script>
<template>
  <div class="card-container">
    <div v-for="selectedNewsCategory in selectedNewsCategory" :key="selectedNewsCategory.uuid">
      <RouterLink to="/" class="back" ><i class="fa-solid fa-backward"></i> Back Home</RouterLink>
       <h1>{{selectedNewsCategory .categories}}</h1>
        <div class="card item pp" style="width: 20rem;">
            <img :src="selectedNewsCategory.image_url" class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">{{selectedNewsCategory.title}}</h5>
             <p class="card-text">{{selectedNewsCategory.description}}</p>
             <p class="card-text">{{selectedNewsCategory.published_at}}</p>
             <RouterLink :to="`/newsdetails/${selectedNewsCategory.uuid}`"><button class="bs">See more <i class="fa-solid fa-arrow-right"></i></button></RouterLink><br> 
          </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
  .card-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    gap: 70px; 
    padding: 30px;
  }
  .bs{
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
         background-color:#3b8cdd ;
         width: 120px;
         height:40px;
         border-radius: 5px;
         color: aliceblue;
         margin-bottom: 15px;
         border: none;
  }
  .back{
     color: #000;
        margin-bottom: 15px;
  }
</style>