'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var SigPad = _interopDefault(require('signature_pad'));

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
var throttle = function ( delay, noTrailing, callback, debounceMode ) {

	// After wrapper has stopped being called, this timeout ensures that
	// `callback` is executed at the proper times in `throttle` and `end`
	// debounce modes.
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	// The `wrapper` function encapsulates all of the throttling / debouncing
	// functionality and when executed will limit the rate at which `callback`
	// is executed.
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		// If `debounceMode` is true (at begin) this is used to clear the flag
		// to allow future `callback` executions.
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			// Since `wrapper` is being called for the first time and
			// `debounceMode` is true (at begin), execute `callback`.
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			// In throttle mode, if `delay` time has been exceeded, execute
			// `callback`.
			exec();

		} else if ( noTrailing !== true ) {
			// In trailing throttle mode, since `delay` time has not been
			// exceeded, schedule `callback` to execute `delay` ms after most
			// recent execution.
			//
			// If `debounceMode` is true (at begin), schedule `clear` to execute
			// after `delay` ms.
			//
			// If `debounceMode` is false (at end), schedule `callback` to
			// execute after `delay` ms.
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

};

var throttle$1 = /*#__PURE__*/Object.freeze({
	default: throttle,
	__moduleExports: throttle
});

var throttle$2 = ( throttle$1 && throttle ) || throttle$1;

/* eslint-disable no-undefined */



/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
var debounce = function ( delay, atBegin, callback ) {
	return callback === undefined ? throttle$2(delay, atBegin, false) : throttle$2(delay, callback, atBegin !== false);
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var SignaturePad = function (_PureComponent) {
    inherits(SignaturePad, _PureComponent);

    function SignaturePad(props) {
        classCallCheck(this, SignaturePad);

        var _this = possibleConstructorReturn(this, (SignaturePad.__proto__ || Object.getPrototypeOf(SignaturePad)).call(this, props));

        _this.state = { canvasWidth: 0, canvasHeight: 0 };

        _this._callResizeHandler = debounce(_this.props.debounceInterval, _this.handleResize.bind(_this));
        return _this;
    }

    createClass(SignaturePad, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this._canvas) {
                if (!this.props.width || !this.props.height) {
                    this._canvas.style.width = '100%';
                }
                this.scaleCanvas();

                if (!this.props.width || !this.props.height) {
                    window.addEventListener('resize', this._callResizeHandler);
                }

                this._signaturePad = new SigPad(this._canvas, this.props.options);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (!this.props.width || !this.props.height) {
                window.removeEventListener('resize', this._callResizeHandler);
            }

            this._signaturePad.off();
        }

        /**
         * Get the original signature_pad instance.
         */

    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this._signaturePad.isEmpty();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._signaturePad.clear();
        }
    }, {
        key: 'fromDataURL',
        value: function fromDataURL(base64String) {
            this._signaturePad.fromDataURL(base64String);
        }
    }, {
        key: 'toDataURL',
        value: function toDataURL(mime) {
            return this._signaturePad.toDataURL(mime);
        }
    }, {
        key: 'fromData',
        value: function fromData(data) {
            this._signaturePad.fromData(data);
        }
    }, {
        key: 'toData',
        value: function toData() {
            return this._signaturePad.toData();
        }
    }, {
        key: 'off',
        value: function off() {
            this._signaturePad.off();
        }
    }, {
        key: 'on',
        value: function on() {
            this._signaturePad.on();
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.scaleCanvas();
        }
    }, {
        key: 'scaleCanvas',
        value: function scaleCanvas() {
            var ratio = Math.max(window.devicePixelRatio || 1, 1);
            var width = (this.props.width || this._canvas.offsetWidth) * ratio;
            var height = (this.props.height || this._canvas.offsetHeight) * ratio;

            // Avoid needlessly setting height/width if dimensions haven't changed
            var _state = this.state,
                canvasWidth = _state.canvasWidth,
                canvasHeight = _state.canvasHeight;

            if (width === canvasWidth && height === canvasHeight) return;

            var data = void 0;
            if (this.props.redrawOnResize && this._signaturePad) {
                data = this._signaturePad.toDataURL();
            }

            this._canvas.width = width;
            this._canvas.height = height;

            this.setState({ canvasWidth: width, canvasHeight: height });

            var ctx = this._canvas.getContext('2d');
            ctx.scale(ratio, ratio);

            if (this.props.redrawOnResize && this._signaturePad) {
                this._signaturePad.fromDataURL(data);
            } else if (this._signaturePad) {
                this._signaturePad.clear();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var canvasProps = this.props.canvasProps;


            return React__default.createElement('canvas', _extends({
                ref: function ref(_ref) {
                    return _this2._canvas = _ref;
                }
            }, canvasProps));
        }
    }, {
        key: 'instance',
        get: function get$$1() {
            return this._signaturePad;
        }
    }, {
        key: 'canvas',
        get: function get$$1() {
            return this._canvas;
        }
    }, {
        key: 'dotSize',
        set: function set$$1(dotSize) {
            this._signaturePad.dotSize = dotSize;
        },
        get: function get$$1() {
            return this._signaturePad.dotSize;
        }
    }, {
        key: 'minWidth',
        set: function set$$1(minWidth) {
            this._signaturePad.minWidth = minWidth;
        },
        get: function get$$1() {
            return this._signaturePad.minWidth;
        }
    }, {
        key: 'maxWidth',
        set: function set$$1(maxWidth) {
            this._signaturePad.maxWidth = maxWidth;
        },
        get: function get$$1() {
            return this._signaturePad.maxWidth;
        }
    }, {
        key: 'throttle',
        set: function set$$1(throttle) {
            this._signaturePad.throttle = throttle;
        },
        get: function get$$1() {
            return this._signaturePad.throttle;
        }
    }, {
        key: 'backgroundColor',
        set: function set$$1(color) {
            this._signaturePad.backgroundColor = color;
        },
        get: function get$$1() {
            return this._signaturePad.backgroundColor;
        }
    }, {
        key: 'penColor',
        set: function set$$1(color) {
            this._signaturePad.penColor = color;
        },
        get: function get$$1() {
            return this._signaturePad.penColor;
        }
    }, {
        key: 'velocityFilterWeight',
        set: function set$$1(weight) {
            this._signaturePad.velocityFilterWeight = weight;
        },
        get: function get$$1() {
            return this._signaturePad.velocityFilterWeight;
        }
    }, {
        key: 'onBegin',
        set: function set$$1(fn) {
            if (!(fn && typeof fn === 'function')) {
                throw new Error('Invalid argument passed to onBegin()');
            }

            this._signaturePad.onBegin = fn;
        }
    }, {
        key: 'onEnd',
        set: function set$$1(fn) {
            if (!(fn && typeof fn === 'function')) {
                throw new Error('Invalid argument passed to onEnd()');
            }

            this._signaturePad.onEnd = fn;
        }
    }]);
    return SignaturePad;
}(React.PureComponent);

SignaturePad.displayName = 'react-signature-pad-wrapper';
SignaturePad.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.object,
    redrawOnResize: PropTypes.bool.isRequired,
    debounceInterval: PropTypes.number.isRequired,
    canvasProps: PropTypes.object
};
SignaturePad.defaultProps = {
    redrawOnResize: false,
    debounceInterval: 150
};

module.exports = SignaturePad;
