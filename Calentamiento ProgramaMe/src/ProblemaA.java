import java.util.Scanner;

public class ProblemaA {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int intentos = sc.nextInt();

        for (int i = 0; i < intentos; i++) {
            int a = sc.nextInt();

            int b = sc.nextInt();

            int c = sc.nextInt();
            
            int diferencia1 = 0;
            int diferencia2 = 0;

            if (b == 0) {
                if (a < 0) {
                    diferencia1 = (Math.abs(a - b)) - 1;
                } else if (a > 0) {
                    diferencia1 = (Math.abs(a - b)) - 1;
                } else if (a == 0) {
                    diferencia1 = 0;
                }
            } else if (a == 0) {
                if (b < 0) {
                    diferencia1 = Math.abs(a - b) - 1;
                } else if (b > 0) {
                    diferencia1 = Math.abs(a - b) - 1;
                } else {
                    diferencia1 = 0;
                }
            } else {
                if (a < 0 && b < 0) {
                    diferencia1 = Math.abs(a - b);
                } else if (a > 0 && b > 0) {
                    diferencia1 = Math.abs(a - b);
                } else {
                    diferencia1 = Math.abs(a - b) - 1;
                }
            }

            if (b == 0) {
                if (c < 0) {
                    diferencia2 = (Math.abs(c - b)) - 1;
                } else if (c > 0) {
                    diferencia2 = (Math.abs(c - b)) - 1;
                } else if (c == 0) {
                    diferencia2 = 0;
                }
            } else if (c == 0) {
                if (b < 0) {
                    diferencia2 = Math.abs(c - b) - 1;
                } else if (b > 0) {
                    diferencia2 = Math.abs(c - b) - 1;
                } else {
                    diferencia2 = 0;
                }
            } else {
                if (c < 0 && b < 0) {
                    diferencia2 = Math.abs(c - b);
                } else if (c > 0 && b > 0) {
                    diferencia2 = Math.abs(c - b);
                } else {
                    diferencia2 = Math.abs(c - b) - 1;
                }
            }

            if (diferencia1 < diferencia2) {
                System.out.println(a);
            } else if (diferencia2 < diferencia1) {
                System.out.println(c);
            } else {
                System.out.println("EMPATE");
            }
        }

    }
}