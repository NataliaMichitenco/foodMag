<template>
  <header class="header">
    <div class="header_wrapper">
      <div class="header_wrapper__logo">
        <svg width="39" height="32" viewBox="0 0 59 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.41669 22L14.0233 40L29.5 27L2.41669 22Z"
            stroke="#e25300"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.5833 22L44.9768 40L29.5 27L56.5833 22Z"
            stroke="#d3e200"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6042 40H44.3959L29.5 27L14.6042 40Z"
            stroke="#de00e2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.25 24L29.5 2L45.75 24"
            stroke="#26e200"
            stroke-width="4"
            stroke-linejoin="round"
          />
        </svg>
        <p class="header_wrapper__logo-text">FoodMag</p>
      </div>
      <nav class="header_nav">
        <button @click="$emit('toggle-cart')" class="header_btnCart"><img src="/cart.svg" alt="Cart" /></button>
        <span v-if="totalQuantity > 0" class="cart-quantity">{{ totalQuantity }}</span>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Получаем количество товаров в корзине
defineProps({
  totalQuantity: Number
});
</script>


<style lang="scss" scoped>

.header {
  max-width: 100%;
  background-color: coral;
  padding-left: 10px;
  padding-right: 10px;
}

.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_wrapper__logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.header_wrapper__logo-text {
  color: black;
  font-size: 22px;
}

.header_nav {
  display: flex;
  gap: 10px;
}

.header_btnCart {
  border: none;
  border-color: coral;
}

.header_btnHome {
  width: 58.4px;
  height: 43.2px;
  border: none;
  border-color: coral;
}

.cart {
  cursor: pointer;
  position: relative;
}

.cart-count {
  position: fixed;
  top: 20px;
  right: 40px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
}
.cart-quantity {
  position: fixed;
 
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
}

/* Стили для иконки корзины */
.cart-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.cart-icon:hover {
  transform: scale(1.1);
}

/* Стиль для отображения количества товаров в корзине */
.cart-quantity {
  position: absolute;
  top: 5px;
  right: 105px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}
</style>
