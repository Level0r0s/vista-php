(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVBAR_LABEL_TEXT = 'Vista Basic Home';

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var viewport_1 = require("./ui/viewport/viewport");

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);
    }

    _createClass(Main, null, [{
        key: "run",
        value: function run(root) {
            var viewport = viewport_1.Viewport.getInstance();
            root.add(viewport, { edge: 0 });
            // StoreManager.init();
        }
    }]);

    return Main;
}();

exports.Main = Main;
applib.Application.startupFunction = Main.run;

},{"./ui/viewport/viewport":48}],3:[function(require,module,exports){
/// <reference path="../../qkwidgets/types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Xhr = qx.io.request.Xhr;
var reply_manager_1 = require("../managers/reply_manager");
var qx_constants = require("../constants/qx_constants");
var css_selector = '#csrf_token';

var Rest = function () {
    _createClass(Rest, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!Rest.instance) {
                Rest.instance = new Rest();
            }
            return Rest.instance;
        }
    }, {
        key: "deleteModel",
        value: function deleteModel(model, id) {
            var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            this.getInstance().deleteModel(model, id, fn, scope);
        }
    }, {
        key: "evalScript",
        value: function evalScript(script) {
            var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.getInstance().evalScript(script, fn);
        }
    }, {
        key: "getModel",
        value: function getModel(model) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            this.getInstance().getModel(model, args, fn, scope);
        }
    }, {
        key: "login",
        value: function login(email, password, fn) {
            var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            this.getInstance().login(email, password, fn, scope);
        }
    }, {
        key: "logout",
        value: function logout(fn) {
            var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.getInstance().logout(fn, scope);
        }
    }, {
        key: "register",
        value: function register(name, email, password, password_confirmation, fn) {
            var scope = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

            this.getInstance().register(name, email, password, password_confirmation, fn, scope);
        }
    }, {
        key: "storeModel",
        value: function storeModel(model, data) {
            var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            this.getInstance().storeModel(model, data, fn, scope);
        }
    }, {
        key: "updateModel",
        value: function updateModel(model, id) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var fn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var scope = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

            this.getInstance().updateModel(model, id, data, fn, scope);
        }
    }]);

    function Rest() {
        _classCallCheck(this, Rest);

        var selection = new q(css_selector);
        if (selection.length > 0) this.csrf_token = selection[0].value;
    }

    _createClass(Rest, [{
        key: "createDeleteModelRequest",
        value: function createDeleteModelRequest(model, id) {
            return this.createModelRequest(model, 'DELETE', id);
        }
    }, {
        key: "createGetModelRequest",
        value: function createGetModelRequest(model) {
            return this.createModelRequest(model, 'GET');
        }
    }, {
        key: "createGetRequest",
        value: function createGetRequest(url) {
            return this.createRequest(url, 'GET');
        }
    }, {
        key: "createPatchModelRequest",
        value: function createPatchModelRequest(model, id) {
            return this.createModelRequest(model, 'PATCH', id);
        }
    }, {
        key: "createPostModelRequest",
        value: function createPostModelRequest(model) {
            return this.createModelRequest(model, 'POST');
        }
    }, {
        key: "createPostRequest",
        value: function createPostRequest(url) {
            return this.createRequest(url, 'POST');
        }
    }, {
        key: "createModelRequest",
        value: function createModelRequest(model, method) {
            var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            return this.createRequest(this.createModelUrl(model, id), method);
        }
    }, {
        key: "createRequest",
        value: function createRequest(url, method) {
            var req = new Xhr(url);
            req.setMethod(method);
            return req;
        }
    }, {
        key: "createModelUrl",
        value: function createModelUrl(model, id) {
            if (id == null) return "index.php/api/" + model;else return "index.php/api/" + model + "/" + id;
        }
    }, {
        key: "deleteModel",
        value: function deleteModel(model, id, fn, scope) {
            var req = this.createDeleteModelRequest(model, id);
            this.sendRequest(req, null, fn, scope);
        }
    }, {
        key: "evalScript",
        value: function evalScript(script, fn) {
            var req = this.createGetRequest('index.php/rpc');
            var data = { script: script };
            this.sendRequest(req, data, fn);
        }
    }, {
        key: "getModel",
        value: function getModel(model, args, fn, scope) {
            var req = this.createGetModelRequest(model);
            this.sendRequest(req, args, fn, scope);
        }
    }, {
        key: "login",
        value: function login(email, password, fn, scope) {
            var req = this.createPostRequest('/login');
            var data = { email: email, password: password };
            this.sendRequest(req, data, fn, scope);
        }
    }, {
        key: "logout",
        value: function logout(fn, scope) {
            var req = this.createPostRequest('/logout');
            this.sendRequest(req, null, fn, scope);
        }
    }, {
        key: "register",
        value: function register(name, email, password, password_confirmation, fn, scope) {
            var req = this.createPostRequest('/register');
            var data = { name: name, email: email, password: password, password_confirmation: password_confirmation };
            this.sendRequest(req, data, fn, scope);
        }
    }, {
        key: "storeModel",
        value: function storeModel(model, data, fn, scope) {
            var req = this.createPostModelRequest(model);
            this.sendRequest(req, data, fn, scope);
        }
    }, {
        key: "updateModel",
        value: function updateModel(model, id, data, fn, scope) {
            var req = this.createPatchModelRequest(model, id);
            this.sendRequest(req, data, fn, scope);
        }
    }, {
        key: "sendRequest",
        value: function sendRequest(req, args) {
            var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            if (!args) args = {};
            args['_token'] = this.csrf_token;
            req.setRequestData(args);
            req.addListener(qx_constants.LOAD_END, function (e) {
                var req = e.getTarget();
                var response = req.getResponse();
                reply_manager_1.ReplyManager.handle_reply(response, fn, scope);
            });
            req.send();
        }
    }]);

    return Rest;
}();

exports.Rest = Rest;

},{"../constants/qx_constants":8,"../managers/reply_manager":13}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["Default"] = 0] = "Default";
    ButtonType[ButtonType["Primary"] = 1] = "Primary";
    ButtonType[ButtonType["Success"] = 2] = "Success";
    ButtonType[ButtonType["Info"] = 3] = "Info";
    ButtonType[ButtonType["Warning"] = 4] = "Warning";
    ButtonType[ButtonType["Danger"] = 5] = "Danger";
})(ButtonType || (ButtonType = {}));
exports.default = ButtonType;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_CHANGED_EVENT = 'data_changed';
exports.RECORD_DELETED_EVENT = 'record_deleted';
exports.RECORD_SAVED_EVENT = 'record_saved';
exports.RECORD_UPDATED_EVENT = 'record_updated';
exports.SESSION_STATE_CHANGED = 'session_state_changed';

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DESKTOP_IMAGE = 'public/images/pier-1920x1280.jpg';
exports.DESKTOP_IMAGE_WIDTH = 1920;
exports.DESKTOP_IMAGE_HEIGHT = 1280;
exports.NAVBAR_LOGIN_ICON = 'public/images/user-16x16.png';
exports.PENGUIN_ICON = 'public/images/penguin-136x180.png';
exports.PENGUIN_ICON_WIDTH = 136;
exports.PENGUIN_ICON_HEIGHT = 180;
exports.STRIPED_PATTERN = 'public/images/striped-pattern.jpg';

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MONACO_EDITOR_PATH = 'public/monaco_editor/index.html';
exports.MONACO_EDITOR_OFFSET_WIDTH = 2;
exports.MONACO_EDITOR_OFFSET_HEIGHT = 38;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// events
exports.APPEAR = 'appear';
exports.CHANGE_SELECTION = 'changeSelection';
exports.CLOSE = 'close';
exports.DISAPPEAR = 'disappear';
exports.EXECUTE = 'execute';
exports.LOAD = 'load';
exports.RESIZE = 'resize';
// xhr request
exports.LOAD_END = 'loadEnd';
exports.STATUS_ERROR = 'statusError';
exports.SUCCESS = 'success';
// misc
exports.SINGLE_SELECTION = 2;
exports.CSRF_COOKIE = 'XSRF-TOKEN';

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVBAR_LOGIN_TEXT = 'Login';
exports.NAVBAR_LOGOUT_TEXT = 'Logout';
exports.NAVBAR_REGISTER_TEXT = 'Register';
exports.NAVBAR_SETTINGS_TEXT = 'Settings';

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SessionState;
(function (SessionState) {
    SessionState[SessionState["LoggedIn"] = 0] = "LoggedIn";
    SessionState[SessionState["LoggedOut"] = 1] = "LoggedOut";
    SessionState[SessionState["Registering"] = 2] = "Registering";
    SessionState[SessionState["ResetPassword"] = 3] = "ResetPassword";
})(SessionState || (SessionState = {}));
exports.default = SessionState;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// bootstrap colors
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
var tbs_white = '#fff';
var tbs_black = '#000';
var tbs_red = '#d9534f';
var tbs_orange = '#f0ad4e';
var tbs_yellow = '#ffd500';
var tbs_green = '#5cb85c';
var tbs_blue = '#0275d8';
var tbs_teal = '#5bc0de';
var tbs_pink = '#ff5b77';
var tbs_purple = '#613d7c';
var tbs_gray_dark = '#292b2c';
var tbs_gray = '#464a4c';
var tbs_gray_light = '#636c72';
var tbs_gray_light2 = '#a0a7ac';
var tbs_gray_lighter = '#eceeef';
var tbs_gray_lightest = '#f7f7f9';
exports.tbs_brand_primary = tbs_blue;
exports.tbs_brand_success = tbs_green;
exports.tbs_brand_info = tbs_teal;
exports.tbs_brand_warning = tbs_orange;
exports.tbs_brand_danger = tbs_red;
exports.tbs_brand_inverse = tbs_gray_dark;
// navbar
exports.NAVBAR_BACKGROUND_COLOR = tbs_white;
exports.NAVBAR_HEIGHT = 40;
exports.NAVBAR_PADDING = [3, 50];
exports.NAVBAR_SPACING = 15;
exports.NAVBAR_SPACER_WIDTH = 175;
exports.NAVBAR_BOTTOM_COLOR = tbs_gray_dark;
exports.NAVBAR_BOTTOM_STYLE = 'solid';
exports.NAVBAR_BOTTOM_WIDTH = 1;
exports.NAVBAR_LABEL_IMAGE_SIZE = 35;
exports.NAVBAR_LABEL_FONT_FAMILY = 'Verdana';
exports.NAVBAR_LABEL_FONT_SIZE = '1.2em';
exports.NAVBAR_LABEL_FONT_WEIGHT = 'bold';
exports.NAVBAR_LABEL_COLOR = '#777';
exports.NAVBAR_MESSAGE_FONT_FAMILY = 'Verdana';
exports.NAVBAR_MESSAGE_FONT_SIZE = '1.2em';
exports.NAVBAR_MESSAGE_FONT_WEIGHT = 'normal';
exports.NAVBAR_MESSAGE_COLOR = '#777';
exports.NAVBAR_LOGIN_STYLE = 'font-family:Verdana;font-size:1.0em;';
// navpanel
exports.NAVPANEL_WIDTH = 150;
exports.NAVPANEL_PADDING = [75, 10];
exports.NAVPANEL_BACKGROUND_COLOR = tbs_white;
exports.NAVPANEL_RIGHT_COLOR = tbs_gray_dark;
exports.NAVPANEL_RIGHT_STYLE = 'solid';
exports.NAVPANEL_RIGHT_WIDTH = 1;
// button bar
exports.BUTTONBAR_BUTTON_DANGER_COLOR = exports.tbs_brand_danger;
exports.BUTTONBAR_BUTTON_NORMAL_COLOR = tbs_gray_light2;
exports.BUTTONBAR_BUTTON_PRIMARY_COLOR = exports.tbs_brand_primary;
exports.BUTTONBAR_BUTTON_SUCCESS_COLOR = exports.tbs_brand_success;
exports.BUTTONBAR_BUTTON_WARN_COLOR = exports.tbs_brand_warning;
exports.BUTTONBAR_TOP_COLOR = tbs_gray_lighter;
exports.BUTTONBAR_TOP_STYLE = 'solid';
exports.BUTTONBAR_TOP_WIDTH = 1;
// button bar info
exports.BUTTONBAR_INFO_STYLES = '';
exports.BUTTONBAR_INFO_DANGER_COLOR = exports.tbs_brand_danger;
exports.BUTTONBAR_INFO_PRIMARY_COLOR = exports.tbs_brand_primary;
exports.BUTTONBAR_INFO_STATUS_COLOR = tbs_gray_light2;
exports.BUTTONBAR_INFO_SUCCESS_COLOR = exports.tbs_brand_success;
exports.BUTTONBAR_INFO_WARN_COLOR = exports.tbs_brand_warning;
// windows
exports.DEFAULT_WINDOW_HEIGHT_PCT = 0.5;
exports.DEFAULT_WINDOW_WIDTH_PCT = 0.5;

},{}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../types/qooxdoo.d.ts" />
var rest_1 = require("../api/rest");
var service_manager_1 = require("./service_manager");

