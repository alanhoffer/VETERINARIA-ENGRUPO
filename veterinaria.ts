import { Cliente } from "./cliente";
import { Paciente } from "./paciente";

export class Veterinaria {
  private nombre: string;
  private direccion: string;
  private id: number;
  private clientes: Cliente[];
  private pacientes: Paciente[];

  public constructor(nombre: string, direccion: string, id: number) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id;
    this.clientes = [];
    this.pacientes = [];
  }

  public getID(): number {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public getDireccion(): string {
    return this.direccion;
  }
  public agregarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }
  public quitarCliente(id: number): void {
    this.clientes = this.clientes.filter((cliente) => cliente.getId() !== id);
    this.pacientes = this.pacientes.filter(
      (paciente) => paciente.getId() !== id
    );
  }
  public agregarPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente);
  }
  public quitarPaciente(id: number, nombre: string): void {
    this.pacientes = this.pacientes.filter(
      (paciente) => paciente.getId() != id
    );
  }
  public mostrarVips(): Cliente[] {
    let clienteVip: Cliente[] = this.clientes.filter(
      (cliente) => cliente.esVip() === true
    );
    return clienteVip;
  }
  public mostrarExoticos(): Paciente[] {
    let pacienteExotico: Paciente[] = this.pacientes.filter(
      (paciente) => paciente.getExotico() === true
    );
    return pacienteExotico;
  }
}
