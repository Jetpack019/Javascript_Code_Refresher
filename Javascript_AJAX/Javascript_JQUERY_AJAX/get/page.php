<?php

?>  



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        $(document).ready(function(){
            $("button").click(function(){
                $.get("get.php",function(){
                    alert("Data: " + data + "\nStatus "+ status);
                })
            })
        })

        
    </script>
    <button>Click</button>
</body>
</html>