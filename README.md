# API Documentation

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user. It validates the input, creates a user in the database, and returns an authentication token.

### Method

POST

### Validation Rules (from `user.route.js`)

- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### Service Logic (from `user.service.js`)

- Hashes the password using bcrypt.
- Saves the user data to the database.
- Generates a JWT token for authentication.

### User Model (from `usermodel.js`)

The user schema includes:

- `fullname` (object):
  - `firstname` (string): First name of the user.
  - `lastname` (string): Last name of the user.
- `email` (string): Unique email address.
- `password` (string): Hashed password.

### Required Data Format

The request body must include the following fields:

- `fullname` (object):
  - `firstname` (string): First name of the user.
  - `lastname` (string): Last name of the user.
- `email` (string): Email address of the user.
- `password` (string): Password for the user account.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```


## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate a user. It verifies the email and password, generates a JWT token, and returns the user details along with the token.

### Method
POST

### Required Data Format
The request body must include the following fields:
- `email` (string): Email address of the user.
- `password` (string): Password for the user account.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```


```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "12345",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```