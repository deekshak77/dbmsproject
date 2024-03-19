create database db;
CREATE TABLE db.Movie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    director VARCHAR(255),
    releaseDate DATE,
    duration INT,
    synopsis TEXT,
    rating DECIMAL(3,1)    -- Add other attributes as needed
);

-- Create Theater table
CREATE TABLE db.Theater (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    numScreens INT,
    seatingCapacityPerScreen INT
    -- Add other attributes as needed
);

-- Create Showtime table
CREATE TABLE db.Showtime (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE,
    time TIME,
    movieId INT,
    theaterId INT,
    screenNumber INT,
    ticketPrice DECIMAL(8,2),
    FOREIGN KEY (movieId) REFERENCES Movie(id),
    FOREIGN KEY (theaterId) REFERENCES Theater(id)
    -- Add other attributes as needed
);

-- Create User table
CREATE TABLE db.User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phoneNumber VARCHAR(20),
    paymentInfo VARCHAR(255)
    -- Add other attributes as needed
);

-- Create Booking table
CREATE TABLE db.Booking (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    showtimeId INT,
    numTickets INT,
    seatNumbers VARCHAR(255),
    bookingDate DATETIME,
    totalPrice DECIMAL(8,2),
    paymentStatus ENUM('Pending', 'Completed', 'Cancelled'),
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (showtimeId) REFERENCES Showtime(id)
    -- Add other attributes as needed
);
-- Insert into Movie table
INSERT INTO db.Movie (title, genre, director, releaseDate, duration, synopsis, rating) 
VALUES ('The Shawshank Redemption', 'Drama', 'Frank Darabont', '1994-09-23', 142, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 9.3),
       ('The Godfather', 'Crime, Drama', 'Francis Ford Coppola', '1972-03-24', 175, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 9.2),
       ('The Dark Knight', 'Action, Crime, Drama', 'Christopher Nolan', '2008-07-18', 152, 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 9.0);
-- Insert into Theater table
INSERT INTO db.Theater (name, location, numScreens, seatingCapacityPerScreen) 
VALUES ('Cineplex Downtown', '123 Main St, Cityville', 5, 150),
       ('Regal Cinemas', '456 Elm St, Townsville', 4, 120),
       ('AMC Theatres', '789 Oak St, Villagetown', 6, 200);
-- Insert into Showtime table
INSERT INTO db.Showtime (date, time, movieId, theaterId, screenNumber, ticketPrice) 
VALUES ('2024-03-20', '13:00:00', 1, 1, 1, 10.00),
       ('2024-03-20', '15:30:00', 2, 2, 2, 12.00),
       ('2024-03-20', '18:00:00', 3, 3, 1, 11.00);
-- Insert into User table
INSERT INTO db.User (username, password, email, phoneNumber, paymentInfo) 
VALUES ('user1', 'password1', 'user1@example.com', '123-456-7890', 'Visa ****1234'),
       ('user2', 'password2', 'user2@example.com', '987-654-3210', 'Mastercard ****5678');
-- Insert into Booking table
INSERT INTO db.Booking (userId, showtimeId, numTickets, seatNumbers, bookingDate, totalPrice, paymentStatus) 
VALUES (1, 1, 2, 'A1, A2', '2024-03-19 10:30:00', 20.00, 'Completed'),
       (2, 3, 3, 'B1, B2, B3', '2024-03-19 11:45:00', 33.00, 'Completed');