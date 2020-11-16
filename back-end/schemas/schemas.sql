USE market;
-- please read the following before you edit anything on the code.
-- INDEX: (can be used to efficiently find all rows matching some column in your query and then walk
-- through only that subset of the table to find exact matches.)
-- ASC: (command is used to sort the data returned in ascending order)
-- CONSTRAINT:( is used to limit the type of data that can go into a table. 
-- This ensures the accuracy and reliability of the data in the table. 
-- If there is any violation between the constraint and the data action, the action is aborted.)
-- The UNIQUE" constraint ensures that all values in a column are different
-- ON DELETE NO ACTION :NO ACTION means that nothing will happen when you delete from your Subject table to the Topic table.
-- ON UPDATE NO ACTION: the same of ON DELETE NO ACTION
CREATE TABLE Role(
    idRole INT AUTO_INCREMENT NOT NULL,
    type VARCHAR(255) NULL,
    PRIMARY KEY (idRole)
);
CREATE TABLE user (
    id_user INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    address VARCHAR(255) NOT NULL,
    Phone INT NOT NULL,
    Role_idRole INT NOT NULL,
    create_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updata_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_user),
    UNIQUE INDEX id_user_UNIQUE (id_user ASC),
    UNIQUE INDEX email_UNIQUE (email ASC),
    UNIQUE INDEX username_UNIQUE (username ASC),
    UNIQUE INDEX Phone_UNIQUE (Phone ASC),
    INDEX fk_user_Role_idx (Role_idRole ASC),
    CONSTRAINT fk_user_Role FOREIGN KEY (Role_idRole) REFERENCES Role (idRole),
    is_deleted TINYINT DEFAULT 0
);
CREATE TABLE category (
    category_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (category_id)
);
CREATE TABLE subcategories (
    idsubcategories INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    category_category_id INT NOT NULL,
    PRIMARY KEY (idsubcategories),
    INDEX fk_subcategories_category1_idx (category_category_id ASC),
    CONSTRAINT fk_subcategories_category1 FOREIGN KEY (category_category_id) REFERENCES category (category_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
CREATE TABLE Post (
    idPost INT NOT NULL AUTO_INCREMENT,
    img VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    create_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updata_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    user_id_user INT NOT NULL,
    subcategories_idsubcategories INT NOT NULL,
    PRIMARY KEY (idPost),
    UNIQUE INDEX idPost_UNIQUE (idPost ASC),
    INDEX fk_Post_user1_idx (user_id_user ASC),
    INDEX fk_Post_subcategories1_idx (subcategories_idsubcategories ASC),
    CONSTRAINT fk_Post_user1 FOREIGN KEY (user_id_user) REFERENCES user (id_user) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Post_subcategories1 FOREIGN KEY (subcategories_idsubcategories) REFERENCES subcategories (idsubcategories) ON DELETE NO ACTION ON UPDATE NO ACTION
);
CREATE TABLE comments (
    idcomment INT NOT NULL AUTO_INCREMENT,
    comment VARCHAR(255) NOT NULL,
    user_id_user INT NOT NULL,
    Post_idPost INT NOT NULL,
    create_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updata_time TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (idcomment),
    INDEX fk_comments_user1_idx (user_id_user ASC),
    INDEX fk_comments_Post1_idx (Post_idPost ASC),
    CONSTRAINT fk_comments_user1 FOREIGN KEY (user_id_user) REFERENCES user (id_user) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_comments_Post1 FOREIGN KEY (Post_idPost) REFERENCES Post (idPost) ON DELETE NO ACTION ON UPDATE NO ACTION
);