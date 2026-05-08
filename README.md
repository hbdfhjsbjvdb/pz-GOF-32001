Event-Driven архітектура з MQTT (Mosquitto)

## Опис проєкту

У даному проєкті реалізовано Event-Driven архітектуру на основі MQTT-брокера Mosquitto.

Система складається з:

* MQTT брокера (Mosquitto у Docker)
* двох веб-клієнтів (Web1 і Web2)
* обміну повідомленнями в реальному часі через WebSocket

Web1 виконує роль Publisher (відправник повідомлень)
Web2 виконує роль Subscriber (отримувач повідомлень)

---

## Структура проєкту

```
exam/
│
├── src/
│   ├── web1/
│   │   └── index.html
│   │
│   ├── web2/
│       └── index.html
│
├── mosquitto.conf
├── docker-compose.yml
├── README.md
├── .gitignore
├── .editorconfig
├── package.json
```

---

## Запуск MQTT брокера (Docker)

### Запуск контейнера

```bash
docker-compose up 
```

### Перевірка статусу

```bash
docker ps
```

Очікувано:

* контейнер eclipse-mosquitto
* порти 1883 і 9001 відкриті

### Зупинка контейнера

```bash
docker-compose down
```

---

## Конфігурація Mosquitto

Файл mosquitto.conf:

```conf
listener 1883
allow_anonymous true

listener 9001
protocol websockets
```

Пояснення:

* 1883 — MQTT TCP порт
* 9001 — WebSocket для браузерних клієнтів
* allow_anonymous true — дозволяє підключення без авторизації

---

## Web1 (Publisher)

Функціонал:

* підключення до MQTT брокера
* відправка повідомлень у topic exam/topic

Дії:

* вводить повідомлення
* натискає Send
* публікує повідомлення в MQTT

---

## Web2 (Subscriber)

Функціонал:

* підключення до MQTT брокера
* підписка на topic exam/topic
* отримання повідомлень у реальному часі

Дії:

* підписується на topic
* отримує повідомлення від Web1
* відображає їх на сторінці

---

## Принцип роботи системи

1. Web1 відправляє повідомлення в MQTT topic
2. Mosquitto брокер отримує повідомлення
3. брокер розповсюджує повідомлення підписникам
4. Web2 отримує повідомлення в реальному часі

---

## Тестування системи

### Запуск брокера

```bash
docker-compose up -d
```

### Відкриття Web2

Перевірити підключення до брокера

### Відкриття Web1

Ввести повідомлення та відправити

### Результат

Повідомлення з’являється у Web2

---

## Архітектура

```
Web1 (Publisher)
        ↓
   MQTT Broker (Mosquitto)
        ↓
Web2 (Subscriber)
```

---

## Висновок

Проєкт демонструє роботу Event-Driven архітектури на основі MQTT.

Основні властивості:

* асинхронна комунікація
* слабке зв’язування компонентів
* передача даних у реальному часі
* масштабованість системи

---

## Команди

```bash
docker-compose up -d
docker ps
docker-compose down
```
