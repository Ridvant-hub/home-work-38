# React App with Vite

Цей проект створено за допомогою Vite та React для демонстрації роботи з компонентами.

## Опис проекту

Проект містить два основні компоненти:
- **Button** - компонент кнопки, який приймає props: `text` (текст кнопки) та `type` (тип кнопки: button, submit)
- **Input** - компонент поля введення, який приймає props: `placeholder` (підказка) та `type` (тип поля: text, password)

Обидва компоненти мають обробники подій:
- Button: `onClick` - обробник кліку
- Input: `onChange` - обробник зміни значення

## Структура проекту

```
my-react-app/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── Input.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## Встановлення та запуск

### 1. Встановіть залежності

```bash
cd my-react-app
npm install
```

### 2. Запустіть проект у режимі розробки

```bash
npm run dev
```

Проект буде доступний за адресою `http://localhost:5173`

### 3. Створіть production збірку

```bash
npm run build
```

### 4. Перегляньте production збірку

```bash
npm run preview
```

## Використання компонентів

### Button

```jsx
import Button from './components/Button';

<Button 
  text="Натисни мене" 
  type="button" 
  onClick={() => console.log('Clicked!')} 
/>
```

### Input

```jsx
import Input from './components/Input';

<Input 
  type="text" 
  placeholder="Введіть текст..." 
  onChange={(e) => console.log(e.target.value)} 
/>
```

## Деплоймент

Проект можна розгорнути на наступних платформах:

### Vercel

1. Завантажте код на GitHub
2. Перейдіть на [Vercel](https://vercel.com)
3. Імпортуйте ваш репозиторій
4. Vercel автоматично визначить налаштування Vite

### Netlify

1. Завантажте код на GitHub
2. Перейдіть на [Netlify](https://netlify.com)
3. Додайте новий сайт з GitHub
4. Налаштування збірки:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Технології

- **React** 18.2.0
- **Vite** 5.0.8
- **ESLint** для перевірки коду

## Особливості

- ✅ Використання функціональних компонентів
- ✅ Правильне використання props
- ✅ Обробники подій (onClick, onChange)
- ✅ Чистий та структурований код
- ✅ Дотримання принципу "одна відповідальність"

## Демо-версія

[Посилання на демо-версію буде додано після деплойменту]

## Автор

Створено в рамках навчального завдання.

