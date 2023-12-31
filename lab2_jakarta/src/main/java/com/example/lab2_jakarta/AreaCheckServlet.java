package com.example.lab2_jakarta;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.util.LinkedList;


@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    Float x;
    Float y, r;
    long startTime;
    ServletContext servletContext;
    LinkedList<String> answer;
    int number;
    HttpServletRequest request;
    HttpServletResponse response;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.request = request;
        this.response = response;
        servletContext = request.getServletContext();
        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");
        this.x = Float.parseFloat(x);
        this.y = Float.parseFloat(y);
        this.r = Float.parseFloat(r);
        handleNumbers();
        response.sendRedirect("index_upd.jsp");
    }


    public void handleNumbers() {
        startTime = System.nanoTime();
        String isInArea = (checkGetInto()) ? "Да" : "Нет";
        float time = (float) (System.nanoTime()  - startTime);
        updateNumber();
        answer = (LinkedList<String>) servletContext
                .getAttribute("answer");
        // здесь json / xml
        // здесь, наверное, должно быть чтение и и запись в файл ???
       /* answer.addFirst("<tr><td>" + number + "</td>" +
                "<td>" + isInArea + "</td>" +
                "<td>" + r + "</td>" +
                "<td>" + String.format("%.3f", x) + "</td>" +
                "<td>" + String.format("%.3f", y) + "</td>" +
                "<td>" + time / 1000 + "</td></tr>");
        */
        // да, пока костыль, соре
        answer.addFirst(number + "%" +
                       isInArea + "%" +
                       r + "%" +
                       String.format("%.3f", x) + "%" +
                       String.format("%.3f", y) + "%" +
                       time / 1000);
        servletContext.setAttribute("answer", answer);
    }

    public void updateNumber() {
        number = (int) servletContext
                .getAttribute("number") + 1;
        servletContext
                .setAttribute("number", number);
    }

    public boolean checkGetInto() {
        if (checkIntoTriangle() || checkIntoRectangle() || checkIntoCircle()) {
            return true;
        }
        return false;
    }

    public boolean checkIntoTriangle() {
        return (x >= 0) && (x <= r / 2) && (y >= 0) && (y <= r) && (y <= -2 * x + r);
    }

    public boolean checkIntoRectangle() {
        return (x >= -r) && (x <= 0) && (y >= -r / 2) && (y <= 0);
    }

    public boolean checkIntoCircle() {
        return (x >= 0) && (x <= r / 2) && (y <= 0) && (y >= -r / 2) && (x * x + y * y <= r * r / 4);
    }



   // это все в validate
    /*
    public boolean validate(String x, String y, String r) {
        boolean isNumbers = false;
        if (x != null && y != null && r != null) {
            if (isNumeric(x) && isNumeric(y) && isNumeric(r)) {
                this.x = Float.parseFloat(x);
                this.y = Float.parseFloat(y);
                this.r = Float.parseFloat(r);
                if (validateRange()) {
                    isNumbers = true;
                }
            }
        }
        return isNumbers;
    }

    public boolean validateRange() {
        return (x >= -5 && x <= 3) && (y > -5.0 && y < 3.0) && (r >= 1.0 && r <= 3.0);
    }

    public static boolean isNumeric(String str) {
        str.replaceFirst(",", ".");
        return str.matches("-?\\d+(\\.\\d+)?");
    }

     */

}
