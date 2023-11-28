import javax.servlet.Filter;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;

// фильтер для того, чтобы не допускать прямого обращения к AreaCheckServlet
public class FilterForAreaCheck implements Filter {
    private FilterConfig filterConfig;
    private static ArrayList<String> servlets; // ранилище сервлетов
    @Override
    public void init(FilterConfig fConfig) throws SecurityException{
        filterConfig = fConfig;
    };
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {


        if (filterConfig.getInitParameter("active").equalsIgnoreCase("true")) {
            HttpServletRequest req = (HttpServletRequest) request;
            // Парсим адрес в строку
            String r = req.getRequestURL().toString();
            //извлекаем наименование сервлеты
            String serv = null;
            if (!r.contains("AreaCheckServlet")) {
               /* ServletContext ctx = filterConfig.getServletContext();
                RequestDispatcher dispatcher = ctx.getRequestDispatcher("");*/

                chain.doFilter(request, response);
                return;
            }
        }
    }

    @Override
    public void destroy() {
        filterConfig = null;
    }

}
