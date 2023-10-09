<?php
include "script.php";
/* проверяем, инициализированы ли переменные */
if(isset($_POST['R']) && isset($_POST['X']) && isset($_POST['Y'])) {
    $start_time = microtime(true) * 1000000;
    /* заводим переменную, отвечающую за попадание точки в область */
    $in_area = isHit();
}
?>

<! DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>first_try</title>
    <style>
        /* здесь будет код на css */

        /* нужен псевдоэлемент :с  */

        /* header div и div -- селекторы потомств */
        /* здесь же задан общий вид шапки, см тз */

        header div {
            text-align: center;
            background-color: rgb(30, 30, 30);
            color: darkcyan;
            font-size: 40px;
        }
        div {
            text-align: center;
            margin: auto;
            font-family: Cursive;
        }

        .centering {
            text-align: center;
            margin: auto;
        }
        .basic {
            background-color: rgb(30, 30, 30);
            text-align: center;
            font-size: x-large;
        }
        .invisible {
            visibility: hidden;
        }

        .visible {
            visibility: visible;
            position: static;
        }

        /* пример селектора идентификатора -- может присваиваться только 1 элементу */
        #clock {
            color: darkgray;
            font-size: 40px;
            font-family: Cursive;
            font-weight: bold;
        }

        .interface-block {
            /* задаем границу*/
            border-color: darkorange;
            border-radius: 20px;
            /* внешний отступ на всех 4 сторонах элемента */
            margin: auto;
            /* внутренние отступы от границ элемента до его содержимого */
            padding: 5px;
        }
        .centering {
            text-align: center;
            margin: auto;
        }
        .fillingLocation {
            width: 100%;
            height: 100%;
        }

        #requestAnswer {
            text-align: center;
            width: 100%;
            height: 90%;
        }
        .requestAnswerTableBlockLeft {
            text-align: right;
            padding-right: 10%; /* ИСПРАВИТЬ НА ПИКСИЛИ!!!!! */
            width: 50%;
        }
        .requestAnswerTableBlockRight {
            text-align: left;
            padding-left: 10%;
            width: 50%;
        }
        .answer {

        }
        #rPadding {
            text-align: left;
            padding-left: 117px;
        }

        #xPadding {
            text-align: left;
            padding-left: 30px;
        }

        #yPadding {
            text-align: left;
            padding-left: 130px;
        }

        .clickedElement {
            color: lightblue;
            background: background-color: rgb(30, 30, 30);;
        }
        .clickedElement:hover {
            color: black;
            cursor: pointer;
            /* padding: 4px; */
            background-color: lightblue;
        }

        .xClicked {

        }
        .xClicked:hover {

            background-color: darkcyan;
        }


        #yTextField {
            color: lightblue;
            font-weight: bold;
            text-align: center;
            background-color: rgb(30, 30, 30);;
        }
        /* селектор псевдокласса :hover */
        /* псевдокласс в css -- ключевое слово, добавленное к селектору, которое определяет его особое состояние*/

        #yTextField:hover {
            color: black;
            background-color: lightblue;
            border-color: lavender;
        }
        .selectingAreas {
            border: 1px solid;
            border-color: lightblue;
            border-radius: 3px;
            background-color: lightblue;
            color: black;
        }
        .selectingAreas:hover {
            cursor: text;
            border-color: lavender;
        }
        #submitDiv {
            border: 1px;
            border-color: rgb(30, 30, 30);
            /*border-radius: 15px;

             */
            margin: 10px;
            padding: 5px;
        }
        #submitDiv:hover {
            border-color: lightblue;
        }
        .submitButton {
            background-color: rgb(30, 30, 30);
            border: 0px;
            color: lightblue;
        }
        .submitButton:hover {
            background-color: lightblue;
            color: black;
        }
        #exceptionField {

            color: aquamarine;
        }
        .savedRequestTableBorder {
            border: 1px solid;
            border-color: lightblue;
        }
        #xSelecterStyle {
            background-color: lightblue;
        }


    </style>
</head>
<body class="basic" style="color: lightblue">
<header id = "header">
    <div>Нечаева Анна Анатольевна, R3238</div>
