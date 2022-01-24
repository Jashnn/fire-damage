-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: firedamagedb
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `client_data`
--

DROP TABLE IF EXISTS `client_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_of_birth` datetime DEFAULT NULL,
  `date_oflca` datetime DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `land_owner` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `sur_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_data`
--

LOCK TABLES `client_data` WRITE;
/*!40000 ALTER TABLE `client_data` DISABLE KEYS */;
INSERT INTO `client_data` VALUES (13,'0025-07-14 05:30:00','0019-07-15 05:30:00','Ramesh12311','YES','NSW','singh'),(14,'2021-01-15 05:30:00','2021-01-15 05:30:00','tarun','YES','NSW','Singh'),(15,'2021-01-15 05:30:00','2021-01-15 05:30:00','tarun','YES','NSW','Singh'),(16,'2021-01-15 05:30:00','2021-01-15 05:30:00','tarun','YES','NSW','Singh'),(17,'2021-01-15 05:30:00','2021-01-15 05:30:00','tarun','YES','NSW','Singh'),(18,'2016-11-12 05:30:00','2016-11-12 05:30:00','Ramesh','YES','NSW','singh'),(19,'0025-07-14 05:30:00','0019-07-15 05:30:00','Ramesh123','YES','NSW','singh'),(20,'0025-07-14 05:30:00','0019-07-15 05:30:00','Ramesh12311','YES','NSW','singh'),(21,'0018-07-15 05:30:00','0011-07-15 05:30:00','Mohan','NO','TAS','singh'),(22,'0027-07-15 05:30:00','0026-07-15 05:30:00','MAHENDRA','NO','TAS','SHEKHAWAT');
/*!40000 ALTER TABLE `client_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurance_claim_data`
--

DROP TABLE IF EXISTS `insurance_claim_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurance_claim_data` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `comments` varchar(255) DEFAULT NULL,
  `fencing_cost` double DEFAULT NULL,
  `ground_costs` double DEFAULT NULL,
  `personal_labour_cost` double DEFAULT NULL,
  `policy_number` varchar(255) DEFAULT NULL,
  `client_data_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtrugsiese9ve5bu4oqi1h70ou` (`client_data_id`),
  CONSTRAINT `FKtrugsiese9ve5bu4oqi1h70ou` FOREIGN KEY (`client_data_id`) REFERENCES `client_data` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurance_claim_data`
--

LOCK TABLES `insurance_claim_data` WRITE;
/*!40000 ALTER TABLE `insurance_claim_data` DISABLE KEYS */;
INSERT INTO `insurance_claim_data` VALUES (1,'Please approve',7000,4000,11000,'P1004',13),(2,'Please approve',7000,4000,11000,'P1008',13),(3,'Please approve',7000,4000,11000,'P1004',14),(4,'Please approve',7000,4000,11000,'P1004',15),(5,'Please approve',7000,4000,11000,'P1004',16),(6,'Please approve',7000,4000,11000,'P1004',17),(7,'test',2000,1000,3000,'1009',18),(8,'test',2000,1000,3000,'1009',19),(9,'test',2000,1000,3000,'1009',13),(10,'test',20001,10001,30001,'10011',13),(11,'dfafdda',3434,34343,343,'1001',21),(12,'fdfdf',2323,3232,232,'2323',22);
/*!40000 ALTER TABLE `insurance_claim_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-20  2:11:35
