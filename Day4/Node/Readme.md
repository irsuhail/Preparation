1.What is CORS? Why does it exist?

CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls which origins are allowed to access resources on a server.

It exists because browsers block cross-origin requests by default to prevent malicious websites from stealing data.

Example:

Frontend: https://example.com
API:      https://api.example.com


This is a cross-origin request → needs CORS headers.

2️.Explain the Same-Origin Policy

The Same-Origin Policy (SOP) restricts a web page from accessing resources from another origin.

An origin =protocol + domain + port


Allowed:https://example.com/page → https://example.com/api


Blocked:https://example.com → https://api.example.com


SOP protects users from:

>Data theft

>Session hijacking

>Malicious scripts

3.What are preflight requests? When do they occur?

A preflight request is an OPTIONS request sent by the browser before the actual request.

It occurs when the request is not simple, for example:

HTTP methods other than GET, POST, HEAD

Custom headers (Authorization)

Content-Type: application/json


4️.How do you configure CORS in Express?
Using cors middleware is Recommended:

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

Manual headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

5.What is CSRF? How do you prevent it?

CSRF (Cross-Site Request Forgery) tricks a logged-in user into performing an unwanted action.

Example:
A fake site triggers:
POST /transfer-money


using your cookies.

Prevention:

CSRF tokens

SameSite cookies (SameSite=Strict)

Double submit cookies

Validate Origin / Referer headers

6️.What is XSS? How do you prevent it?

XSS (Cross-Site Scripting) allows attackers to inject malicious JavaScript into web pages.

Types:

Stored XSS

Reflected XSS

DOM-based XSS

Prevention:

Escape user input

Use textContent instead of innerHTML

Content Security Policy (CSP)

HttpOnly cookies

7️.What is SQL Injection? How do you prevent it?

SQL Injection occurs when untrusted input is concatenated into SQL queries.



SELECT * FROM users WHERE id = ' + userInput

Prevention:

Prepared statements / parameterized queries

ORM (Sequelize, Prisma)

Input validation

Least privilege DB users

8️.What are rate limiting and throttling? Why are they important?
Rate Limiting

Limits number of requests in a time window.

Example:

100 requests / minute per IP

Throttling

Slows down requests when limits are exceeded instead of blocking.

Importance:

Prevent brute-force attacks

Protect APIs from abuse

Improve system stability

Reduce DDoS impact

9️.What is the Principle of Least Privilege?

The Principle of Least Privilege (PoLP) means:

Give users, services, and systems only the minimum permissions required.

Examples:

DB user can SELECT, not DROP

API token only accesses specific routes

Frontend cannot access admin APIs

Benefits:

Limits damage from breaches

Reduces attack surface

Improves overall security