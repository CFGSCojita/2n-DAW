import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ProblemaC {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num;
        String resultado = "";
        List<Integer> numerosGuardados = new ArrayList<>();
        List<String> letrasGuardadas = new ArrayList<>();
        
        while (true) {
            System.out.println("Pon el numero (0 para terminar):");
            
            if (sc.hasNextInt()) {
                num = sc.nextInt();
                if (num == 0) {
                    System.out.println("Has terminado de introducir numeros.");
                    break;
                } else if (num > 0) {
                    numerosGuardados.add(num);
                } else {
                    System.out.println("Por favor, introduce un número positivo o 0 para terminar.");
                }
            } else {
                System.out.println("Entrada inválida. Introduce un número entero.");
                sc.next();
            }
        }

        for (int i = 0; i < numerosGuardados.size(); i++) {
            while (numerosGuardados.get(i) > 0) {
                
                if (numerosGuardados.get(i) >= 1000000) { 
                    numerosGuardados.set(i, numerosGuardados.get(i) - 1000000);
                    resultado += "H";
                } else if (numerosGuardados.get(i) >= 100000) {
                    numerosGuardados.set(i, numerosGuardados.get(i) - 100000);
                    resultado += "R";
                } else if (numerosGuardados.get(i) >= 10000) {
                    numerosGuardados.set(i, numerosGuardados.get(i) - 10000);
                    resultado += "D";
                } else if (numerosGuardados.get(i) >= 1000) {
                    numerosGuardados.set(i, numerosGuardados.get(i) - 1000);
                    resultado += "F";
                } else if (numerosGuardados.get(i) >= 100) {
                    numerosGuardados.set(i, numerosGuardados.get(i) - 100);
                    resultado += "C";
                } else if (numerosGuardados.get(i) >= 10) {
                    numerosGuardados.set(i, numerosGuardados.get(i) - 10);
                    resultado += "G";
                } else { 
                    numerosGuardados.set(i, numerosGuardados.get(i) - 1);
                    resultado += "T";
                }
            }
            letrasGuardadas.add(resultado);
            resultado = "";
        }

        System.out.println("\n--- Resultados ---");
        for (String string : letrasGuardadas) {
            System.out.println(string);
        }
        sc.close();
    }
}