var BasicManager = function () {
    function BasicManager() {
        _classCallCheck(this, BasicManager);
    }

    _createClass(BasicManager, [{
        key: "eval_script",
        value: function eval_script(script, fn, scope) {
            rest_1.Rest.evalScript(script, function (reply) {
                for (var k in reply) {
                    var v = reply[k];
                    if (v instanceof Array) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var x = _step.value;

                                if (x.service) x = service_manager_1.ServiceManager.perform_service(x);
                                if (fn) fn.call(scope, x);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }
            });
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new BasicManager();
            }
            return this.instance;
        }
    }, {
        key: "eval_script",
        value: function eval_script(script) {
            var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            this.getInstance().eval_script(script, fn, scope);
        }
    }]);

    return BasicManager;
}();

exports.BasicManager = BasicManager;

},{"../api/rest":3,"./service_manager":14}],13:[function(require,module,exports){
/// <reference path="../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ReplyManager = function () {
    function ReplyManager() {
        _classCallCheck(this, ReplyManager);
    }

    _createClass(ReplyManager, [{
        key: "handle_reply",
        value: function handle_reply(response, fn, scope) {
            if (fn) fn.call(scope, response);
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new ReplyManager();
            }
            return this.instance;
        }
    }, {
        key: "handle_reply",
        value: function handle_reply(response, fn, scope) {
            this.getInstance().handle_reply(response, fn, scope);
        }
    }]);

    return ReplyManager;
}();

exports.ReplyManager = ReplyManager;

},{}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../types/qooxdoo.d.ts" />
var SplitPanel = qx.ui.splitpane.Pane;
var TextArea = qx.ui.form.TextArea;
var abstract_window_1 = require("../ui/windows/abstract_window");

var ServiceManager = function () {
    _createClass(ServiceManager, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new ServiceManager();
            }
            return this.instance;
        }
    }, {
        key: "getProxy",
        value: function getProxy(id) {
            return this.getInstance().getProxy(id);
        }
    }, {
        key: "perform_service",
        value: function perform_service(reply) {
            return this.getInstance().perform_service(reply);
        }
    }, {
        key: "setProxy",
        value: function setProxy(id, widget) {
            this.getInstance().setProxy(id, widget);
        }
    }]);

    function ServiceManager() {
        _classCallCheck(this, ServiceManager);

        this.proxies = {};
    }

    _createClass(ServiceManager, [{
        key: "getProxy",
        value: function getProxy(id) {
            return this.proxies["proxy-" + id];
        }
    }, {
        key: "normalizeArg",
        value: function normalizeArg(arg) {
            if (qx.lang.Type.isArray(arg)) return this.normalizeArrayArg(arg);else if (qx.lang.Type.isObject(arg)) return this.normalizeObjectArg(arg);else return arg;
        }
    }, {
        key: "normalizeArrayArg",
        value: function normalizeArrayArg(args) {
            var nargs = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var arg = _step.value;

                    nargs.push(this.normalizeArg(arg));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return nargs;
        }
    }, {
        key: "normalizeObjectArg",
        value: function normalizeObjectArg(arg) {
            if (qx.lang.Type.isNumber(arg.proxyId)) return this.getProxy(arg.proxyId);else return arg;
        }
    }, {
        key: "perform_service",
        value: function perform_service(reply) {
            var service = reply.service;
            switch (service) {
                case 'action':
                    return this.service_action(reply);
                case 'create':
                    return this.service_create(reply.args);
                case 'print':
                    return this.service_print(reply.args);
                default:
                    return "unknown service " + reply.args;
            }
        }
    }, {
        key: "service_action",
        value: function service_action(reply) {
            var id = reply.id;
            var action = reply.action;
            var args = this.normalizeArg(reply.args);
            console.log('service_action', action, args);
            var proxy = this.getProxy(id);
            if (proxy == null) return null;
            var fn = proxy[action];
            if (fn == null) return null;
            fn.apply(proxy, args);
        }
    }, {
        key: "service_create",
        value: function service_create(args) {
            console.log('service_create', args);
            switch (args.xtype) {
                case 'hsplitpanel':
                    this.service_create_hsplitpanel(args);
                    break;
                case 'textarea':
                    this.service_create_textarea(args);
                    break;
                case 'window':
                    this.service_create_window(args);
                    break;
            }
        }
    }, {
        key: "service_create_hsplitpanel",
        value: function service_create_hsplitpanel(args) {
            var id = args.id;
            var splitpanel = new SplitPanel('horizontal');
            this.setProxy(id, splitpanel);
        }
    }, {
        key: "service_create_textarea",
        value: function service_create_textarea(args) {
            var id = args.id;
            var textarea = new TextArea();
            this.setProxy(id, textarea);
        }
    }, {
        key: "service_create_window",
        value: function service_create_window(args) {
            var id = args.id;
            var caption = args.caption;
            var width = args.width;
            var height = args.height;
            var window = new abstract_window_1.AbstractWindow();
            window.setCaption(caption);
            window.setWidth(width);
            window.setHeight(height);
            this.setProxy(id, window);
        }
    }, {
        key: "service_print",
        value: function service_print(args) {
            return args.msg;
        }
    }, {
        key: "setProxy",
        value: function setProxy(id, widget) {
            this.proxies["proxy-" + id] = widget;
        }
    }]);

    return ServiceManager;
}();

