<template>
  <div class="center">
    <HeaderVue
      @toggle-cart="toggleCart"
      :totalQuantity="totalQuantity"
      :cart="cartItems"
    />
    <CatalogCard v-if="!isCartVisible" :products="products" @add-to-cart="addToCart" />
    <CartPage v-if="isCartVisible" :cartItems="cartItems" @clear-cart="clearCart" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import HeaderVue from './components/HeaderVue.vue';
import Footer from './components/Footer.vue';
import CatalogCard from './components/CatalogCard.vue';
import CartPage from './components/CartPage.vue';

const products = ref([]);  // Массив продуктов
const cartItems = ref([]);  // Массив товаров в корзине

// Состояние видимости корзины
const isCartVisible = ref(false);

// Загрузка данных о продуктах
onMounted(() => {
  axios
    .get('https://7eb19f3ea010ad2e.mokky.dev/products')
    .then((response) => {
      products.value = response.data; // Заполняем список продуктов
    })
    .catch((error) => {
      console.error('Ошибка при загрузке товаров:', error);
    });
});

// Подсчет общего количества товаров в корзине
const totalQuantity = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
});

// Функция добавления товара в корзину
const addToCart = (product) => {
  const itemIndex = cartItems.value.findIndex((item) => item.id === product.id);
  if (itemIndex >= 0) {
    cartItems.value[itemIndex].quantity++;
  } else {
    cartItems.value.push({ ...product, quantity: 1 });
  }
};

// Метод для переключения видимости корзины
const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value;  // Переключаем состояние корзины
};

// Функция очистки корзины
const clearCart = () => {
  cartItems.value = [];  // Очищаем корзину
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 100%;
  box-sizing: border-box;
  font-family: "Sour Gummy", sans-serif;
}

img {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
p {
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-family: "Sour Gummy", sans-serif;
}

.center {
  max-width: 1200px; /* Устанавливаем максимальную ширину контейнера */
  width: 100%; /* Ширина контейнера занимает всю доступную ширину */
  margin: 0 auto; /* Автоматически центрируем контейнер по горизонтали */
}

</style>
