### Leitner-system
Application web basée sur le système de Leitner

#### Installation
1. Installer les dépendances avec `yarn`
2. Lancer le serveur avec `yarn start` (à partir du dossier "front-end" pour le front-end et à partir du dossier "back-end" pour le back-end)
#### Endpoint

```
HTTP: GET
URL: http://localhost:3005/sheets
```

```
HTTP: GET
URL: http://localhost:3005/sheets/1
```

```
HTTP: POST
URL: http://localhost:3005/user/login
BODY:
    {
      "username": "John",
      "password": "azerty"
    },
```

```
HTTP: POST
URL: http://localhost:3005/user/register
BODY:
    {
      "username": "Johnny",
      "password": "qwerty"
    },
```

```
HTTP: POST
URL: http://localhost:3005/sheets
BODY:
    {
      "id": 2,
      "question": "Quelle est la capitale de la Espagne ?",
      "answer": "Madrid",
      "tags": "géographie",
      "category": 1,
      "lastAttempted": "2023-10-09T23:40:46.603Z"
    }
```

```
HTTP: POST
URL: http://localhost:3005/sheets/questionnaire
```

```
HTTP: PUT
URL: http://localhost:3005/sheets/1/updateCategory
BODY:
{
    "userAnswer":"Madrid"
}
```