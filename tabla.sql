CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contraseña VARCHAR(255) NOT NULL
);

GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'amaro' WITH GRANT OPTION;
FLUSH PRIVILEGES;