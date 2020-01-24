# Build Setup

### serve with hot reload at localhost:8080
npm run serve

### build for production with minification
npm run build

# Залежності

### Vue, Router, Vuex, babel, axios, esLint-standart, sass


# Виконане тестове завдання для компанії wwwest.solutions

## Store
###### Store поділений на 2 файли.

User.js відповідає за авторизацію.
News.js відповідає за загрузки даних з api news.org

## Views
##### сторінка Home кешується. Login, News і Profile створюються заново кожного заходу

### Components

###### headrMenu
Відповідає за меню, ссилка Login відображається коли юзер не авторизований, в іншому випадку відображається ссилка Logout

###### Loader
Компонент загрузки, зарегістрований глобально так як використовується на кілька сторінках

###### Alerts
Компонент спливаючих повідомлень, модифікується за допомогою <slot>.
1. <slot> використувається для message
2. <slot> використувається для передачі icon close
По замовчуванню визиває $emit('close')

## Router 
###### userGuard відповідає за дозвіл переходу на сторінку profile