exports.ServiceManager = ServiceManager;

},{"../ui/windows/abstract_window":42}],15:[function(require,module,exports){
/// <reference path="../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var rest_1 = require("../api/rest");
var session_state_1 = require("../constants/session_state");
var event_constants = require("../constants/event_constants");

var SessionManager = function (_qx$core$Object) {
    _inherits(SessionManager, _qx$core$Object);

    _createClass(SessionManager, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new SessionManager();
            }
            return this.instance;
        }
    }, {
        key: "getSessionState",
        value: function getSessionState() {
            return this.getInstance().sessionState;
        }
    }, {
        key: "login",
        value: function login(email, password, sender) {
            this.getInstance().login(email, password, sender);
        }
    }, {
        key: "logout",
        value: function logout() {
            this.getInstance().logout();
        }
    }, {
        key: "onStateChanged",
        value: function onStateChanged(fn, context) {
            this.getInstance().addListener(event_constants.SESSION_STATE_CHANGED, fn, context);
        }
    }, {
        key: "register",
        value: function register(name, email, password, password_confirmation, sender) {
            this.getInstance().register(name, email, password, password_confirmation, sender);
        }
    }]);

    function SessionManager() {
        _classCallCheck(this, SessionManager);

        var _this = _possibleConstructorReturn(this, (SessionManager.__proto__ || Object.getPrototypeOf(SessionManager)).call(this));

        _this.sessionState = session_state_1.default.LoggedIn;
        return _this;
    }

    _createClass(SessionManager, [{
        key: "login",
        value: function login(email, password, sender) {
            var _this2 = this;

            rest_1.Rest.login(email, password, function (reply) {
                sender.onLoginReply(reply);
                _this2.onLoginReply(reply);
            });
        }
    }, {
        key: "logout",
        value: function logout() {
            var _this3 = this;

            rest_1.Rest.logout(function (reply) {
                _this3.onLogoutReply(reply);
            });
        }
    }, {
        key: "register",
        value: function register(name, email, password, password_confirmation, sender) {
            var _this4 = this;

            rest_1.Rest.register(name, email, password, password_confirmation, function (reply) {
                sender.onRegisterReply(reply);
                _this4.onRegisterReply(reply);
            });
        }
    }, {
        key: "onLoginReply",
        value: function onLoginReply(reply) {
            if (reply.success) {
                this.sessionState = session_state_1.default.LoggedIn;
                this.fireDataEvent(event_constants.SESSION_STATE_CHANGED, this.sessionState);
            }
        }
    }, {
        key: "onLogoutReply",
        value: function onLogoutReply(reply) {
            if (reply.success) {
                this.sessionState = session_state_1.default.LoggedOut;
                this.fireDataEvent(event_constants.SESSION_STATE_CHANGED, this.sessionState);
            }
        }
    }, {
        key: "onRegisterReply",
        value: function onRegisterReply(reply) {
            if (reply.success) {
                this.sessionState = session_state_1.default.LoggedIn;
                this.fireDataEvent(event_constants.SESSION_STATE_CHANGED, this.sessionState);
            }
        }
    }]);

    return SessionManager;
}(qx.core.Object);

exports.SessionManager = SessionManager;

},{"../api/rest":3,"../constants/event_constants":5,"../constants/session_state":10}],16:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Button = qx.ui.form.Button;
var Composite = qx.ui.container.Composite;
var qx_constants = require("../../constants/qx_constants");

var AbstractPanel = function (_Composite) {
    _inherits(AbstractPanel, _Composite);

    function AbstractPanel() {
        _classCallCheck(this, AbstractPanel);

        return _possibleConstructorReturn(this, (AbstractPanel.__proto__ || Object.getPrototypeOf(AbstractPanel)).apply(this, arguments));
    }

    _createClass(AbstractPanel, [{
        key: "addPanelButton",
        value: function addPanelButton(text, fn) {
            var btn = new Button(text);
            btn.setMargin(5, 5);
            this.add(btn);
            if (fn) btn.addListener(qx_constants.EXECUTE, fn, this);
            return btn;
        }
    }]);

    return AbstractPanel;
}(Composite);

exports.AbstractPanel = AbstractPanel;

},{"../../constants/qx_constants":8}],17:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxDesktop = qx.ui.window.Desktop;

var AbstractDesktop = function (_QxDesktop) {
    _inherits(AbstractDesktop, _QxDesktop);

    function AbstractDesktop() {
        _classCallCheck(this, AbstractDesktop);

        return _possibleConstructorReturn(this, (AbstractDesktop.__proto__ || Object.getPrototypeOf(AbstractDesktop)).apply(this, arguments));
    }

    _createClass(AbstractDesktop, [{
        key: "addWindow",
        value: function addWindow(window) {
            this.add(window);
        }
    }, {
        key: "removeWindow",
        value: function removeWindow(window) {
            this.remove(window);
        }
    }]);

    return AbstractDesktop;
}(QxDesktop);

exports.AbstractDesktop = AbstractDesktop;

},{}],18:[function(require,module,exports){
/// <reference path="../../../qkwidgets/types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator = qx.ui.decoration.Decorator;
var abstract_desktop_1 = require("./abstract_desktop");
var image_constants = require("../../constants/image_constants");

var PatternDesktop = function (_abstract_desktop_1$A) {
    _inherits(PatternDesktop, _abstract_desktop_1$A);

    _createClass(PatternDesktop, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new PatternDesktop();
            }
            return this.instance;
        }
    }]);

    function PatternDesktop() {
        _classCallCheck(this, PatternDesktop);

        var _this = _possibleConstructorReturn(this, (PatternDesktop.__proto__ || Object.getPrototypeOf(PatternDesktop)).call(this));

        _this.init();
        return _this;
    }

    _createClass(PatternDesktop, [{
        key: "init",
        value: function init() {
            this.centerDecorator = new Decorator();
            this.centerDecorator.setBackgroundImage(image_constants.STRIPED_PATTERN);
            this.setDecorator(this.centerDecorator);
        }
    }]);

    return PatternDesktop;
}(abstract_desktop_1.AbstractDesktop);

exports.PatternDesktop = PatternDesktop;

},{"../../constants/image_constants":6,"./abstract_desktop":17}],19:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var split_pane_1 = require("./split_pane");

var HSplitPane = function (_split_pane_1$SplitPa) {
    _inherits(HSplitPane, _split_pane_1$SplitPa);

    function HSplitPane() {
        _classCallCheck(this, HSplitPane);

        return _possibleConstructorReturn(this, (HSplitPane.__proto__ || Object.getPrototypeOf(HSplitPane)).call(this, 'horizontal'));
    }

    return HSplitPane;
}(split_pane_1.SplitPane);

exports.HSplitPane = HSplitPane;

},{"./split_pane":20}],20:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxSplitPane = qx.ui.splitpane.Pane;

var SplitPane = function (_QxSplitPane) {
  _inherits(SplitPane, _QxSplitPane);

  function SplitPane() {
    _classCallCheck(this, SplitPane);

    return _possibleConstructorReturn(this, (SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).apply(this, arguments));
  }

  return SplitPane;
}(QxSplitPane);

exports.SplitPane = SplitPane;

},{}],21:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite = qx.ui.container.Composite;
var abstract_navpanel_1 = require("./navpanel/abstract_navpanel");
var pattern_desktop_1 = require("../desktop/pattern_desktop");
var navbar_1 = require("./navbar/navbar");

var AbstractViewport = function (_Composite) {
    _inherits(AbstractViewport, _Composite);

    _createClass(AbstractViewport, null, [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        }
    }, {
        key: "addWindow",
        value: function addWindow(window) {
            pattern_desktop_1.PatternDesktop.getInstance().addWindow(window);
        }
    }, {
        key: "removeWindow",
        value: function removeWindow(window) {
            pattern_desktop_1.PatternDesktop.getInstance().removeWindow(window);
        }
    }, {
        key: "size",
        value: function size() {
            return this.getInstance().getInnerSize();
        }
    }]);

    function AbstractViewport() {
        _classCallCheck(this, AbstractViewport);

        var _this = _possibleConstructorReturn(this, (AbstractViewport.__proto__ || Object.getPrototypeOf(AbstractViewport)).call(this));

        _this.init();
        return _this;
    }

    _createClass(AbstractViewport, [{
        key: "init",
        value: function init() {
            this.desktop = pattern_desktop_1.PatternDesktop.getInstance();
            this.navbar = new navbar_1.Navbar(this.getLabelText());
            this.navpanel = this.createNavpanel();
            this.setLayout(new qx.ui.layout.Dock());
            this.add(this.navbar, { edge: 'north' });
            this.add(this.navpanel, { edge: 'west' });
            this.add(this.desktop, { edge: 'center' });
        }
    }, {
        key: "createNavpanel",
        value: function createNavpanel() {
            return new abstract_navpanel_1.AbstractNavpanel();
        }
    }, {
        key: "getLabelText",
        value: function getLabelText() {
            return '';
        }
    }]);

    return AbstractViewport;
}(Composite);

exports.AbstractViewport = AbstractViewport;

},{"../desktop/pattern_desktop":18,"./navbar/navbar":22,"./navpanel/abstract_navpanel":26}],22:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite = qx.ui.container.Composite;
var Decorator = qx.ui.decoration.Decorator;
var HBox = qx.ui.layout.HBox;
var navbar_label_1 = require("./navbar_label");
var navbar_login_1 = require("./navbar_login");
var navbar_messages_1 = require("./navbar_messages");
var session_manager_1 = require("../../../managers/session_manager");
var style_constants = require("../../../constants/style_constants");

