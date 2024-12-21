# Backend API Documentation

## /api/auth/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing the user's email (required, must be a valid email)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses
Success
Status Code: 201 Created
Response Body:
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
Status Code: 400 Bad Request
Response Body:
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

### Email Already in Use
Status Code: 400 Bad Request
Response Body:
```json
{
  "errors": [
    {
      "msg": "Email is already in use",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Example Request

```bash
curl -X POST http://localhost:8000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```


### /api/auth/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

- `email`: A string representing the user's email (required, must be a valid email)
- `password`: A string with a minimum length of 6 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses
Success
Status Code: 200 OK
Response Body:
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
Status Code: 400 Bad Request
Response Body:
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

### Invalid Credentials
Status Code: 401 Unauthorized
Response Body:
```json
{
  "message": "Invalid email or password"
}
```

### Example Request

```bash
curl -X POST http://localhost:8000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```
