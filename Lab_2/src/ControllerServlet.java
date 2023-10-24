
import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher dispatcher = request.getRequestDispatcher(SentTo.INDEX.toString());
        dispatcher.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (isValidateRequest(request)) {
            RequestDispatcher dispatcher = request.getRequestDispatcher(SentTo.AREA_CHECK.toString());
            dispatcher.forward(request, response);
        } else {
            RequestDispatcher dispatcher = request.getRequestDispatcher(SentTo.INDEX.toString());
            dispatcher.forward(request, response);
        }
    }

    private enum SentTo {
        AREA_CHECK {
            @Override
            public String toString() {
                return "AreaCheckServlet";
            }
        },
        INDEX {
            @Override
            public String toString() {
                return "page.jsp";
            }
        }
    }
    private boolean isValidateRequest(HttpServletRequest request) {
        float x = 0;
        float y = 0;
        float r = 0;

        if (request.getParameter("X") != null && request.getParameter("Y") != null && request.getParameter("R") != null) {
            try {
                x = Float.valueOf(request.getParameter("X"));
                y = Float.valueOf(request.getParameter("Y"));
                r = Float.valueOf(request.getParameter("R"));
            } catch (Exception e) {
                return false;
            }
        } else {
            return false;
        }

        return true;
    }
/*
    private boolean isClearRequest(HttpServletRequest request){
        if(request.getParameter("clear") != null){
            if(Boolean.valueOf(request.getParameter("clear"))){
                return true;
            }
        }
        return false;
    }

 */
}
