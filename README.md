# Использование API с TypeScript

## Описание проекта

Необходимо создать TypeScript React-приложение с использованием React Router (подумайте, что у приложение должно быть больше 1 функции и соответственно 1 страницы), а также с использованием API вашего выбора (смотрите ниже в документации или в архиве). Повторять API с 6 лабы __НЕЛЬЗЯ__

_Верстку можете написать сами, в целях экономии времени в `templates` лежит дженерик верстка магазина, которую уже можете под себя подстроить (убрать ненужные вещи, что-то перекрасить)_

## Дополнительные требования

- Лоадер
- Вывод ошибок
- Избегать использование типа `any`

## Дополнительная информация

### Класс ApiClient

Так как вы работаете с чужими API, то соответственно вам будет необходимо передавать данные используя `query` и `params`, чего мы не делали в предыдущей работе

Для типизации `query` необходимо чуть изменить класс нашего API Client

```ts
import type { IApiResponse, IUser } from "../types"

export class ApiError extends Error {
    status: number

    constructor(status: number, message: string) {
        super(message)
        this.status = status
        this.name = "ApiError"
    }
}

class ApiClient {
    private baseUrl: string

    constructor(
        baseUrl: string = `${import.meta.env.VITE_URL}/api`
    ) {
        this.baseUrl = baseUrl
    }

    private buildUrl(endpoint: string, params?: Record<string, any>): string {
        const url = new URL(`${this.baseUrl}${endpoint}`)
        
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.append(key, String(value))
                }
            })
        }
        
        return url.toString()
    }

    private async request<T>(
        endpoint: string,
        options?: RequestInit
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`
        const config: RequestInit = {
            ...options,
            headers: {
                "Content-type": "application/json",
                ...options?.headers
            }
        }
        
        try {
            const response = await fetch(url, config)

            if (!response.ok) {
                const errorData = 
                    await response.json().catch(() => ({}))
                throw new ApiError(
                    response.status,
                    errorData.error ||
                    `HTTP ${response.status}: ${response.statusText}`
                )
            }

            return await response.json()
        } catch (error) {
            if (error instanceof ApiError) {
                throw error
            }
            throw new ApiError(
                0, 
                `Network error: ${error instanceof Error ? error.message :
                    'Unknown error'
                }`)
        }
    }

    async get<T>(
        endpoint: string, 
        params?: Record<string, any>
    ): Promise<T> {
        const url = params ? this.buildUrl(endpoint, params) : `${this.baseUrl}${endpoint}`
        
        return this.request<T>(url.replace(this.baseUrl, ''), {
            method: "GET"
        })
    }
    
    async post<TRequest, TResponse>(
        endpoint: string,
        data: TRequest
    ): Promise<TResponse> {
        return this.request<TResponse>(endpoint, {
            method: "POST",
            body: JSON.stringify(data)
        })
    }
}

export const apiClient = new ApiClient()
```

### Описание API Client

#### 1️⃣ `constructor` - Конструктор класса

```typescript
constructor(baseUrl: string = `${import.meta.env.VITE_URL}/api`) {
    this.baseUrl = baseUrl
}
```

**Что делает:**
- Создает экземпляр класса и сохраняет базовый URL
- По умолчанию берет URL из переменных окружения (`VITE_URL`)
- Например: `http://localhost:3000/api`, но вам необходимо указывать в `.env` URL вашего codespace

**Зачем это нужно:**
Когда вы переносите приложение с локального сервера на продакшн, достаточно изменить одну переменную окружения, а не искать URL по всему коду.

#### 2️⃣ `buildUrl` - Построение URL с query параметрами

```typescript
private buildUrl(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(`${this.baseUrl}${endpoint}`)
    
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value))
            }
        })
    }
    
    return url.toString()
}
```

**Что делает:**
Превращает объект параметров в строку запроса:

```typescript
// Вход:
endpoint = "/users"
params = { page: 1, limit: 10, search: "john" }

// Выход:
"http://localhost:3000/api/users?page=1&limit=10&search=john"
```

**Зачем проверка `value !== undefined && value !== null`:**
Не добавляет пустые параметры в URL:
```typescript
{ page: 1, search: undefined } 
// Результат: /users?page=1 (без search)
```

---

#### 3️⃣ `request` - Главный метод для всех запросов

```typescript
private async request<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const config: RequestInit = {
        ...options,
        headers: {
            "Content-type": "application/json",
            ...options?.headers
        }
    }
    
    try {
        const response = await fetch(url, config)
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new ApiError(
                response.status,
                errorData.error || `HTTP ${response.status}: ${response.statusText}`
            )
        }
        
        return await response.json()
    } catch (error) {
        if (error instanceof ApiError) {
            throw error
        }
        throw new ApiError(0, `Network error: ${error.message}`)
    }
}
```

