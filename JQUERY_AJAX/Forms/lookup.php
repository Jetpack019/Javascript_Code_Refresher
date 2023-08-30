<?php
header('Content-type: application/json');

$people = array(
    'Alex' => array(
        'age' => 24,
        'location' => 'Greenwich',
        'job' => 'Web developer',
        'dob' => '10/19/2000'
    ),
    'Joshua' => array(
        'age' => 21,
        'location' => 'Charley',
        'job' => 'Teacher',
        'dob' => '10/13/2000'
    )
);

$return = array('exists' => false);

if(isset($_GET['name'])){
    $name = trim($_GET['name']);
    if(isset($people[$name])){
        $return['exists'] = true;
        $return['information'] = $people[$name];
    }
}


echo json_encode($return);