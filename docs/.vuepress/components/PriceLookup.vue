<template>
  <h1 style="margin-bottom: 0; padding-bottom: 0;">FFTCG Card Price Check</h1>
  <p style="align:center;margin: 0; padding: 0;">Updated Daily</p> <br>
  <!-- <input type="text" id="fname" name="fname" /> -->
  <input label="Card Name" type="text" style="width:75%; height:3em"  v-model="cardFind" @change="getCards">

  <div v-for="card in getCards" :key="card.set" style="display:grid;   grid-template-columns: 2fr 1fr 1fr;">
    <a :href=card.Url_Details style="padding: 20px;">{{ card.Name.replaceAll("\"", "") }}</a>
    <p>{{ card.Set.replaceAll("#", "[") }}]</p>
    <p><strong>{{ card.Price }}</strong></p>
  </div>
</template>
  
<script setup>
import cardPrices from '../assets/FFTCGPrices.json'
import { ref } from 'vue'
import { computed } from "vue";

  const cardFind = ref('')
  // const data = [
  //   { Name: 'Cloud', Price: '$100' },
  //   { Name: 'Tifa', Price: '$700' },
  // ];

const getCards = computed({
  get() {
    return cardPrices.filter(cn => cn.Name.toLocaleLowerCase().includes(cardFind.value.toLocaleLowerCase()) || cn.Set.toLocaleLowerCase().includes(cardFind.value.toLocaleLowerCase()))
  }
})



</script>
  
<style></style>
  