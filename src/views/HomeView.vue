
<script setup>
    import axios from 'axios';
    import {onMounted, computed} from "vue";
    import {useStore} from "vuex";
    import {useRoute} from 'vue-router';

const store = useStore();
const router = useRoute();

onMounted(async () => {
    await store.dispatch("fetchNews");
    await store.dispatch("fetchHeadline");

});

const news = computed(() => store.state.news);
const headline = computed(() => store.state.headline);

</script>

<template>
    <div class="heading-section mt-3">
    <h1 class="heading">HEADLINE</h1>
   </div> <hr>
     
     <div class="card ml item" style="width: 80rem;">
  <img :src="headline.image_url" class="card-img-top ht" alt="...">
  <div class="card-body">
    <p>{{headline.categories}}</p>
    <h5 class="card-title">{{headline.title}}</h5>
    <p class="card-text">{{headline.description}}</p>
  </div>
</div>

   <div class="heading-section mt-3">
    <h1 class="heading">TOP NEWS</h1>
   </div> <hr>
<div class="card-container">
    <div v-for="news in news" :key="news">
        <div class="card item" style="width: 20rem;">
       <img :src="news.image_url" class="card-img-top" alt="...">
      <div class="card-body">
      <p>{{news.categories}}</p>
      <h5 class="card-title">{{news.title}}</h5>
      <p class="card-text">{{news.description}}</p>
      <p class="card-text">{{news.published_at}}</p> 
      <RouterLink :to="`/newsdetails/${news.uuid}`"><button class="bs">See more <i class="fa-solid fa-arrow-right"></i></button></RouterLink><br>
     </div>
   </div>
 </div>
</div>
    <RouterView/>
</template>
<style scoped>
    .card-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
    gap: 70px; 
    padding: 30px;
    margin-left: 10px;
    margin-right:60px;
    }
    .heading{
        color:#ff5733;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        margin-bottom:20px;
        text-decoration:underline;
         text-underline-offset: 15px;
    }
    hr{
        margin-left:60px;
        margin-right:60px;
    }
    .ml{
        margin-left:250px ;
    }
    .ht{
        height:450px;
    }
    .item{
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .bs{
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
         background-color:#003366 ;
         width: 120px;
         height:40px;
         border-radius: 5px;
         color: aliceblue;
         margin-bottom: 15px;
         border: none;
    }
</style>

