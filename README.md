# Simple JWT server
Receive and verify JWT tokens.

Postman collection is available in the root folder.

# Usage
To start the server: `nodejs index.js`


# Routes
## `GET localhost:3000/auth/sign` 
Sends a newly generated JWT token.

## `POST localhost:3000/auth/verify`
Expects JSON in the body in the format:

```
{
    jwt: string
} 
```

Server sends back the token and a boolean stating the validity of the token

```
{
    verify: string
    token: string
}
```