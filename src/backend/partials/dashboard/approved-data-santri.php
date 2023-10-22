<?php
require_once '../../functions/functions.php';

$id = $_GET['id'];
$db = new Database();
$query = "SELECT rgs_profile,
                  rgs_name,
                  rgs_email,
                  rgs_adress,
                  rgs_whatsapp,
                  rgs_school_from,
                  rgs_known_from,
                  gnr_id,
                  lvl_id,
                  atv_id
          FROM register_student
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();
$santriData = $db->single();

$query = "UPDATE register_student
                SET rss_id = 2
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();

$query = "INSERT INTO students
                VALUES (null,
                        :fullName,
                        null,
                        :email,
                        null,
                        null,
                        :img,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        :gender,
                        :activity,
                        :level)";
$db->query($query);
$db->bind('fullName', $santriData['rgs_name']);
$db->bind('email', $santriData['rgs_email']);
$db->bind('img', $santriData['rgs_profile']);
$db->bind('gender', $santriData['gnr_id']);
$db->bind('activity', $santriData['atv_id']);
$db->bind('level', $santriData['lvl_id']);
$db->execute();

$lastId = $db->lastInsertId();

$query = "INSERT INTO student_health
                VALUES (null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        :id)";
$db->query($query);
$db->bind('id', $lastId);
$db->execute();

$query = "INSERT INTO student_residence
                VALUES (:address,
                        null,
                        null,
                        null,
                        :id)";
$db->query($query);
$db->bind('address', $santriData['rgs_adress']);
$db->bind('id', $lastId);
$db->execute();

header('Location: ' . baseUrl('dashboard'));
