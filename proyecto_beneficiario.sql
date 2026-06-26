-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: zephyr.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Convocatoria`
--

DROP TABLE IF EXISTS `Convocatoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Convocatoria` (
  `Id_Convocatoria` int NOT NULL AUTO_INCREMENT,
  `Convocatoria` varchar(5) NOT NULL,
  PRIMARY KEY (`Id_Convocatoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Convocatoria`
--

LOCK TABLES `Convocatoria` WRITE;
/*!40000 ALTER TABLE `Convocatoria` DISABLE KEYS */;
INSERT INTO `Convocatoria` VALUES (1,'JE1'),(2,'JE2'),(3,'JE3'),(4,'JE4'),(5,'JU1'),(6,'JU2'),(7,'JU3'),(8,'JU4'),(9,'JU5'),(10,'JU6');
/*!40000 ALTER TABLE `Convocatoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discapacidad`
--

DROP TABLE IF EXISTS `Discapacidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Discapacidad` (
  `Id_Discapacidad` int NOT NULL AUTO_INCREMENT,
  `Discapacidad` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Discapacidad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discapacidad`
--

LOCK TABLES `Discapacidad` WRITE;
/*!40000 ALTER TABLE `Discapacidad` DISABLE KEYS */;
INSERT INTO `Discapacidad` VALUES (1,'NO'),(2,'SI');
/*!40000 ALTER TABLE `Discapacidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Edad`
--

DROP TABLE IF EXISTS `Edad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Edad` (
  `Id_Edad` int NOT NULL AUTO_INCREMENT,
  `Edad` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Edad`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Edad`
--

LOCK TABLES `Edad` WRITE;
/*!40000 ALTER TABLE `Edad` DISABLE KEYS */;
INSERT INTO `Edad` VALUES (1,'18-21 AÑOS'),(2,'22-25 AÑOS'),(3,'26-28 AÑOS'),(4,'MENOR DE 18 AÑOS'),(5,'SIN INFORMACION');
/*!40000 ALTER TABLE `Edad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Grupo_etnico`
--

DROP TABLE IF EXISTS `Grupo_etnico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Grupo_etnico` (
  `Id_Grupo_Etnico` int NOT NULL AUTO_INCREMENT,
  `Grupo_Etnico` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Grupo_Etnico`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Grupo_etnico`
--

LOCK TABLES `Grupo_etnico` WRITE;
/*!40000 ALTER TABLE `Grupo_etnico` DISABLE KEYS */;
INSERT INTO `Grupo_etnico` VALUES (1,'NINGUNO'),(2,'COMUNIDADES NEGRAS O AFROCOLOMBIANAS RAIZALES O PALENQUERAS'),(3,'INDIGENA'),(4,'SIN INFORMACION'),(5,'GITANO(A) O RROM');
/*!40000 ALTER TABLE `Grupo_etnico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hechos`
--

DROP TABLE IF EXISTS `Hechos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hechos` (
  `Id_Hechos` int NOT NULL AUTO_INCREMENT,
  `Id_Convocatoria` int NOT NULL,
  `Id_Localidad` int NOT NULL,
  `Id_Institucion` int NOT NULL,
  `Id_Nucleo` int NOT NULL,
  `Id_Modalidad` int NOT NULL,
  `Id_Sector` int NOT NULL,
  `Id_Zona` int NOT NULL,
  `Id_Saber11` int NOT NULL,
  `Id_Sexo` int NOT NULL,
  `Id_Edad` int NOT NULL,
  `Id_Grupo_Etnico` int NOT NULL,
  `Id_Victima` int NOT NULL,
  `Id_Discapacidad` int NOT NULL,
  `Id_Sisben` int NOT NULL,
  `Cant_beneficiarios` int NOT NULL,
  PRIMARY KEY (`Id_Hechos`),
  KEY `fk_Convocatoria` (`Id_Convocatoria`),
  KEY `fk_Localidad` (`Id_Localidad`),
  KEY `fk_Institucion` (`Id_Institucion`),
  KEY `fk_Nucleo` (`Id_Nucleo`),
  KEY `fk_Modalidad` (`Id_Modalidad`),
  KEY `fk_Sector` (`Id_Sector`),
  KEY `fk_Zona` (`Id_Zona`),
  KEY `fk_Saber11` (`Id_Saber11`),
  KEY `fk_Sexo` (`Id_Sexo`),
  KEY `fk_Edad` (`Id_Edad`),
  KEY `fk_Victima` (`Id_Victima`),
  KEY `fk_Discapacidad` (`Id_Discapacidad`),
  KEY `fk_Sisben` (`Id_Sisben`),
  CONSTRAINT `fk_Convocatoria` FOREIGN KEY (`Id_Convocatoria`) REFERENCES `Convocatoria` (`Id_Convocatoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Discapacidad` FOREIGN KEY (`Id_Discapacidad`) REFERENCES `Discapacidad` (`Id_Discapacidad`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Edad` FOREIGN KEY (`Id_Edad`) REFERENCES `Edad` (`Id_Edad`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Institucion` FOREIGN KEY (`Id_Institucion`) REFERENCES `Institucion` (`Id_Institucion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Localidad` FOREIGN KEY (`Id_Localidad`) REFERENCES `Localidad` (`Id_Localidad`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Modalidad` FOREIGN KEY (`Id_Modalidad`) REFERENCES `Modalidad` (`Id_Modalidad`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Nucleo` FOREIGN KEY (`Id_Nucleo`) REFERENCES `Nucleo_Basico` (`Id_Nucleo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Saber11` FOREIGN KEY (`Id_Saber11`) REFERENCES `Saber11` (`Id_Saber11`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Sector` FOREIGN KEY (`Id_Sector`) REFERENCES `Sector` (`Id_Sector`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Sexo` FOREIGN KEY (`Id_Sexo`) REFERENCES `Sexo` (`Id_Sexo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Sisben` FOREIGN KEY (`Id_Sisben`) REFERENCES `Sisben` (`Id_Sisben`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Victima` FOREIGN KEY (`Id_Victima`) REFERENCES `Victima` (`Id_Victima`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Zona` FOREIGN KEY (`Id_Zona`) REFERENCES `Zona_colegio` (`Id_Zona`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hechos`
--

LOCK TABLES `Hechos` WRITE;
/*!40000 ALTER TABLE `Hechos` DISABLE KEYS */;
INSERT INTO `Hechos` VALUES (1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1),(2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1),(3,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1),(4,1,1,1,3,1,1,1,1,2,1,1,1,1,3,1),(5,1,1,1,4,1,1,1,1,1,2,1,1,1,2,1),(6,1,1,1,5,1,1,1,1,2,2,1,1,1,4,1),(7,1,1,1,6,1,2,1,1,1,1,1,1,1,4,1),(8,1,1,2,7,1,2,1,1,2,1,1,1,1,3,1),(9,1,1,2,7,1,1,1,1,1,1,1,1,1,4,1),(10,1,1,2,7,1,1,1,1,1,2,1,1,1,4,1),(11,1,1,2,7,1,1,1,1,1,3,1,1,1,1,1),(12,1,1,2,7,1,1,1,2,1,2,1,1,1,2,1),(13,1,1,3,7,1,1,1,2,1,4,2,1,1,2,1),(14,1,1,4,5,1,2,1,2,2,4,1,1,1,4,1),(15,1,1,5,8,1,1,1,2,2,4,1,1,1,4,1),(16,1,1,5,9,1,2,1,2,2,1,1,2,1,3,1),(17,1,1,5,10,1,1,1,3,1,2,1,1,1,2,1),(18,1,1,5,11,1,1,1,3,2,1,1,2,1,2,1),(19,1,1,5,11,1,2,1,2,2,1,1,1,1,2,1),(20,1,1,5,12,1,2,1,2,2,2,1,1,1,2,1),(21,1,1,6,8,1,1,1,2,1,2,1,1,1,2,1),(22,1,1,6,13,1,1,1,2,1,2,1,1,1,3,1),(23,1,1,6,13,1,1,1,2,2,4,1,2,1,2,1),(24,1,1,6,14,1,1,1,3,2,1,1,2,1,2,1),(25,1,1,6,7,1,1,1,2,1,1,1,1,1,5,1),(26,1,1,6,7,1,1,1,2,1,1,3,1,1,3,1),(27,1,1,6,15,1,1,1,2,1,1,1,1,1,3,1),(28,1,1,6,15,1,1,1,2,2,4,1,1,1,3,1),(29,1,1,6,15,1,1,1,2,1,4,1,1,1,3,1),(30,1,1,6,16,1,2,1,2,1,1,1,1,1,4,2),(31,1,1,6,11,1,2,1,2,2,4,1,1,1,2,1),(32,1,1,7,17,1,1,1,2,2,2,1,1,1,5,1),(33,1,1,8,18,1,1,1,3,1,4,1,1,1,5,1),(34,1,1,8,11,1,1,1,2,1,4,1,1,1,2,1),(35,1,1,8,11,1,1,1,2,1,1,1,1,1,3,1),(36,1,1,8,19,2,1,1,2,2,1,1,1,1,4,1),(37,1,1,8,19,2,3,2,3,2,3,1,1,1,5,1),(38,1,1,8,19,2,1,1,2,2,1,1,1,1,4,1),(39,1,1,9,20,1,1,1,2,2,1,1,1,1,2,1),(40,1,1,9,7,2,1,1,2,2,4,1,1,1,4,1),(41,1,1,10,7,1,1,1,2,1,1,1,1,1,1,1),(42,1,1,11,16,1,1,1,4,1,2,1,1,1,2,1),(43,1,1,11,17,3,1,1,3,1,1,1,1,1,4,1),(44,1,1,11,17,3,2,1,2,2,4,1,1,1,4,1),(45,1,1,12,21,1,1,1,3,2,4,1,2,1,2,1),(46,1,1,12,21,1,1,1,2,2,1,1,1,1,2,1),(47,1,1,12,22,1,1,1,3,2,2,1,1,1,5,1),(48,1,1,12,23,1,1,1,2,1,3,1,1,1,3,1),(49,1,1,12,23,1,1,1,2,1,2,1,1,1,3,1),(50,1,1,12,24,1,2,1,1,1,3,1,1,1,5,1),(51,1,1,12,25,1,1,3,4,2,1,1,1,1,2,1),(52,1,1,13,21,1,1,1,2,1,2,1,1,1,3,1),(53,1,1,14,16,2,1,1,3,2,1,1,1,1,2,1),(54,1,1,15,8,1,1,1,2,1,1,1,1,1,2,1),(55,1,1,15,8,1,1,1,1,2,3,1,1,1,2,1),(56,1,1,15,8,1,1,1,2,2,1,1,1,1,2,1),(57,1,1,16,26,1,1,1,1,1,3,1,1,1,4,1),(58,1,1,17,8,1,1,1,3,2,1,1,1,1,3,1),(59,1,1,17,27,1,1,1,2,1,2,1,1,1,3,1),(60,1,1,18,28,1,1,1,2,2,1,1,1,1,4,1),(61,1,1,18,28,1,1,1,2,2,1,1,1,1,2,1),(62,1,1,19,8,1,2,1,2,1,4,1,1,1,2,1),(63,1,1,19,29,1,1,3,3,1,2,1,1,1,3,1),(64,1,1,19,16,1,1,1,2,1,1,1,2,1,2,1),(65,1,1,20,24,1,1,1,2,1,1,1,1,1,3,1),(66,1,1,20,11,1,1,1,2,2,1,1,1,1,4,1),(67,1,1,21,8,1,1,1,3,2,1,1,2,1,2,1),(68,1,1,21,14,2,2,1,2,2,1,1,1,1,4,1),(69,1,1,21,17,2,1,1,1,2,3,1,1,1,3,1),(70,1,1,21,17,2,2,1,2,2,4,1,1,1,2,1),(71,1,1,22,15,4,1,1,3,2,1,1,1,1,2,1),(72,1,1,23,15,1,1,1,2,1,4,1,1,1,2,1),(73,1,1,23,15,1,1,1,2,2,1,1,1,1,5,1),(74,1,1,23,15,1,1,1,2,1,4,1,1,1,4,1),(75,1,1,23,15,2,1,1,2,2,1,1,1,1,2,1),(76,1,1,24,13,1,1,1,3,2,1,1,1,1,3,1),(77,1,1,24,17,1,1,1,2,1,4,1,1,1,4,1),(78,1,1,25,15,1,1,3,2,1,2,1,1,1,3,1),(79,1,1,25,16,1,2,1,2,1,4,1,1,1,4,1),(80,1,1,25,30,1,1,1,3,1,1,1,1,1,5,1),(81,1,1,25,30,1,1,1,1,1,3,1,1,1,3,1),(82,1,1,26,7,2,1,3,3,2,1,1,1,1,3,1),(83,1,1,27,9,1,1,1,2,1,1,1,1,1,2,1),(84,1,1,27,15,1,1,1,2,1,2,1,1,1,4,1),(85,1,1,28,11,1,1,1,3,2,2,1,2,1,3,1),(86,1,1,28,31,1,1,1,2,1,4,1,1,1,4,1),(87,1,1,28,31,1,1,1,2,1,1,1,1,1,4,1),(88,1,1,29,15,2,1,1,2,1,4,1,1,1,5,1),(89,1,1,30,15,1,2,1,3,2,4,1,1,1,5,1),(90,1,1,31,8,1,1,1,2,1,2,1,1,1,4,1),(91,1,1,31,16,1,1,1,2,1,4,1,1,1,4,1),(92,1,1,31,16,1,2,1,1,1,2,1,1,1,1,1),(93,1,2,2,7,1,3,2,1,2,1,1,1,1,4,1),(94,1,2,2,7,1,1,3,1,2,3,1,1,1,3,1),(95,1,2,4,8,5,1,1,2,1,4,1,1,1,3,1),(96,1,2,4,15,5,2,1,2,2,4,1,1,1,5,1),(97,1,2,32,32,1,2,1,2,1,1,1,1,1,2,1),(98,1,2,33,14,1,1,3,2,2,1,1,1,1,3,1),(99,1,2,9,20,1,1,1,2,2,1,1,1,1,3,1),(100,1,2,9,1,1,1,3,3,2,1,1,1,1,3,1),(101,1,2,9,10,1,2,1,2,2,1,1,1,1,2,1),(102,1,2,12,22,1,1,3,3,1,4,1,1,1,3,1),(103,1,2,12,15,5,2,1,1,2,3,1,2,1,2,1),(104,1,2,12,25,1,1,1,2,2,1,1,1,1,2,1),(105,1,2,13,8,1,1,1,2,1,1,1,1,1,2,1),(106,1,2,19,31,1,1,3,3,2,2,1,1,1,3,1),(107,1,2,34,33,1,1,1,3,1,4,1,1,1,2,1),(108,1,2,2,1,1,4,1,1,4,1,4,1,1,1,5),(109,2,2,1,2,1,4,1,1,3,1,1,1,1,2,10);
/*!40000 ALTER TABLE `Hechos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Institucion`
--

DROP TABLE IF EXISTS `Institucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Institucion` (
  `Id_Institucion` int NOT NULL AUTO_INCREMENT,
  `Cod_snies` int NOT NULL,
  `Nom_institucion` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Institucion`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Institucion`
--

LOCK TABLES `Institucion` WRITE;
/*!40000 ALTER TABLE `Institucion` DISABLE KEYS */;
INSERT INTO `Institucion` VALUES (1,1101,'UNIVERSIDAD NACIONAL DE COLOMBIA'),(2,1105,'UNIVERSIDAD PEDAGOGICA NACIONAL'),(3,1701,'PONTIFICIA UNIVERSIDAD JAVERIANA'),(4,1704,'UNIVERSIDAD SANTO TOMAS'),(5,1711,'UNIVERSIDAD DE LA SABANA'),(6,1718,'UNIVERSIDAD DE SAN BUENAVENTURA'),(7,1729,'UNIVERSIDAD EL BOSQUE'),(8,1735,'UNIVERSIDAD MANUELA BELTRAN-UMB-'),(9,1803,'UNIVERSIDAD DE LA SALLE'),(10,1813,'UNIVERSIDAD DE LOS ANDES'),(11,1818,'UNIVERSIDAD COOPERATIVA DE COLOMBIA'),(12,1826,'UNIVERSIDAD ANTONIO NARIÑO'),(13,1835,'UNIVERSIDAD DE CIENCIAS APLICADAS Y AMBIENTALES - UDCA'),(14,2102,'UNIVERSIDAD NACIONAL ABIERTA Y A DISTANCIA UNAD'),(15,2702,'FUNDACION UNIVERSITARIA DE CIENCIAS DE LA SALUD'),(16,2708,'UNIVERSIDAD CES'),(17,2710,'FUNDACION UNIVERSITARIA MONSERRATE -UNIMONSERRATE'),(18,2712,'FUNDACION UNIVERSITARIA KONRAD LORENZ'),(19,2713,'FUNDACION UNIVERSITARIA LOS LIBERTADORES'),(20,2723,'FUNDACION UNIVERSITARIA AGRARIA DE COLOMBIA -UNIAGRARIA-'),(21,2725,'POLITECNICO GRANCOLOMBIANO'),(22,2738,'FUNDACION UNIVERSITARIA EMPRESARIAL DE LA CAMARA DE COMERCIO DE BOGOTA- UNIEMPRESARIAL'),(23,2745,'FUNDACIÓN UNIVERSITARIA COMPENSAR'),(24,2812,'UNIVERSIDAD EAN'),(25,2829,'CORPORACION UNIVERSITARIA MINUTO DE DIOS -UNIMINUTO-'),(26,2830,'CORPORACION UNIVERSITARIA IBEROAMERICANA'),(27,3713,'FUNDACION UNIVERSITARIA PARA EL DESARROLLO HUMANO - UNINPAHU'),(28,3819,'CORPORACION TECNOLOGICA INDUSTRIAL COLOMBIANA - TEINCO'),(29,4710,'FUNDACIÓN POLITÉCNICO MINUTO DE DIOS - TEC MD'),(30,4726,'FUNDACION UNIVERSITARIA SAN MATEO - SAN MATEO EDUCACION SUPERIOR'),(31,5802,'UNIVERSIDAD ECCI'),(32,1707,'FUNDACION UNIVERSIDAD DE BOGOTA - JORGE TADEO LOZANO'),(33,1709,'UNIVERSIDAD CENTRAL'),(34,2730,'FUNDACIÓN UNIVERSITARIA ESCUELA COLOMBIANA DE REHABILITACIÓN'),(35,4108,'ESCUELA TECNOLOGICA INSTITUTO TECNICO CENTRAL'),(36,1714,'COLEGIO MAYOR DE NUESTRA SEÑORA DEL ROSARIO'),(37,1806,'UNIVERSIDAD LIBRE'),(38,1728,'UNIVERSIDAD SERGIO ARBOLEDA'),(39,2707,'FUNDACIÓN UNIVERSITARIA JUAN N. CORPAS'),(40,2728,'FUNDACION UNIVERSITARIA DEL AREA ANDINA'),(41,4813,'CORPORACION UNIFICADA NACIONAL DE EDUCACION SUPERIOR-CUN-'),(42,1801,'UNIVERSIDAD LA GRAN COLOMBIA'),(43,9129,'FUNDACION UNIVERSITARIA CAFAM -UNICAFAM'),(44,4721,'FUNDACION UNIVERSITARIA HORIZONTE'),(45,1706,'UNIVERSIDAD EXTERNADO DE COLOMBIA'),(46,2811,'UNIVERSIDAD ESCUELA COLOMBIANA DE INGENIERIA JULIO GARAVITO'),(47,2834,'UNIVERSITARIA AGUSTINIANA- UNIAGUSTINIANA'),(48,3702,'FUNDACION TECNOLOGICA AUTONOMA DE BOGOTA-FABA-'),(49,9110,'SERVICIO NACIONAL DE APRENDIZAJE-SENA-'),(50,1301,'UNIVERSIDAD DISTRITAL-FRANCISCO JOSE DE CALDAS'),(51,2740,'INSTITUCION UNIVERSITARIA COLOMBO AMERICANA - UNICA'),(52,1732,'UNIVERSIDAD SANTO TOMAS'),(53,1815,'CORPORACION UNIVERSIDAD PILOTO DE COLOMBIA'),(54,2746,'FUNDACION UNIVERSITARIA SANITAS'),(55,4719,'FUNDACION DE EDUCACION SUPERIOR NUEVA AMERICA'),(56,1121,'UNIVERSIDAD-COLEGIO MAYOR DE CUNDINAMARCA'),(57,1207,'UNIVERSIDAD DEL TOLIMA'),(58,3826,'CORPORACION INTERNACIONAL PARA EL DESARROLLO EDUCATIVO -CIDE-'),(59,1212,'UNIVERSIDAD DE PAMPLONA');
/*!40000 ALTER TABLE `Institucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Localidad`
--

DROP TABLE IF EXISTS `Localidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Localidad` (
  `Id_Localidad` int NOT NULL AUTO_INCREMENT,
  `Cod_Localidad` int NOT NULL,
  `Localidad` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_Localidad`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Localidad`
--

LOCK TABLES `Localidad` WRITE;
/*!40000 ALTER TABLE `Localidad` DISABLE KEYS */;
INSERT INTO `Localidad` VALUES (1,1,'USAQUEN'),(2,2,'CHAPINERO'),(3,3,'SANTA FE'),(4,4,'SAN CRISTOBAL'),(5,5,'USME'),(6,6,'TUNJUELITO'),(7,7,'BOSA'),(8,8,'KENNEDY'),(9,9,'FONTIBON'),(10,10,'ENGATIVA'),(11,11,'SUBA'),(12,12,'BARRIOS UNIDOS'),(13,13,'TEUSAQUILLO'),(14,14,'LOS MARTIRES'),(15,15,'ANTONIO NARIÑO'),(16,16,'PUENTE ARANDA'),(17,17,'LA CANDELARIA'),(18,18,'RAFAEL URIBE URIBE'),(19,19,'CIUDAD BOLIVAR'),(20,20,'SUMAPAZ'),(21,999,'SIN INFORMACION'),(22,99,'FUERA DE BOGOTA');
/*!40000 ALTER TABLE `Localidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Modalidad`
--

DROP TABLE IF EXISTS `Modalidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Modalidad` (
  `Id_Modalidad` int NOT NULL AUTO_INCREMENT,
  `Modalidad` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Modalidad`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Modalidad`
--

LOCK TABLES `Modalidad` WRITE;
/*!40000 ALTER TABLE `Modalidad` DISABLE KEYS */;
INSERT INTO `Modalidad` VALUES (1,'PRESENCIAL'),(2,'VIRTUAL'),(3,'HÍBRIDA (PRESENCIAL-VIRTUAL)'),(4,'DUAL'),(5,'A DISTANCIA'),(6,'PRESENCIAL-VIRTUAL'),(7,'PRESENCIAL-DUAL');
/*!40000 ALTER TABLE `Modalidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nucleo_Basico`
--

DROP TABLE IF EXISTS `Nucleo_Basico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Nucleo_Basico` (
  `Id_Nucleo` int NOT NULL AUTO_INCREMENT,
  `Nucleo_basico` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Nucleo`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nucleo_Basico`
--

LOCK TABLES `Nucleo_Basico` WRITE;
/*!40000 ALTER TABLE `Nucleo_Basico` DISABLE KEYS */;
INSERT INTO `Nucleo_Basico` VALUES (1,'FILOSOFÍA, TEOLOGÍA Y AFINES'),(2,'GEOGRAFÍA, HISTORIA'),(3,'LENGUAS MODERNAS, LITERATURA, LINGUÍSTICA Y AFINES'),(4,'MEDICINA VETERINARIA'),(5,'PSICOLOGÍA'),(6,'QUÍMICA Y AFINES'),(7,'EDUCACIÓN'),(8,'ADMINISTRACIÓN'),(9,'COMUNICACIÓN SOCIAL, PERIODISMO Y AFINES'),(10,'INGENIERÍA AGROINDUSTRIAL, ALIMENTOS Y AFINES'),(11,'INGENIERÍA MECÁNICA Y AFINES'),(12,'TERAPIAS'),(13,'CONTADURÍA PÚBLICA'),(14,'DERECHO Y AFINES'),(15,'INGENIERÍA DE SISTEMAS, TELEMÁTICA Y AFINES'),(16,'INGENIERÍA ELECTRÓNICA, TELECOMUNICACIONES Y AFINES'),(17,'INGENIERÍA INDUSTRIAL Y AFINES'),(18,'INGENIERÍA BIOMÉDICA Y AFINES'),(19,'OTROS PROGRAMAS ASOCIADOS A BELLAS ARTES'),(20,'ECONOMÍA'),(21,'BIOLOGÍA, MICROBIOLOGÍA Y AFINES'),(22,'ENFERMERÍA'),(23,'INGENIERÍA AMBIENTAL, SANITARIA Y AFINES'),(24,'INGENIERÍA CIVIL Y AFINES'),(25,'MÚSICA'),(26,'SALUD PÚBLICA'),(27,'INGENIERÍA QUÍMICA Y AFINES'),(28,'MATEMÁTICAS, ESTADÍSTICA Y AFINES'),(29,'CIENCIA POLÍTICA, RELACIONES INTERNACIONALES'),(30,'PUBLICIDAD Y AFINES'),(31,'SIN CLASIFICAR'),(32,'ARTES PLÁSTICAS, VISUALES Y AFINES'),(33,'DISEÑO'),(34,'INGENIERÍA ELÉCTRICA Y AFINES'),(35,'ZOOTECNIA'),(36,'INGENIERÍA AGRÍCOLA, FORESTAL Y AFINES'),(37,'OTRAS INGENIERÍAS'),(38,'ARTES REPRESENTATIVAS'),(39,'INGENIERÍA AGRONÓMICA, PECUARIA Y AFINES'),(40,'SOCIOLOGÍA, TRABAJO SOCIAL Y AFINES'),(41,'BACTERIOLOGÍA'),(42,'ODONTOLOGÍA'),(43,'BIBLIOTECOLOGÍA, OTROS DE CIENCIAS SOCIALES Y HUMANAS'),(44,'OPTOMETRÍA, OTROS PROGRAMAS DE CIENCIAS DE LA SALUD'),(45,'INSTRUMENTACIÓN QUIRÚRGICA'),(46,'DEPORTES, EDUCACIÓN FÍSICA Y RECREACIÓN'),(47,'INGENIERÍA ADMINISTRATIVA Y AFINES'),(48,'MEDICINA'),(49,'GEOLOGÍA, OTROS PROGRAMAS DE CIENCIAS NATURALES'),(50,'ARQUITECTURA Y AFINES'),(51,'ANTROPOLOGÍA Y  ARTES LIBERALES'),(52,'FÍSICA'),(53,'NUTRICIÓN Y DIETÉTICA'),(54,'FORMACIÓN RELACIONADA CON EL CAMPO MILITAR O POLICIAL'),(55,'AGRONOMÍA');
/*!40000 ALTER TABLE `Nucleo_Basico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pruebas`
--

DROP TABLE IF EXISTS `Pruebas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pruebas` (
  `Id_Convocatoria` int NOT NULL AUTO_INCREMENT,
  `Convocatoria` varchar(5) NOT NULL,
  PRIMARY KEY (`Id_Convocatoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pruebas`
--

LOCK TABLES `Pruebas` WRITE;
/*!40000 ALTER TABLE `Pruebas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pruebas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Saber11`
--

DROP TABLE IF EXISTS `Saber11`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Saber11` (
  `Id_Saber11` int NOT NULL AUTO_INCREMENT,
  `Rango` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Saber11`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Saber11`
--

LOCK TABLES `Saber11` WRITE;
/*!40000 ALTER TABLE `Saber11` DISABLE KEYS */;
INSERT INTO `Saber11` VALUES (1,'NO APLICA'),(2,'75-100'),(3,'50-75'),(4,'25-50'),(5,'0-25');
/*!40000 ALTER TABLE `Saber11` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sector`
--

DROP TABLE IF EXISTS `Sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sector` (
  `Id_Sector` int NOT NULL AUTO_INCREMENT,
  `Sector_Colegio` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Sector`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sector`
--

LOCK TABLES `Sector` WRITE;
/*!40000 ALTER TABLE `Sector` DISABLE KEYS */;
INSERT INTO `Sector` VALUES (1,'OFICIAL'),(2,'NO OFICIAL'),(3,'SIN DATO'),(4,'NO APLICA');
/*!40000 ALTER TABLE `Sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sexo`
--

DROP TABLE IF EXISTS `Sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sexo` (
  `Id_Sexo` int NOT NULL AUTO_INCREMENT,
  `Sexo` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Sexo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sexo`
--

LOCK TABLES `Sexo` WRITE;
/*!40000 ALTER TABLE `Sexo` DISABLE KEYS */;
INSERT INTO `Sexo` VALUES (1,'HOMBRE'),(2,'MUJER'),(3,'INTERSEXUAL'),(4,'SIN INFORMACION');
/*!40000 ALTER TABLE `Sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sisben`
--

DROP TABLE IF EXISTS `Sisben`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sisben` (
  `Id_Sisben` int NOT NULL AUTO_INCREMENT,
  `Grupo` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Sisben`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sisben`
--

LOCK TABLES `Sisben` WRITE;
/*!40000 ALTER TABLE `Sisben` DISABLE KEYS */;
INSERT INTO `Sisben` VALUES (1,'D - NO POBRE'),(2,'B - POBREZA MODERADA'),(3,'SIN SISBEN'),(4,'C - VULNERABLE'),(5,'A - POBREZA EXTREMA');
/*!40000 ALTER TABLE `Sisben` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Victima`
--

DROP TABLE IF EXISTS `Victima`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Victima` (
  `Id_Victima` int NOT NULL AUTO_INCREMENT,
  `Victima` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Victima`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Victima`
--

LOCK TABLES `Victima` WRITE;
/*!40000 ALTER TABLE `Victima` DISABLE KEYS */;
INSERT INTO `Victima` VALUES (1,'NO'),(2,'SI');
/*!40000 ALTER TABLE `Victima` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zona_colegio`
--

DROP TABLE IF EXISTS `Zona_colegio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Zona_colegio` (
  `Id_Zona` int NOT NULL AUTO_INCREMENT,
  `Zona_Colegio` varchar(200) NOT NULL,
  PRIMARY KEY (`Id_Zona`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zona_colegio`
--

LOCK TABLES `Zona_colegio` WRITE;
/*!40000 ALTER TABLE `Zona_colegio` DISABLE KEYS */;
INSERT INTO `Zona_colegio` VALUES (1,'URBANA'),(2,'SIN DATO'),(3,'RURAL'),(4,'NO APLICA');
/*!40000 ALTER TABLE `Zona_colegio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'railway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-24 10:37:40
