// import { COLORS } from "../helpers/colors";
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string;

  /**
   * displayConfiguration
   */
  public displayConfiguration() {
    console.log(`Computer config:
            CPU = ${this.cpu},
            RAM = ${this.ram},
            STORAGE = ${this.storage},
            GPU = ${this.gpu ?? "none"},
            `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const Macbook = new ComputerBuilder()
    .setCPU("M2")
    .setRAM("8 GB")
    .setStorage("256 GB")
    .build();

  const gamingComputer = new ComputerBuilder()
    .setCPU("Intel i9")
    .setRAM("32GB")
    .setStorage("1TB")
    .setGPU("Nvidia RTX 5090")
    .build();

  console.log("Gaming Computer:");
  gamingComputer.displayConfiguration();
}

main();
