
==== 1. Set up backend & basics

`npm init -y`
`npm install express` 
1xx - informational
2xx - success - 200: Ok: everything worked
              - 201: Created: new resources created
3xx - redirection - 301: redirect user and google know to go the new one ( e.g: http://exmaple.com --> https://example.com )
4xx - client errors - 400: bad request: request is invalid
                    - 401: unauthorized: must log in
                    - 403: forbidden: not allow to access this
                    - 404: not found: the url is not exist
                    - 429: too many requests
5xx - server errors - 500: internal server error: server broke
                    - 503: service unvailable: server is temporarily down.


==== 2. Nodemon & setting up routes

`npm install nodemon -D` --> support auto reload when change 
