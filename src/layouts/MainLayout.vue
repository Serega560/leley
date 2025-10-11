<script setup>
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'
import MarketPlace from '@/components/MarketPlace.vue'
import Brand from '@/components/Brand.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header/>
  <router-view/>
  <Form/>
  <Brand/>
  <MarketPlace/>
  <Footer/>
</template>

<style scoped>
</style>
