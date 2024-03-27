"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createReactComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js");
/**
 * @tabler/icons-react v2.47.0 - MIT
 */





var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var createReactComponent = (iconName, iconNamePascal, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, stroke = 2, children } = _b, rest = __objRest(_b, ["color", "size", "stroke", "children"]);
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"]), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: `tabler-icon tabler-icon-${iconName}`
        }), rest),
        [...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)), ...children || []]
      );
    }
  );
  Component.propTypes = {
    color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]),
    stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)])
  };
  Component.displayName = `${iconNamePascal}`;
  return Component;
};


//# sourceMappingURL=createReactComponent.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @tabler/icons-react v2.47.0 - MIT
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconBook.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconBook.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconBook)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.47.0 - MIT
 */



var IconBook = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("book", "IconBook", [
  ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-0" }],
  ["path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-1" }],
  ["path", { d: "M3 6l0 13", key: "svg-2" }],
  ["path", { d: "M12 6l0 13", key: "svg-3" }],
  ["path", { d: "M21 6l0 13", key: "svg-4" }]
]);


//# sourceMappingURL=IconBook.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconMenu2)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.47.0 - MIT
 */



var IconMenu2 = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]);


//# sourceMappingURL=IconMenu2.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconSearch)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.47.0 - MIT
 */



var IconSearch = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]);


//# sourceMappingURL=IconSearch.js.map


/***/ }),

/***/ "./node_modules/@tabler/icons-react/dist/esm/icons/IconX.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tabler/icons-react/dist/esm/icons/IconX.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconX)
/* harmony export */ });
/* harmony import */ var _createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createReactComponent.js */ "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js");
/**
 * @tabler/icons-react v2.47.0 - MIT
 */



var IconX = (0,_createReactComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);


//# sourceMappingURL=IconX.js.map


/***/ }),

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/components/dropdown-menu.jsx":
/*!******************************************!*\
  !*** ./src/components/dropdown-menu.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dropdownMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



function dropdownMenu(props) {
  const columns = props.downMenu.children.map(child => {
    const colList = child.children.map(listItem => {
      const index = listItem.uri.slice(0, -1).lastIndexOf("/");
      const slug = listItem.uri.slice(index, -1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "mb-2 group w-fit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: `/category${slug}`
      }, listItem.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal"
      }));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "px-10 pt-6 pb-16 border-r min-w-[300px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: "uppercase text-base mb-4"
    }, child.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "ml-4"
    }, colList));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-row justify-start border-b border-charcoal hidden lg:flex"
  }, columns);
}

/***/ }),

/***/ "./src/components/footer.jsx":
/*!***********************************!*\
  !*** ./src/components/footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconBook.js");





function Footer(props) {
  const lines = _info_json__WEBPACK_IMPORTED_MODULE_1__.slider.products.map(() => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "w-[1px] h-full bg-charcoal"
    });
  });
  function Toggle() {
    props.setVisible(prevState => !prevState);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "absolute bottom-0 z-0 w-full px-2 md:px-8 py-6 flex flex-col justify-end items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " flex gap-3 justify-center block h-[30px] md:hidden mb-16"
  }, lines), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-row justify-between px-2 w-full md:px-[20px] max-h-[70px] lg:max-h-[200px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "md:flex-1 flex flex-row gap-4 items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "uppercase text-2xs md:text-sm"
  }, "Made in Ecuador"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "uppercase font-bold text-xs md:text-base"
  }, props.collection)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "font-caslon text-5xl ml-20 hidden md:block -mb-2"
  }, "0", props.number, "/0", _info_json__WEBPACK_IMPORTED_MODULE_1__.slider.quantity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-1 flex gap-5 justify-center hidden md:flex"
  }, lines), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "flex-1 flex flex-row gap-2 md:gap-4 justify-end items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "flex justify-center items-center w-auto h-full border aspect-square hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: Toggle,
    className: "px-2 md:px-6 h-full border uppercase hover:bg-charcoal hover:text-cream transition-all duration-200 ease-in-out text-xs md:text-sm lg:text-base cursor-pointer"
  }, "Inquire for purchase"))));
}

/***/ }),

/***/ "./src/components/form.jsx":
/*!*********************************!*\
  !*** ./src/components/form.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconX.js");





function Form(props) {
  const inputs = _info_json__WEBPACK_IMPORTED_MODULE_1__.form.inputs.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      className: "w-full bg-charcoal capitalize placeholder:text-cream/50 border-b border-cream/50 focus:border-cream/100 rounded-none focus:outline-none transition-all duration-150 ease-in-our",
      placeholder: item.placeholder
    });
  });
  function Toggle() {
    props.setVisible(prevState => !prevState);
  }
  console.log(props.visible);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `h-full top-0 right-0 absolute w-[80%] md:w-[30vw] min-w-[400px] bg-charcoal z-30 text-cream flex flex-col justify-center px-16 transition-all duration-400  ${props.visible ? 'translate-x-[0%] block' : 'translate-x-[80%] hidden'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "self-end -mr-2 mb-4 cursor-pointer",
    onClick: Toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 40,
    stroke: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border-2 border-cream w-[100%] h-[700px] flex flex-col justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex h-[60px] border-b-2 border-cream"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-1  items-center px-6 border-r-2 border-cream"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "REQUEST FOR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "aspect-square h-[60px] p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    className: "w-full h-full max-w-[60px]",
    placeholder: "color",
    src: "../images/icon-alter.png",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1219311970.json */ "./.cache/caches/gatsby-plugin-image/1219311970.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "uppercase"
  }, "Rose"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "uppercase font-bold"
  }, "Black Magic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-col gap-4 mt-8"
  }, inputs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "text-center pt-2 pb-3 mt-4 border border-cream/50 uppercase text-cream hover:bg-cream hover:text-charcoal transition-all duration-200 ease-in-out  align-middle"
  }, "SUBMIT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-full justify-between py-4 px-4 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "uppercase font-bold align-baseline"
  }, "Royal Flowers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "font-caslon align-baseline mt-[6px] text-md"
  }, "Made in Ecuador"))));
}

