import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JK5KEQPO.js";

// node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static ɵfac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  UniqueSelectionDispatcher
};
//# sourceMappingURL=chunk-N7KLAD4Q.js.map
