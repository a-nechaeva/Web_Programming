import jakarta.servlet.Filter;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;

// фильтр для того, чтобы не допускать прямого обращения к AreaCheckServlet
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
