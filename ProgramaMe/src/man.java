import java.util.Scanner;

public class man {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (sc.hasNextInt()) {
            int n = sc.nextInt();
            long[] velocidades = new long[n];

            for (int i = 0; i < n; i++) {
                velocidades[i] = sc.nextLong();
            }

            if (n == 0) {
                System.out.println(0);
                continue;
            }

            int grupos = 1;
            long velocidadLiderGrupo = velocidades[n - 1];

            for (int i = n - 2; i >= 0; i--) {

                if (velocidades[i] < velocidadLiderGrupo) {
                    grupos++;
                    velocidadLiderGrupo = velocidades[i];
                }

            }

            System.out.println(grupos);
        }
        sc.close();
    }
}