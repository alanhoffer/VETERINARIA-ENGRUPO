"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(id, nombre, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Persona.prototype.getId = function () {
        return this.id;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setId = function (nuevoId) {
        this.id = nuevoId;
    };
    Persona.prototype.cambiarNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Persona.prototype.cambiarTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Persona.prototype.saludar = function () {
        return "Estoy saludando";
    };
    return Persona;
}());
exports.Persona = Persona;
