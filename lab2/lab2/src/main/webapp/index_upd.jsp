<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 31.10.2023
  Time: 7:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.LinkedList" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="jakarta.faces.webapp.JspWriter" %>

<%
  ServletContext context = (ServletContext) request.getServletContext();
  jakarta.servlet.jsp.tagext.JspWriter pw = out;

  if ((Integer) context.getAttribute("t") != 2) {
    request.getRequestDispatcher("clear_btn.jsp").include(request,response);
  }
%>


<table id="table-result">
  <thead>
  <tr>
    <th>№</th>
    <th>Точка в зоне</th>
    <th>R</th>
    <th>X</th>
    <th>Y</th>
    <th>Время обработки</th>
  </tr>
  </thead>
  <tbody>

  <%
    LinkedList<String> answer = (LinkedList<String>) context.getAttribute("answer");
    for (String s : answer) {
      //out.write("s");
      
    }
  %>

  </tbody>
</table>
%>

