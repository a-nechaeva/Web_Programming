<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 09.11.2023
  Time: 14:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="jakarta.servlet.http.*" %>
<%@ page import="java.io.*" %>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Second Web Lab ^. .^ &#129293;</title>
  <link rel="stylesheet" href="style_of_pages.css">
</head>
<body>

<header>
  <div>
    Нечаева Анна Анатольевна
    <p>R3238</p>
    <p>Вариант #918918</p>
  </div>
</header>
<main>
  <form id="form" method="post">
    <table>
      <tr>
        <td>
          <table>
            <tr>
              <td>
                <!-- <img src="light_blue.png" id="paddingPic" alt="А график? ^. .^ &#128148;"> -->
                <canvas id="graph" width="650" height="650">
                  <p>Ваш браузер не поддерживает рисование.</p>
                </canvas>
              </td>
              <td>
                <!-- Таблица с предыдущими результатами  -->
                <table class="resPadding">
                  <% ServletContext context = request.getServletContext();
                     PrintWriter printer = response.getWriter(); // strange? why is response here?
                     ArrayList<String> answer = (ArrayList<String>) context.getAttribute("answer");
                     if (answer.size() > 0) {
                  %>
                  <tr>
                    <span id="prevAnswersText">Предыдущие результаты:</span>
                  </tr>
                  <tr>
                    <td>
                      <span>Попала?</span>
                      <span>
                         <%
                           printer.println(answer.get(0));
                         %>
                      </span>
                    </td>
                    <td class="inTableResPadding">
                      <span>X</span>
                      <span>
                         <%
                           printer.println(answer.get(1));
                         %>
                      </span>
                    </td>
                    <td class="inTableResPadding">
                      <span>Y</span>
                      <span>
                         <%
                           printer.println(answer.get(2));
                         %>
                      </span>
                    </td>
                    <td class="inTableResPadding">
                      <span>R</span>
                      <span>
                         <%
                           printer.println(answer.get(3));
                           }
                         %>
                      </span>
                    </td>
                    <td class="inTableResPadding">
                      <span>Текущее время</span>
                    </td>
                    <td class="inTableResPadding">
                      <span>Время работы</span>
                    </td>
                  </tr>
                  <table class="resPadding">
                    <tr>
                      <td>
                                                <span  id="reqTable">
                                                </span>
                      </td>
                    </tr>
                  </table>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
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
                                                <button id ="b1" class="rRadio" type="button"  name="R" tabindex="1"
                                                        placeholder="Параметр R"
                                                        value="1" >
                                                <span>1</span></button>
                                            </span>
                      <span class="clickedElement">
                                                <button id ="b1.5" class="rRadio" type="button"  name="R" tabindex="1"
                                                        placeholder="Параметр R"
                                                        value="1.5" >
                                                <span>1.5</span></button>
                                            </span>
                      <span class="clickedElement">
                                                <button  id ="b2" class="rRadio" type="button"  name="R" tabindex="1"
                                                         placeholder="Параметр R"
                                                         value="2" >
                                                <span>2</span></button>
                                            </span>
                      <span class="clickedElement">
                                                <button id ="b2.5" class="rRadio" type="button"  name="R" tabindex="1"
                                                        placeholder="Параметр R"
                                                        value="2.5" >
                                                <span>2.5</span></button>
                                            </span>
                      <span class="clickedElement">
                                                <button id = "b3" class="rRadio" type="button"  name="R" tabindex="1"
                                                        placeholder="Параметр R"
                                                        value="3" >
                                                <span>3</span></button>
                                            </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <span id="exceptionFieldX"></span>
                <span id="exceptionFieldY"></span>
                <span id="exceptionFieldR"></span>
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
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="src/new_val.js"></script>
<script type="text/javascript" src="../../../../lab2/lab2/src/main/webapp/script.js"></script>
<script src="src/val.js"></script> -->
<script src="draw_area.js"></script>
</body>

