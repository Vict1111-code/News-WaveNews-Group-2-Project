<script setup>
import {onMounted, computed} from 'vue';
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';

const store = useStore();
const route = useRoute();

onMounted(async () => {
    await store.dispatch('fetchNewsdetailsByUuid',route.params.uuid);
})

const selectedNewsdetails= computed (() => store.state.selectedNewsdetails);

</script>

<template>
    <div class="container mt-5 mb-5  " >
         <RouterLink to="/" class="back" ><i class="fa-solid fa-backward"></i> Back Home</RouterLink>
        <div class="card ml item pok" style="width: 50.5rem;  ">
          <img :src="selectedNewsdetails.image_url" class="card-img-top ht" alt="...">
           <div class="card-body">
            <h5 class="card-title">{{selectedNewsdetails.title}}</h5>
            <p class="card-text">{{selectedNewsdetails.published_at}}</p>
            <p class="card-text">Source: <strong>{{selectedNewsdetails.source}}</strong></p>
            <p class="card-title">{{selectedNewsdetails.description}}</p>
      </div>
</div>      
</div>
<button class="but"><a :href="selectedNewsdetails.url">View full article <i class="fa-solid fa-arrow-right"></i></a></button>
    <RouterView/>
</template>
<style scoped>
    .pok{
       width: 50.5rem;
        margin-top: 15px;
        margin-left: 180px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .ht{
        width: 50.5rem;
        height: 300px;
    }
    .but{
        margin-left: 410px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        background-color:#003366 ;
        width: 150px;
        height:50px;
        border-radius: 15px;
        border: none;
    }
    a{
       color:white;
       text-decoration: none;
    }
    .back{
        color: #000;
        margin-left: 180px;
        margin-bottom: 15px;
    }
</style>