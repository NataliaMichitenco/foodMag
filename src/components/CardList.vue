<template>
  <div class="cardwrapper">
    <!-- Перебираем все продукты и передаем их в компонент Card -->
    <Card
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Card from './Card.vue';

// Пропс, который передает список товаров
const props = defineProps({
  products: Array, // Получаем список продуктов
  cartItems: Array, // Получаем текущие элементы корзины
});

// Эмитим события родителю
const emit = defineEmits();

// Функция для обработки добавления товара в корзину
const addToCart = (product) => {
  // Проверяем, существует ли уже товар в корзине
  const itemInCart = props.cartItems.find(item => item.id === product.id);

  let updatedCart;
  if (itemInCart) {
    // Если товар уже есть в корзине, увеличиваем его количество
    updatedCart = props.cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    // Если товара нет в корзине, добавляем новый объект в корзину
    updatedCart = [...props.cartItems, { ...product, quantity: 1 }];
  }

  // Эмитим обновленную корзину в родительский компонент
  emit('update-cart', updatedCart);
};
</script>
  
  <style scoped>

  .cardwrapper {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 10px;
  }

  .cardwrapper:only-child {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  /* .cardwrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.cardwrapper .card {
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cardwrapper .card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.cardwrapper .card button {
  margin-top: 10px;
  padding: 10px;
  background-color: #e25300;
  border: none;
  color: white;
  cursor: pointer;
}

.cardwrapper .card button:hover {
  background-color: #c24900; */

  </style>