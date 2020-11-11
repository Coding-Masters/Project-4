-- write the database name that you use here
USE db_name;

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    
    
   
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);
CREATE TABLE posts(
	id INT AUTO_INCREMENT NOT NULL,
    users_id INT,
    subcategories_id INT, 
    subcategories_categories_idcategories INT,
    img VARCHAR(45),
    details VARCHAR(45),
    create_time TIMESTAMP,
    update_time TIMESTAMP,
    PRIMARY KEY (id)
    
);
CREATE TABLE categories(
	id INT AUTO_INCREMENT NOT NULL,
    categoriesname VARCHAR(45),
    posts_id INT,
    posts_users_id INT,
    posts_subcategories_id INT,
    posts_subcategories_categories_idcategories INT,
	PRIMARY KEY (id)
);
CREATE TABLE subcategories(
	id INT AUTO_INCREMENT NOT NULL,
    categories_idcategories INT,
    name VARCHAR(45)
	
);