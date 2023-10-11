<?php
// ТИПО ПРОВЕРКА В ПХП

function check_x() {
    return isset($_POST['X']);
}

function check_y() {
    if(isset($_POST['Y']) && is_numeric($_POST['Y'])) {
        $y = (float)$_POST['Y'];
        return $y > -5 && $y < 3;
    }
    return false;
}

function check_r() {
    return isset($_POST['R']);
}

function val_form() {
    $errors = [];
    if (!check_x()) {
        $errors["X"] = "Пожалуйста, выберите X";
    }
    if (!check_y()) {
        $errors["Y"] = "Введите корректное значение Y";
    }
    if (!check_r()) {
        $errors["R"] = "Пожалуйста, выберите R";
    }
    if (count($errors) > 0) {
        http_response_code(400);
        exit(json_encode($errors));
    }
}

function isHit() {
    $x = $_POST['X'];
    $y = $_POST['Y'];
    $r = $_POST['R'];
    $hit = false;
    if (-$r / 2 <= $x && $x <= 0 && $y >= 0 && $y <= $r)
        $hit = true;

    if ($x >= 0 && $y <= 0 && $y >= ($r / 2 - 1 / 2))
        $hit = true;

    if ($x <= 0 && $y <= 0 && (pow($x, 2) + pow($y, 2)) <= pow($r, 2))
        $hit = true;

    if($hit) {
        return "true";
    } else {
        return "false";
    }
}

$start = microtime(true);

session_start();
if (!isset($_SESSION["table"])) $_SESSION["table"] = "";

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    http_response_code(200);
    exit($_SESSION["table"]);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_POST["type"])) {
        http_response_code(400);
        exit();
    }

    if ($_POST["type"] === "update") {
        val_form();

        $x = (float)$_POST["X"];
        $y = (float)$_POST["Y"];
        $r = (float)$_POST["R"][0];
        $hit = isHit($x, $y, $r) ? "Да" : "Нет";

        $local_time = date('H:i:s');
        $stop = microtime(true) * 1000000;

        $new_row = "<tr>" .
            "<td class='inTableResPadding'>" . $hit . "</td>" .
            "<td class='inTableResPadding'>" . $x . "</td>" .
            "<td class='inTableResPadding'>" . $y . "</td>" .
            "<td class='inTableResPadding'>" . $r . "</td>" .
           "<td class='inTableResPadding'>" . $local_time . "</td>" .
            "<td class='inTableResPadding'>" . $stop - $start . " мкс" . "</td>" .
            "</tr class='inTableResPadding'>";
        $_SESSION["table"] = $_SESSION["table"] . $new_row;

        http_response_code(200);
        exit($_SESSION["table"]);
    }
    elseif ($_POST["type"] === "clear") {
        $_SESSION["table"] = "";
        http_response_code(200);
        exit($_SESSION["table"]);
    } else {
        http_response_code(400);
        exit("type isn't set, possible values: update, clear");
    }
}
?>