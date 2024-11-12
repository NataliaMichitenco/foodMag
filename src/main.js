import 'normalize.css'; // Для нормализации стилей между браузерами
import { createApp } from 'vue'; // Импортируем функцию для создания Vue приложения
import './style.css'; // Импортируем глобальные стили
import App from './App.vue'; // Главный компонент приложения
import router from './router'; // Маршрутизатор, настроенный в отдельном файле

// Создаем приложение Vue, подключаем маршрутизатор и монтируем приложение в DOM элемент с id "app"
createApp(App)
  .use(router)  // Подключаем Vue Router
  .mount('#app'); // Монтируем приложение в элемент с id "app"