var Navbar = function (_Composite) {
    _inherits(Navbar, _Composite);

    function Navbar(labelText) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));

        _this.init(labelText);
        return _this;
    }

    _createClass(Navbar, [{
        key: "init",
        value: function init(labelText) {
            this.labelText = labelText;
            var layout = new HBox();
            layout.setSpacing(style_constants.NAVBAR_SPACING);
            this.setLayout(layout);
            var decorator = new Decorator();
            decorator.setStyleBottom(style_constants.NAVBAR_BOTTOM_STYLE);
            decorator.setColorBottom(style_constants.NAVBAR_BOTTOM_COLOR);
            decorator.setWidthBottom(style_constants.NAVBAR_BOTTOM_WIDTH);
            this.setDecorator(decorator);
            this.setHeight(style_constants.NAVBAR_HEIGHT);
            this.setPadding(style_constants.NAVBAR_PADDING);
            this.addLabel();
            this.addMessages();
            this.addLogin();
            session_manager_1.SessionManager.onStateChanged(this.onSessionStateChanged, this);
            this.setSessionState(session_manager_1.SessionManager.getSessionState());
        }
    }, {
        key: "addLabel",
        value: function addLabel() {
            this.add(new navbar_label_1.NavbarLabel(this.labelText));
        }
    }, {
        key: "addLogin",
        value: function addLogin() {
            this.add(this.navbarLogin = new navbar_login_1.NavbarLogin());
        }
    }, {
        key: "addMessages",
        value: function addMessages() {
            this.add(new navbar_messages_1.NavbarMessages(), { flex: 1 });
        }
    }, {
        key: "onSessionStateChanged",
        value: function onSessionStateChanged(event) {
            var state = event.getData();
            this.setSessionState(state);
        }
    }, {
        key: "setSessionState",
        value: function setSessionState(state) {
            this.navbarLogin.setSessionState(state);
        }
    }]);

    return Navbar;
}(Composite);

exports.Navbar = Navbar;

},{"../../../constants/style_constants":11,"../../../managers/session_manager":15,"./navbar_label":23,"./navbar_login":24,"./navbar_messages":25}],23:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Atom = qx.ui.basic.Atom;
var Composite = qx.ui.container.Composite;
var HBox = qx.ui.layout.HBox;
var Image = qx.ui.basic.Image;
var image_constants = require("../../../constants/image_constants");
var style_constants = require("../../../constants/style_constants");

var NavbarLabel = function (_Composite) {
    _inherits(NavbarLabel, _Composite);

    function NavbarLabel(text) {
        _classCallCheck(this, NavbarLabel);

        var _this = _possibleConstructorReturn(this, (NavbarLabel.__proto__ || Object.getPrototypeOf(NavbarLabel)).call(this));

        _this.init(text);
        return _this;
    }

    _createClass(NavbarLabel, [{
        key: "init",
        value: function init(text) {
            this.text = text;
            var layout = new HBox();
            layout.setSpacing(style_constants.NAVBAR_SPACING);
            this.setLayout(layout);
            this.addLabel();
        }
    }, {
        key: "addLabel",
        value: function addLabel() {
            var fontFamily = style_constants.NAVBAR_LABEL_FONT_FAMILY;
            var fontSize = style_constants.NAVBAR_LABEL_FONT_SIZE;
            var fontWeight = style_constants.NAVBAR_LABEL_FONT_WEIGHT;
            var color = style_constants.NAVBAR_LABEL_COLOR;
            var style = "font-family:" + fontFamily + ";font-size:" + fontSize + ";font-weight:#{fontWeight};color:" + color;
            var html = "<span style=\"" + style + "\">" + this.text + "</span>";
            var label = new Atom(html);
            var imageSrc = image_constants.PENGUIN_ICON;
            var image = new Image(imageSrc);
            image.setScale(true);
            image.setWidth(this.getIconWidth());
            image.setHeight(this.getIconHeight());
            label.setRich(true);
            this.add(image);
            this.add(label);
        }
    }, {
        key: "getIconHeight",
        value: function getIconHeight() {
            return style_constants.NAVBAR_HEIGHT - 2 * style_constants.NAVBAR_PADDING[0];
        }
    }, {
        key: "getIconWidth",
        value: function getIconWidth() {
            return this.getIconHeight() * (image_constants.PENGUIN_ICON_WIDTH / image_constants.PENGUIN_ICON_HEIGHT);
        }
    }]);

    return NavbarLabel;
}(Composite);

exports.NavbarLabel = NavbarLabel;

},{"../../../constants/image_constants":6,"../../../constants/style_constants":11}],24:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator = qx.ui.decoration.Decorator;
var Menu = qx.ui.menu.Menu;
var SplitButton = qx.ui.form.SplitButton;
var login_window_1 = require("../../windows/form/session/login_window");
var menu_button_1 = require("../../widgets/menu_button");
var register_window_1 = require("../../windows/form/session/register_window");
var session_manager_1 = require("../../../managers/session_manager");
var settings_window_1 = require("../../windows/form/session/settings_window");
var session_state_1 = require("../../../constants/session_state");
var image_constants = require("../../../constants/image_constants");
var qx_constants = require("../../../constants/qx_constants");
var session_messages = require("../../../constants/session_messages");
var style_constants = require("../../../constants/style_constants");

var NavbarLogin = function (_SplitButton) {
    _inherits(NavbarLogin, _SplitButton);

    function NavbarLogin() {
        _classCallCheck(this, NavbarLogin);

        var _this = _possibleConstructorReturn(this, (NavbarLogin.__proto__ || Object.getPrototypeOf(NavbarLogin)).call(this, null));

        _this.lastMenuDisappearTime = 0;
        _this.init();
        return _this;
    }

    _createClass(NavbarLogin, [{
        key: "setSessionState",
        value: function setSessionState(state) {
            this.sessionState = state;
            this.setSessionLabels();
        }
    }, {
        key: "init",
        value: function init() {
            this.sessionState = session_state_1.default.LoggedOut;
            var button = this.getChildControl('button');
            var arrow = this.getChildControl('arrow');
            var decorator = new Decorator();
            decorator.setBackgroundColor(style_constants.NAVBAR_BACKGROUND_COLOR);
            button.setDecorator(decorator);
            arrow.setDecorator(decorator);
            this.setLabel(session_messages.NAVBAR_LOGIN_TEXT);
            this.setIcon(image_constants.NAVBAR_LOGIN_ICON);
            button.setCenter(true);
            this.setMenu(this.createMenu());
            this.addListener(qx_constants.EXECUTE, this.onClicked, this);
        }
    }, {
        key: "createMenu",
        value: function createMenu() {
            this.menu = new Menu();
            this.menu.add(this.registerMenuButton = new menu_button_1.MenuButton(session_messages.NAVBAR_REGISTER_TEXT, this.onRegister, this));
            this.menu.add(this.settingsMenuButton = new menu_button_1.MenuButton(session_messages.NAVBAR_SETTINGS_TEXT, this.onSettings, this));
            this.menu.addSeparator();
            this.menu.add(this.loginMenuButton = new menu_button_1.MenuButton(session_messages.NAVBAR_LOGIN_TEXT, this.onLoginOrLogout, this));
            this.menu.addListener(qx_constants.DISAPPEAR, this.onMenuDisappear, this);
            return this.menu;
        }
    }, {
        key: "getTime",
        value: function getTime() {
            return new Date().getTime();
        }
    }, {
        key: "onClicked",
        value: function onClicked() {
            var now = this.getTime();
            var diff = this.lastMenuDisappearTime > 0 ? now - this.lastMenuDisappearTime : 1000;
            if (diff > 250) this.getMenu().open();
        }
    }, {
        key: "onLoginOrLogout",
        value: function onLoginOrLogout() {
            switch (this.sessionState) {
                case session_state_1.default.LoggedIn:
                    this.doLogout();
                    break;
                default:
                    this.doLogin();
            }
        }
    }, {
        key: "doLogin",
        value: function doLogin() {
            new login_window_1.LoginWindow();
        }
    }, {
        key: "doLogout",
        value: function doLogout() {
            session_manager_1.SessionManager.logout();
        }
    }, {
        key: "onMenuDisappear",
        value: function onMenuDisappear() {
            this.lastMenuDisappearTime = this.getTime();
        }
    }, {
        key: "onRegister",
        value: function onRegister() {
            new register_window_1.RegisterWindow();
        }
    }, {
        key: "onSettings",
        value: function onSettings() {
            new settings_window_1.SettingsWindow();
        }
    }, {
        key: "setSessionLabels",
        value: function setSessionLabels() {
            switch (this.sessionState) {
                case session_state_1.default.LoggedIn:
                    if (this.menu.indexOf(this.registerMenuButton) >= 0) this.menu.remove(this.registerMenuButton);
                    this.setLabel(session_messages.NAVBAR_LOGOUT_TEXT);
                    this.loginMenuButton.setLabel(session_messages.NAVBAR_LOGOUT_TEXT);
                    break;
                default:
                    if (this.menu.indexOf(this.registerMenuButton) < 0) this.menu.addBefore(this.registerMenuButton, this.settingsMenuButton);
                    this.setLabel(session_messages.NAVBAR_LOGIN_TEXT);
                    this.loginMenuButton.setLabel(session_messages.NAVBAR_LOGIN_TEXT);
            }
        }
    }]);

    return NavbarLogin;
}(SplitButton);

exports.NavbarLogin = NavbarLogin;

},{"../../../constants/image_constants":6,"../../../constants/qx_constants":8,"../../../constants/session_messages":9,"../../../constants/session_state":10,"../../../constants/style_constants":11,"../../../managers/session_manager":15,"../../widgets/menu_button":40,"../../windows/form/session/login_window":44,"../../windows/form/session/register_window":45,"../../windows/form/session/settings_window":46}],25:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Atom = qx.ui.basic.Atom;
var Composite = qx.ui.container.Composite;
var HBox = qx.ui.layout.HBox;
var Widget = qx.ui.core.Widget;
var style_constants = require("../../../constants/style_constants");

