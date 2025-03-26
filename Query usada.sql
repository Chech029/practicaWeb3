-- Crear la base de datos
CREATE DATABASE BIBILIOTECA;
GO

-- Usar la base de datos recién creada
USE BIBILIOTECA;
GO

-- Crear la tabla Usuarios
CREATE TABLE Estudiantes (
    UsuarioID INT PRIMARY KEY IDENTITY(1,1),
    Identificacion NVARCHAR(50) NOT NULL,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Contrasena NVARCHAR(100) NOT NULL,
    FechaRegistro DATETIME DEFAULT GETDATE()
);
GO

-- Crear la tabla Libros (si aplica)
CREATE TABLE LIBRO (
    LibroID INT PRIMARY KEY IDENTITY(1,1),
    Titulo NVARCHAR(200) NOT NULL,
    Autor NVARCHAR(100) NOT NULL,
    FechaPublicacion DATE,
    Genero NVARCHAR(50),
    UsuarioID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID)
);
GO



