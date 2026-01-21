1. What is JWT (JSON Web Token)?

JWT (JSON Web Token) is a compact, self-contained, and URL-safe token used to securely transmit information between a client and a server. It is widely used for authentication and authorization in web applications.

Structure of JWT
A JWT consists of three parts, separated by dots (.):

Css
Header.Payload.Signature

Header
Contains metadata about the token:

>Algorithm used for signing (e.g., HS256)

>Token type (JWT)

Payload

Contains claims, which are pieces of information such as:

>User ID

>Role

>Token expiration time (exp)

The payload is Base64 encoded, not encrypted, so sensitive data should not be stored here.

Signature

The signature is created using:

>Encoded header

>Encoded payload

>Secret key

It ensures the token has not been modified.

2. How does JWT Authentication work?
>Authentication Flow:

1.User logs in with credentials (email/password)

2.Server verifies the credentials

3.Server generates a JWT

4.JWT is sent to the client

5.Client stores the token

6.Client sends the token with every request in the Authorization header

7.Server verifies the token before allowing access

JWT authentication is stateless, meaning the server does not store session data.

3. Advantages and Disadvantages of JWT over Sessions
Advantages

Stateless authentication

Better scalability

No need to store sessions in the database

Suitable for microservices and APIs

Cross-domain support

Disadvantages

Token revocation is difficult

Larger size than session IDs

Security risk if token is stolen

Token remains valid until it expires

4. Where should JWT be stored on the client?
Options:

>localStorage

Easy to use

Vulnerable to XSS attacks

>Cookies (HttpOnly)

More secure

Needs CSRF protection

>Memory (JavaScript variables)

Most secure

Lost on page refresh

Best Practice

Access Token → Memory

Refresh Token → HttpOnly Cookie

5. Difference between Access Token and Refresh Token
Access Token	Refresh Token
Short-lived	    Long-lived
Used to access  Used to generate new access
APIs	        tokens
Sent with every Sent only during refresh
request	
Stored in memory	Stored securely (cookies)

6. How do you handle JWT expiration and refresh?
Refresh Flow:

Access token expires

Server returns 401 Unauthorized

Client sends refresh token to refresh endpoint

Server validates refresh token

Server issues a new access token

Client retries the request

Refresh tokens should be:

Securely stored

Rotated

Revoked on logout

7. What is Role-Based Access Control (RBAC)?

RBAC is an authorization mechanism where access to resources is based on user roles.

Example Roles:

Admin → Full access

Editor → Create and update content

User → Read-only access

Roles are usually included inside the JWT payload.

8. How would you implement Authorization in an API?
Steps:

>Authentication Middleware

Verifies JWT

Extracts user information

>Authorization Middleware

Checks user role or permissions

Grants or denies access

This ensures that authenticated users can only access authorized resources.