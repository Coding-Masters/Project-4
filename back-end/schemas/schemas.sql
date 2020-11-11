-- write the database name that you use here
USE db_name;
CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    role_id INT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(255),
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id, role_id)
);
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS mydb.Comments (
    id INT NOT NULL,
    posts_id INT NOT NULL,
    posts_users_id INT NOT NULL,
    users_id INT NOT NULL,
    users_role_id INT NOT NULL,
    posts_subcategories_id INT NOT NULL,
    posts_subcategories_categories_idcategories INT NOT NULL,
    masege VARCHAR(45) NULL,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP,
    PRIMARY KEY (
        id,
        posts_id,
        posts_users_id,
        users_id,
        users_role_id,
        posts_subcategories_id,
        posts_subcategories_categories_idcategories
    ),