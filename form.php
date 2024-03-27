<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $email = $_POST['email'];
        $date = $_POST['date'];
        $time = $_POST['time'];
        $length = $_POST['hair_length'];
        $type = $_POST['type'];

        //Database connection
        $conn = new mysqli('localhostr', 'root','','bookingsHandler');
        if ($conn->connect_error) {
            die('Connected Failed: ' .$conn->connect_error);
        }else{
            $stmt = $conn->prepare("INSERT INTO bookingsHandler(name,surname,email,time,date,hair_length,braid_type) VALUES (?,?,?,?,?,?,?)");
            if (!stmt){
                die('Error preparing statement:: ' .$conn->error);
            }
            $stmt->bind_param("sssssss", $name.$surname,$email,$time,$date,$length,$type);
            if (!stmt->execute()) {
                die('Error executing statement: ' .$stmt->error);
            }
            echo "Booking successfully added!";
            $stmt-.close();
            $conn->close();
        }
        
        else{
            echo "Invalid request method.";
        }

    }
?>