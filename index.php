<!DOCTYPE html>
<html>
<head>
		<link href="indexFolder/Questionaire Css.css" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon" href="indexFolder/images/favicon.ico">
		<link rel="icon" href="indexFolder/images/favicon.ico" type="image/ico">
		
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
								<title> Immigrant Calculator </title>
</head>
<body>

<h1>My first PHP page</h1>

<?php

 function Check() {
	 $confirm = isset($_REQUEST['date']);
	 if ($confirm === "Perm") {
		 echo "CHECK IS SUCCESSFUL";
	 }
	 else {
		  echo "CHECK IS UNSUCCESSFUL";
	 }
 }
 echo Check();
 
 

?>

</body>
</html>