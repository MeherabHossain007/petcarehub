CREATE TABLE shop(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "price" VARCHAR(255) NOT NULL,
    "description" VARCHAR(800) NOT NULL,
    "stock" VARCHAR(255) NOT NULL,
    "photo" VARCHAR(500) NOT NULL
)