"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var EmployeesService = /** @class */ (function () {
    function EmployeesService(http) {
        this.http = http;
        this.employeesUrl = "http://localhost:8080/api";
    }
    EmployeesService.prototype.getEmployees = function () {
        var headers = new http_1.HttpHeaders();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT");
        var httpOptions = { headers: headers };
        var url = this.employeesUrl + "/Employees";
        return this.http.get(url, httpOptions);
    };
    EmployeesService.prototype.getFilteredEmployees = function (filterProp, employees) {
        var headers = new http_1.HttpHeaders();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.append("Content-Type", "application/json");
        var httpParams = new http_1.HttpParams();
        httpParams = httpParams.append("property", filterProp);
        var httpOptions = { headers: headers, params: httpParams };
        var url = this.employeesUrl + "/EmployeesByProp";
        return this.http.post(url, employees, httpOptions);
    };
    EmployeesService.prototype.getEmployeeProperties = function () {
        var headers = new http_1.HttpHeaders();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT");
        var httpOptions = { headers: headers };
        var url = this.employeesUrl + "/EmployeeProperties";
        return this.http.get(url, httpOptions);
    };
    EmployeesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeesService);
    return EmployeesService;
}());
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map