<h1>Ensolvers test</h1>

<h1>How to start app</h1>

<div>
  <ol>
  <li>In the backend folder create a file .env with the following variables
  </br>
  DB_USER={postgresuser}
  </br>
  DB_PASSWORD={your postgres password}
  </br>
  DB_HOST=localhost 
  </br>
  DB_NAME=tasksdb
  
  </li>
  <li>Connect to Postgre with SQL Shell</li>
  <ul>
  <li>Insert the next commands on the SQL Shell terminal:</li>
  <li>CREATE DATABASE tasksdb</li>
  <li>CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) UNIQUE,
    description VARCHAR(255)
);</li>
  </ul>
  <li>On the path /backend execute npm install and npm run dev </li>
  <li>On the path /frontend execute npm install and npm start</li>
 
  </ol>
</div>
