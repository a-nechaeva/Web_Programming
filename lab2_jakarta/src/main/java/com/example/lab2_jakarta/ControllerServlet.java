package com.example.lab2_jakarta;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import java.util.LinkedList;
import com.example.lab2_jakarta.Validate;

import static com.example.lab2_jakarta.Validate.validation;

@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet {
    Integer t;
    HttpServletResponse response;
    HttpServletRequest request;
    ServletContext servletContext;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.request = request;
        this.response = response;
        servletContext = request.getServletContext();
        response.setCharacterEncoding("UTF-8");
        makeAnswer();
    }

    public void makeAnswer() throws ServletException, IOException {
        String pathCheck = "/AreaCheckServlet";
        String paramT = request.getParameter("t");

        // здесь, видимо, валидация
        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");

        if (paramT != null) {
            t = Integer.parseInt(paramT);
            servletContext.setAttribute("t",t);
            if ((t == 1) && (validation(x, y, r))) {
                contextWork(1);
                request.getRequestDispatcher(pathCheck).forward(request, response);
            } else if (t == 2) {
                contextWork(2);
                clearServletContext();
            } else if (t == 3) {
                contextWork(3);
            }
        }
    }
    // костыль, потому что метод не импортитсяф
    /*public boolean validation(String x, String y, String r) {
        boolean isNumbers = false;
        if (x != null && y != null && r != null) {
            if (isNumeric(x) && isNumeric(y) && isNumeric(r)) {
                Float numX = Float.parseFloat(x);
                Float numY = Float.parseFloat(y);
                Float numR = Float.parseFloat(r);
                if (validateRange(numX, numY, numR)) {
                    isNumbers = true;
                }
            }
        }
        return isNumbers;
    }
    public boolean isNumeric(String str) {
        str.replaceFirst(",", ".");
        return str.matches("-?\\d+(\\.\\d+)?");
    }
    public boolean validateRange(Float x, Float y, Float r) {
        return (x >= -5 && x <= 3) && (y > -5.0 && y < 3.0) && (r >= 1.0 && r <= 3.0);
    }

     */

    public void clearServletContext() {
        servletContext.removeAttribute("answer");
        servletContext.removeAttribute("number");
        servletContext.removeAttribute("t");
    }

    public void contextWork(int t) throws IOException, ServletException {
        if (t == 1 && servletContext.getAttribute("answer") == null) {
            servletContext.setAttribute("answer", new LinkedList<String>());
            servletContext.setAttribute("number", 0);
        } else if (t == 2) {
            LinkedList<String> answer =new LinkedList<>();
            String s = "<td>Free \n ^..% </td>";
            answer.add("<tr>" + s + s + s + s + s + s+"</tr>");
            servletContext.setAttribute("answer",
                    answer);
            request.getRequestDispatcher("index_upd.jsp").forward(request,response);
        } else if (t == 3 && servletContext.getAttribute("answer") != null) {
            response.sendRedirect("index_upd.jsp");
        }

    }
}
