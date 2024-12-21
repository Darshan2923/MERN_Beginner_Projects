# Backend API Documentation

## /api/users/register

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
curl -X POST http://localhost:8000/api/users/register \
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


### /api/users/login

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
curl -X POST http://localhost:8000/api/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### /api/users/profile

  ### Description
  This endpoint is used to get the profile of the logged-in user.

  ### Method
  `GET`

  ### Headers
  - `Authorization`: A string containing the JWT token (required)

  ### Responses
  Success
  Status Code: 200 OK
  Response Body:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

  ### Unauthorized
  Status Code: 401 Unauthorized
  Response Body:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

  ### Example Request

  ```bash
  curl -X GET http://localhost:8000/api/users/profile \
  -H "Authorization: Bearer jwt_token"
  ```

  ### /api/users/logout

  ### Description
  This endpoint is used to log out the logged-in user.

  ### Method
  `GET`

  ### Headers
  - `Authorization`: A string containing the JWT token (required)

  ### Responses
  Success
  Status Code: 200 OK
  Response Body:
  ```json
  {
    "message": "Logged out"
  }
  ```

  ### Unauthorized
  Status Code: 401 Unauthorized
  Response Body:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

  ### Example Request

  ```bash
  curl -X GET http://localhost:8000/api/users/logout \
  -H "Authorization: Bearer jwt_token"
  ```

  ## /api/captains/register

  ### Description
  This endpoint is used to register a new captain.

  ### Method
  `POST`

  ### Request Body
  The request body should be in JSON format and include the following fields:

  - `fullname`: An object containing:
    - `firstname`: A string with a minimum length of 3 characters (required)
    - `lastname`: A string with a minimum length of 3 characters (optional)
  - `email`: A string representing the captain's email (required, must be a valid email)
  - `password`: A string with a minimum length of 6 characters (required)
  - `vehicle`: An object containing:
    - `color`: A string with a minimum length of 3 characters (required)
    - `plate`: A string with a minimum length of 3 characters (required)
    - `capacity`: An integer with a minimum value of 1 (required)
    - `vehicleType`: A string that must be one of ['car', 'motorcycle', 'auto'] (required)

  Example:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

  ### Responses
  Success
  Status Code: 201 Created
  Response Body:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
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
  curl -X POST http://localhost:8000/api/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
  ```

  ## /api/captains/login

  ### Description
  This endpoint is used to log in an existing captain.

  ### Method
  `POST`

  ### Request Body
  The request body should be in JSON format and include the following fields:

  - `email`: A string representing the captain's email (required, must be a valid email)
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
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
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
  curl -X POST http://localhost:8000/api/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
  ```

  ## /api/captains/profile

  ### Description
  This endpoint is used to get the profile of the logged-in captain.

  ### Method
  `GET`

  ### Headers
  - `Authorization`: A string containing the JWT token (required)

  ### Responses
  Success
  Status Code: 200 OK
  Response Body:
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    }
  }
  ```

  ### Unauthorized
  Status Code: 401 Unauthorized
  Response Body:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

  ### Example Request

  ```bash
  curl -X GET http://localhost:8000/api/captains/profile \
  -H "Authorization: Bearer jwt_token"
  ```

  ## /api/captains/logout

  ### Description
  This endpoint is used to log out the logged-in captain.

  ### Method
  `GET`

  ### Headers
  - `Authorization`: A string containing the JWT token (required)

  ### Responses
  Success
  Status Code: 200 OK
  Response Body:
  ```json
  {
    "message": "Logout successfully"
  }
  ```

  ### Unauthorized
  Status Code: 401 Unauthorized
  Response Body:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

  ### Example Request

  ```bash
  curl -X GET http://localhost:8000/api/captains/logout \
  -H "Authorization: Bearer jwt_token"
  ```