var NavbarMessages = function (_Composite) {
    _inherits(NavbarMessages, _Composite);

    function NavbarMessages() {
        _classCallCheck(this, NavbarMessages);

        var _this = _possibleConstructorReturn(this, (NavbarMessages.__proto__ || Object.getPrototypeOf(NavbarMessages)).call(this));

        _this.init();
        return _this;
    }

    _createClass(NavbarMessages, [{
        key: "setText",
        value: function setText(text) {
            var html = "<span style=\"" + this.style + "\">" + text + "</span>";
            this.textHolder.setLabel(html);
        }
    }, {
        key: "init",
        value: function init() {
            this.setLayout(new HBox());
            this.createStyle();
            this.createTextHolder();
            this.add(new Widget(), { flex: 1 });
            this.add(this.textHolder);
            this.add(new Widget(), { flex: 1 });
        }
    }, {
        key: "createStyle",
        value: function createStyle() {
            var fontFamily = style_constants.NAVBAR_MESSAGE_FONT_FAMILY;
            var fontSize = style_constants.NAVBAR_MESSAGE_FONT_SIZE;
            var fontWeight = style_constants.NAVBAR_MESSAGE_FONT_WEIGHT;
            var color = style_constants.NAVBAR_MESSAGE_COLOR;
            this.style = "font-family:" + fontFamily + ";font-size:" + fontSize + ";font-weight:#{fontWeight};color:" + color;
        }
    }, {
        key: "createTextHolder",
        value: function createTextHolder() {
            this.textHolder = new Atom();
            this.textHolder.setRich(true);
        }
    }]);

    return NavbarMessages;
}(Composite);

exports.NavbarMessages = NavbarMessages;

},{"../../../constants/style_constants":11}],26:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator = qx.ui.decoration.Decorator;
var VBox = qx.ui.layout.VBox;
var abstract_panel_1 = require("../../abstract/abstract_panel");
var session_manager_1 = require("../../../managers/session_manager");
var session_state_1 = require("../../../constants/session_state");
var style_constants = require("../../../constants/style_constants");

var AbstractNavpanel = function (_abstract_panel_1$Abs) {
    _inherits(AbstractNavpanel, _abstract_panel_1$Abs);

    function AbstractNavpanel() {
        _classCallCheck(this, AbstractNavpanel);

        var _this = _possibleConstructorReturn(this, (AbstractNavpanel.__proto__ || Object.getPrototypeOf(AbstractNavpanel)).call(this));

        _this.init();
        return _this;
    }

    _createClass(AbstractNavpanel, [{
        key: "init",
        value: function init() {
            this.sessionState = session_state_1.default.LoggedOut;
            var layout = new VBox();
            var decorator = new Decorator();
            layout.setSpacing(12);
            decorator.setBackgroundColor(style_constants.NAVPANEL_BACKGROUND_COLOR);
            decorator.setStyleRight(style_constants.NAVPANEL_RIGHT_STYLE);
            decorator.setColorRight(style_constants.NAVPANEL_RIGHT_COLOR);
            decorator.setWidthRight(style_constants.NAVPANEL_RIGHT_WIDTH);
            this.setLayout(layout);
            this.setDecorator(decorator);
            this.setWidth(style_constants.NAVPANEL_WIDTH);
            this.setPadding(style_constants.NAVPANEL_PADDING);
            this.addButtons();
            this.setButtonsEnabled(false);
            session_manager_1.SessionManager.onStateChanged(this.onSessionStateChanged, this);
            this.setSessionState(session_manager_1.SessionManager.getSessionState());
        }
    }, {
        key: "addButtons",
        value: function addButtons() {}
    }, {
        key: "onSessionStateChanged",
        value: function onSessionStateChanged(event) {
            var state = event.getData();
            this.setSessionState(state);
        }
    }, {
        key: "setButtonsEnabled",
        value: function setButtonsEnabled(bool) {}
    }, {
        key: "setSessionState",
        value: function setSessionState(state) {
            switch (state) {
                case session_state_1.default.LoggedIn:
                    this.setButtonsEnabled(true);
                    break;
                default:
                    this.setButtonsEnabled(false);
            }
        }
    }]);

    return AbstractNavpanel;
}(abstract_panel_1.AbstractPanel);

exports.AbstractNavpanel = AbstractNavpanel;

},{"../../../constants/session_state":10,"../../../constants/style_constants":11,"../../../managers/session_manager":15,"../../abstract/abstract_panel":16}],27:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite = qx.ui.container.Composite;
var Decorator = qx.ui.decoration.Decorator;
var HBox = qx.ui.layout.HBox;
var menubar_button_1 = require("./menubar_button");
var style_constants = require("../../constants/style_constants");

var BasicButtonBar = function (_Composite) {
    _inherits(BasicButtonBar, _Composite);

    function BasicButtonBar(window) {
        _classCallCheck(this, BasicButtonBar);

        var _this = _possibleConstructorReturn(this, (BasicButtonBar.__proto__ || Object.getPrototypeOf(BasicButtonBar)).call(this, new HBox(5)));

        _this.window = window;
        _this.setPadding(0, 10, 0, 10);
        _this.addButtons();
        var decorator = new Decorator();
        decorator.setStyleTop(style_constants.BUTTONBAR_TOP_STYLE);
        decorator.setColorTop(style_constants.BUTTONBAR_TOP_COLOR);
        decorator.setWidthTop(style_constants.BUTTONBAR_TOP_WIDTH);
        _this.setDecorator(decorator);
        return _this;
    }

    _createClass(BasicButtonBar, [{
        key: "addButtons",
        value: function addButtons() {
            this.createButtons();
            this.add(this.run_btn);
            this.add(this.clear_btn);
        }
    }, {
        key: "createButtons",
        value: function createButtons() {
            this.run_btn = this.createButton('Run', this.window.onRun);
            this.clear_btn = this.createButton('Clear', this.window.onClear);
        }
    }, {
        key: "createButton",
        value: function createButton(text, fn) {
            var html = this.getButtonHtml(text);
            return new menubar_button_1.MenubarButton(html, fn, this.window);
        }
    }, {
        key: "getButtonColor",
        value: function getButtonColor(btn) {
            return style_constants.BUTTONBAR_BUTTON_NORMAL_COLOR;
        }
    }, {
        key: "getButtonHtml",
        value: function getButtonHtml(text) {
            var btn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var color = this.getButtonColor(btn);
            var style = "color:" + color + ";font-weight:bold;";
            return "<span style=\"" + style + "\">" + text + "</span>";
        }
    }, {
        key: "setButtonLabel",
        value: function setButtonLabel(btn, text) {
            var html = this.getButtonHtml(text, btn);
            btn.setLabel(html);
        }
    }]);

    return BasicButtonBar;
}(Composite);

exports.BasicButtonBar = BasicButtonBar;

},{"../../constants/style_constants":11,"./menubar_button":41}],28:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxButton = qx.ui.form.Button;
var button_type_1 = require("../../constants/button_type");
var qx_constants = require("../../constants/qx_constants");
var style_constants = require("../../constants/style_constants");

var Button = function (_QxButton) {
    _inherits(Button, _QxButton);

    function Button() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this.setRich(true);
        if (label) _this.setLabel(label);
        if (type) _this.setStyling(type);
        if (fn) _this.addListener(qx_constants.EXECUTE, fn, context);
        return _this;
    }

    _createClass(Button, [{
        key: "setStyling",
        value: function setStyling(type) {
            this.setTextColor('white');
            switch (type) {
                case button_type_1.default.Primary:
                    this.setBackgroundColor(style_constants.tbs_brand_primary);
                    break;
                case button_type_1.default.Info:
                    this.setBackgroundColor(style_constants.tbs_brand_info);
                    break;
                case button_type_1.default.Success:
                    this.setBackgroundColor(style_constants.tbs_brand_success);
                    break;
                case button_type_1.default.Warning:
                    this.setBackgroundColor(style_constants.tbs_brand_warning);
                    break;
                case button_type_1.default.Danger:
                    this.setBackgroundColor(style_constants.tbs_brand_danger);
                    break;
            }
        }
    }]);

    return Button;
}(QxButton);

exports.Button = Button;

},{"../../constants/button_type":4,"../../constants/qx_constants":8,"../../constants/style_constants":11}],29:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxCheckBox = qx.ui.form.CheckBox;

var CheckBox = function (_QxCheckBox) {
    _inherits(CheckBox, _QxCheckBox);

    function CheckBox() {
        _classCallCheck(this, CheckBox);

        return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
    }

    _createClass(CheckBox, [{
        key: "getDataValue",
        value: function getDataValue() {
            return this.getValue();
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var val = value ? true : false;
            _get(CheckBox.prototype.__proto__ || Object.getPrototypeOf(CheckBox.prototype), "setValue", this).call(this, val);
        }
    }]);

    return CheckBox;
}(QxCheckBox);

exports.CheckBox = CheckBox;

},{}],30:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxDateField = qx.ui.form.DateField;
var DateFormat = qx.util.format.DateFormat;

var DateField = function (_QxDateField) {
    _inherits(DateField, _QxDateField);

    function DateField() {
        _classCallCheck(this, DateField);

        var _this = _possibleConstructorReturn(this, (DateField.__proto__ || Object.getPrototypeOf(DateField)).call(this));

        _this.setDateFormat(new DateFormat('Y-M-d'));
        return _this;
    }

    _createClass(DateField, [{
        key: "getDataValue",
        value: function getDataValue() {
            var date = this.getValue();
            if (date == null) return '';else return date.toISOString();
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var date = new Date(value);
            _get(DateField.prototype.__proto__ || Object.getPrototypeOf(DateField.prototype), "setValue", this).call(this, date);
        }
    }]);

    return DateField;
}(QxDateField);

