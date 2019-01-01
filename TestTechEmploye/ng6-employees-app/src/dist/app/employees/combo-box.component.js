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
var combo_box_pipe_1 = require("./combo-box.pipe");
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["UP_ARROW"] = 38] = "UP_ARROW";
    KEY_CODE[KEY_CODE["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KEY_CODE[KEY_CODE["TAB_KEY"] = 9] = "TAB_KEY";
})(KEY_CODE = exports.KEY_CODE || (exports.KEY_CODE = {}));
var ComboBoxComponent = /** @class */ (function () {
    function ComboBoxComponent(ComboBoxPipe) {
        this.ComboBoxPipe = ComboBoxPipe;
        this.reset();
    }
    ComboBoxComponent.prototype.onFocusEventAction = function () {
        this.counter = -1;
    };
    ComboBoxComponent.prototype.onBlurEventAction = function () {
        this.showDropDown = false;
    };
    ComboBoxComponent.prototype.onKeyDownAction = function (event) {
        this.showDropDown = true;
        if (event.keyCode === KEY_CODE.UP_ARROW) {
            this.counter = (this.counter === 0) ? this.counter : --this.counter;
            this.checkHighlight(this.counter);
            this.textToSort = this.dataList[this.counter][this.columnName];
        }
        if (event.keyCode === KEY_CODE.DOWN_ARROW) {
            this.counter = (this.counter === this.dataList.length - 1) ? this.counter : ++this.counter;
            this.checkHighlight(this.counter);
            this.textToSort = this.dataList[this.counter][this.columnName];
        }
    };
    ComboBoxComponent.prototype.checkHighlight = function (currentItem) {
        if (this.counter === currentItem)
            return true;
        else
            return false;
    };
    ComboBoxComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    ComboBoxComponent.prototype.toogleDropDown = function () {
        this.showDropDown = !this.showDropDown;
    };
    ComboBoxComponent.prototype.reset = function () {
        this.showDropDown = false;
        this.dummyDataList = this.dataList;
    };
    ComboBoxComponent.prototype.textChange = function (value) {
        this.dummyDataList = [];
        if (value.length > 0) {
            this.dummyDataList = this.ComboBoxPipe.transform(this.dataList, this.columnName, value);
            if (this.dummyDataList) {
                this.showDropDown = true;
            }
        }
        else {
            this.reset();
        }
    };
    ComboBoxComponent.prototype.updateTextBox = function (valueSelected) {
        this.textToSort = valueSelected;
        this.showDropDown = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ComboBoxComponent.prototype, "dataList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ComboBoxComponent.prototype, "columnName", void 0);
    ComboBoxComponent = __decorate([
        core_1.Component({
            selector: 'combo-box',
            templateUrl: './combo-box.component.html',
            styleUrls: ['./combo-box.component.css'],
            providers: [combo_box_pipe_1.ComboBoxPipe]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof combo_box_pipe_1.ComboBoxPipe !== "undefined" && combo_box_pipe_1.ComboBoxPipe) === "function" && _a || Object])
    ], ComboBoxComponent);
    return ComboBoxComponent;
    var _a;
}());
exports.ComboBoxComponent = ComboBoxComponent;
//# sourceMappingURL=combo-box.component.js.map