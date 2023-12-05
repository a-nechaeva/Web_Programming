<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 03.12.2023
  Time: 10:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.LinkedList" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%
    ServletContext context = request.getServletContext();
    //JspWriter pw = out;
    PrintWriter printer = response.getWriter();
    LinkedList<String> points = (LinkedList<String>) context.getAttribute("answer");
    for (String s: points) {
        String[] parts = s.split("%");
        String order = parts[0];
        String hit = parts[1];
        String r = parts[2];
        String x = parts[3];
        String y = parts[4];
        String time = parts[5];

        float xNum = Float.parseFloat(x.replaceFirst(",", "."));
        float yNum = Float.parseFloat(y.replaceFirst(",", "."));
        float radius = Float.parseFloat(r);

        float xOnArea = (xNum * 240) / radius;
        float yOnArea = (yNum * 240) / radius;
        String className = "new_points";
        printer.println("<circle class=\"" + className + "\" r=\"5\" cx=\"" + xOnArea + "\" cy=\"" +
                yOnArea + "\" fill-opacity=\"0.7\" fill=\"cyan\" stroke=\"red\"></circle>");

    }
%>

