CREATE DATABASE  IF NOT EXISTS `school_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `school_management`;
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: school_management
-- ------------------------------------------------------
-- Server version	8.0.44

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `added_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin1','123',NULL),(2,'admin2','1234',NULL),(5,'gurjeet','gur123',1),(6,'mankirat','mank321',1),(7,'mankirat','mank321',1),(8,'mankirat','mank321',1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application` (
  `id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `subject` text,
  `body` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES (12,'Simran Kaur','2026-01-01 02:56:39','hey','hey I am now sending this from an another account'),(1,'Harsirat','2026-01-02 16:42:28','sick leave','i am not well'),(1,'Harsirat','2026-02-20 21:36:15','sick leave','not well today\r\n');
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `Date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `student1` varchar(5) DEFAULT NULL,
  `student2` varchar(5) DEFAULT NULL,
  `student3` varchar(5) DEFAULT NULL,
  `student4` varchar(5) DEFAULT NULL,
  `student5` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES ('2026-01-02 10:22:50','P','P','P','P','P'),('2026-01-02 10:22:50','P','A','P','P','P'),('2026-01-02 10:22:50','A','P','P','P','A'),('2026-01-02 10:22:50','P','P','A','P','P'),('2026-01-02 10:22:50','P','A','A','P','P'),('2026-01-02 10:22:50','P','P','P','A','P'),('2026-01-02 10:22:50','A','P','P','P','P'),('2026-01-02 10:22:50','P','P','A','A','P'),('2026-01-02 10:22:50','P','P','P','P','A'),('2026-01-02 10:22:50','A','A','P','P','P'),('2026-01-02 10:22:50','P','P','P','A','A'),('2026-01-02 10:22:50','P','A','P','P','A'),('2026-01-02 10:22:50','A','P','A','P','P'),('2026-01-02 10:22:50','P','P','P','P','P'),('2026-01-02 10:22:50','P','A','A','A','P'),('2026-01-02 10:22:50','A','P','P','A','P'),('2026-01-02 10:22:50','P','P','A','P','A'),('2026-01-02 10:22:50','P','A','P','A','P'),('2026-01-02 10:22:50','A','A','P','P','P'),('2026-01-02 10:22:50','P','P','P','A','P');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_thought`
--

DROP TABLE IF EXISTS `daily_thought`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_thought` (
  `thought_date` date NOT NULL,
  `thought` text NOT NULL,
  PRIMARY KEY (`thought_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_thought`
--

LOCK TABLES `daily_thought` WRITE;
/*!40000 ALTER TABLE `daily_thought` DISABLE KEYS */;
INSERT INTO `daily_thought` VALUES ('2026-01-04','while there is life, there is hope'),('2026-01-07','While there is life , there is hope'),('2026-01-09','WHILE THERE IS LIFE , THERE IS HOPE'),('2026-01-14','BE LIMITLESS'),('2026-01-16','TAKE THE RISK'),('2026-02-08','BE LIMITLESS'),('2026-02-18','TAKE THE RISK'),('2026-02-20','WHILE THERE IS LIFE , THERE IS HOPE');
/*!40000 ALTER TABLE `daily_thought` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT (curdate()),
  `body` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,'2026-01-17','Today is Holiday'),(2,'2026-02-18','test1'),(3,'2026-02-18','test2'),(4,'2026-02-20','lunch break is extended for 20 minutes'),(5,'2026-02-20','last period is cancelled');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roll_no` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dob` date DEFAULT NULL,
  `nationality` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `last_institution` varchar(255) NOT NULL,
  `father_name` varchar(255) NOT NULL,
  `mother_name` varchar(255) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_roll_no` (`roll_no`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,101,'Harsirat','12th','male','2007-05-07','Indian','7009381199','None','Jaspreet Singh','Supinder Kaur','123'),(2,102,'Ananya Verma','9th','Female','2009-08-22','Indian','9876543211','Ryan International School','Suresh Verma','Neha Verma','ananya123'),(3,103,'Rohan Singh','11th','Male','2007-01-18','Indian','9876543212','DAV Public School','Mahendra Singh','Pooja Singh','rohan123'),(4,104,'Priya Patel','12th','Female','2006-11-05','Indian','9876543213','Podar International School','Amit Patel','Kajal Patel','priya123'),(5,105,'Karan Mehta','10th','Male','2008-03-27','Indian','9876543214','St. Xavier?s School','Vikram Mehta','Rina Mehta','1234');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-21 21:32:26
