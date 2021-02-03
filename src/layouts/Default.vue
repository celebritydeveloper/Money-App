<template>
  <div class="layout">
    <Navbar />
    <section class="container top text-center mt-5">
      <h2 class="top-title">We’re not a Bank, We’re MORE!</h2>
      <p>Patricia harnesses the power of cryptocurrency to create alternative solutions to financial infrastructure, digital payments and global E-commerce.</p>
      <p>Simple put, we're making cryptocurrency cool again!</p>
    </section>
    <div class="store-container">
      <b-row>
        <b-col class="text-center stores  mb-2 mb-md-0 mb-lg-0 mb-xl-0 mr-0 mr-md-3 mr-lg-3 mr-xl-3"><img src="../assets/images/app-store.svg" alt=""></b-col>
        <b-col class="text-center stores mt-2 mt-md-0 mt-lg-0 mt-xl-0 ml-0 ml-md-3 ml-lg-3 ml-xl-3"><img src="../assets/images/play-store.svg" alt=""></b-col>
      </b-row>        
    </div>

    <section class="mt-5 d-flex justify-content-center flex-column flex-lg-row flex-md-row flex-xl-row">
        <div class="text-center features feature-one mr-0 mr-md-3 mr-lg-3 mr-xl-3">
          <div class="feature-top">
            <h3>Patricia debit Card</h3>
            <p>Withdraw your BTC in cash with your customized Patricia Bitcoin debit card</p>
            <b-button variant="outline-dark">Learn More</b-button>
          </div>
          <img src="../assets/images/hands.png" class="img-fluid" alt="">
        </div>
        <div class="text-center features feature-two ml-0 ml-md-3 ml-lg-3 ml-xl-3">
          <div class="feature-top">
            <h3>Get an Instant Bank Account!</h3>
            <p>Get a bank account in minutes, Lowest transfer fees you can find anywhere.</p>
          </div>
          <img src="../assets/images/piggybank.png" class="img-fluid" alt="">
        </div>       
    </section>

    
      <b-jumbotron fluid bg-variant="light" class="pb-0 text-center mt-4">
        <template #header>Buy &amp; Sell Giftcards</template>

        <template #lead>
          Trade GiftCards from everywhere in the world and get your sweet cash within minutes.
        </template>
        <div>
          <b-button variant="outline-dark">Learn More</b-button>
        </div>

        <hr class="my-5">

        
        <img src="../assets/images/giftcards.png" class="img-fluid" alt="">
      </b-jumbotron>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
import Navbar from '../components/Navbar';
// import HorizontalPrimaryContent from '../components/content/HorizontalPrimary'
// import VerticalContent from '../components/content/Vertical'
// import DefaultContent from '../components/content/Default'
// import StripeLogo from '../components/svg/StripeLogo'
// import MobileContent from '../components/content/MobileContent'
// import 'vue-stripe-menu/dist/vue-stripe-menu.css'


export default {
  data() {
    return { 
    }  
  },
  components: {
    Navbar
  },
  methods: {

  }
}
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}



.top {
  padding: 0 10rem;
}

.top p {
  font-size: 1.2rem;
  padding: 0rem;
}

.top-title {
  color: #032041;
  font-size: 4rem;
  font-weight: bolder;
}

.store-container {
  margin: 0 auto;
  width: 50%;
}


.stores {
  background: #ffffff;
  border: 1px solid #deffe5;
  border-radius: 50px;
  cursor: pointer;
  padding: 1rem 2rem;
}

.stores:hover {
  background: #deffe5;
  border: 1px solid #deffe5;
}

.features {
  width: 100%;
}

.features img {
  width: 100%;
}

.feature-one {
  background: rgba(248, 183, 0, 0.1);
  padding-top: 1rem;
  
}

.feature-two {
  background: rgba(71, 155, 255, 0.1);
  padding-top: 1rem;
  
}

.feature-top {
  margin: 6rem 0 3rem 0;
}


.wrap-content {
  padding: 30px;
  width: 400px;
}


.wrap-content__block {
  font-weight: bold;
}
.wrap-content__item {
  font-style: italic;
  font-size: .8rem;
}

</style>
