var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.HTMLElement = window.HTMLElement || Element;
var DateString = /** @class */ (function (_super) {
    __extends(DateString, _super);
    function DateString() {
        var _this = _super.call(this) || this;
        return _this;
    }
    Object.defineProperty(DateString, "observedAttributes", {
        // 返回需要监听的属性，当属性值改变的时候会调用 attributeChangedCallback 这个方法
        get: function () {
            return ['ln', 'test'];
        },
        enumerable: true,
        configurable: true
    });
    DateString.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        this.updateRendering(newValue);
    };
    // 元素插入到文档中时调用
    DateString.prototype.connectedCallback = function () {
        var ln = this.getAttribute('ln');
        this.updateRendering(ln);
    };
    // 元素从文档中移除时调用
    DateString.prototype.disconnectedCallback = function () {
        window.clearInterval(this.interval);
    };
    DateString.prototype.updateRendering = function (ln) {
        var _this = this;
        if (ln === void 0) { ln = 'zh'; }
        // 一个比较好的实践就是在渲染时，检查元素的 ownerDocument.defaultView, 如果不存在则什么都不干
        if (!this.ownerDocument.defaultView) {
            return;
        }
        if (this.interval) {
            window.clearInterval(this.interval);
        }
        this.interval = setInterval(function () {
            if (ln === 'zh') {
                _this.innerHTML = new Date().toLocaleString();
            }
            else {
                _this.innerHTML = new Date().toString();
            }
        }, 1000);
    };
    return DateString;
}(HTMLElement));
customElements.define('x-ds', DateString);
