<?php
require '../../backend/functions/functions.php';
?>
<script>
  localStorage.clear()
</script>
<?php
session_destroy();
header('Location: ' . baseUrl());
