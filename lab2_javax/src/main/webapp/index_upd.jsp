<%@ page import="java.util.LinkedList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%
  ServletContext context = request.getServletContext();
  JspWriter pw = out;
%>
<style>
  #scrollTable{
    height: 200px;
    width: 600px;
    display: block;
    overflow-y: auto;
  }
  td {
    padding-left: 20px;
    padding-right: 20px;
  }
  #table-result{
      background-image: linear-gradient(to right,#69b7eb, #b3dbd3, #f4d6db);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 20px;
      font-family: Cursive;
      text-align: left;
  }
</style>

<table id="table-result" style="background-color: rgb(66,67,121)">
  <thead>
  <tr>
    <th>
      <span style="padding-left: 20px">
        №
      </span>
      <span>
        Попала?
      </span>
      <span style="padding-left: 15px">
        R
      </span>
      <span style="padding-left: 55px">
        X
      </span>
      <span style="padding-left: 80px">
        Y
      </span>
      <span style="padding-left: 55px">
        Время,мкс
      </span>
    </th>
    <!--<th>Попала?</th>
    <th>R</th>
    <th>X</th>
    <th>Y</th>
    <th>Время работы, мкс</th>-->
  </tr>
  </thead>

  <tbody id="scrollTable">

  <%
    LinkedList<String> answer = (LinkedList<String>) context.getAttribute("answer");
    for (String s : answer) {
      pw.println(s);
    }
  %>
  </tbody>
</table>
<%
  if ((Integer) context.getAttribute("t") != 2) {
    request.getRequestDispatcher("clear_btn.jsp").include(request,response);
  }
%>
