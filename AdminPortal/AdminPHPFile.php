<?php
include "connection.php";

/* ==================================================================================================================
                                                Admin Doctor
   ==================================================================================================================*/


//    department select
if (isset($_POST['department'])) {
    $dept_no = $_POST['department'];
    $query = " SELECT s.speciality_id,s.speciality_name from speciality as s inner join department as d 
    on s.dept_no=d.dept_no where d.dept_no= '$dept_no'";
    $result = mysqli_query($conn, $query);

    foreach ($result as $row) {
        echo '
        <option value="' . $row['speciality_id'] . '" >' . $row['speciality_name'] . '</option>
        ';
    }
}

// add doctor
if (isset($_POST['add_doctor'])) {
    $id = rand(1000, 9999);
    $name = $_POST['doctor_name'];
    $department = $_POST['department'];
    $speciality = $_POST['speciality'];
    $doctor_phone = $_POST['doctor_phone'];
    $dob = $_POST['dob_doctor'];
    $experience = $_POST['experience_doctor'];
    $education = $_POST['education'];
    $address_doctor = $_POST['address_doctor'];
    $gender = $_POST['gender_doctor'];
    $about = $_POST['about'];
    $image = file_get_contents($_FILES['image']['tmp_name']);
    $img = mysqli_real_escape_string($conn, $image);

    $job_role = "doctor";
    $salary = 100000;
    $emp_id = rand(1000, 9999);
    $shiftTiming = $_POST['shiftTiming'];
    $password = $_POST['password_doctor'];
    $p_id = rand(1000, 9999);

    // if($img)
    // {
    //     echo "upload";
    // }
    // else
    // {
    //     echo "error";

    // }
    $query1 = "INSERT INTO doctor VALUES('$id','$name','$doctor_phone','$dob','$experience','$education','$address_doctor','$img','$gender','$about','$speciality','$department')";
    $result1 = mysqli_query($conn, $query1);
    if ($result1) {
        // employee
        $query2 = "INSERT INTO employees (employee_id,job_role,salary,shiftTiming,doctor_id) VALUES('$emp_id','$job_role','$salary','$shiftTiming','$id')";
        $result2 = mysqli_query($conn, $query2);
        // emp_portal
        $query3 = "INSERT INTO employees_portal (portal_id,employee_id,password) VALUES('$p_id','$emp_id','$password')";
        $result3 = mysqli_query($conn, $query3);


        if ($result3) {
            echo "insert";
        }

    } else {
        echo "error1";

    }


}


// update btn doctor
if (isset($_POST['doctor_updateBtn']))
{
    $id=$_POST['doctor_id'];

    $query="SELECT * FROM doctor WHERE doctor_id='$id'";
    $result=mysqli_query($conn,$query);
    

}


?>