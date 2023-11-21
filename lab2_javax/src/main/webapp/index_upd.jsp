<%@ page import="java.util.LinkedList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%
  ServletContext context = request.getServletContext();
  JspWriter pw = out;

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
 <!-- <thead> -->
  <tr>
    <td>№</td>
    <td>Точка в зоне</td>
    <td>R</td>
    <td>X</td>
    <td>Y</td>
    <td>Время обработки</td>
  </tr>
 <!-- </thead> -->
 <!-- <tbody style="height: 200px;display: block; overflow-y: auto"> -->
  <tbody id="scrollTable">

  <%
    LinkedList<String> answer = (LinkedList<String>) context.getAttribute("answer");
    for (String s : answer) {
      pw.println(s);
    }
  %>

  </tbody>
</table>
