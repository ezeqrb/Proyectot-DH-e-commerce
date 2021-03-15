-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: DH-Project
-- ------------------------------------------------------
-- Server version	5.7.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Cart`
--

DROP TABLE IF EXISTS `Cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `state` varchar(45) NOT NULL DEFAULT 'open',
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart`
--

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;
INSERT INTO `Cart` VALUES (1,3,'open'),(2,5,'open');
/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cart_Product`
--

DROP TABLE IF EXISTS `Cart_Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cart_Product` (
  `Cart_id` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  KEY `Cart_id_idx` (`Cart_id`),
  KEY `Product_id_idx` (`Product_id`),
  CONSTRAINT `Cart_id` FOREIGN KEY (`Cart_id`) REFERENCES `Cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Product_id` FOREIGN KEY (`Product_id`) REFERENCES `Products` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart_Product`
--

LOCK TABLES `Cart_Product` WRITE;
/*!40000 ALTER TABLE `Cart_Product` DISABLE KEYS */;
INSERT INTO `Cart_Product` VALUES (1,2,'2021-03-06 00:07:01','2021-03-06 00:07:01'),(1,2,'2021-03-06 00:11:53','2021-03-06 00:11:53'),(1,2,'2021-03-08 19:45:06','2021-03-08 19:45:06'),(1,4,'2021-03-13 13:12:58','2021-03-13 13:12:58'),(2,4,'2021-03-14 17:12:08','2021-03-14 17:12:08'),(2,4,'2021-03-14 17:53:19','2021-03-14 17:53:19'),(2,2,'2021-03-15 00:27:30','2021-03-15 00:27:30'),(2,2,'2021-03-15 00:28:19','2021-03-15 00:28:19'),(2,2,'2021-03-15 01:27:26','2021-03-15 01:27:26'),(2,2,'2021-03-15 01:31:15','2021-03-15 01:31:15'),(2,12,'2021-03-15 01:39:21','2021-03-15 01:39:21'),(2,7,'2021-03-15 01:39:26','2021-03-15 01:39:26'),(2,20,'2021-03-15 01:51:13','2021-03-15 01:51:13'),(2,6,'2021-03-15 01:51:18','2021-03-15 01:51:18'),(2,18,'2021-03-15 01:51:23','2021-03-15 01:51:23');
/*!40000 ALTER TABLE `Cart_Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` char(255) NOT NULL,
  `Price` int(10) unsigned NOT NULL,
  `Description` text NOT NULL,
  `Category` char(255) NOT NULL,
  `Size` char(255) NOT NULL,
  `Colour` char(255) NOT NULL,
  `Brand` char(255) NOT NULL,
  `Picture` longtext NOT NULL,
  `Sport` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (2,'Zapatillas',500,'Zapatillas para correr','Hombre','45','Negro','Adidas','Picture-1615750877058.jpg','Running'),(3,'Remera',455,'Remera de Mujer','Hombre','S','Blanco','Puma','Picture-1615750620033.jpg',''),(4,'HH',55,'HH','Hombre','HH','HH','HH','Picture-1614135316990.jpg','HH'),(6,'g',6,'h','Hombre','S','J','Niks','Picture-1614135316990.jpg','hh'),(7,'H',7,'K','Hombre','S','K','Nike','Picture-1614135316990.jpg','HJJJJ'),(8,'Zapatillas',300,'Zapatillas para correr','Hombre','43','Negro','Nike','image-1615750192477.jpg','Running'),(9,'Air',32,'Zapatillas para correr','Hombre','45','Negro','Nike','image-1615750232344.jpg','Running'),(10,'Zapatillas',800,'Zapatillas para correr','Hombre','45','Negro','Nike','image-1615750288752.jpg','Running'),(11,'Zapatillas',800,'Zapatillas para correr','Mujer','36','Negro','Nike','image-1615750343117.jpg','Running'),(12,'Zapatillas',300,'Zapatillas para correr','Mujer','36','Negro','Nike','image-1615750370553.jpg','Running'),(13,'Zapatillas',450,'Zapatillas para correr','Mujer','34','Negro','Nike','image-1615750397045.jpg','Running'),(14,'Zapatillas',900,'Zapatillas para correr','Mujer','40','Negro','Nike','image-1615750421511.jpg','Running'),(15,'Zapatillas',450,'Zapatillas para correr','Mujer','35','Negro','Nike','image-1615750444529.jpg','Running'),(16,'Zapatillas',600,'Zapatillas para correr','Kid','24','Negro','Nike','image-1615750508335.jpg','Running'),(17,'Zapatillas',800,'Zapatillas para correr','Kid','34','Negro','Nike','image-1615750529478.jpg','Running'),(18,'Zapatillas',450,'Zapatillas para correr','Kid','40','Negro','Nike','image-1615750554543.jpg','Running'),(19,'Zapatillas',300,'Zapatillas para correr','Kid','34','Negro','Nike','image-1615750581240.jpg','Running'),(20,'Zapatillas',800,'Zapatillas para correr','Kid','34','Negro','Nike','image-1615750598878.jpg','Running');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `passcrypt` varchar(255) NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `admin` varchar(45) NOT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Julian','juli@correo.com','$2a$10$L7amLdFyCy.YQi/mqgDU5uIJFJG7gZ861pQ0jSE1llmNYnKhvGnS.','2021-02-04 19:38:34','2021-02-04 19:38:34','false'),(2,'Eial','eial@eial.com','$2a$10$x01zeALfU6yJXSAUJkJEZe7VMAX0fUeLagd5JvdxPnBgRgSbSaTQ6','2021-02-22 13:25:31','2021-02-22 13:25:31','false'),(3,'Eial','juli@juli.com','julian','2021-03-13 13:24:03','2021-02-24 02:23:28','true'),(5,'Carolina','carol@carol.com','$2a$10$Tx26oVmHLlsMXazh/RjgWeczM7ZYuqgnXr7.j3QJQCj30z17I3YKC','2021-03-13 13:37:16','2021-03-13 13:36:13','true');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-14 23:07:09
