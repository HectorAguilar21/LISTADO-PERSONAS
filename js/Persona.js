class Persona {
  constructor(nombres, apellidos) {
    this._nombres = nombres;
    this._apellidos = apellidos;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
}