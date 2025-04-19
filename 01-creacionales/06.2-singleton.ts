/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 */

import { COLORS } from "../helpers/colors.ts";

class DatabaseConnection {
  private static instance: DatabaseConnection; //! instancia privada static de clase
  private connected: boolean = false;

  // Constructor privado para evitar instancias directas
  private constructor() {} //! private constructor

  // Método estático para obtener la instancia única
  public static getInstance(): DatabaseConnection {
    //! Se crea la instancia de clase mediante un metodo de clase
    // Completar: implementar el patrón Singleton
    if (!DatabaseConnection.instance) {
      //Como es una propiedad static hay que hacer referencia de esta forma
      DatabaseConnection.instance = new DatabaseConnection();
      console.log("%cConexion a la DB", COLORS.blue);
      // return DatabaseConnection.instance;
    }

    return DatabaseConnection.instance;
  }

  // Método para conectar a la base de datos
  public connect(): void {
    // Completar: si no está conectado, mostrar mensaje de conexión
    if (this.connected) {
      console.log("%cya existe una conexión activa \n", COLORS.yellow);
    }

    this.connected = true;
    console.log("%cNew conextion to DB \n", COLORS.green);
  }

  // Método para desconectar de la base de datos
  public disconnect(): void {
    // Completar: desconectar y mostrar mensaje de desconexión

    if (!this.connected) {
      console.log("%cno hay una conexion activa \n", COLORS.yellow);
    }

    this.connected = false;
    console.log("%cDesconectados de la DB \n", COLORS.red);
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Debería conectar a la base de datos

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Debería mostrar que ya existe una conexión activa

  console.log("Son iguales: ", db1 === db2, "\n"); // Debería mostrar true

  db1.disconnect(); // Debería cerrar la conexión

  db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior
}

main();