</header>
<div> Вариант 1418</div>
<main id="main" class="invisible">
    <!-- здесь начинается форма, метод HTTP "POST" -->
    <form id="submitForm" method="post" action="page.php" onsubmit="return checkBeforeSubmit()">
        <!-- дальше рисуем табличку -->
        <table>
            <!-- рисуем строчку -->
            <tr>
                <!-- рисуем столбец == заполняем ячейку-->
                <td>
                    <div id="clock" >00:00:00</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="interface-block">
                        <img src="area.png" alt = "Проблемы с загрузкой картинки :(">
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!-- ЭТОТ СКРИПТ ВЫВОДИТ ПОСЛЕДНИЙ РЕЗУЛЬТАТ ПОСЛЕДНЕГО ОТПРАВЛЕННОГО ЗАПРОСА -->
                    <?php if (isset($in_area)) { ?>
                        <div class="interface-block" style="border-color: antiquewhite">
                            <table class="centering fillingLocation">
                                <tr>
                                    <td>
                                        <div>
                                            Результат:
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <?php
                                        /* выводит выражения */
                                        echo "<table id='requestAnswer' class='centering'>";
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>R:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='r'>" .$_POST['R'] . "</span>
</td></tr>";
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>X:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='x'>" .$_POST['X'] . "</span></td></tr>";
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>Y:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='y'>" .$_POST['Y'] . "</span></td></tr>";
                                        if($in_area == "true") {
                                            echo "<tr><td class='requestAnswerTableBlockLeft'>Попала:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='In_area'>" . "Да" . "</span></td></tr>";
                                        } else {
                                            echo "<tr><td class='requestAnswerTableBlockLeft'>Попала:</td><td class='requestAnswerTableBlockRight'>
<span class='answer' id='In_area'>" . "Нет" . "</span></td></tr>";
                                        }
                                        $stop_time = microtime(true) * 1000000;
                                        echo "<tr><td class='requestAnswerTableBlockLeft'>Время работы:</td>
<td class='requestAnswerTableBlockRight'><span class='answer' id='PhpWorkingtime'>" . ($stop_time - $start_time) . " мкс" . "</span></td></tr>";
                                        echo "</table>";
                                        ?>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    <?php } ?>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="interface-block">
                        <table class="fillingLocation">
                            <tr>
                                <td>
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <span id="rTitle">Параметр R</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="rPadding">
                                            <span class="clickedElement">
                                                <input class="rRadio" type="radio" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="1" required>
                                                <span>1</span>
                                            </span>
                                                <span class="clickedElement">
                                                <input class="rRadio" type="radio" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="2">
                                                <span>2</span>
                                            </span>
                                                <span class="clickedElement">
                                                <input class="rRadio" type="radio" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="3">
                                                <span>3</span>
                                            </span>
                                                <span class="clickedElement">
                                                <input class="rRadio" type="radio" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="4">
                                                <span>4</span>
                                            </span>
                                                <span class="clickedElement">
                                                <input class="rRadio" type="radio" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="5">
                                                <span>5</span>
                                            </span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <table >
                                        <tr>
                                            <td>
                                                <span id="xTitle">Параметр X</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="xPadding">
                                                <select name="X" id = "xSelecterStyle"  required = "required" size="3">
                                                    <option class="xClicked" value="-4">-4</option>
                                                    <option class="xClicked" value="-3">-3</option>
                                                    <option class="xClicked" value="-2">-2</option>
                                                    <option class="xClicked" value="-1">-1</option>
                                                    <option class="xClicked" value="0">0</option>
                                                    <option class="xClicked" value="1">1</option>
                                                    <option class="xClicked" value="2">2</option>
                                                    <option class="xClicked" value="3">3</option>
                                                    <option class="xClicked" value="4">4</option>
                                                </select>

                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="fillingLocation">
                                        <tr>
                                            <td>
                                                <span id="yTitle">Параметр Y</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td id="yPadding">
                                                <input id="yTextField" class="selectingAreas" type="text" name="Y"
                                                       tabindex="3"
                                                       placeholder="(-5;3)" required>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div id="submitDiv" class="">
                        <button class="submitButton" class="fillingLocation" type="submit">
                              <table class="fillingLocation">
                             <tr>
                             <td>
                            <span id="exceptionField"></span>
                              </td>
                             </tr>
                              <tr>
                               <td>
                            <span class="submitButton" style="font-size: x-large" >Проверить точку</span>
                              </td>
                              </tr>
                             </table>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <br><br><br>
                </td>
            </tr>
            <?php
            if (isset($_POST['savedRequests'])) {
                echo "<tr><td><span>Предыдущие результаты:</span></td>";
                echo "<tr><td>";
                echo "<table id='savedRequestsTable' class='centering fillingLocation savedRequestsTableBorder'>";
                echo "<tr><td class='savedRequestTableBorder'>X</td><td class='savedRequestsTableBorder'>Y</td><td class='savedRequestsTableBorder'>R</td>
<td class='savedRequestsTableBorder'>Попала</td><td class='savedRequestsTableBorder'>Время выполнения</td></tr>";

                $savedRequests = $_POST['savedRequests'];
                $savedRequests = explode(";", $savedRequests);
                for ($i = 0; $i < count($savedRequests); $i++) {
                    $parameters = explode(",", $savedRequests[$i]);
                    echo "<tr class='request'>";
                    for ($j = 0; $j < count($parameters); $j++) {
                        echo "<td class='parameter savedRequestsTableBorder'>$parameters[$j]</td>";
                    }
                    echo "</tr>";
                }
                echo "</table>";
                echo "</tr></td>";
            }
            ?>

        </table>
    </form>
</main>
<script src="src/checker.js"></script>
</body>
</html>