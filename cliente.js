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
exports.Cliente = void 0;
var persona_1 = require("./persona");
/*import {Veterinaria} from './veterinaria';*/
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(id, nombre, telefono) {
        var _this = _super.call(this, id, nombre, telefono) || this;
        _this.visitas = 0;
        _this.vip = false;
        return _this;
    }
    Cliente.prototype.newVisita = function () {
        this.visitas++;
        if (this.visitas >= 5 && this.vip === false) {
            this.vip = true;
        }
    };
    Cliente.prototype.contarVisita = function () {
        return this.visitas;
    };
    Cliente.prototype.esVip = function () {
        return this.vip;
    };
    Cliente.prototype.comunicarse = function () {
        return this.construirMensaje() + " para veterinaria ";
    };
    Cliente.prototype.construirMensaje = function () {
        return "Mensaje de Cliente " + this.getNombre();
    };
    return Cliente;
}(persona_1.Persona));
exports.Cliente = Cliente;
