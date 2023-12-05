package com.example.lab2_jakarta;

public class Validate {

    public static boolean validation(String x, String y, String r) {
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
    public static boolean isNumeric(String str) {
        str.replaceFirst(",", ".");
        return str.matches("-?\\d+(\\.\\d+)?");
    }
    public static boolean validateRange(Float x, Float y, Float r) {
        return (x >= -5 && x <= 3) && (y > -5.0 && y < 3.0) && (r >= 1.0 && r <= 3.0);
    }
}
