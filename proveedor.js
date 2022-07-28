"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Proveedor = void 0;
var persona_1 = require("./persona");
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(id, nombre, telefono, cuit) {
        var _this = _super.call(this, id, nombre, telefono) || this;
        _this.cuit = cuit;
        return _this;
    }
    Proveedor.prototype.getCuit = function () {
        return this.cuit;
    };
    Proveedor.prototype.cambiarCuit = function (nuevoCuit) {
        this.cuit = nuevoCuit;
    };
    Proveedor.prototype.comunicarse = function () {
        return this.construirMensaje() + "PRUEBA";
    };
    Proveedor.prototype.construirMensaje = function () {
        return "Hola, soy el Proveedor " + this.getNombre() + " ";
    };
    return Proveedor;
}(persona_1.Persona));
exports.Proveedor = Proveedor;