exports.DateField = DateField;

},{}],31:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxPasswordField = qx.ui.form.PasswordField;

var PasswordField = function (_QxPasswordField) {
    _inherits(PasswordField, _QxPasswordField);

    function PasswordField() {
        _classCallCheck(this, PasswordField);

        return _possibleConstructorReturn(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).apply(this, arguments));
    }

    _createClass(PasswordField, [{
        key: "getDataValue",
        value: function getDataValue() {
            return this.getValue();
        }
    }]);

    return PasswordField;
}(QxPasswordField);

exports.PasswordField = PasswordField;

},{}],32:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var HBox = qx.ui.layout.HBox;
var QxRadioButtonGroup = qx.ui.form.RadioButtonGroup;
var RadioButton = qx.ui.form.RadioButton;

var RadioButtonGroup = function (_QxRadioButtonGroup) {
    _inherits(RadioButtonGroup, _QxRadioButtonGroup);

    function RadioButtonGroup(labels) {
        var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, RadioButtonGroup);

        var _this = _possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).call(this));

        _this.init(labels, values);
        return _this;
    }

    _createClass(RadioButtonGroup, [{
        key: "init",
        value: function init(labels, values) {
            this.labels = labels;
            this.values = values;
            var layout = new HBox();
            layout.setSpacing(5);
            this.setLayout(layout);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.labels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _label = _step.value;

                    this.add(new RadioButton(_label));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (this.values.length < this.labels.length) {
                this.values = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.labels[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var label = _step2.value;

                        this.values.push(label.toLowerCase());
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            this.value_strings = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var value = _step3.value;

                    this.value_strings.push(value + '');
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: "getDataValue",
        value: function getDataValue() {
            return this.getValue();
        }
    }, {
        key: "getValue",
        value: function getValue() {
            var selections = this.getSelection();
            var selection = selections.length > 0 ? selections[0] : this.getChildren()[0];
            var index = this.getChildren().indexOf(selection);
            index = Math.max(0, index);
            return this.values[index];
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            var index = this.value_strings.indexOf(value.toString().toLowerCase());
            index = Math.max(0, index);
            this.setSelection([this.getChildren()[index]]);
        }
    }]);

    return RadioButtonGroup;
}(QxRadioButtonGroup);

exports.RadioButtonGroup = RadioButtonGroup;

},{}],33:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxTextArea = qx.ui.form.TextArea;

var TextArea = function (_QxTextArea) {
    _inherits(TextArea, _QxTextArea);

    function TextArea() {
        _classCallCheck(this, TextArea);

        return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
    }

    _createClass(TextArea, [{
        key: "getDataValue",
        value: function getDataValue() {
            return this.getValue();
        }
    }]);

    return TextArea;
}(QxTextArea);

exports.TextArea = TextArea;

},{}],34:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxTextField = qx.ui.form.TextField;

var TextField = function (_QxTextField) {
    _inherits(TextField, _QxTextField);

    function TextField() {
        _classCallCheck(this, TextField);

        return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
    }

    _createClass(TextField, [{
        key: "getDataValue",
        value: function getDataValue() {
            return this.getValue();
        }
    }]);

    return TextField;
}(QxTextField);

exports.TextField = TextField;

},{}],35:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Form = qx.ui.form.Form;
var Scroll = qx.ui.container.Scroll;
var SingleRenderer = qx.ui.form.renderer.Single;
var String = qx.lang.String;
var check_box_1 = require("../fields/check_box");
var date_field_1 = require("../fields/date_field");
var password_field_1 = require("../fields/password_field");
var radio_button_group_1 = require("../fields/radio_button_group");
var text_area_1 = require("../fields/text_area");
var text_field_1 = require("../fields/text_field");

var AbstractForm = function (_Scroll) {
    _inherits(AbstractForm, _Scroll);

    function AbstractForm() {
        _classCallCheck(this, AbstractForm);

        var form = new Form();
        var renderer = new SingleRenderer(form);
        renderer.setPadding(5);
        var layout = renderer.getLayout();
        layout.setColumnFlex(0, 0);
        layout.setColumnFlex(1, 1);

        var _this = _possibleConstructorReturn(this, (AbstractForm.__proto__ || Object.getPrototypeOf(AbstractForm)).call(this, renderer));

        _this.layout = layout;
        _this.form = form;
        _this.rowCount = 0;
        _this.init();
        return _this;
    }

    _createClass(AbstractForm, [{
        key: "init",
        value: function init() {}
    }, {
        key: "createFormField",
        value: function createFormField(name) {
            var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            var field = this.createFormFieldType(type, args);
            label = label ? label : String.capitalize(name);
            if (type == 'textarea') this.layout.setRowFlex(this.rowCount, 1);
            this.form.add(field, label, null, name);
            this.rowCount++;
        }
    }, {
        key: "createFormFieldType",
        value: function createFormFieldType(type, args) {
            switch (type) {
                case 'checkbox':
                    return new check_box_1.CheckBox();
                case 'date':
                    return new date_field_1.DateField();
                case 'password':
                    return new password_field_1.PasswordField();
                case 'gender':
                    return new radio_button_group_1.RadioButtonGroup(['Male', 'Female'], ['m', 'f']);
                case 'truefalse':
                    return new radio_button_group_1.RadioButtonGroup(['True', 'False'], [true, false]);
                case 'yesno':
                    return new radio_button_group_1.RadioButtonGroup(['Yes', 'No'], [true, false]);
                case 'textarea':
                    return new text_area_1.TextArea();
                case 'id':
                case 'timestamp':
                    var field = new text_field_1.TextField();
                    field.setEnabled(false);
                    return field;
                default:
                    return new text_field_1.TextField();
            }
        }
    }, {
        key: "createFormIdField",
        value: function createFormIdField() {
            this.createFormField('id', null, 'id');
        }
    }, {
        key: "createFormTimestampFields",
        value: function createFormTimestampFields() {
            this.createFormField('created_at', 'Created At', 'timestamp');
            this.createFormField('updated_at', 'Updated At', 'timestamp');
        }
    }, {
        key: "getData",
        value: function getData() {
            var data = {};
            for (var key in this.form_fields) {
                if (['created_at', 'updated_at'].indexOf(key) < 0) data[key] = this.getFormFieldValue(this.form_fields[key]);
            }
            return data;
        }
    }, {
        key: "getFormFieldValue",
        value: function getFormFieldValue(field) {
            return field.getDataValue();
        }
    }, {
        key: "reset",
        value: function reset() {
            this.form.reset();
        }
    }, {
        key: "setFields",
        value: function setFields() {
            this.form_fields = this.form.getItems();
        }
    }, {
        key: "setFormFieldValue",
        value: function setFormFieldValue(field, value) {
            field.setValue(value + '');
        }
    }, {
        key: "showErrorMessages",
        value: function showErrorMessages(messages) {
            if (messages.length == 0) return;
            for (var fieldName in this.form_fields) {
                var field = this.form_fields[fieldName];
                field.setInvalidMessage(messages[0]);
                field.setValid(false);
            }
        }
    }]);

    return AbstractForm;
}(Scroll);

exports.AbstractForm = AbstractForm;

},{"../fields/check_box":29,"../fields/date_field":30,"../fields/password_field":31,"../fields/radio_button_group":32,"../fields/text_area":33,"../fields/text_field":34}],36:[function(require,module,exports){
/// <reference path="../../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var button_type_1 = require("../../../../constants/button_type");
var abstract_form_1 = require("../abstract_form");
var button_1 = require("../../button");

var LoginForm = function (_abstract_form_1$Abst) {
    _inherits(LoginForm, _abstract_form_1$Abst);

    function LoginForm(parent) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

        _this.parent = parent;
        return _this;
    }

    _createClass(LoginForm, [{
        key: "init",
        value: function init() {
            _get(LoginForm.prototype.__proto__ || Object.getPrototypeOf(LoginForm.prototype), "init", this).call(this);
            this.addFields();
            this.addLoginButton();
        }
    }, {
        key: "addFields",
        value: function addFields() {
            this.createFormField('email');
            this.createFormField('password', null, 'password');
            this.setFields();
        }
    }, {
        key: "addLoginButton",
        value: function addLoginButton() {
            var btn = new button_1.Button('Login', this.onLogin, this, button_type_1.default.Primary);
            this.form.addButton(btn);
        }
    }, {
        key: "onLogin",
        value: function onLogin() {
            var data = this.getData();
            var email = data.email;
            var password = data.password;
            this.parent.onLogin(email, password);
        }
    }]);

    return LoginForm;
}(abstract_form_1.AbstractForm);

exports.LoginForm = LoginForm;

},{"../../../../constants/button_type":4,"../../button":28,"../abstract_form":35}],37:[function(require,module,exports){
/// <reference path="../../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var button_type_1 = require("../../../../constants/button_type");
var abstract_form_1 = require("../abstract_form");
var button_1 = require("../../button");

var RegisterForm = function (_abstract_form_1$Abst) {
    _inherits(RegisterForm, _abstract_form_1$Abst);

    function RegisterForm(parent) {
        _classCallCheck(this, RegisterForm);

        var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this));

        _this.parent = parent;
        return _this;
    }

    _createClass(RegisterForm, [{
        key: "init",
        value: function init() {
            _get(RegisterForm.prototype.__proto__ || Object.getPrototypeOf(RegisterForm.prototype), "init", this).call(this);
            this.addFields();
            this.addRegisterButton();
        }
    }, {
        key: "addFields",
        value: function addFields() {
            this.createFormField('name');
            this.createFormField('email');
            this.createFormField('password', null, 'password');
            this.createFormField('password_confirmation', null, 'password');
            this.setFields();
        }
    }, {
        key: "addRegisterButton",
        value: function addRegisterButton() {
            var btn = new button_1.Button('Register', this.onRegister, this, button_type_1.default.Success);
            this.form.addButton(btn);
        }
    }, {
        key: "onRegister",
        value: function onRegister() {
            var data = this.getData();
            var name = data.name;
            var email = data.email;
            var password = data.password;
            var password_confirmation = data.password_confirmation;
            this.parent.onRegister(name, email, password, password_confirmation);
        }
    }]);

    return RegisterForm;
}(abstract_form_1.AbstractForm);

