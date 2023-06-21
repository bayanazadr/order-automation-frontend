# Используйте образ node для сборки приложения React
FROM node:14-alpine as build

# Установка рабочей директории
WORKDIR /app

# Копирование зависимостей и файлов проекта
COPY package*.json ./
COPY . ./

# Установка зависимостей
RUN npm install

# Сборка приложения React
RUN npm run build


# Открываем порт 3000 (или другой, если вы используете другой сервер или прокси)
EXPOSE 3000

# Запуск приложения React
CMD ["npm", "start"]
