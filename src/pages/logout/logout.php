<?php
require '../../backend/functions/functions.php';

session_destroy();
header('Location: ' . baseUrl());
