<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<body>
    <div class="container mt-5">
        <div class="image-section white">
            <img :src="imgUrl" class="main-image" />
        </div>
        <div class="text-section ">
            <h1>How We Work</h1> <br>
            <div class="content">
                <div class="left-text">
                 <p>
                    At <strong>NEWSWAVE</strong>, we are committed to delivering the most accurate, relevant,
                    and timely news to keep you informed in today’s fast-paced world. Whether it's 
                    breaking news, in-depth analysis, or stories that inspire, we believe in empowering 
                    our users with reliable information to make well-informed decisions.
                    Our mission is simple: to provide a platform where you can access trustworthy
                    news from a variety of perspectives. We combine cutting-edge technology with experienced 
                    journalism to curate the most important stories across local, national, and global events. From politics
                    and business to culture, entertainment, and sports, we cover all angles.
                 </p>
                </div>
                <div class="right-text">
                    <p>
                     Our team of dedicated journalists, editors, and technologists work around the clock to ensure you stay ahead of the curve. With personalized features, notifications for real-time updates, 
                     and a user-friendly interface, <strong>NEWSWAVE</strong> is designed to bring the world’s news right to your fingertips.
                     Transparency, trust, and truth are at the core of what we do. No matter where you are, we’re here to keep you informed with clarity and accuracy.
                     Stay connected, stay informed, with  <strong>NEWSWAVE</strong> your trusted source for news.
                    </p>
                </div>
            </div>
            <div class="contact-btn">
                <RouterLink to="/contact">Contact Us</RouterLink>
            </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="card mr" style="width: 18rem;">
             <img src="../assets/worldnews2.png" class="card-img-top ht" alt="...">
             <div class="card-body">
        </div>
       </div>
    </div>
   <div class="col-md-4">
       <div class="card mr" style="width: 18rem;">
        <img src="../assets/news2.png" class="card-img-top ht" alt="...">
        <div class="card-body">
      </div>
    </div>
  </div>  

  <div class="col-md-4">
       <div class="card mr" style="width: 18rem;">
        <img src="../assets/news.png" class="card-img-top" alt="...">
        <div class="card-body">
      </div>
    </div>
  </div>
</div>

 <div class="text-section">
    <h1><strong>WE ARE NEWS WAVE!</strong></h1>
        <p>At News Wave, we believe that news should be more than just headlines—it should
            be an experience that informs, engages, and inspires. As a dynamic force in modern journalism, 
            we are here to ride the ever-evolving waves of information, bringing you stories that shape the
            world around you. From breaking developments and investigative reports to 
            thought-provoking analyses, our goal is to offer a comprehensive, clear,
            and reliable source of news that you can trust.
            Our team is made up of passionate journalists, editors, 
            and researchers dedicated to uncovering the truth and reporting it with 
            accuracy, depth, and integrity. We understand that the world is more connected
            than ever, and so is the news. That’s why at News Wave, we focus on not just 
            global events, but also the local stories that impact communities directly. 
            We believe in the power of information to drive change,
            build understanding, and connect people across diverse perspectives.
            By combining cutting-edge technology with tried-and-true journalistic values, we ensure
            that you’re always up-to-date on the stories that matter most. Whether you're following
            the latest in politics, business, science, or culture, News Wave is here to guide you through the flood 
            of information with clarity, transparency, and trustworthiness. Join us as we ride the current
            of news—shaping the world’s narrative, one story at a time.
        </p>
   </div> 
 </div>
</body>
 <RouterView/>
</template> 

<style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-image: url("../assets/Home.png");
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 270px;
}

.image-section {
    width: 100%;
    height: auto;
}

.main-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 15px;
}

.text-section {
    background-color: #003366;
    color: white;
    padding: 50px 20px;
    text-align: center;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 15px;
}

.text-section h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-decoration: underline;
    text-decoration-color: #ff5733;
    text-underline-offset: 15px;
    
}

.content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

.left-text, .right-text {
    width: 45%;
    text-align: left;
}

.contact-btn {
    margin-top: 20px;
}

.contact-btn a {
    text-decoration: none;
    background-color: #ff5733;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
}

.contact-btn a:hover {
    background-color: #f1a897;
}
strong{
    color: #ff5733;
}
.mr{
    margin-right:20px;
    margin-bottom: 20px;
}


@media (max-width: 768px) {
    .left-text, .right-text {
        width: 100%;
        text-align: center;
    }

    .main-image {
        max-height: 250px;
    }

    .text-section {
        padding: 30px 10px;
    }
}
.bar{
    margin-left:15px;
    height: 22cm;
    width:220px;
    margin-bottom: 15px;
}
.off-word{
    margin-left:15px;
    margin-top:15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}
.blue{
    background-color: #003366;
    color: #ff5733;
    border-radius: 15px;
}
.white{
    color:azure;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.ht{
    height:290px;
}
</style>

<script setup>

import imgUrl from '@/assets/about.jpg'

</script>
