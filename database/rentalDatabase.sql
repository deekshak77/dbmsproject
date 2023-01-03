CREATE TABLE Houses(
id INT(11) AUTO_INCREMENT,
area INT(10),
BHK INT(10),
address VARCHAR(100),    
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(id)
)ENGINE=INNODB;

CREATE TABLE Customers(
id INT(11) AUTO_INCREMENT,
name VARCHAR(30),
phoneNumber INT(11),
emailAddress VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(id)
)ENGINE=INNODB;

CREATE TABLE Owners(
id INT(11) UNIQUE AUTO_INCREMENT,
studentId VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(studentId),
FOREIGN KEY(studentId) REFERENCES Users(userId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE RentedHouses(
id INT(11) UNIQUE AUTO_INCREMENT,
professorId VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(professorId),
FOREIGN KEY(professorId) REFERENCES Users(userId) on delete cascade
)ENGINE=INNODB;

CREATE TABLE OwnedHousesOwners(
id INT(11) UNIQUE AUTO_INCREMENT,
bookId VARCHAR(30),
publisherName VARCHAR(30),
createdAt DATE,
updatedAt DATE,
PRIMARY KEY (bookId,publisherName),
FOREIGN KEY (bookId) REFERENCES Book(bookId) on delete cascade
)ENGINE=INNODB;

