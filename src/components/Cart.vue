<template>
  <div>
    <button @click="goToCart">Перейти в корзину</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCart = () => {
  router.push('/cart'); // Программный переход на страницу корзины
};
</script>

<style scoped>
.cart {
  padding: 20px;
}

.cart ul {
  list-style-type: none;
  padding: 0;
}

.cart li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart-total {
  margin-top: 20px;
  font-weight: bold;
}

button {
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}
</style>