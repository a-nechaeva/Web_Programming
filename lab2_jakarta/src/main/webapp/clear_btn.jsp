<%--
  Created by IntelliJ IDEA.
  User: user
  Date: 14.11.2023
  Time: 1:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
    td {
        padding-left: 20px;
    }
    button{
        background-image: linear-gradient(to right,#69b7eb, #b3dbd3, #f4d6db);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        font-family: Cursive;
        text-align: center;
    }
    button:hover{
        background-image: linear-gradient(to left,#69b7eb, #b3dbd3, #f4d6db);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        font-family: Cursive;
        text-align: center;
    }
</style>
<table>
    <tr>
        <td>
            <button type='button' id='clrBtn'>Очистить результаты</button>
        </td>
    </tr>
</table>