**Что делает:**
Это "сердце" класса - выполняет HTTP запрос и обрабатывает ответ.

**Пошагово:**

1. **Строит полный URL:** `http://localhost:3000/api + /users = http://localhost:3000/api/users`

2. **Настраивает заголовки:**
   - Всегда добавляет `Content-Type: application/json`
   - Сохраняет дополнительные заголовки, если они переданы

3. **Делает запрос:** `fetch(url, config)`

4. **Проверяет статус ответа:**
   - Если `!response.ok` (статус 400-599) → выбрасывает `ApiError`
   - Пытается получить сообщение об ошибке от сервера

5. **Обрабатывает сетевые ошибки:**
   - Нет интернета, сервер недоступен → `ApiError` со статусом `0`

6. **Возвращает данные:** `response.json()`

---

#### 4️⃣ `get` - GET запросы

```typescript
async get<T>(
    endpoint: string, 
    params?: Record<string, any>
): Promise<T> {
    const url = params 
        ? this.buildUrl(endpoint, params) 
        : `${this.baseUrl}${endpoint}`
    
    return this.request<T>(url.replace(this.baseUrl, ''), {
        method: "GET"
    })
}
```

**Что делает:**
Упрощенный метод для GET запросов.

**Пример:**
```typescript
// Без параметров
await apiClient.get('/users')
// → GET http://localhost:3000/api/users

// С параметрами
await apiClient.get('/users', { page: 1, limit: 10 })
// → GET http://localhost:3000/api/users?page=1&limit=10
```

---

#### 5️⃣ `post` - POST запросы

```typescript
async post<TRequest, TResponse>(
    endpoint: string,
    data: TRequest
): Promise<TResponse> {
    return this.request<TResponse>(endpoint, {
        method: "POST",
        body: JSON.stringify(data)
    })
}
```

**Что делает:**
Отправляет данные на сервер (создание, обновление).

**Пример:**
```typescript
await apiClient.post('/users', {
    name: 'John',
    email: 'john@example.com'
})
// → POST http://localhost:3000/api/users
// Body: { "name": "John", "email": "john@example.com" }
```

**Зачем два generic типа `<TRequest, TResponse>`:**
- `TRequest` - тип данных, которые отправляем
- `TResponse` - тип данных, которые получаем обратно

#### Пример 1: Получить всех пользователей с пагинацией

```typescript
async getUsers(params?: {
    page?: number
    limit?: number
    search?: string
}): Promise<IApiResponse<IUser[]>> {
    return this.get<IApiResponse<IUser[]>>("/users", params)
}

// Использование:
const users = await apiClient.getUsers({ page: 1, limit: 20 })
// → GET /api/users?page=1&limit=20
```

#### Пример 2: Получить одного пользователя по ID (path параметр)

```typescript
async getUserById(userId: string | number): Promise<IApiResponse<IUser>> {
    return this.get<IApiResponse<IUser>>(`/users/${userId}`)
}

// Использование:
const user = await apiClient.getUserById(123)
// → GET /api/users/123
```

#### Пример 3: Комбинация path + query параметров

```typescript
async getUserPosts(
    userId: string | number,
    params?: {
        status?: 'published' | 'draft'
        limit?: number
    }
): Promise<IApiResponse<any[]>> {
    return this.get<IApiResponse<any[]>>(`/users/${userId}/posts`, params)
}

// Использование:
const posts = await apiClient.getUserPosts(123, { 
    status: 'published', 
    limit: 5 
})
// → GET /api/users/123/posts?status=published&limit=5
```

## Документация

- [Лист API №1](https://github.com/TonnyL/Awesome_APIs)
- [Лист API №2](https://github.com/public-api-lists/public-api-lists)
- [React Router Documentation](https://reactrouter.com/)
- [React Hooks Guide](https://react.dev/reference/react)
- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [TypeScript](https://doka.guide/tools/static-types/)

# Как сдавать

- Создайте форк репозитория в вашей организации с названием-этого-репозитория-вашафамилия
- Используя ветку wip сделайте задание
- Зафиксируйте изменения в вашем репозитории
- Когда документ будет готов - создайте пул реквест из ветки wip (вашей) на ветку main (тоже вашу) и укажите меня (ktkv419) как reviewer

Не мержите сами коммит, это сделаю я после проверки задания

