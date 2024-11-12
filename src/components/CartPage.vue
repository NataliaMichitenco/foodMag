<template>
  <div class="cart">
    <h2 class="cart-title">Ваша корзина</h2>
    <ul class="cart-li">
      <li v-for="item in cartItems" :key="item.id" class="cart-list">
        <span>
          <!-- Защищаем доступ к свойству imageUrl, если его нет -->
          <img class="cart-img" :src="item.imageUrl || '/default-image.png'" alt="product" />
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
        </span>
        <button @click="increaseQuantity(item)">+</button>
        <button @click="decreaseQuantity(item)">-</button>
        <button @click="removeItem(item)">Удалить</button>
      </li>
    </ul>

    <div id="cart-total">
      <p>Общее количество товаров: {{ totalQuantity }}</p>
      <p>Общая стоимость: ${{ totalPrice.toFixed(2) }}</p>
    </div>

    <button @click="clearCart">Очистить корзину</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Пропсы
const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  }
});

// Эмит для обновления данных корзины в родительский компонент
const emit = defineEmits();

// Вычисляем общее количество товаров в корзине
const totalQuantity = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + item.quantity, 0);
});

// Вычисляем общую стоимость товаров в корзине
const totalPrice = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// Увеличиваем количество товара в корзине
const increaseQuantity = (item) => {
  item.quantity++;
  emit('update-cart', props.cartItems); // Эмитим обновленную корзину
};

// Уменьшаем количество товара в корзине
const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    emit('update-cart', props.cartItems); // Эмитим обновленную корзину
  }
};

// Удаляем товар из корзины
const removeItem = (item) => {
  const index = props.cartItems.findIndex(i => i.id === item.id);
  if (index !== -1) {
    props.cartItems.splice(index, 1);
    emit('update-cart', props.cartItems); // Эмитим обновленную корзину
  }
};

// Очищаем корзину
const clearCart = () => {
  emit('clear-cart'); // Эмитим событие для очистки корзины
};
</script>

<style scoped>
.cart {
  background-color: #3d5a80;
  padding: 20px;
}

.cart-title{
  color: coral;
  font-size: 48px;
}

#cart-total {
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}

.cart-img {
  max-width: 100px;
}
.cart-li {
  list-style-type: none;

}

.cart-list {
  display: flex;
  justify-content: center;
  align-items: baseline;
}


</style>