exports.RegisterForm = RegisterForm;

},{"../../../../constants/button_type":4,"../../button":28,"../abstract_form":35}],38:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxIFrame = qx.ui.embed.Iframe;
var qx_constants = require("../../../constants/qx_constants");

var AbstractIFrame = function (_QxIFrame) {
    _inherits(AbstractIFrame, _QxIFrame);

    function AbstractIFrame(source) {
        _classCallCheck(this, AbstractIFrame);

        var _this = _possibleConstructorReturn(this, (AbstractIFrame.__proto__ || Object.getPrototypeOf(AbstractIFrame)).call(this, source));

        _this.init();
        return _this;
    }

    _createClass(AbstractIFrame, [{
        key: "init",
        value: function init() {
            this.setScrollbar(false);
            this.addListener(qx_constants.LOAD, this.onLoad, this);
            this.addListener(qx_constants.RESIZE, this.doResize, this);
        }
    }, {
        key: "doResize",
        value: function doResize() {
            var innerSize = this.getInnerSize();
            var width = innerSize.width;
            var height = innerSize.height;
            this.onResize(width, height);
        }
    }, {
        key: "onLoad",
        value: function onLoad() {
            this.iframe_window = this.getWindow();
            this.start();
        }
    }, {
        key: "onResize",
        value: function onResize(width, height) {}
    }, {
        key: "start",
        value: function start() {}
    }]);

    return AbstractIFrame;
}(QxIFrame);

exports.AbstractIFrame = AbstractIFrame;

},{"../../../constants/qx_constants":8}],39:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_iframe_1 = require("./abstract_iframe");
var monaco_editor_constants = require("../../../constants/monaco_editor_constants");

var MonacoEditor = function (_abstract_iframe_1$Ab) {
    _inherits(MonacoEditor, _abstract_iframe_1$Ab);

    function MonacoEditor() {
        _classCallCheck(this, MonacoEditor);

        return _possibleConstructorReturn(this, (MonacoEditor.__proto__ || Object.getPrototypeOf(MonacoEditor)).call(this, monaco_editor_constants.MONACO_EDITOR_PATH));
    }

    _createClass(MonacoEditor, [{
        key: "start",
        value: function start() {
            this.doResize();
            this.monacoEditor = this.iframe_window.monaco.editor;
            this.model = this.monacoEditor.getModels()[0];
        }
    }, {
        key: "getContent",
        value: function getContent() {
            if (this.model) return this.model.getValue();else return '';
        }
    }, {
        key: "onResize",
        value: function onResize(width, height) {}
    }, {
        key: "setContent",
        value: function setContent(content) {
            if (this.model) this.model.setValue(content);
        }
    }]);

    return MonacoEditor;
}(abstract_iframe_1.AbstractIFrame);

exports.MonacoEditor = MonacoEditor;

},{"../../../constants/monaco_editor_constants":7,"./abstract_iframe":38}],40:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxMenuButton = qx.ui.menu.Button;
var qx_constants = require("../../constants/qx_constants");

var MenuButton = function (_QxMenuButton) {
    _inherits(MenuButton, _QxMenuButton);

    function MenuButton() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, MenuButton);

        var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this));

        if (label) _this.setLabel(label);
        if (fn) _this.addListener(qx_constants.EXECUTE, fn, context);
        return _this;
    }

    return MenuButton;
}(QxMenuButton);

exports.MenuButton = MenuButton;

},{"../../constants/qx_constants":8}],41:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var QxMenubarButton = qx.ui.menubar.Button;
var qx_constants = require("../../constants/qx_constants");

var MenubarButton = function (_QxMenubarButton) {
    _inherits(MenubarButton, _QxMenubarButton);

    function MenubarButton() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, MenubarButton);

        var _this = _possibleConstructorReturn(this, (MenubarButton.__proto__ || Object.getPrototypeOf(MenubarButton)).call(this));

        _this.setRich(true);
        if (label) _this.setLabel(label);
        if (fn) _this.addListener(qx_constants.EXECUTE, fn, context);
        return _this;
    }

    return MenubarButton;
}(QxMenubarButton);

exports.MenubarButton = MenubarButton;

},{"../../constants/qx_constants":8}],42:[function(require,module,exports){
/// <reference path="../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Dock = qx.ui.layout.Dock;
var QxWindow = qx.ui.window.Window;
var abstract_viewport_1 = require("../viewport/abstract_viewport");
var qx_constants = require("../../constants/qx_constants");

var AbstractWindow = function (_QxWindow) {
    _inherits(AbstractWindow, _QxWindow);

    function AbstractWindow() {
        _classCallCheck(this, AbstractWindow);

        var _this = _possibleConstructorReturn(this, (AbstractWindow.__proto__ || Object.getPrototypeOf(AbstractWindow)).call(this));

        abstract_viewport_1.AbstractViewport.addWindow(_this);
        _this.addListener(qx_constants.APPEAR, _this.onAppear, _this);
        _this.addListener(qx_constants.CLOSE, _this.onClose, _this);
        _this.init();
        return _this;
    }

    _createClass(AbstractWindow, [{
        key: "init",
        value: function init() {
            this.is_rendered = false;
            this.setAllowMinimize(false);
            this.setWindowLayout();
            this.setContentPadding(0);
            this.addButtons();
            this.addContent();
            this.setCaption(this.getWindowCaption());
            this.setWidth(this.getDefaultWidth());
            this.setHeight(this.getDefaultHeight());
            if (this.autoShow()) this.show();
            if (this.getDefaultCentered()) this.center();
        }
    }, {
        key: "addButtons",
        value: function addButtons() {}
    }, {
        key: "addContent",
        value: function addContent() {}
    }, {
        key: "autoShow",
        value: function autoShow() {
            return false;
        }
    }, {
        key: "getDefaultCentered",
        value: function getDefaultCentered() {
            return false;
        }
    }, {
        key: "getDefaultHeight",
        value: function getDefaultHeight() {
            return 375;
        }
    }, {
        key: "getDefaultLayout",
        value: function getDefaultLayout() {
            return new Dock();
        }
    }, {
        key: "getDefaultWidth",
        value: function getDefaultWidth() {
            return 475;
        }
    }, {
        key: "getWindowCaption",
        value: function getWindowCaption() {
            return 'Abstract Window';
        }
    }, {
        key: "isCentered",
        value: function isCentered() {
            return false;
        }
    }, {
        key: "onAppear",
        value: function onAppear() {
            this.is_rendered = true;
        }
    }, {
        key: "onClose",
        value: function onClose() {
            abstract_viewport_1.AbstractViewport.removeWindow(this);
        }
    }, {
        key: "setWindowLayout",
        value: function setWindowLayout() {
            this.setLayout(this.getDefaultLayout());
        }
    }]);

    return AbstractWindow;
}(QxWindow);

exports.AbstractWindow = AbstractWindow;

},{"../../constants/qx_constants":8,"../viewport/abstract_viewport":21}],43:[function(require,module,exports){
/// <reference path="../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_form_1 = require("../../widgets/forms/abstract_form");
var abstract_window_1 = require("../abstract_window");

var AbstractFormWindow = function (_abstract_window_1$Ab) {
    _inherits(AbstractFormWindow, _abstract_window_1$Ab);

    function AbstractFormWindow() {
        _classCallCheck(this, AbstractFormWindow);

        return _possibleConstructorReturn(this, (AbstractFormWindow.__proto__ || Object.getPrototypeOf(AbstractFormWindow)).apply(this, arguments));
    }

    _createClass(AbstractFormWindow, [{
        key: "init",
        value: function init() {
            _get(AbstractFormWindow.prototype.__proto__ || Object.getPrototypeOf(AbstractFormWindow.prototype), "init", this).call(this);
            this.form = this.defaultFormWidget();
            this.add(this.form, { edge: 'center' });
        }
    }, {
        key: "defaultFormWidget",
        value: function defaultFormWidget() {
            return new abstract_form_1.AbstractForm();
        }
    }, {
        key: "showErrorMessage",
        value: function showErrorMessage(message) {
            this.form.showErrorMessages([message]);
        }
    }]);

    return AbstractFormWindow;
}(abstract_window_1.AbstractWindow);

exports.AbstractFormWindow = AbstractFormWindow;

},{"../../widgets/forms/abstract_form":35,"../abstract_window":42}],44:[function(require,module,exports){
/// <reference path="../../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_form_window_1 = require("../abstract_form_window");
var login_form_1 = require("../../../widgets/forms/session/login_form");
var session_manager_1 = require("../../../../managers/session_manager");

var LoginWindow = function (_abstract_form_window) {
    _inherits(LoginWindow, _abstract_form_window);

    function LoginWindow() {
        _classCallCheck(this, LoginWindow);

        return _possibleConstructorReturn(this, (LoginWindow.__proto__ || Object.getPrototypeOf(LoginWindow)).apply(this, arguments));
    }

    _createClass(LoginWindow, [{
        key: "onLogin",
        value: function onLogin(email, password) {
            session_manager_1.SessionManager.login(email, password, this);
        }
    }, {
        key: "onLoginReply",
        value: function onLoginReply(reply) {
            if (reply.success) this.close();else this.showErrorMessage(reply.message);
        }
    }, {
        key: "defaultFormWidget",
        value: function defaultFormWidget() {
            return new login_form_1.LoginForm(this);
        }
    }, {
        key: "getDefaultHeight",
        value: function getDefaultHeight() {
            return 230;
        }
    }, {
        key: "getWindowCaption",
        value: function getWindowCaption() {
            return 'Login';
        }
    }]);

    return LoginWindow;
}(abstract_form_window_1.AbstractFormWindow);

exports.LoginWindow = LoginWindow;

},{"../../../../managers/session_manager":15,"../../../widgets/forms/session/login_form":36,"../abstract_form_window":43}],45:[function(require,module,exports){
/// <reference path="../../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_form_window_1 = require("../abstract_form_window");
var register_form_1 = require("../../../widgets/forms/session/register_form");
var session_manager_1 = require("../../../../managers/session_manager");

var RegisterWindow = function (_abstract_form_window) {
    _inherits(RegisterWindow, _abstract_form_window);

    function RegisterWindow() {
        _classCallCheck(this, RegisterWindow);

        return _possibleConstructorReturn(this, (RegisterWindow.__proto__ || Object.getPrototypeOf(RegisterWindow)).apply(this, arguments));
    }

    _createClass(RegisterWindow, [{
        key: "onRegister",
        value: function onRegister(name, email, password, password_confirmation) {
            session_manager_1.SessionManager.register(name, email, password, password_confirmation, this);
        }
    }, {
        key: "onRegisterReply",
        value: function onRegisterReply(reply) {
            if (reply.success) this.close();else this.showErrorMessage(reply.message);
        }
    }, {
        key: "defaultFormWidget",
        value: function defaultFormWidget() {
            return new register_form_1.RegisterForm(this);
        }
    }, {
        key: "getWindowCaption",
        value: function getWindowCaption() {
            return 'Register';
        }
    }]);

    return RegisterWindow;
}(abstract_form_window_1.AbstractFormWindow);

exports.RegisterWindow = RegisterWindow;

},{"../../../../managers/session_manager":15,"../../../widgets/forms/session/register_form":37,"../abstract_form_window":43}],46:[function(require,module,exports){
/// <reference path="../../../../types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_form_window_1 = require("../abstract_form_window");

var SettingsWindow = function (_abstract_form_window) {
    _inherits(SettingsWindow, _abstract_form_window);

    function SettingsWindow() {
        _classCallCheck(this, SettingsWindow);

        return _possibleConstructorReturn(this, (SettingsWindow.__proto__ || Object.getPrototypeOf(SettingsWindow)).apply(this, arguments));
    }

    _createClass(SettingsWindow, [{
        key: "getWindowCaption",
        value: function getWindowCaption() {
            return 'Settings';
        }
    }]);

    return SettingsWindow;
}(abstract_form_window_1.AbstractFormWindow);

exports.SettingsWindow = SettingsWindow;

},{"../abstract_form_window":43}],47:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_navpanel_1 = require("../../../qkwidgets/ui/viewport/navpanel/abstract_navpanel");
var editor_window_1 = require("../../windows/iframe/editor_window");

