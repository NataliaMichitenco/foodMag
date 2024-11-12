import { createRouter, createWebHistory } from 'vue-router';
import CatalogCard from './components/CatalogCard.vue';
import CartPage from './components/CartPage.vue';

const routes = [
  {
    path: '/',
    component: CatalogCard,
    name: 'Home',
    props: true  // Если нужно передавать пропсы в компонент
  },
  {
    path: '/cart',
    component: CartPage,
    name: 'Cart',
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;