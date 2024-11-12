<template>
  <div class="catalog">
    <h2 class="title">Food market</h2>
      <div class="catalog-card">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
// Импортируем компонент Card
import Card from './Сard.vue';

// Декларируем пропс для получения списка продуктов
const props = defineProps({
  products: Array, // Массив продуктов
});

// Декларируем эмит, указывая, что будем эмитировать событие 'add-to-cart'
const emit = defineEmits(['add-to-cart']);

// Функция для добавления товара в корзину
const addToCart = (product) => {
  emit('add-to-cart', product); // Эмитим событие с продуктом
};
</script>
<style scoped>

 .catalog {
  background-color: #3d5a80;
}

.catalog-card{
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 10px;
  justify-items: center;
}

.catalog-card:only-child {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

.title{
  color: coral;
  font-size: 48px;
  margin-top: -1px;
  padding-top: 25px;
}

@media (max-width: 850px) {
  .catalog-card{
  display: grid;
  grid-template-columns: repeat(2, 2fr);
}
}
@media (max-width: 560px) {
  .catalog-card{
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  }
}
</style>