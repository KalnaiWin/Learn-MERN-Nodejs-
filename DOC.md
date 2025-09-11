
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

==== 3. Optimize file and folder
==== 4. Setting up database MongoDB 
    - Create new project - create cluster - choose driver 
    - DONT USE npm install mongodb, use this instead `npm install mongoose`
    - copy password
    - go to Network access -> add a ip allow any to use ( dont delete anything )
    - `npm i dotenv` --> allow to access .env file

==== 5.Completing controllers
==== 6.Middleware & Rate limiting ( not allow users refresh or request over limit )
    `npm i @upstash/ratelimit @upstash/redis`
==== 7.FrontEnd setup
    `npm create vite@latest` --> react --> javascript --> npm install
    `npm install react-router`
    `npm i react-hot-toast`
    - Follow guide of vite tailwind to install
    - daisyUI : `npm i -D daisyui@latest` -- themes should be all
==== 8. HomePgae
    - Install icon: `npm i lucide-react`
    - Fetch API: `npm i axios`
    - Get data from fetching api: `npm i cors` for BACKEND
==== 9. Create Page
    - 