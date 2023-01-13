CREATE TABLE Houses(
id INT(11) AUTO_INCREMENT,
area INT(10),
BHK INT(10),
address VARCHAR(100),    
PRIMARY KEY(id)
)ENGINE=INNODB;

CREATE TABLE Customers(
id INT(11) AUTO_INCREMENT,
name VARCHAR(30),
phoneNumber INT(11),
emailAddress VARCHAR(30),
PRIMARY KEY(id)
)ENGINE=INNODB;

CREATE TABLE Owners(
id INT(11) UNIQUE AUTO_INCREMENT,
name VARCHAR(30),
phoneNumber INT(11),
emailAddress VARCHAR(30),
noOfHouses INT(5),
PRIMARY KEY(id)
)ENGINE=INNODB;

CREATE TABLE RentedHouses(
id INT(11) AUTO_INCREMENT,
customerId INT(11),
houseId INT(11),
rentStartDate DATE,
rentDuration INT(11),
monthlyRent INT(11),
PRIMARY KEY(id),
FOREIGN KEY(customerId) REFERENCES Customers(id) on delete cascade,
FOREIGN KEY(houseId) REFERENCES Houses(id) on delete cascade
)ENGINE=INNODB;

CREATE TABLE OwnedHousesOwners(
id INT(11) AUTO_INCREMENT,
ownerId INT(11),
houseId INT(11) UNIQUE,
currentStatus VARCHAR(30),
PRIMARY KEY (id),
FOREIGN KEY(ownerId) REFERENCES Owners(id) on delete cascade,
FOREIGN KEY(houseId) REFERENCES Houses(id) on delete cascade
)ENGINE=INNODB;

-- CREATE TRIGGER trgAfterInsert AFTER INSERT ON OwnedHousesOwners
-- FOR EACH ROW
-- BEGIN
--     UPDATE Owners SET noOfHouses = noOfHouses+1 WHERE id =  NEW.ownerId;
-- END;