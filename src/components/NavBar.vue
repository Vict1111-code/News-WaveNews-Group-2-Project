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
    await store.dispatch("fetchNewsByCategory");

});

    const news = computed(() => store.state.news);
    const headline = computed(() => store.state.headline);
    const selectedNewsCategory= computed (() => store.state.selectedNewsCategory);

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
   <nav class="navbar navbar-expand-lg sticky-top ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
          <strong class="loxt">
          <i class="fa fa-american-sign-language-interpreting buy" aria-hidden="true">
          </i>NEWS WAVE</strong>
       </a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
             <RouterLink to="/" class="nav-link  text" aria-current="page" ><i class="fa-solid fa-house"></i> Home</RouterLink>
            </li>
            <li class="nav-item">
             <RouterLink to="/contact" class="nav-link text"><i class="fa-solid fa-address-book"></i> Contact us</RouterLink>
            </li>
            <li class="nav-item">
            <RouterLink to="/about" class="nav-link text"><i class="fa-solid fa-address-card"></i> About us</RouterLink>
            </li>
        </ul>
        <ul class="nav nav-underline">
            <li class="nav-item">
                 <RouterLink  to="/category/business" class="nav-link options"><i class="fa-solid fa-briefcase"></i> Bussiness</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink  to="/category/technology" class="nav-link options " href="#"><i class="fa-solid fa-screwdriver-wrench"></i>Technology</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink  to="/category/travel" class="nav-link options" href="#"> <i class="fa-solid fa-plane-departure"></i> Travel</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink  to="/category/culture" class="nav-link options" href="#"><i class="fa-solid fa-user"></i> Culture</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink  to="/category/earth" class="nav-link options" href="#"><i class="fa-solid fa-earth-africa"></i> Earth</RouterLink>
            </li>
        </ul>
        <ul>
          <form class="d-flex mt-3" role="search">
             <input class="form-control me-2"  type="search" placeholder="Search latest news update" 
              aria-label="Search" list="suggestions">
                <datalist id="suggestions">
                    <option value="Spirit AeroSystems to furlough 700 workers as Boeing machinist strike continues"></option>
                    <option value="Embraer CEO says jet maker studying possibilities for a new aircraft"></option>
                    <option value="Dow, S&P 500 close at record highs and mark the year's longest winning streak"></option>
                    <option value="'It's our moonshot': Why scientists are drilling into volcanos"></option>
                    <option value=""></option>
                </datalist>
                <button class="btn but" type="submit">Search</button>
            </form>
        </ul>
    </div>
   </div>
 </nav>
   <RouterView/>
</template>
<style scoped>
    nav{
        background-color: #003366;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .text{
        color: #FFFFFF;
        text-shadow: 2px 2px 4px #000000;
        font-size: 20px;
    }
    .text:hover {
       background-color: #ff5733; 
       border-color: #ff5733; 
       border-radius: 10px;
        color:#ffbbac ;
       
    }
    .link{
        color: #ff5733;
        
    }
    .link:hover{
        color:#ffbbac ;
    }
    .but{
       border: 1px solid #ff5733;
       color: #FFFFFF;
        
    }
    .but:hover{
        background-color: #ff5733;
    }
    .loxt{
        color:#c63a1a;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-shadow: 2px 2px 4px #000000;
    }
    .buy{

        color:#ffbbac ;
    }.options{
        display: inline;
        margin-right: 15px;
        font-size:20px;
        margin-bottom:200px; 
         color:#ff5733;
          
    }
    .options:hover{
        color: #ffbbac;
        
    }
</style>