/***/ }),

/***/ "./src/components/header.jsx":
/*!***********************************!*\
  !*** ./src/components/header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1709990342_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1709990342.json */ "./public/page-data/sq/d/1709990342.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconMenu2.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.js");
/* harmony import */ var _slider_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-header */ "./src/components/slider-header.jsx");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown-menu */ "./src/components/dropdown-menu.jsx");









function flatToHierarchicalMenu(data = [], {
  idKey = 'key',
  parentKey = 'parentId',
  childrenKey = 'children'
} = {}) {
  const tree = [];
  const childrenOf = {};
  data.forEach(item => {
    const newItem = {
      ...item
    };
    const {
      [idKey]: id,
      [parentKey]: parentId = 0
    } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem) : tree.push(newItem);
  });
  return tree;
}
function Header() {
  const [drop, setDrop] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const data = _public_page_data_sq_d_1709990342_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const hierarchicalMenu = flatToHierarchicalMenu(data.wpMenu.menuItems.nodes);
  const menuLeft = hierarchicalMenu.map(item => {
    const index = item.uri.slice(0, -1).lastIndexOf("/");
    const slug = item.uri.slice(index, -1);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: `/category${slug}`,
      className: "uppercase",
      onMouseOver: () => setDrop(item.key)
    }, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal"
    }));
  });
  const menuRight = _info_json__WEBPACK_IMPORTED_MODULE_2__.header.menuRight.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: item.url,
      className: "uppercase no-underline hover:underline underline-offset-8"
    }, item.value);
  });
  const categories = _info_json__WEBPACK_IMPORTED_MODULE_2__.header.categories.map(item => {
    const lista = item.subcategories.map(item => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
        className: "mb-2 group w-fit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
        href: item.url
      }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        className: "block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal"
      }));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "px-10 pt-6 pb-16 border-r min-w-[300px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", {
      className: "uppercase text-base mb-2"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
      className: "ml-4"
    }, lista));
  });
  const relatedCategories = _info_json__WEBPACK_IMPORTED_MODULE_2__.header.relatedCategories.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: item.url
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-charcoal"
    }));
  });
  const dropdownMenus = hierarchicalMenu.map(downMenu => {
    let flag = false;
    drop === downMenu.key ? flag = true : flag = false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      id: downMenu.key,
      className: `${flag ? 'opacity-100 visible' : 'opacity-0 hidden'}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      downMenu: downMenu
    }));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("header", {
    className: "w-[100%] z-20 bg-cream fixed",
    onMouseLeave: () => setDrop(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex flex-row justify-between py-3 px-[20px] border-b border-charcoal lg:hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: " flex justify-center",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.StaticImage, {
    className: "max-w-[180px] bg-cover my-auto",
    placeholder: "color",
    src: "../images/logo-royal-flower.png",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3850885250.json */ "./.cache/caches/gatsby-plugin-image/3850885250.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "flex-1 flex flex-row gap-4 justify-end items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.StaticImage, {
    className: "max-w-[26px] bg-cover my-auto",
    placeholder: "color",
    src: "../images/icon-royal-flowers.png",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/287278811.json */ "./.cache/caches/gatsby-plugin-image/287278811.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    stroke: 1
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex flex-row justify-between py-2 px-[20px] border-b border-charcoal hidden lg:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "flex-1 flex flex-row gap-4 items-center"
  }, menuLeft), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: () => {
      (0,gatsby__WEBPACK_IMPORTED_MODULE_3__.navigate)("/");
    },
    className: "cursor-pointer flex justify-center",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.StaticImage, {
    className: "max-w-[180px] bg-cover my-auto",
    placeholder: "color",
    src: "../images/logo-royal-flower.png",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3850885250.json */ "./.cache/caches/gatsby-plugin-image/3850885250.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "flex-1 flex flex-row gap-4 justify-end items-center"
  }, menuRight, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.StaticImage, {
    className: "max-w-[26px] bg-cover my-auto",
    placeholder: "color",
    src: "../images/icon-royal-flowers.png",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/287278811.json */ "./.cache/caches/gatsby-plugin-image/287278811.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    stroke: 1
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex flex-row py-[1vh] px-[20px] border-b border-charcoal gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "mt-[1px] align-middle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    className: "w-full bg-cream uppercase placeholder:text-gray border-none rounded-none focus:outline-none",
    placeholder: _info_json__WEBPACK_IMPORTED_MODULE_2__.header.searchBar.text
  })), dropdownMenus);
}

/***/ }),

/***/ "./src/components/product-card.jsx":
/*!*****************************************!*\
  !*** ./src/components/product-card.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/components/form.jsx");






function ProductCard(props) {
  const [isOver, setIsOver] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: `w-[15vw] min-w-[200px] snap-center duration-300 ease-in-out transition-all scale-100  hover:scale-125 cursor-pointer`,
    key: props.index,
    id: props.index,
    onClick: () => {
      (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.navigate)(`/product/` + props.slug);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    image: props.image,
    alt: "",
    className: "object-contain"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: `uppercase text-sm underline underline-offset-[13px] w-full text-center pt-4 transition-all ease-in-out duration-300`
  }, props.title));
}

/***/ }),

/***/ "./src/components/slider-header.jsx":
/*!******************************************!*\
  !*** ./src/components/slider-header.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _product_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card */ "./src/components/product-card.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/components/footer.jsx");






function Slider() {
  const [productList, setProductList] = react__WEBPACK_IMPORTED_MODULE_0__.useState([..._info_json__WEBPACK_IMPORTED_MODULE_1__.slider.products]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let move = 1;
    let gap = 12;
    const slider = document.getElementById("product-slider");
    function loadSlider() {
      slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
    }
    window.addEventListener('load', loadSlider());
    window.removeEventListener('load', loadSlider());
    slider.addEventListener('click', e => {
      e.preventDefault();

      // var producto = slider.childNodes[0]
      // producto.style.transform = `translate(${producto.offsetWidth*5+(gap*5)+move}px, 0px)`
    });
    slider.addEventListener('mousewheel', e => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;

      // move += (e.deltaY * 0.4)
      // var containerChilds = slider.childNodes

      // for (let i = 0; i < productList.length; i++) {

      //     const product = slider.childNodes[i];

      //     isOutOfView(slider, product)

      //     if (product.classList.contains('out-of-view')){
      //         // console.log(product.offsetLeft);
      //         // product.style.transform = `translate(${product.offsetWidth*5+(gap*5)+move}px, 0px)`

      //         // +(Math.abs(move))

      //         // var element = Array.prototype.slice.call(slider.getElementsByTagName('div'), slider.childNodes.length-1)
      //         // console.log(element);
      //         // slider.insertBefore(element[0], slider.firstChild)

      //     }else{
      //         console.log(product);
      //     }
      //     // product.style.transform = `translate(${move}px, 0px)`

      // }

      // var secondLastElement = containerChilds[(containerChilds.length - 5)]
      // var fifthElement = containerChilds[4]

      // secondLastElement.style.border = "solid 2px red"

      // fifthElement.style.border = "solid 2px green"
    });

    // function isOutOfView(container, element) {

    //     var gapSize = 6

    //     var docViewRight = container.scrollLeft + container.offsetWidth + gapSize
    //     var docViewLeft = container.scrollLeft

    //     var cardLeft = element.getBoundingClientRect().left
    //     var cardWidth = element.offsetWidth

    //     // console.log(cardLeft, container.offsetLeft);

    //    if(cardLeft+cardWidth < 0 
    //     // || cardLeft > container.offsetLeft+container.offsetWidth
    //     ){
    //         element.classList.add('out-of-view')

    //        console.log("INVISIBLE")

    //     //    element.style.visibility = 'hidden'
    //     //    element.style.transform = `translate(-${element.offsetWidth*2+move}px, 0px)`

    //         // var element = Array.prototype.slice.call(container.getElementsByTagName('div'), 0, 1)
    //         // var dom = new DOMparser().parseFromString(element, "text/xml")
    //         // var firstCard = container.firstChild;
    //         // var clone = firstCard.cloneNode(true)

    //         // // console.log(element);

    //         // document.getElementById("product-slider").removeChild(firstCard)

    //         // container.appendChild(clone)

    //     //    console.log("first", productList);

    //     //    setProductList((prevState)=>{

    //     //        return [...prevState, ...info.slider.products]

    //     //     })                

    //         // for (let i = 0; i < 2; i++) {
    //         //     var element = container.childNodes[0]
    //         //     console.log(element);
    //         //     container.removeChild(element)

    //         // }

    //         // secondLastElement.style.border = "solid 2px black"

    //    }

    // //     if(fifthElement.offsetLeft < docViewLeft){

    // //         console.log("ELIMINAR");

    // //         // for (let i = 0; i < 5; i++) {
    // //         //     var element = container.childNodes[0]
    // //         //     console.log(element);
    // //         //     container.removeChild(element)

    // //         // }

    // //         // setProductList((prevState)=>{
    // //         //     const newState = [...prevState]
    // //         //     newState.slice(5, -1)                  

    // //         //     console.log(newState);

    // //         //     return newState
    // //         // })

    // //         fifthElement.style.border = "solid 2px blue"

    // //     }

    // }
  });
  const products = productList.map((product, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "w-[13vw] min-w-[150px] snap-center duration-300 ease-in-out transition-all scale-100",
      key: index,
      id: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: product.image,
      alt: "",
      className: "object-contain"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
      className: `uppercase text-sm underline underline-offset-[13px] w-full text-center pt-4 transition-all ease-in-out duration-300`
    }, product.title));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-full w-fit relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full h-full grid grid-flow-col auto-cols-max items-center gap-3 overflow-x-hidden overflow-y-none whitespace-nowrap flex-nowrap",
    id: "product-slider"
  }, products));
}

/***/ }),

/***/ "./src/components/slider.jsx":
/*!***********************************!*\
  !*** ./src/components/slider.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _product_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-card */ "./src/components/product-card.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/components/footer.jsx");






function Slider(props) {
  const [currentNumber, setCurrentNumber] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1);
  const [productList, setProductList] = react__WEBPACK_IMPORTED_MODULE_0__.useState([...props.productsList]);

  // console.log("productList", productList);

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let move = 1;
    let gap = 12;
    const slider = document.getElementById("product-slider");
    function loadSlider() {
      slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;
    }
    window.addEventListener('load', loadSlider());
    window.removeEventListener('load', loadSlider());
    slider.addEventListener('click', e => {
      e.preventDefault();

      // var producto = slider.childNodes[0]
      // producto.style.transform = `translate(${producto.offsetWidth*5+(gap*5)+move}px, 0px)`
    });
    slider.addEventListener('mousewheel', e => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;

      // move += (e.deltaY * 0.4)
      // var containerChilds = slider.childNodes

      // for (let i = 0; i < productList.length; i++) {

      //     const product = slider.childNodes[i];

      //     isOutOfView(slider, product)

      //     if (product.classList.contains('out-of-view')){
      //         // console.log(product.offsetLeft);
      //         // product.style.transform = `translate(${product.offsetWidth*5+(gap*5)+move}px, 0px)`

      //         // +(Math.abs(move))

      //         // var element = Array.prototype.slice.call(slider.getElementsByTagName('div'), slider.childNodes.length-1)
      //         // console.log(element);
      //         // slider.insertBefore(element[0], slider.firstChild)

      //     }else{
      //         console.log(product);
      //     }
      //     // product.style.transform = `translate(${move}px, 0px)`

      // }

      // var secondLastElement = containerChilds[(containerChilds.length - 5)]
      // var fifthElement = containerChilds[4]

      // secondLastElement.style.border = "solid 2px red"

      // fifthElement.style.border = "solid 2px green"
    });
    var startX,
      startY,
      dist,
      threshold = 150,
      //required min distance traveled to be considered swipe
      allowedTime = 200,
      // maximum time allowed to travel that distance
      elapsedTime,
      startTime;

    // slider.addEventListener('touchstart', function(e){
    //     var touchobj = e.changedTouches[0]
    //     dist = 0
    //     startX = touchobj.pageX
    //     startY = touchobj.pageY
    //     startTime = new Date().getTime() // record time when finger first makes contact with surface
    //     e.preventDefault()
    // }, false)

    // slider.addEventListener('touchmove', function(e){
    //     e.preventDefault() // prevent scrolling when inside DIV
    // }, false)

    // slider.addEventListener('touchend', function(e){
    //     var touchobj = e.changedTouches[0]
    //     dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface

    //     console.log((touchobj.pageX*(-1)), touchobj.pageX);

    //     if( touchobj.pageX > startX){
    //         slider.scrollLeft += (touchobj.pageX*(-1))
    //         console.log("FUE HACIA LA IZQ");
    //     }
    //     if(touchobj.pageX < startX){
    //         slider.scrollLeft += (touchobj.pageX*(1))
    //         console.log("FUE HACIA LA DER");

    //     }

    //     e.preventDefault()
    // }, false)

    // slider.addEventListener('wheel', (e)=>{
    //     e.preventDefault()

    //     if(currentNumber < 5){

    //         setCurrentNumber((prevState)=>prevState+1)

    //     }else{
    //         setCurrentNumber(1)

    //     }

    // })

    // function isOutOfView(container, element) {

    //     var gapSize = 6

    //     var docViewRight = container.scrollLeft + container.offsetWidth + gapSize
    //     var docViewLeft = container.scrollLeft

    //     var cardLeft = element.getBoundingClientRect().left
    //     var cardWidth = element.offsetWidth

    //     // console.log(cardLeft, container.offsetLeft);

    //    if(cardLeft+cardWidth < 0 
    //     // || cardLeft > container.offsetLeft+container.offsetWidth
    //     ){
    //         element.classList.add('out-of-view')

    //        console.log("INVISIBLE")

    //     //    element.style.visibility = 'hidden'
    //     //    element.style.transform = `translate(-${element.offsetWidth*2+move}px, 0px)`

    //         // var element = Array.prototype.slice.call(container.getElementsByTagName('div'), 0, 1)
    //         // var dom = new DOMparser().parseFromString(element, "text/xml")
    //         // var firstCard = container.firstChild;
    //         // var clone = firstCard.cloneNode(true)

    //         // // console.log(element);

    //         // document.getElementById("product-slider").removeChild(firstCard)

    //         // container.appendChild(clone)

    //     //    console.log("first", productList);

    //     //    setProductList((prevState)=>{

    //     //        return [...prevState, ...info.slider.products]

    //     //     })                

    //         // for (let i = 0; i < 2; i++) {
    //         //     var element = container.childNodes[0]
    //         //     console.log(element);
    //         //     container.removeChild(element)

    //         // }

    //         // secondLastElement.style.border = "solid 2px black"

    //    }

    // //     if(fifthElement.offsetLeft < docViewLeft){

    // //         console.log("ELIMINAR");

    // //         // for (let i = 0; i < 5; i++) {
    // //         //     var element = container.childNodes[0]
    // //         //     console.log(element);
    // //         //     container.removeChild(element)

    // //         // }

    // //         // setProductList((prevState)=>{
    // //         //     const newState = [...prevState]
    // //         //     newState.slice(5, -1)                  

    // //         //     console.log(newState);

    // //         //     return newState
    // //         // })

    // //         fifthElement.style.border = "solid 2px blue"

    // //     }

    // }
  });
  const products = productList.map((product, index) => {
    // console.log(product);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_product_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: product.featuredImage.node.gatsbyImage,
      title: product.title,
      slug: product.slug,
      index: index,
      size: 15
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-[100vh] w-full relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-full h-full grid grid-flow-col auto-cols-max items-center gap-3 overflow-x-hidden overflow-y-none whitespace-nowrap flex-nowrap",
    id: "product-slider"
  }, products));
}

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1657282446_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1657282446.json */ "./public/page-data/sq/d/1657282446.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.jsx");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/slider */ "./src/components/slider.jsx");
/* harmony import */ var _info_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../info.json */ "./src/info.json");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.jsx");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form */ "./src/components/form.jsx");









function IndexPage() {
  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [currentNumber, setCurrentNumber] = react__WEBPACK_IMPORTED_MODULE_1__.useState(1);
  const data = _public_page_data_sq_d_1657282446_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const productsList = data.wpCategory.posts.nodes;
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    // const hero = document.getElementById('hero-video')

    let movement = 1;
    function moveHero() {

      // e.preventDefault()

      // console.log(e);

      // // movement += e.pageY * 0.01

      // // if(e.deltaY < 0){

      // //   hero.style.transform = `translate(0px, ${movement}px)`
      // // }else{
      // //   hero.style.transform = `translate(0px, -${movement}px)`

      // // }
      // console.log(movement);
    }
    let boolWheel = false;
    document.addEventListener('wheel', () => {
      if (boolWheel === false) {
        // animate(hero, {transform: ['translate(0px, 0px)', 'translate(0px, -100vh)'], opacity: [100, 100]}, {duration: 2}, {type: 'spring'})
        boolWheel = true;
      }
    });
    function handleswipe(isUpSwipe) {
      if (isUpSwipe && boolWheel === false) {
        // animate(hero, {transform: ['translate(0px, 0px)', 'translate(0px, -100vh)'], opacity: [100, 100]}, {duration: 1.5}, {type: 'spring'})
        boolWheel = true;
      } else {
        console.log("NO ANIAMTING");
      }
    }
    var startX,
      startY,
      dist,
      threshold = 150,
      //required min distance traveled to be considered swipe
      allowedTime = 200,
      // maximum time allowed to travel that distance
      elapsedTime,
      startTime;
    document.addEventListener('touchstart', function (e) {
      var touchobj = e.changedTouches[0];
      dist = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime(); // record time when finger first makes contact with surface
      e.preventDefault();
    }, false);
    document.addEventListener('touchmove', function (e) {
      e.preventDefault(); // prevent scrolling when inside DIV
    }, false);
    document.addEventListener('touchend', function (e) {
      var touchobj = e.changedTouches[0];
      dist = touchobj.pageY - startY; // get total dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime; // get time elapsed
      // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
      var swipeerUpBool = elapsedTime <= allowedTime && dist < threshold && Math.abs(touchobj.pageX - startX) <= 100;
      handleswipe(swipeerUpBool);
      e.preventDefault();
    }, false);

    // document.removeEventListener('wheel', moveHero(hero))

    // transform: ["none", "translateY(-100%)"],
    // scroll(
    //   // animate(hero, { opacity: [100, 0]}, {duration: 1})
    // )
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", {
    className: "flex flex-col relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    visible: visible,
    setVisible: setVisible
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productsList: productsList
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    number: currentNumber,
    setVisible: setVisible,
    collection: "Red Roses Collection"
  }));
}

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1219311970.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1219311970.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/d5040/icon-alter.png","srcSet":"/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/f1c6c/icon-alter.png 27w,\\n/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/80d5c/icon-alter.png 54w,\\n/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/d5040/icon-alter.png 108w","sizes":"(min-width: 108px) 108px, 100vw"},"sources":[{"srcSet":"/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/391be/icon-alter.webp 27w,\\n/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/284f9/icon-alter.webp 54w,\\n/static/9a4fdb8ddcb2cdb6d5ec8d837c18ab1b/4a845/icon-alter.webp 108w","type":"image/webp","sizes":"(min-width: 108px) 108px, 100vw"}]},"width":108,"height":109}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/287278811.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/287278811.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/37c34565eee31294c1925730acd3962f/484a7/icon-royal-flowers.png","srcSet":"/static/37c34565eee31294c1925730acd3962f/8171b/icon-royal-flowers.png 13w,\\n/static/37c34565eee31294c1925730acd3962f/50704/icon-royal-flowers.png 26w,\\n/static/37c34565eee31294c1925730acd3962f/484a7/icon-royal-flowers.png 52w","sizes":"(min-width: 52px) 52px, 100vw"},"sources":[{"srcSet":"/static/37c34565eee31294c1925730acd3962f/74a40/icon-royal-flowers.webp 13w,\\n/static/37c34565eee31294c1925730acd3962f/0d336/icon-royal-flowers.webp 26w,\\n/static/37c34565eee31294c1925730acd3962f/6a337/icon-royal-flowers.webp 52w","type":"image/webp","sizes":"(min-width: 52px) 52px, 100vw"}]},"width":52,"height":55}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3850885250.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3850885250.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/c6a2525c548497900abc3c32b3143498/07f14/logo-royal-flower.png","srcSet":"/static/c6a2525c548497900abc3c32b3143498/6856d/logo-royal-flower.png 89w,\\n/static/c6a2525c548497900abc3c32b3143498/61254/logo-royal-flower.png 178w,\\n/static/c6a2525c548497900abc3c32b3143498/07f14/logo-royal-flower.png 355w","sizes":"(min-width: 355px) 355px, 100vw"},"sources":[{"srcSet":"/static/c6a2525c548497900abc3c32b3143498/4b9db/logo-royal-flower.webp 89w,\\n/static/c6a2525c548497900abc3c32b3143498/94d16/logo-royal-flower.webp 178w,\\n/static/c6a2525c548497900abc3c32b3143498/21b05/logo-royal-flower.webp 355w","type":"image/webp","sizes":"(min-width: 355px) 355px, 100vw"}]},"width":355,"height":55}');

/***/ }),

/***/ "./public/page-data/sq/d/1657282446.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1657282446.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"wpPage":{"homepage":{"videoYoutubeLink":{"url":"http://royal-flowers-wp.local/app/uploads/2024/03/home-page-hero-video.mp4"}}},"wpCategory":{"slug":"home-category","name":"Homepage","posts":{"nodes":[{"slug":"gr-hearts","title":"GR Hearts","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/2b081cf24362f932a8a1bd45fd212b01/Rectangle-8.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 175w,/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/f3bfae469d18f3f03501cff1a5056911/Rectangle-8.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 350w,/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/6aeb31e077504b546778cc3207f1cf31/Rectangle-8.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/32d66f59dc30e10ce5f818181a7d8cc4/Rectangle-8.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 175w,/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/80a0e463aa80a2f0c336369896a8f234/Rectangle-8.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 350w,/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/7576c589fb84265e725cae8da489ff47/Rectangle-8.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-8.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672","srcSet":"/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-8.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 175w,/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/7d499f176ccfe4af03a5640890f4fd24/Rectangle-8.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D350%26h%3D550%26fm%3Djpg%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 350w,/_gatsby/image/cfa928d5455e1d4d63b687917c168c8f/2e9c58c194982ec38a701898e04c5e5a/Rectangle-8.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-8.jpg&a=w%3D700%26h%3D1100%26fm%3Djpg%26q%3D75&cd=d06c3d9db8f4480938d41e1f7c56e672 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"candy-xpression","title":"Candy Xpression","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/2b081cf24362f932a8a1bd45fd212b01/Rectangle-10.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 175w,/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/f3bfae469d18f3f03501cff1a5056911/Rectangle-10.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 350w,/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/6aeb31e077504b546778cc3207f1cf31/Rectangle-10.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/32d66f59dc30e10ce5f818181a7d8cc4/Rectangle-10.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 175w,/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/80a0e463aa80a2f0c336369896a8f234/Rectangle-10.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 350w,/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/7576c589fb84265e725cae8da489ff47/Rectangle-10.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-10.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8","srcSet":"/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-10.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 175w,/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/7d499f176ccfe4af03a5640890f4fd24/Rectangle-10.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D350%26h%3D550%26fm%3Djpg%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 350w,/_gatsby/image/5ce878b54b29a2c9d4ed66ddbb22928b/2e9c58c194982ec38a701898e04c5e5a/Rectangle-10.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-10.jpg&a=w%3D700%26h%3D1100%26fm%3Djpg%26q%3D75&cd=520d12e1d9dbb43a846ac4d9449f34f8 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"breathless","title":"Breathless","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/82dc4211bb0d1201af288473ce038462/2b081cf24362f932a8a1bd45fd212b01/Rectangle-6.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 175w,/_gatsby/image/82dc4211bb0d1201af288473ce038462/f3bfae469d18f3f03501cff1a5056911/Rectangle-6.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 350w,/_gatsby/image/82dc4211bb0d1201af288473ce038462/6aeb31e077504b546778cc3207f1cf31/Rectangle-6.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/82dc4211bb0d1201af288473ce038462/32d66f59dc30e10ce5f818181a7d8cc4/Rectangle-6.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 175w,/_gatsby/image/82dc4211bb0d1201af288473ce038462/80a0e463aa80a2f0c336369896a8f234/Rectangle-6.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 350w,/_gatsby/image/82dc4211bb0d1201af288473ce038462/7576c589fb84265e725cae8da489ff47/Rectangle-6.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/82dc4211bb0d1201af288473ce038462/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-6.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3","srcSet":"/_gatsby/image/82dc4211bb0d1201af288473ce038462/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-6.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 175w,/_gatsby/image/82dc4211bb0d1201af288473ce038462/7d499f176ccfe4af03a5640890f4fd24/Rectangle-6.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D350%26h%3D550%26fm%3Djpg%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 350w,/_gatsby/image/82dc4211bb0d1201af288473ce038462/2e9c58c194982ec38a701898e04c5e5a/Rectangle-6.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-6.jpg&a=w%3D700%26h%3D1100%26fm%3Djpg%26q%3D75&cd=cef48a2129be44100d8d64c3a7df89e3 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"be-sweet","title":"Be Sweet","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/65d279aaf30550db2c471710130425ff/2b081cf24362f932a8a1bd45fd212b01/Rectangle-9.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 175w,/_gatsby/image/65d279aaf30550db2c471710130425ff/f3bfae469d18f3f03501cff1a5056911/Rectangle-9.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 350w,/_gatsby/image/65d279aaf30550db2c471710130425ff/6aeb31e077504b546778cc3207f1cf31/Rectangle-9.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/65d279aaf30550db2c471710130425ff/32d66f59dc30e10ce5f818181a7d8cc4/Rectangle-9.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 175w,/_gatsby/image/65d279aaf30550db2c471710130425ff/80a0e463aa80a2f0c336369896a8f234/Rectangle-9.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 350w,/_gatsby/image/65d279aaf30550db2c471710130425ff/7576c589fb84265e725cae8da489ff47/Rectangle-9.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/65d279aaf30550db2c471710130425ff/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-9.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1","srcSet":"/_gatsby/image/65d279aaf30550db2c471710130425ff/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-9.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 175w,/_gatsby/image/65d279aaf30550db2c471710130425ff/7d499f176ccfe4af03a5640890f4fd24/Rectangle-9.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D350%26h%3D550%26fm%3Djpg%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 350w,/_gatsby/image/65d279aaf30550db2c471710130425ff/2e9c58c194982ec38a701898e04c5e5a/Rectangle-9.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-9.jpg&a=w%3D700%26h%3D1100%26fm%3Djpg%26q%3D75&cd=78a9eeca556b35b95b1b25030f4575b1 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"fire-king-follies","title":"Fire King Follies","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/2b081cf24362f932a8a1bd45fd212b01/Rectangle-7.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 175w,/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/f3bfae469d18f3f03501cff1a5056911/Rectangle-7.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 350w,/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/6aeb31e077504b546778cc3207f1cf31/Rectangle-7.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/32d66f59dc30e10ce5f818181a7d8cc4/Rectangle-7.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 175w,/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/80a0e463aa80a2f0c336369896a8f234/Rectangle-7.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 350w,/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/7576c589fb84265e725cae8da489ff47/Rectangle-7.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-7.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc","srcSet":"/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-7.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 175w,/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/7d499f176ccfe4af03a5640890f4fd24/Rectangle-7.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D350%26h%3D550%26fm%3Djpg%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 350w,/_gatsby/image/4f87c8c34e004e36fb5ce453841af55c/2e9c58c194982ec38a701898e04c5e5a/Rectangle-7.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-7.jpg&a=w%3D700%26h%3D1100%26fm%3Djpg%26q%3D75&cd=d5b2e03cd78501c52153cab96f74bffc 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"constellation","title":"Constellation","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/2b081cf24362f932a8a1bd45fd212b01/Rectangle-12.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 175w,/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/f3bfae469d18f3f03501cff1a5056911/Rectangle-12.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 350w,/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/6aeb31e077504b546778cc3207f1cf31/Rectangle-12.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/32d66f59dc30e10ce5f818181a7d8cc4/Rectangle-12.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 175w,/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/80a0e463aa80a2f0c336369896a8f234/Rectangle-12.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 350w,/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/7576c589fb84265e725cae8da489ff47/Rectangle-12.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-12.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0","srcSet":"/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/2bc2bdf33b1f9110cf49a197261bd5ff/Rectangle-12.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D175%26h%3D275%26fm%3Djpg%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 175w,/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/7d499f176ccfe4af03a5640890f4fd24/Rectangle-12.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D350%26h%3D550%26fm%3Djpg%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 350w,/_gatsby/image/a3c7e5d189e6036bee80bcc9a64176af/2e9c58c194982ec38a701898e04c5e5a/Rectangle-12.jpg?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FRectangle-12.jpg&a=w%3D700%26h%3D1100%26fm%3Djpg%26q%3D75&cd=0fe91cccb5b9ea0989e5c4d397b55cf0 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"explorer","title":"Explorer","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/2b081cf24362f932a8a1bd45fd212b01/black-magic-1.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 175w,/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/f3bfae469d18f3f03501cff1a5056911/black-magic-1.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 350w,/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/6aeb31e077504b546778cc3207f1cf31/black-magic-1.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/32d66f59dc30e10ce5f818181a7d8cc4/black-magic-1.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 175w,/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/80a0e463aa80a2f0c336369896a8f234/black-magic-1.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 350w,/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/7576c589fb84265e725cae8da489ff47/black-magic-1.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/19541de21218c54bf78e79ba8017a40f/black-magic-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D175%26h%3D275%26fm%3Dpng%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119","srcSet":"/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/19541de21218c54bf78e79ba8017a40f/black-magic-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D175%26h%3D275%26fm%3Dpng%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 175w,/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/054e39e6409930558d60ed56bdad1c08/black-magic-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D350%26h%3D550%26fm%3Dpng%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 350w,/_gatsby/image/b979734e9b03d8a5ad59c619e833adcf/138a89c37e5fd923fee6275af6235671/black-magic-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2Fblack-magic-1.png&a=w%3D700%26h%3D1100%26fm%3Dpng%26q%3D75&cd=c0245f9ea03edf4d8e772294c5714119 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}},{"slug":"freedom","title":"Freedom","featuredImage":{"node":{"gatsbyImage":{"images":{"sources":[{"srcSet":"/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/2b081cf24362f932a8a1bd45fd212b01/FREEDOM-1.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D175%26h%3D275%26fm%3Davif%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 175w,/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/f3bfae469d18f3f03501cff1a5056911/FREEDOM-1.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D350%26h%3D550%26fm%3Davif%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 350w,/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/6aeb31e077504b546778cc3207f1cf31/FREEDOM-1.avif?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D700%26h%3D1100%26fm%3Davif%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 700w","type":"image/avif","sizes":"(min-width: 700px) 700px, 100vw"},{"srcSet":"/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/32d66f59dc30e10ce5f818181a7d8cc4/FREEDOM-1.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D175%26h%3D275%26fm%3Dwebp%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 175w,/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/80a0e463aa80a2f0c336369896a8f234/FREEDOM-1.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D350%26h%3D550%26fm%3Dwebp%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 350w,/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/7576c589fb84265e725cae8da489ff47/FREEDOM-1.webp?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D700%26h%3D1100%26fm%3Dwebp%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 700w","type":"image/webp","sizes":"(min-width: 700px) 700px, 100vw"}],"fallback":{"src":"/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/19541de21218c54bf78e79ba8017a40f/FREEDOM-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D175%26h%3D275%26fm%3Dpng%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133","srcSet":"/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/19541de21218c54bf78e79ba8017a40f/FREEDOM-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D175%26h%3D275%26fm%3Dpng%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 175w,/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/054e39e6409930558d60ed56bdad1c08/FREEDOM-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D350%26h%3D550%26fm%3Dpng%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 350w,/_gatsby/image/d9b918c1c7bbc385ac96c96032d48ce9/138a89c37e5fd923fee6275af6235671/FREEDOM-1.png?u=http%3A%2F%2Froyal-flowers-wp.local%2Fapp%2Fuploads%2F2024%2F03%2FFREEDOM-1.png&a=w%3D700%26h%3D1100%26fm%3Dpng%26q%3D75&cd=c16218be03ada91abd6fdb3e67fbd133 700w","sizes":"(min-width: 700px) 700px, 100vw"}},"layout":"constrained","width":700,"height":1100,"backgroundColor":"rgb(248,248,248)"}}}}]}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/1709990342.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1709990342.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"data":{"wpMenu":{"name":"Categories Menu","menuItems":{"nodes":[{"key":"cG9zdDoxMjA=","label":"Roses","path":"/category/roses/","uri":"/category/roses/","parentId":null,"children":[]},{"key":"cG9zdDoxMjE=","label":"Color","path":"/category/roses/roses-color/","uri":"/category/roses/roses-color/","parentId":"cG9zdDoxMjA=","children":[]},{"key":"cG9zdDoxMjI=","label":"Pink","path":"/category/roses/roses-color/roses-color-pink/","uri":"/category/roses/roses-color/roses-color-pink/","parentId":"cG9zdDoxMjE=","children":[]},{"key":"cG9zdDoxNDU=","label":"Red","path":"/category/roses/roses-color/roses-color-red/","uri":"/category/roses/roses-color/roses-color-red/","parentId":"cG9zdDoxMjE=","children":[]},{"key":"cG9zdDoxMjQ=","label":"Spray Roses","path":"/category/spray-roses/","uri":"/category/spray-roses/","parentId":null,"children":[]},{"key":"cG9zdDoxMjU=","label":"Color","path":"/category/spray-roses/spray-color/","uri":"/category/spray-roses/spray-color/","parentId":"cG9zdDoxMjQ=","children":[]},{"key":"cG9zdDoxMjY=","label":"Pink","path":"/category/spray-roses/spray-color-pink/","uri":"/category/spray-roses/spray-color-pink/","parentId":"cG9zdDoxMjU=","children":[]},{"key":"cG9zdDoxMjc=","label":"Red","path":"/category/spray-roses/spray-color-red/","uri":"/category/spray-roses/spray-color-red/","parentId":"cG9zdDoxMjU=","children":[]},{"key":"cG9zdDoxMjg=","label":"Garden Roses","path":"/category/garden-roses/","uri":"/category/garden-roses/","parentId":null,"children":[]},{"key":"cG9zdDoxMjk=","label":"Color","path":"/category/garden-roses/garden-color/","uri":"/category/garden-roses/garden-color/","parentId":"cG9zdDoxMjg=","children":[]},{"key":"cG9zdDoxMzA=","label":"Pink","path":"/category/garden-roses/garden-color/garden-color-pink/","uri":"/category/garden-roses/garden-color/garden-color-pink/","parentId":"cG9zdDoxMjk=","children":[]},{"key":"cG9zdDoxMzE=","label":"Red","path":"/category/garden-roses/garden-color/garden-color-red/","uri":"/category/garden-roses/garden-color/garden-color-red/","parentId":"cG9zdDoxMjk=","children":[]}]}}}}');

/***/ }),

/***/ "./src/info.json":
/*!***********************!*\
  !*** ./src/info.json ***!
  \***********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"header":{"menuLeft":[{"value":"Roses","url":""},{"value":"Garden Roses","url":""},{"value":"Spray Roses","url":""},{"value":"Summer Flowers","url":""}],"menuRight":[{"value":"About","url":""},{"value":"Blog","url":""},{"value":"Contact","url":""}],"searchBar":{"text":"What are you looking for?"},"categories":[{"name":"Roses","url":"#","subcategories":[{"name":"Spring Collection","url":"#"},{"name":"Summer Collection","url":"#"},{"name":"Mother\'s Day Collection","url":"#"}]},{"name":"Color","url":"#","subcategories":[{"name":"Red","url":"#"},{"name":"Yellow","url":"#"},{"name":"Orange","url":"#"},{"name":"Cream","url":"#"}]},{"name":"New Varieties","url":"#","subcategories":[{"name":"Spring Collection","url":"#"}]}],"relatedCategories":[{"name":"Spring Collection","url":"#"},{"name":"Mother\'s Day Collection","url":"#"},{"name":"Wedding","url":"#"},{"name":"4th of July","url":"#"},{"name":"Yum Kippur","url":"#"}]},"hero":{"text":"Discover our collection"},"slider":{"quantity":5,"products":[{"url":"#","image":"/static/black-magic-1.png","title":"Black Magic"},{"url":"#","image":"/static/CHERRY-LOVE-1.png","title":"Cherry Love"},{"url":"#","image":"/static/EXPLORER-1.png","title":"Explorer"},{"url":"#","image":"/static/FREEDOM-1.png","title":"Freedom"},{"url":"#","image":"/static/RED-PANTHER-1.png","title":"Red Panther"}]},"productPage":{"images":["/static/BLACK_MAGIC-4.png","/static/BLACK_MAGIC-2.png","/static/BLACK_MAGIC-3.png"],"title":"Black Magic","description":"A bewitching floral enchantment that commands attention with its deep, velvety allure. Each petal is a dark symphony, an exquisite play of shades ranging from velvety burgundy to rich, almost black tones. This captivating rose exudes an air of mystery and sophistication, making it a symbol of timeless elegance and dramatic beauty.","features":[{"field":"Color","value":"red"},{"field":"Head Size","value":"7 cm"},{"field":"Length","value":"50cm - 80cm"},{"field":"Vase Life","value":"15 Days"}]},"form":{"inputs":[{"placeholder":"Name"},{"placeholder":"Email"},{"placeholder":"Phone N."},{"placeholder":"Country, City"},{"placeholder":"Quantity Required"}]}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map