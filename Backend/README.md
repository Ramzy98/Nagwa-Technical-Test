## Setup and usage instructions

    1.  Installation Instructions :
        1.1. npm install

    2.  Run the server:
        2.1. npm run start

    3.  You must have a .env file with the following variables:
        5.1. PORT
        5.2. POSTGRES_HOST
        5.3. POSTGRES_USER
        5.4. POSTGRES_PASSWORD
        5.5. POSTGRES_DB_NAME

    4.  A running database is required.

    5.  Run database migrations:
        5.1. db-migrate up

    6.  You can seed the database with data:
        6.1. psql -U <username> -d <databasename> -a -f init.sql

    7.  Server is running on http://localhost:<PORT>

    8. Endpoints:
        8.1. http://localhost:<PORT>/words-list - GET Returns all words in the database.
        8.2. http://localhost:<PORT>/words-random - GET Returns a 10 random words from the database.
        8.3. http://localhost:<PORT>/scores-list -  GET Returns all scores in the database.
        8.4. http://localhost:<PORT>/score-rank/:score - GET Returns returns the rank of the user with the given score.
