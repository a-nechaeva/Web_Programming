<%@ page import="java.io.File" %>
<%@ page import="java.io.ByteArrayOutputStream" %>
<%@ page import="java.net.URLDecoder" %>
<%@ page import="java.io.IOException" %>
<%@ page import="java.awt.*" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<!-- Внутри head находится блок служебной информации  -->
<head>
    <meta charset="UTF-8">
    <!-- Заголовок - отображается как вкладка в браузере  -->
    <title>My First Web Lab ^. .^ &#129293;</title>
    <!-- Здесь будем задавать стиль на CSS -->
    <style>
        body {
            /*background-color: #30363b ;
            background: #272b2e;

             */
            background: #202224;
            cursor: auto;
        }
        /* header div и header div p -- селекторы потомств */
        /* здесь же задан общий вид шапки, см тз */
        header div p {
            font-size: 30px;
        }

        header div {
            background-image: linear-gradient(to right,#69b7eb, #b3dbd3, #f4d6db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 50px;
            font-family: Cursive;
            text-align: center;

        }
        .borderName:hover{
            border-image-slice: 1;
            border-width: 2px;
            border-style: solid;
            border-image-source: linear-gradient(to left,  #69b7eb, #b3dbd3, #f4d6db);
        }

        #xTitle{
            color: #b3dbd3;
            font-size: 25px;
        }
        #yTitle{
            font-size: 25px;
        }
        #rTitle{
            background-image: linear-gradient(to right, #69b7eb, #b3dbd3, #f4d6db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 25px;
        }


        #submitButton{
            background-image: linear-gradient(to right, #69b7eb, #b3dbd3, #f4d6db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 25px;
        }
        #clear{
            background-image: linear-gradient(to right, #69b7eb, #b3dbd3, #f4d6db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 25px;
        }
        /* :hover -- ример селектора псевдокласса */
        .submitButton:hover{
            background-image: linear-gradient(to left, #69b7eb, #b3dbd3, #f4d6db);
            border-image-slice: 1;
            border-width: 2px;
            border-style: solid;
            border-image-source: linear-gradient(to left,  #69b7eb, #b3dbd3, #f4d6db);
            cursor: pointer;
        }
        /* пример использования селектора псевдоэлемента */
        input::placeholder{
            font-family: Cursive;
            font-size: medium;
        }

        .paddingEl{
            padding: 15px;
        }
        #paddingR{
            padding-left: 150px;
        }
        .paddingTable{
            padding-left: 80px;
            padding-top: 50px;
        }
        #xSelectorStyle{
            background-image: linear-gradient(to bottom, #69b7eb, #b3dbd3, #f4d6db);
        }
        .xClicked{
            font-family: Cursive;
        }
        .xClicked:hover{
            background-color: #202224;
            color: #f4d6db;
        }
        .xClicked:checked{
            background-color: #202224;
            color: #b3dbd3;
        }
        #yTextField {
            text-align: center;
            background-color: #202224;
            color: #b3dbd3;
            font-size: 15px;
            border-image-slice: 1;
            border-width: 2px;
            border-style: solid;
            border-image-source: linear-gradient(to left, #69b7eb, #b3dbd3, #f4d6db);
        }
        #yTextField:hover {
            color: #202224;
            background-image: linear-gradient(to left, #69b7eb, #b3dbd3, #f4d6db);
        }
        .rRadio:hover{
            cursor: pointer;
        }

        .clickedElement:hover{
            border-image-slice: 1;
            border-width: 2px;
            border-style: solid;
            border-image-source: linear-gradient(to left, #69b7eb, #b3dbd3, #f4d6db);
        }

        /* селектор дочерних классов */
        td > input{
            font-family: Cursive;
        }
        #paddingPic{
            padding-left: 200px;
            color: #b3dbd3;
            font-size: 25px;
            font-family: Cursive;
            text-align: center;
        }
        span{
            background-image: linear-gradient(to right,#69b7eb, #b3dbd3, #f4d6db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 20px;
            font-family: Cursive;
            text-align: center;
        }
        #reqTable{
            background-image: linear-gradient(to right,#69b7eb, #b3dbd3, #f4d6db);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 20px;
            font-family: Cursive;
            text-align: center;
        }
        .resText{
            text-align: center;
            font-size: 30px;
            padding-left: 30px;
        }
        .resPadding{
            padding-left: 100px;
            padding-top: 50px;
        }
        .inTableResPadding{
            padding-left: 30px;
        }
        #prevAnswersText{
            padding-left: 200px;
        }
        /*
        #error{
            padding-left: 200px;
        }

         */


    </style>
</head>
<body>
<!-- Внутри header находится шапка сайта -->
<header>
    <div>
        Нечаева Анна Анатольевна
        <p>R3238</p>
        <p>Вариант #918918</p>

    </div>
</header>
<!-- В main содержится основная информация о странице  -->
<main>
    <!-- В form будут собираться данные для отправки на сервер, скрипт, которому передается управление, в action указан  -->
    <form id="subForm" onsubmit="return validateForm()" action="src/ControllerServlet.java" method="post" >
        <!-- Табличная верстка летс гоу  -->
        <!-- Основная таблица -->
        <table>
            <tr>
                <td>
                    <table>
                        <tr>
                            <!--  Здесь должна быть картинка   -->
                            <td>
                                <!-- <img src="light_blue.png" id="paddingPic" alt="А график? ^. .^ &#128148;"> -->
                                <canvas id="graph" width="650" height="650">
                                    <p>А график? ^. .^ &#128148;</p>
                                </canvas>
                            </td>
                            <td>
                                <!-- Таблица с последним результатом  -->
                                <table class="resPadding">
                                    <tr>
                                        <td>
                                            <!--     <span class="resText">Результат:</span> -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!--   <span>Попала?</span> -->
                                        </td>
                                        <td >
                                            <!-- Здесь должен быть ответ -->
                                            <?php if(isset($is_hit)) {
                                               if ($is_hit === "true") {
                                                   echo "<span id='didHit'>" . "Да" . "</span>";
                                            } else {
                                            echo "<span id='didHit'>" . "Нет" . "</span>";
                                            }
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!--  <span>X = </span> -->
                                        </td>
                                        <td>
                                            <!-- Здесь должен быть ответ -->
                                            <?php if(isset($is_hit)) {
                                               echo "<span id='xAnswer'>" . $_POST['X'] . "</span>";
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!--  <span>Y = </span> -->
                                        </td>
                                        <td >
                                            <!-- Здесь должен быть ответ -->
                                            <?php if(isset($is_hit)) {
                                               echo "<span id='yAnswer'>" . $_POST['Y'] . "</span>";
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!--   <span>R = </span> -->
                                        </td>
                                        <td >
                                            <!-- Здесь должен быть ответ -->
                                            <?php if(isset($is_hit)) {
                                               echo "<span id='rAnswer'>" . $_POST['R'] . "</span>";
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!--    <span>Текущее время: </span> -->
                                        </td>
                                        <td >
                                            <!-- Здесь должен быть ответ -->
                                            <?php if(isset($is_hit)) {
                                               $now = date('H:i:s');
                                               echo "<span id='timeWas'>" . $now . "</span>";
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <!--    <span>Время работы скрипта: </span> -->
                                        </td>
                                        <td >
                                            <!-- Здесь должен быть ответ -->
                                            <?php if(isset($is_hit)) {
                                               $stop = microtime(true) * 1000000;
                                               echo "<span id='workTime'>" . ($stop - $start) . " мкс" . "</span>";
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <!-- Таблица с предыдущими результатами  -->
                                <table class="resPadding">
                                    <tr>
                                        <span id="prevAnswersText">Предыдущие результаты:</span>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Попала?</span>
                                        </td>
                                        <td class="inTableResPadding">
                                            <span>X</span>
                                        </td>
                                        <td class="inTableResPadding">
                                            <span>Y</span>
                                        </td>
                                        <td class="inTableResPadding">
                                            <span>R</span>
                                        </td>
                                        <td class="inTableResPadding">
                                            <span>Текущее время</span>
                                        </td>
                                        <td class="inTableResPadding">
                                            <span>Время работы</span>
                                        </td>
                                    </tr>

                                    <table id="reqTable" class="resPadding">

                                    </table>


                                    <?php
                                   if (isset($_POST['savedRequests'])) {
                                       echo "<table id='reqTable' class='resPadding'>";
                                    $savedRequests = $_POST['savedRequests'];
                                    /* explode -- разбивает строку по заданному сепаратору */
                                    $savedRequests = explode(";", $savedRequests);
                                    for ($i = 0; $i < count($savedRequests); $i++) {
                                    $parameters = explode(",", $savedRequests[$i]);
                                    echo "<tr class='request'>";
                                    for ($j = 0; $j < count($parameters); $j++) {
                                    echo "<td class='inTableResPadding'> <span class='parameter'>$parameters[$j]</span></td>";
                                    }
                                    echo "</tr>";
                                    }
                                    echo "</table>";
                                }
                                ?>
                        <%
                        //ПЕРЕДЕЛАТЬ ЧЕРЕЗ КОНТЕКСТЫ ПРИЛОЖЕНИЯ!!!
                                    if (request.getSession().getAttribute("lastRequest") != null) {
                                        out.print("<table id='reqTable' class='resPadding'>");
                                        String lastRequests = (String) (request.getSession().getAttribute("lastRequests"));
                                        String[] requests = lastRequests.split(";");
                                        for (String req : requests) {
                                            String[] reqParameters = req.split(",");
                                            out.print("<tr class='request'>");
                                            for (String param : reqParameters) {
                                                out.print("<td class='inTableResPadding'> <span class='parameter'>" + param +  "</span></td>");
                                            }
                                            out.print("</tr>");
                                        }
                                        out.print("</table>");
                                    }
                        %>

                    </table>
                </td>
            </tr>

        </table>
        </td>
        </tr>
        <tr>
            <td>
                <!-- эта таблица отвечает за выбираемые кнопки  -->
                <table class="paddingTable">
                    <tr>
                        <td>
                            <table class="borderName">
                                <tr>
                                    <td>
                                        <span id="xTitle">Выбор координаты X:</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="paddingEl">
                                        <select name="X" id = "xSelectorStyle" size="3" >
                                            <option class="xClicked" value="-5">-5</option>
                                            <option class="xClicked" value="-4">-4</option>
                                            <option class="xClicked" value="-3">-3</option>
                                            <option class="xClicked" value="-2">-2</option>
                                            <option class="xClicked" value="-1">-1</option>
                                            <option class="xClicked" value="0">0</option>
                                            <option class="xClicked" value="1">1</option>
                                            <option class="xClicked" value="2">2</option>
                                            <option class="xClicked" value="3">3</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class="borderName">
                                <tr>
                                    <td>
                                        <span id="yTitle">Ввод координаты Y:</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="paddingEl">
                                        <input id="yTextField" class="selectingAreas" type="text" name="Y"
                                               tabindex="3"
                                               placeholder="(-5;3)">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table id="paddingR">
                                <tr>
                                    <td>
                                        <span id="rTitle">Выбор значения R:</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="paddingEl">
                                <span class="clickedElement">
                                                <input class="rRadio" type="button" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="1" >
                                                <span>1</span>
                                            </span>
                                        <span class="clickedElement">
                                                <input class="rRadio" type="button" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="1.5">
                                                <span>1.5</span>
                                            </span>
                                        <span class="clickedElement">
                                                <input class="rRadio" type="button" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="2">
                                                <span>2</span>
                                            </span>
                                        <span class="clickedElement">
                                                <input class="rRadio" type="button" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="2.5">
                                                <span>2.5</span>
                                            </span>
                                        <span class="clickedElement">
                                                <input class="rRadio" type="button" name="R" tabindex="1"
                                                       placeholder="Параметр R"
                                                       value="3">
                                                <span>3</span>
                                            </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span id="error"></span>
                        </td>
                    </tr>
                    <tr class="paddingEl">
                        <td class="submit paddingEl" >
                            <input id="submitButton" type="submit" value="Проверить точку"  />

                        </td>
                        <!-- <td class="submit paddingEl">
                             <input id="clear" id="submitButton" type="submit" value="Очистить таблицу" />

                         </td> -->
                    </tr>
                </table>
            </td>
        </tr>
        </table>
    </form>
</main>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="src/new_val.js"></script>
<script src="src/val.js"></script>
<script src="draw_area.js"></script>
</body>
</html>