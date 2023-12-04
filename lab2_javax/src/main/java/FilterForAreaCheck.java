import javax.servlet.Filter;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

// фильтер для того, чтобы не допускать прямого обращения к AreaCheckServlet
public class FilterForAreaCheck implements Filter {
    private FilterConfig filterConfig;
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
            if (!r.contains("AreaCheckServlet")) {
                chain.doFilter(request, response);
            }
        }
    }

    @Override
    public void destroy() {
        filterConfig = null;
    }

}
