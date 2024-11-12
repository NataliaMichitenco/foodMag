<template>
  <section class="product">
    <img :src="product.imageUrl" alt="product" class="product_img" />
    <h2 class="product_name">{{ product.name }}</h2>
    <div>
      <span>Price: ${{ product.price }}</span>
      <p>Available: {{ product.quantity }} in stock</p>
      <p>{{ product.manufacturer }}</p>
      <button @click="addToCart" :disabled="isOutOfStock">Add to cart</button>
      <p v-if="isOutOfStock" class="out-of-stock">Out of stock</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: Object,  // Пропс с информацией о продукте
});

const emit = defineEmits();

// Вычисляемое свойство для проверки, доступен ли товар
const isOutOfStock = computed(() => {
  return props.product.quantity <= 0;
});

// Функция для добавления товара в корзину
const addToCart = () => {
  if (!isOutOfStock.value) {
    // Если товар есть в наличии, эмитируем событие с продуктом
    emit('add-to-cart', props.product);
  }
};
</script>
  
  <style scoped>

  .product {
    margin: 15px;
    max-width: 250px;
    border: 2px;
    border-radius: 30px;
    padding: 25px;
    -webkit-box-shadow: 6px 5px 34px 10px rgba(34, 60, 80, 0.55);
    -moz-box-shadow: 6px 5px 34px 10px rgba(34, 60, 80, 0.55);
    box-shadow: 6px 5px 34px 10px rgba(34, 60, 80, 0.55);
    cursor: pointer;
    line-height: 10px;
  }

  .product:hover {
  -webkit-box-shadow: 1px 5px 61px 15px rgba(172, 127, 73, 0.83);
  -moz-box-shadow: 1px 5px 61px 15px rgba(172, 127, 73, 0.83);
  box-shadow: 1px 5px 61px 15px rgba(172, 127, 73, 0.83);
  }

  .product_img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }

  .product_name {
  line-height: 28px;
  }

  .product_btn {
    max-width: 240px;
    background-color: coral;
    color: black;
    padding: 20px 40px;
    border: none;
  }
  </style>