var Navpanel = function (_abstract_navpanel_1$) {
    _inherits(Navpanel, _abstract_navpanel_1$);

    function Navpanel() {
        _classCallCheck(this, Navpanel);

        return _possibleConstructorReturn(this, (Navpanel.__proto__ || Object.getPrototypeOf(Navpanel)).apply(this, arguments));
    }

    _createClass(Navpanel, [{
        key: "addButtons",
        value: function addButtons() {
            this.monacoEditorBtn = this.addPanelButton('VB Editor', this.onEditor);
        }
    }, {
        key: "setButtonsEnabled",
        value: function setButtonsEnabled(bool) {
            this.monacoEditorBtn.setEnabled(bool);
        }
    }, {
        key: "onEditor",
        value: function onEditor() {
            new editor_window_1.EditorWindow();
        }
    }]);

    return Navpanel;
}(abstract_navpanel_1.AbstractNavpanel);

exports.Navpanel = Navpanel;

},{"../../../qkwidgets/ui/viewport/navpanel/abstract_navpanel":26,"../../windows/iframe/editor_window":49}],48:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var app_constants = require("../../constants/app_constants");
var abstract_viewport_1 = require("../../qkwidgets/ui/viewport/abstract_viewport");
var navpanel_1 = require("./navpanel/navpanel");

var Viewport = function (_abstract_viewport_1$) {
    _inherits(Viewport, _abstract_viewport_1$);

    function Viewport() {
        _classCallCheck(this, Viewport);

        return _possibleConstructorReturn(this, (Viewport.__proto__ || Object.getPrototypeOf(Viewport)).apply(this, arguments));
    }

    _createClass(Viewport, [{
        key: "createNavpanel",
        value: function createNavpanel() {
            return new navpanel_1.Navpanel();
        }
    }, {
        key: "getLabelText",
        value: function getLabelText() {
            return app_constants.NAVBAR_LABEL_TEXT;
        }
    }]);

    return Viewport;
}(abstract_viewport_1.AbstractViewport);

exports.Viewport = Viewport;

},{"../../constants/app_constants":1,"../../qkwidgets/ui/viewport/abstract_viewport":21,"./navpanel/navpanel":47}],49:[function(require,module,exports){
/// <reference path="../../../qkwidgets/types/qooxdoo.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var abstract_window_1 = require("../../../qkwidgets/ui/windows/abstract_window");
var basic_button_bar_1 = require("../../../qkwidgets/ui/widgets/basic_button_bar");
var basic_manager_1 = require("../../../qkwidgets/managers/basic_manager");
var hsplit_pane_1 = require("../../../qkwidgets/ui/splitpane/hsplit_pane");
var monaco_editor_1 = require("../../../qkwidgets/ui/widgets/iframe/monaco_editor");
var text_area_1 = require("../../../qkwidgets/ui/widgets/fields/text_area");

var EditorWindow = function (_abstract_window_1$Ab) {
    _inherits(EditorWindow, _abstract_window_1$Ab);

    function EditorWindow() {
        _classCallCheck(this, EditorWindow);

        return _possibleConstructorReturn(this, (EditorWindow.__proto__ || Object.getPrototypeOf(EditorWindow)).apply(this, arguments));
    }

    _createClass(EditorWindow, [{
        key: "init",
        value: function init() {
            this.editor = new monaco_editor_1.MonacoEditor();
            this.output = new text_area_1.TextArea();
            _get(EditorWindow.prototype.__proto__ || Object.getPrototypeOf(EditorWindow.prototype), "init", this).call(this);
        }
    }, {
        key: "addButtons",
        value: function addButtons() {
            this.buttonBar = new basic_button_bar_1.BasicButtonBar(this);
            this.add(this.buttonBar, { edge: 'south' });
        }
    }, {
        key: "addContent",
        value: function addContent() {
            var hsplitpane = new hsplit_pane_1.HSplitPane();
            hsplitpane.add(this.editor, 1);
            hsplitpane.add(this.output, 1);
            this.add(hsplitpane, { edge: 'center' });
        }
    }, {
        key: "autoShow",
        value: function autoShow() {
            return true;
        }
    }, {
        key: "getDefaultCentered",
        value: function getDefaultCentered() {
            return true;
        }
    }, {
        key: "getDefaultHeight",
        value: function getDefaultHeight() {
            return 475;
        }
    }, {
        key: "getDefaultWidth",
        value: function getDefaultWidth() {
            return 575;
        }
    }, {
        key: "getWindowCaption",
        value: function getWindowCaption() {
            return 'VB Editor';
        }
    }, {
        key: "onClear",
        value: function onClear() {
            this.output.setValue('');
        }
    }, {
        key: "onRun",
        value: function onRun() {
            basic_manager_1.BasicManager.eval_script(this.getScript(), this.onShowReply, this);
        }
    }, {
        key: "clearOutput",
        value: function clearOutput() {
            this.output.setValue('');
        }
    }, {
        key: "getScript",
        value: function getScript() {
            return this.editor.getContent();
        }
    }, {
        key: "onShowReply",
        value: function onShowReply(reply) {
            var oldText = this.output.getValue();
            if (!oldText) oldText = '';
            var newText = void 0;
            if (qx.lang.Type.isObject(reply)) newText = qx.util.Serializer.toJson(reply);else newText = reply + '';
            this.output.setValue("" + oldText + newText + "\n");
        }
    }]);

    return EditorWindow;
}(abstract_window_1.AbstractWindow);

exports.EditorWindow = EditorWindow;

},{"../../../qkwidgets/managers/basic_manager":12,"../../../qkwidgets/ui/splitpane/hsplit_pane":19,"../../../qkwidgets/ui/widgets/basic_button_bar":27,"../../../qkwidgets/ui/widgets/fields/text_area":33,"../../../qkwidgets/ui/widgets/iframe/monaco_editor":39,"../../../qkwidgets/ui/windows/abstract_window":42}]},{},[2])

//# sourceMappingURL=app.js.map
