<?php
header("Content-Type:text/html;charset=utf-8");
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$conn=mysqli_connect("127.0.0.1","root","","car");
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql=" SELECT * FROM t_login WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);

    if($row==null){
      echo "-1";
    }else{
      echo "1";
    }
?>