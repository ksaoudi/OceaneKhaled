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
var router_1 = require("@angular/router");
var employees_service_1 = require("./employees.service");
var EmployeesFilterComponent = /** @class */ (function () {
    function EmployeesFilterComponent(employeesService, router) {
        this.employeesService = employeesService;
        this.router = router;
    }
    EmployeesFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesService.getEmployeeProperties().subscribe(function (employeeProps) { return _this.employeeProps = employeeProps; });
        this.employeesService.getEmployees().subscribe(function (employees) { _this.employees = employees; _this.allEmployees = employees; });
    };
    EmployeesFilterComponent.prototype.filterOnClick = function () {
        var _this = this;
        this.employeesService.getFilteredEmployees(this.selectedProp, this.allEmployees).subscribe(function (employees) { return _this.employees = employees; });
    };
    EmployeesFilterComponent.prototype.resetOnClick = function () {
        var _this = this;
        this.employeesService.getEmployees().subscribe(function (employees) { _this.employees = employees; _this.allEmployees = employees; });
    };
    EmployeesFilterComponent = __decorate([
        core_1.Component({
            selector: 'employees-filter',
            templateUrl: './app/employees/filter-employees.component.html',
            styleUrls: ['./app/employees/filter-employees.component.css'],
            providers: [employees_service_1.EmployeesService],
        }),
        __metadata("design:paramtypes", [employees_service_1.EmployeesService, router_1.Router])
    ], EmployeesFilterComponent);
    return EmployeesFilterComponent;
}());
exports.EmployeesFilterComponent = EmployeesFilterComponent;
//# sourceMappingURL=filter-employees.component.js.map