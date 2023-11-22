<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 31.10.2023
  Time: 7:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.LinkedList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.io.PrintWriter" %>

<%
  ServletContext context = request.getServletContext();
  PrintWriter printer = response.getWriter();

  if ((Integer) context.getAttribute("t") != 2) {
    request.getRequestDispatcher("clear_btn.jsp").include(request,response);
  }
%>
<style>
  #scrollTable{
    height: 200px;
    width: 600px;
    display: block;
    overflow-y: auto;
    background-image: linear-gradient(to right,#69b7eb, #b3dbd3, #f4d6db);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-family: Cursive;
    text-align: center;
  }
  td {
    padding-left: 20px;
  }
</style>

<table id="table-result">
  <!--<thead>-->
  <tr>
    <td>№</td>
    <td>Точка в зоне</td>
    <td>R</td>
    <td>X</td>
    <td>Y</td>
    <td>Время обработки</td>
  </tr>
  <!--</thead>-->
  <tbody id="scrollTable">

  <%
    LinkedList<String> answer = (LinkedList<String>) context.getAttribute("answer");
    for (String s : answer) {
      printer.println(s);

    }
  %>

  </tbody>
</table>
%>

