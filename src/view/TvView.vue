<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])

onMounted(async () => {
  const response = await api.get('results/tv/list?language=pt-BR')
  genres.value = response.data.genres
})
</script>

<template>
    <h1>Programas de TV</h1>
    <ul class="results-list">
      <li v-for="genre in genres" :key="genre.id" class="results-item">
          {{ genre.name }}
      </li>
    </ul>
  </template>
  
  <style scoped>
  .results-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    padding: 0;
  }
  
  .results-item {
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }
  
  .results-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
  }
  </style>