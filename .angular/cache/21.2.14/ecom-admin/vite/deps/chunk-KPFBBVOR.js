import {
  APP_ID,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JK5KEQPO.js";

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${counters[prefix]++}`;
  }
  static ɵfac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  _IdGenerator
};
//# sourceMappingURL=chunk-KPFBBVOR.js.map
