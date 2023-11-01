<?php
class Upload
{

  protected $path,
    $name,
    $upperPath;
  function __construct($path, $name, $upperPath = '')
  {
    $this->path = $path;
    $this->name = $name;
    $this->upperPath = $upperPath;
  }

  function upload()
  {
    $name_file = $_FILES[$this->name]['name'];
    $type_file = $_FILES[$this->name]['type'];
    $size_file = $_FILES[$this->name]['size'];
    $error = $_FILES[$this->name]['error'];
    $tmp_file = $_FILES[$this->name]['tmp_name'];

    // check file existence
    if ($error == 4) {
      return false;
    }

    // chect name file
    $list_type = ['jpg', 'jpeg', 'png'];
    $file_extension = explode('.', $name_file);
    $file_extension = strtolower(end($file_extension));
    if (!in_array($file_extension, $list_type)) {
      return false;
    }

    // check type file
    if ($type_file != 'image/jpeg' && $type_file != 'image/png') {
      return false;
    }

    // check size file
    // 5mb
    if ($size_file > 10000000) {
      return false;
    }

    // ready for upload
    // generate new name file
    $new_name_file = uniqid();
    $new_name_file .= '.';
    $new_name_file .= $file_extension;
    move_uploaded_file($tmp_file, $this->upperPath . '../../img/uploaded/' . $this->path . '/' . $new_name_file);

    return $new_name_file;
  }
}
