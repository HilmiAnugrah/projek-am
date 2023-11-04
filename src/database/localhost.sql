-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 04, 2023 at 05:29 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ponpes_am`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `atv_id` int NOT NULL,
  `atv_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `atv_img` varchar(255) NOT NULL,
  `atv_background_color` varchar(100) NOT NULL,
  `atv_button_color` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`atv_id`, `atv_name`, `atv_img`, `atv_background_color`, `atv_button_color`) VALUES
(1, 'Pencaksilat', 'pencaksilat.png', '#77B341', '#F48120'),
(2, 'Memanah', 'memanah.png', '#B1D136', '#51218E'),
(3, 'Hadroh', 'hadroh.png', '#FF3912', '#51218E'),
(4, 'Futsal', 'futsal.png', '#F48120', '#77B341'),
(5, 'Pramuka', 'pramuka.png', '#FFBC00', '#0397C9'),
(6, 'Djembe', 'djembe.png', '#0397C9', '#FFBC00'),
(7, 'Marawis', 'marawis.png', '#51218E', '#B1D136');

-- --------------------------------------------------------

--
-- Table structure for table `gelombang`
--

CREATE TABLE `gelombang` (
  `glb_id` int NOT NULL,
  `glb_name` int NOT NULL,
  `glb_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'active',
  `glb_start` datetime NOT NULL,
  `glb_stop` datetime DEFAULT NULL,
  `prd_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE `genders` (
  `gnr_id` int NOT NULL,
  `gnr_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`gnr_id`, `gnr_name`) VALUES
(1, 'Laki Laki'),
(2, 'Perempuan');

-- --------------------------------------------------------

--
-- Table structure for table `married_status`
--

CREATE TABLE `married_status` (
  `mrs_id` int NOT NULL,
  `mrs_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `married_status`
--

INSERT INTO `married_status` (`mrs_id`, `mrs_name`) VALUES
(1, 'Nikah'),
(2, 'Cerai Hidup'),
(3, 'Cerai Mati');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `nws_id` int NOT NULL,
  `nws_title` varchar(50) NOT NULL,
  `nws_img` varchar(255) NOT NULL,
  `nws_desc` text NOT NULL,
  `nws_short_desc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`nws_id`, `nws_title`, `nws_img`, `nws_desc`, `nws_short_desc`) VALUES
(1, 'Pemeriksaan Barang', 'pemeriksaanbarang.png', 'awwad', 'Pemeriksaan barang bawaan santri sebelum masuk pondok pesantren'),
(2, 'Kajian Rutinan', 'kajianrutinan.png', 'awawwa', 'Pengajian rutinan Ibu-ibu membaca Alquran, mendalami Hadis, ilmu Tauhid, Akhlak dan Fiqh,');

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
  `prt_id` int NOT NULL,
  `prt_full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prt_birth_place` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_birthdate` date DEFAULT NULL,
  `prt_tribes` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_home_no_telp` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_no_hp` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prt_smp` varchar(50) DEFAULT NULL,
  `prt_sma` varchar(50) DEFAULT NULL,
  `prt_university` varchar(50) DEFAULT NULL,
  `prt_faculty` varchar(50) DEFAULT NULL,
  `prt_major` varchar(50) DEFAULT NULL,
  `prt_job` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_job_position` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_office_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_office_no_telp` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_home_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_postal_code` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prt_married_at_age` int DEFAULT NULL,
  `prt_married_number` int DEFAULT NULL,
  `prt_relationship` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prw_id` int DEFAULT NULL,
  `mrs_id` int DEFAULT NULL,
  `std_id` int NOT NULL,
  `prr_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parents_roles`
--

CREATE TABLE `parents_roles` (
  `prr_id` int NOT NULL,
  `prr_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `parents_roles`
--

INSERT INTO `parents_roles` (`prr_id`, `prr_name`) VALUES
(1, 'Ayah'),
(2, 'Ibu'),
(3, 'Wali'),
(4, 'Others');

-- --------------------------------------------------------

--
-- Table structure for table `parents_wages`
--

CREATE TABLE `parents_wages` (
  `prw_id` int NOT NULL,
  `prw_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `parents_wages`
--

INSERT INTO `parents_wages` (`prw_id`, `prw_name`) VALUES
(1, 'Kurang dari < Rp. 2.000.000'),
(2, 'Rp. 2.000.000 - Rp. 3.000.000'),
(3, 'Rp. 3.000.000 - Rp. 4.000.000'),
(4, 'Rp. 4.000.000 - Rp. 5.000.000'),
(5, 'Lebih dari > Rp. 5.000.000');

-- --------------------------------------------------------

--
-- Table structure for table `periode`
--

CREATE TABLE `periode` (
  `prd_id` int NOT NULL,
  `prd_name` year NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `periode`
--

INSERT INTO `periode` (`prd_id`, `prd_name`) VALUES
(1, 2023);

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `prg_id` int NOT NULL,
  `prg_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `prg_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`prg_id`, `prg_name`, `prg_desc`) VALUES
(1, 'SMP Plus', NULL),
(2, 'SMATER', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `program_biaya`
--

CREATE TABLE `program_biaya` (
  `pgb_id` int NOT NULL,
  `pgb_type` varchar(50) NOT NULL,
  `pgb_biaya` int NOT NULL,
  `pgb_desc` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prg_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `program_biaya`
--

INSERT INTO `program_biaya` (`pgb_id`, `pgb_type`, `pgb_biaya`, `pgb_desc`, `prg_id`) VALUES
(1, 'Uang Pendaftaran', 250000, 'dibayar 1 kali diawal masuk', 1),
(2, 'Uang Masuk', 6940000, 'dibayar 1 kali diawal masuk', 1),
(3, 'Uang Tahunan', 4810000, 'dibayar setiap tahun', 1),
(4, 'Uang Bulanan', 1430000, 'dibayar 1 kali diawal masuk', 1),
(5, 'Seragam Sekolah Putra', 900000, NULL, 1),
(6, 'Seragam Sekolah Putri', 970000, NULL, 1),
(7, 'Uang Pendaftaran', 200000, 'dibayar 1 kali diawal masuk', 2),
(8, 'Uang Masuk', 2500000, 'dibayar setiap tahun', 2),
(9, 'Uang Tahunan', 1330000, 'dibayar setiap tahun', 2),
(10, 'Uang Bulanan', 1270000, 'dibayar 1 kali diawal masuk', 2);

-- --------------------------------------------------------

--
-- Table structure for table `program_biaya_uraian`
--

CREATE TABLE `program_biaya_uraian` (
  `pbu_id` int NOT NULL,
  `pbu_name` varchar(255) NOT NULL,
  `pgb_id` int NOT NULL,
  `prg_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `program_biaya_uraian`
--

INSERT INTO `program_biaya_uraian` (`pbu_id`, `pbu_name`, `pgb_id`, `prg_id`) VALUES
(1, 'Pendaftaran', 1, 1),
(2, 'Uang Pangkal', 2, 1),
(3, 'Infaq Kebutuhan Pesantren', 2, 1),
(4, 'MOS', 2, 1),
(5, 'Raport & Syahadah', 2, 1),
(6, 'Foto', 2, 1),
(7, 'Infaq Pengambangan Pesantren', 3, 1),
(8, 'Kesehatan', 3, 1),
(9, 'Ujian Sekolah & Pesantren', 3, 1),
(10, 'Ekstrakurikuler', 3, 1),
(11, 'Perpustakaan', 3, 1),
(12, 'Asuransi Kecelakaan', 3, 1),
(13, 'Kegiatan Pesantren', 3, 1),
(14, 'Makan, Minum dll', 4, 1),
(15, 'SPP Pondok Pesantren', 4, 1),
(16, 'Laundry', 4, 1),
(17, 'Pendaftaran', 7, 2),
(18, 'Uang Pangkal', 8, 2),
(19, 'Infaq Kebutuhan Pesantren', 8, 2),
(20, 'MOS', 8, 2),
(21, 'Raport & Syahadah', 8, 2),
(22, 'Foto', 8, 2),
(23, 'Infaq Pengambangan Pesantren', 9, 2),
(24, 'Kesehatan', 9, 2),
(25, 'Ujian Sekolah & Pesantren', 9, 2),
(26, 'Ekstrakurikuler', 9, 2),
(27, 'Perpustakaan', 9, 2),
(28, 'Asuransi Kecelakaan', 9, 2),
(29, 'Kegiatan Pesantren', 9, 2),
(30, 'Makan, Minum dll', 10, 2),
(31, 'SPP Pondok Pesantren', 10, 2),
(32, 'Laundry', 10, 2);

-- --------------------------------------------------------

--
-- Table structure for table `register_status`
--

CREATE TABLE `register_status` (
  `rss_id` int NOT NULL,
  `rss_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `register_status`
--

INSERT INTO `register_status` (`rss_id`, `rss_name`) VALUES
(1, 'new'),
(2, 'accepted');

-- --------------------------------------------------------

--
-- Table structure for table `register_student`
--

CREATE TABLE `register_student` (
  `rgs_id` int NOT NULL,
  `rgs_profile` varchar(255) NOT NULL,
  `rgs_tf_prove` varchar(255) DEFAULT NULL,
  `rgs_name` varchar(255) NOT NULL,
  `rgs_email` varchar(255) NOT NULL,
  `rgs_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rgs_adress` varchar(255) NOT NULL,
  `rgs_whatsapp` varchar(14) NOT NULL,
  `rgs_school_from` varchar(100) NOT NULL,
  `rgs_known_from` varchar(100) NOT NULL,
  `rgs_timestamp` datetime NOT NULL,
  `rgs_click` int NOT NULL DEFAULT '0',
  `prg_id` int NOT NULL,
  `atv_id` int NOT NULL,
  `gnr_id` int NOT NULL,
  `glb_id` int NOT NULL,
  `rss_id` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `rls_id` int NOT NULL,
  `rls_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`rls_id`, `rls_name`) VALUES
(1, 'admin'),
(2, 'Student');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `std_id` int NOT NULL,
  `std_full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `std_nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_email` varchar(100) NOT NULL,
  `std_whatsapp` varchar(15) NOT NULL,
  `std_birth_place` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_birthdate` date DEFAULT NULL,
  `std_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `std_home_no_telp` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_child_of` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_number_sibling` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_language_home` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_school_from` varchar(50) NOT NULL,
  `std_parent_status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_created_at` datetime NOT NULL,
  `std_updated_at` datetime NOT NULL,
  `gnr_id` int NOT NULL,
  `glb_id` int NOT NULL,
  `atv_id` int NOT NULL,
  `prg_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_health`
--

CREATE TABLE `student_health` (
  `sth_height` double DEFAULT NULL,
  `sth_weight` double DEFAULT NULL,
  `sth_blood_type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_disease_history` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_vaccine_history` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_physical_complaint` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_eyes_complaint` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_ears_complaint` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_other_complaint` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_therapy_history` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_hospitalized` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sth_important_massage` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `std_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_residence`
--

CREATE TABLE `student_residence` (
  `str_address` varchar(255) NOT NULL,
  `str_postal_code` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `str_province` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `str_sub_district` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `str_urban_village` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `str_living_with` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `str_distance_ponpes_am` varchar(10) DEFAULT NULL,
  `std_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usr_id` int NOT NULL,
  `usr_email` varchar(100) NOT NULL,
  `usr_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `usr_code` varchar(100) NOT NULL,
  `rls_id` int NOT NULL,
  `std_id` int DEFAULT NULL,
  `prg_id` int DEFAULT NULL,
  `prt_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`usr_id`, `usr_email`, `usr_password`, `usr_code`, `rls_id`, `std_id`, `prg_id`, `prt_id`) VALUES
(1, 'admin@gmail.com', '$2y$10$7umUwbqNclPbl5w2ZRXoWOqp4/zV2.rl6OqmfmeEBubFtSKsoK87S', '', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `wa_broadcast`
--

CREATE TABLE `wa_broadcast` (
  `wbd_id` int NOT NULL,
  `wbd_name` varchar(50) NOT NULL,
  `wbd_content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `wa_broadcast`
--

INSERT INTO `wa_broadcast` (`wbd_id`, `wbd_name`, `wbd_content`) VALUES
(1, 'data santri', 'Supaya pendaftaran\r\n\r\nberhasil silahkan infaq pendaftaran sebesar Rp.200.000 Program (SMATER)/Rp.250.000 Program (SMP PLUS) BSI No. Rek 7094658335 a.n Yayasan Fadhila Aswanda');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`atv_id`);

--
-- Indexes for table `gelombang`
--
ALTER TABLE `gelombang`
  ADD PRIMARY KEY (`glb_id`),
  ADD KEY `prd_id` (`prd_id`);

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`gnr_id`);

--
-- Indexes for table `married_status`
--
ALTER TABLE `married_status`
  ADD PRIMARY KEY (`mrs_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`nws_id`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`prt_id`),
  ADD KEY `prt_gender` (`std_id`),
  ADD KEY `prt_level_id` (`prr_id`),
  ADD KEY `mrs_id` (`mrs_id`),
  ADD KEY `prw_id` (`prw_id`);

--
-- Indexes for table `parents_roles`
--
ALTER TABLE `parents_roles`
  ADD PRIMARY KEY (`prr_id`);

--
-- Indexes for table `parents_wages`
--
ALTER TABLE `parents_wages`
  ADD PRIMARY KEY (`prw_id`);

--
-- Indexes for table `periode`
--
ALTER TABLE `periode`
  ADD PRIMARY KEY (`prd_id`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`prg_id`);

--
-- Indexes for table `program_biaya`
--
ALTER TABLE `program_biaya`
  ADD PRIMARY KEY (`pgb_id`),
  ADD KEY `prg_id` (`prg_id`);

--
-- Indexes for table `program_biaya_uraian`
--
ALTER TABLE `program_biaya_uraian`
  ADD PRIMARY KEY (`pbu_id`),
  ADD KEY `pgb_id` (`pgb_id`,`prg_id`),
  ADD KEY `prg_id` (`prg_id`);

--
-- Indexes for table `register_status`
--
ALTER TABLE `register_status`
  ADD PRIMARY KEY (`rss_id`);

--
-- Indexes for table `register_student`
--
ALTER TABLE `register_student`
  ADD PRIMARY KEY (`rgs_id`),
  ADD KEY `lvl_id` (`atv_id`,`rss_id`),
  ADD KEY `rss_id` (`rss_id`),
  ADD KEY `gnr_id` (`gnr_id`),
  ADD KEY `glb_id` (`glb_id`),
  ADD KEY `prg_id` (`prg_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`rls_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`std_id`),
  ADD KEY `std_gender` (`gnr_id`),
  ADD KEY `atv_id` (`atv_id`),
  ADD KEY `glb_id` (`glb_id`),
  ADD KEY `prg_id` (`prg_id`);

--
-- Indexes for table `student_health`
--
ALTER TABLE `student_health`
  ADD KEY `sth_student` (`std_id`);

--
-- Indexes for table `student_residence`
--
ALTER TABLE `student_residence`
  ADD KEY `str_students_id` (`std_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usr_id`),
  ADD KEY `usr_role_id` (`rls_id`),
  ADD KEY `usr_student_id` (`std_id`,`prt_id`),
  ADD KEY `usr_parent_id` (`prt_id`),
  ADD KEY `prg_id` (`prg_id`);

--
-- Indexes for table `wa_broadcast`
--
ALTER TABLE `wa_broadcast`
  ADD PRIMARY KEY (`wbd_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `atv_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gelombang`
--
ALTER TABLE `gelombang`
  MODIFY `glb_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genders`
--
ALTER TABLE `genders`
  MODIFY `gnr_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `married_status`
--
ALTER TABLE `married_status`
  MODIFY `mrs_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `nws_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `prt_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parents_roles`
--
ALTER TABLE `parents_roles`
  MODIFY `prr_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `parents_wages`
--
ALTER TABLE `parents_wages`
  MODIFY `prw_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `periode`
--
ALTER TABLE `periode`
  MODIFY `prd_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `prg_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `program_biaya`
--
ALTER TABLE `program_biaya`
  MODIFY `pgb_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `program_biaya_uraian`
--
ALTER TABLE `program_biaya_uraian`
  MODIFY `pbu_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `register_status`
--
ALTER TABLE `register_status`
  MODIFY `rss_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `register_student`
--
ALTER TABLE `register_student`
  MODIFY `rgs_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `rls_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `std_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `usr_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wa_broadcast`
--
ALTER TABLE `wa_broadcast`
  MODIFY `wbd_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gelombang`
--
ALTER TABLE `gelombang`
  ADD CONSTRAINT `gelombang_ibfk_1` FOREIGN KEY (`prd_id`) REFERENCES `periode` (`prd_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `parents`
--
ALTER TABLE `parents`
  ADD CONSTRAINT `parents_ibfk_1` FOREIGN KEY (`std_id`) REFERENCES `students` (`std_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `parents_ibfk_3` FOREIGN KEY (`prr_id`) REFERENCES `parents_roles` (`prr_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `parents_ibfk_4` FOREIGN KEY (`mrs_id`) REFERENCES `married_status` (`mrs_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `parents_ibfk_5` FOREIGN KEY (`prw_id`) REFERENCES `parents_wages` (`prw_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `program_biaya`
--
ALTER TABLE `program_biaya`
  ADD CONSTRAINT `program_biaya_ibfk_1` FOREIGN KEY (`prg_id`) REFERENCES `program` (`prg_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `program_biaya_uraian`
--
ALTER TABLE `program_biaya_uraian`
  ADD CONSTRAINT `program_biaya_uraian_ibfk_1` FOREIGN KEY (`prg_id`) REFERENCES `program` (`prg_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `program_biaya_uraian_ibfk_2` FOREIGN KEY (`pgb_id`) REFERENCES `program_biaya` (`pgb_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `register_student`
--
ALTER TABLE `register_student`
  ADD CONSTRAINT `register_student_ibfk_1` FOREIGN KEY (`rss_id`) REFERENCES `register_status` (`rss_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `register_student_ibfk_2` FOREIGN KEY (`atv_id`) REFERENCES `activity` (`atv_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `register_student_ibfk_4` FOREIGN KEY (`gnr_id`) REFERENCES `genders` (`gnr_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `register_student_ibfk_5` FOREIGN KEY (`glb_id`) REFERENCES `gelombang` (`glb_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `register_student_ibfk_6` FOREIGN KEY (`prg_id`) REFERENCES `program` (`prg_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`gnr_id`) REFERENCES `genders` (`gnr_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`atv_id`) REFERENCES `activity` (`atv_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `students_ibfk_4` FOREIGN KEY (`glb_id`) REFERENCES `gelombang` (`glb_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `students_ibfk_5` FOREIGN KEY (`prg_id`) REFERENCES `program` (`prg_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `student_health`
--
ALTER TABLE `student_health`
  ADD CONSTRAINT `student_health_ibfk_1` FOREIGN KEY (`std_id`) REFERENCES `students` (`std_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `student_residence`
--
ALTER TABLE `student_residence`
  ADD CONSTRAINT `student_residence_ibfk_1` FOREIGN KEY (`std_id`) REFERENCES `students` (`std_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rls_id`) REFERENCES `roles` (`rls_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`std_id`) REFERENCES `students` (`std_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_6` FOREIGN KEY (`prg_id`) REFERENCES `program` (`prg_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
