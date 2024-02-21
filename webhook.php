<?php 
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Headers: *");
    
    $db_username="";
    $db_password="";
    $db_name="";
    $db_url="localhost";
    
    $data = json_decode(file_get_contents('php://input'), true);
    switch ($data['command']) {
        case "register":
            if (checkEmailExists($data['email'])['status']) {
              echo json_encode(array('status' => false, 'message'=>'This email is already registered'));
            } else {
              newUser($data['name'], $data['email'], $data['password']);
              echo json_encode(array('status' => true, 'message'=>'Account created successfully'));
            }
            break;
        case "login":
            $checkEmail = checkEmailExists($data['email']);
            if ($checkEmail['status']){
            	if(getPasswordByEmail($data['email'])==$data['password']){
                	echo json_encode(array('status' => true, 'name' => $checkEmail['name'], 'message'=>'Logged successfully'));	
                }else{
                	echo json_encode(array('status' => false, 'message'=>'The password is wrong'));
                }
            } else {
                echo json_encode(array('status' => false, 'message'=>'This email has no account'));
            }
            break;
        default:
            break;
    }

    function checkEmailExists($email){
        global $db_url, $db_username, $db_password, $db_name;
        $conn = new mysqli($db_url, $db_username, $db_password, $db_name);
        $result = $conn->query("SELECT * FROM DearDiary WHERE email = '$email'");
        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $name = $row['name'];
            return array('status' => true, 'name' => $name);
        } else {
            return array('status' => false);
        }
    }
    
    function getPasswordByEmail($email) {
		global $db_url, $db_username, $db_password, $db_name;
        $conn = new mysqli($db_url, $db_username, $db_password, $db_name);
        $result = $conn->query("SELECT password FROM DearDiary WHERE email = '$email'");
        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['password'];
        } else {
            return null;
        }
    }
    
    
    function newUser($name, $email, $password) {
        global $db_url, $db_username, $db_password, $db_name;
        $conn = new mysqli($db_url, $db_username, $db_password, $db_name);
        $conn->query("INSERT INTO DearDiary (name, email, password) VALUES ('$name', '$email', '$password')");
        $conn->close();
    }

?>
