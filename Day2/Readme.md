1. What is HTTPS? How does it differ from HTTP?

HTTPS (HyperText Transfer Protocol Secure) is the secure version of HTTP. It uses SSL/TLS to encrypt data exchanged between the client and server, ensuring confidentiality and data integrity.
HTTP sends data in plain text, while HTTPS encrypts the data, protects against man-in-the-middle attacks, and authenticates the server.

2. Explain SSL/TLS. What is the SSL handshake process?

SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols used to secure communication over a network. TLS is the modern and secure version of SSL.

SSL/TLS Handshake Process:

Client sends a hello request with supported cipher suites

Server responds with a certificate and chosen cipher

Client verifies the certificate using a CA

Session key is exchanged securely

Encrypted communication begins

3. What is encryption? Explain symmetric vs asymmetric encryption.

Encryption converts plain text into cipher text to protect data.

Symmetric Encryption:
Uses the same key for encryption and decryption (e.g., AES). It is fast and efficient.

Asymmetric Encryption:
Uses a public key and a private key (e.g., RSA). It is more secure but slower.

4. What are certificates? What is a Certificate Authority (CA)?

A digital certificate verifies the identity of a server and contains its public key.
A Certificate Authority (CA) is a trusted organization that issues and validates certificates (e.g., Let’s Encrypt, DigiCert).

5. Difference between authentication and authorization

Authentication: Verifies who the user is (login)

Authorization: Determines what the user is allowed to access (permissions)

6. Explain session-based authentication. How do sessions work?

In session-based authentication:

User logs in

Server creates a session and stores it

Session ID is sent to the client via cookie

Client sends the session ID on each request

Server validates the session

7. What are cookies? What are their security attributes?

Cookies are small data stored in the browser and sent with requests.

Security Attributes:

HttpOnly – Prevents access via JavaScript

Secure – Sent only over HTTPS

SameSite – Controls cross-site request behavior

8. What is token-based authentication? How does it differ from session-based authentication?

Token-based authentication uses tokens (e.g., JWT) to authenticate users. The server does not store session data, making it stateless and scalable.

Difference:

Session-based auth stores data on the server

Token-based auth stores data on the client