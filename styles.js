(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Core CSS required for Ionic components to work properly */\nhtml.ios{--ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}\nhtml.md{--ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif}\nhtml{--ion-font-family: var(--ion-default-font)}\nbody{background:var(--ion-background-color)}\nbody.backdrop-no-scroll{overflow:hidden}\n.ion-color-primary{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}\n.ion-color-secondary{--ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;--ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important}\n.ion-color-tertiary{--ion-color-base: var(--ion-color-tertiary, #7044ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important}\n.ion-color-success{--ion-color-base: var(--ion-color-success, #10dc60) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;--ion-color-tint: var(--ion-color-success-tint, #28e070) !important}\n.ion-color-warning{--ion-color-base: var(--ion-color-warning, #ffce00) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important}\n.ion-color-danger{--ion-color-base: var(--ion-color-danger, #f04141) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;--ion-color-tint: var(--ion-color-danger-tint, #f25454) !important}\n.ion-color-light{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}\n.ion-color-medium{--ion-color-base: var(--ion-color-medium, #989aa2) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;--ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important}\n.ion-color-dark{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}\n.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}\nion-route,ion-route-redirect,ion-router,ion-select-option,ion-nav-controller,ion-menu-controller,ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-modal-controller,ion-picker-controller,ion-popover-controller,ion-toast-controller,.ion-page-hidden,[hidden]{display:none !important}\n.ion-page-invisible{opacity:0}\nhtml.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding: 20px}\n@supports (padding-top: 20px){html{--ion-safe-area-top: var(--ion-statusbar-padding)}}\n@supports (padding-top: constant(safe-area-inset-top)){html{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}\n@supports (padding-top: env(safe-area-inset-top)){html{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}\n/* Basic CSS for apps built with Ionic */\naudio,canvas,progress,video{vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\nb,strong{font-weight:bold}\nimg{max-width:100%;border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{height:1px;border-width:0;box-sizing:content-box}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\nlabel,input,select,textarea{font-family:inherit;line-height:normal}\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\ntextarea::-webkit-input-placeholder{padding-left:2px}\ntextarea:-ms-input-placeholder{padding-left:2px}\ntextarea::-ms-input-placeholder{padding-left:2px}\ntextarea::placeholder{padding-left:2px}\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\nhtml input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}\na,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}\na ion-label,button ion-label{pointer-events:none}\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n[tappable]{cursor:pointer}\na[disabled],button[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\ninput[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\nhtml{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\nhtml.plt-pwa{height:100vh}\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}\nhtml{font-family:var(--ion-font-family)}\na{background-color:transparent;color:var(--ion-color-primary, #3880ff)}\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\nh1{margin-top:20px;font-size:26px}\nh2{margin-top:18px;font-size:24px}\nh3{font-size:22px}\nh4{font-size:20px}\nh5{font-size:18px}\nh6{font-size:16px}\nsmall{font-size:75%}\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding,[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\n.ion-padding,[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-top,[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}\n.ion-padding-start,[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}}\n.ion-padding-end,[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-padding-bottom,[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-vertical,[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n.ion-padding-horizontal,[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n.ion-no-margin,[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}\n.ion-margin,[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-top,[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}\n.ion-margin-start,[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}}\n.ion-margin-end,[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n.ion-margin-bottom,[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-vertical,[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n.ion-margin-horizontal,[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n[float-left]{float:left !important}\n[float-right]{float:right !important}\n[float-start]{float:left !important}\n:host-context([dir=rtl]) [float-start]{float:right !important}\n[float-end]{float:right !important}\n:host-context([dir=rtl]) [float-end]{float:left !important}\n@media (min-width: 576px){[float-sm-left]{float:left !important}[float-sm-right]{float:right !important}[float-sm-start]{float:left !important}:host-context([dir=rtl]) [float-sm-start]{float:right !important}[float-sm-end]{float:right !important}:host-context([dir=rtl]) [float-sm-end]{float:left !important}}\n@media (min-width: 768px){[float-md-left]{float:left !important}[float-md-right]{float:right !important}[float-md-start]{float:left !important}:host-context([dir=rtl]) [float-md-start]{float:right !important}[float-md-end]{float:right !important}:host-context([dir=rtl]) [float-md-end]{float:left !important}}\n@media (min-width: 992px){[float-lg-left]{float:left !important}[float-lg-right]{float:right !important}[float-lg-start]{float:left !important}:host-context([dir=rtl]) [float-lg-start]{float:right !important}[float-lg-end]{float:right !important}:host-context([dir=rtl]) [float-lg-end]{float:left !important}}\n@media (min-width: 1200px){[float-xl-left]{float:left !important}[float-xl-right]{float:right !important}[float-xl-start]{float:left !important}:host-context([dir=rtl]) [float-xl-start]{float:right !important}[float-xl-end]{float:right !important}:host-context([dir=rtl]) [float-xl-end]{float:left !important}}\n.ion-text-center,[text-center]{text-align:center !important}\n.ion-text-justify,[text-justify]{text-align:justify !important}\n.ion-text-start,[text-start]{text-align:start !important}\n.ion-text-end,[text-end]{text-align:end !important}\n.ion-text-left,[text-left]{text-align:left !important}\n.ion-text-right,[text-right]{text-align:right !important}\n.ion-text-nowrap,[text-nowrap]{white-space:nowrap !important}\n.ion-text-wrap,[text-wrap]{white-space:normal !important}\n@media (min-width: 576px){.ion-text-sm-center,[text-sm-center]{text-align:center !important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify !important}.ion-text-sm-start,[text-sm-start]{text-align:start !important}.ion-text-sm-end,[text-sm-end]{text-align:end !important}.ion-text-sm-left,[text-sm-left]{text-align:left !important}.ion-text-sm-right,[text-sm-right]{text-align:right !important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap !important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal !important}}\n@media (min-width: 768px){.ion-text-md-center,[text-md-center]{text-align:center !important}.ion-text-md-justify,[text-md-justify]{text-align:justify !important}.ion-text-md-start,[text-md-start]{text-align:start !important}.ion-text-md-end,[text-md-end]{text-align:end !important}.ion-text-md-left,[text-md-left]{text-align:left !important}.ion-text-md-right,[text-md-right]{text-align:right !important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap !important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal !important}}\n@media (min-width: 992px){.ion-text-lg-center,[text-lg-center]{text-align:center !important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify !important}.ion-text-lg-start,[text-lg-start]{text-align:start !important}.ion-text-lg-end,[text-lg-end]{text-align:end !important}.ion-text-lg-left,[text-lg-left]{text-align:left !important}.ion-text-lg-right,[text-lg-right]{text-align:right !important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap !important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal !important}}\n@media (min-width: 1200px){.ion-text-xl-center,[text-xl-center]{text-align:center !important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify !important}.ion-text-xl-start,[text-xl-start]{text-align:start !important}.ion-text-xl-end,[text-xl-end]{text-align:end !important}.ion-text-xl-left,[text-xl-left]{text-align:left !important}.ion-text-xl-right,[text-xl-right]{text-align:right !important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap !important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal !important}}\n.ion-text-uppercase,[text-uppercase]{text-transform:uppercase !important}\n.ion-text-lowercase,[text-lowercase]{text-transform:lowercase !important}\n.ion-text-capitalize,[text-capitalize]{text-transform:capitalize !important}\n@media (min-width: 576px){.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase !important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase !important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 768px){.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase !important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase !important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 992px){.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase !important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase !important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize !important}}\n@media (min-width: 1200px){.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase !important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase !important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize !important}}\n[align-self-start]{align-self:flex-start !important}\n[align-self-end]{align-self:flex-end !important}\n[align-self-center]{align-self:center !important}\n[align-self-stretch]{align-self:stretch !important}\n[align-self-baseline]{align-self:baseline !important}\n[align-self-auto]{align-self:auto !important}\n[wrap]{flex-wrap:wrap !important}\n[nowrap]{flex-wrap:nowrap !important}\n[wrap-reverse]{flex-wrap:wrap-reverse !important}\n[justify-content-start]{justify-content:flex-start !important}\n[justify-content-center]{justify-content:center !important}\n[justify-content-end]{justify-content:flex-end !important}\n[justify-content-around]{justify-content:space-around !important}\n[justify-content-between]{justify-content:space-between !important}\n[justify-content-evenly]{justify-content:space-evenly !important}\n[align-items-start]{align-items:flex-start !important}\n[align-items-center]{align-items:center !important}\n[align-items-end]{align-items:flex-end !important}\n[align-items-stretch]{align-items:stretch !important}\n[align-items-baseline]{align-items:baseline !important}\n* {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3gvc3JjL2dsb2JhbC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLDZEQUE2RDtBQ1A3RCxTQUFTLDZGQUE2RixDQUFDO0FBQUEsUUFBUSwwREFBMEQsQ0FBQztBQUFBLEtBQUssMENBQTBDLENBQUM7QUFBQSxLQUFLLHNDQUFzQyxDQUFDO0FBQUEsd0JBQXdCLGVBQWUsQ0FBQztBQUFBLG1CQUFtQiwrREFBK0QsMEVBQTBFLHlFQUF5RSx3RkFBd0Ysc0VBQXNFLG1FQUFtRSxDQUFDO0FBQUEscUJBQXFCLGlFQUFpRSw0RUFBNEUsMkVBQTJFLDBGQUEwRix3RUFBd0UscUVBQXFFLENBQUM7QUFBQSxvQkFBb0IsZ0VBQWdFLDJFQUEyRSwwRUFBMEUseUZBQXlGLHVFQUF1RSxvRUFBb0UsQ0FBQztBQUFBLG1CQUFtQiwrREFBK0QseUVBQXlFLHlFQUF5RSx3RkFBd0Ysc0VBQXNFLG1FQUFtRSxDQUFDO0FBQUEsbUJBQW1CLCtEQUErRCx5RUFBeUUseUVBQXlFLHdGQUF3RixzRUFBc0UsbUVBQW1FLENBQUM7QUFBQSxrQkFBa0IsOERBQThELHdFQUF3RSx3RUFBd0UsdUZBQXVGLHFFQUFxRSxrRUFBa0UsQ0FBQztBQUFBLGlCQUFpQiw2REFBNkQseUVBQXlFLHVFQUF1RSxnRkFBZ0Ysb0VBQW9FLGlFQUFpRSxDQUFDO0FBQUEsa0JBQWtCLDhEQUE4RCwwRUFBMEUsd0VBQXdFLHVGQUF1RixxRUFBcUUsa0VBQWtFLENBQUM7QUFBQSxnQkFBZ0IsNERBQTRELHFFQUFxRSxzRUFBc0UscUZBQXFGLG1FQUFtRSxnRUFBZ0UsQ0FBQztBQUFBLFVBQVUsT0FBTyxRQUFRLE1BQU0sU0FBUyxhQUFhLGtCQUFrQixzQkFBc0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsU0FBUyxDQUFDO0FBQUEsMFJBQTBSLHVCQUF1QixDQUFDO0FBQUEsb0JBQW9CLFNBQVMsQ0FBQztBQUFBLDZDQUE2Qyw2QkFBNkIsQ0FBQztBQUFBLDhCQUE4QixLQUFLLGlEQUFpRCxDQUFDLENBQUM7QUFBQSx1REFBdUQsS0FBSyxtREFBbUQseURBQXlELHFEQUFxRCxzREFBc0QsQ0FBQyxDQUFDO0FBQUEsa0RBQWtELEtBQUssOENBQThDLG9EQUFvRCxnREFBZ0QsaURBQWlELENBQUMsQ0FBQztBRFV6N0sseUNBQXlDO0FFVnpDLDRCQUE0Qix1QkFBdUIsQ0FBQztBQUFBLHNCQUFzQixhQUFhLFFBQVEsQ0FBQztBQUFBLFNBQVMsZ0JBQWdCLENBQUM7QUFBQSxJQUFJLGVBQWUsUUFBUSxDQUFDO0FBQUEsZUFBZSxlQUFlLENBQUM7QUFBQSxPQUFPLGVBQWUsQ0FBQztBQUFBLEdBQUcsV0FBVyxlQUFlLHNCQUFzQixDQUFDO0FBQUEsSUFBSSxhQUFhLENBQUM7QUFBQSxrQkFBa0IsaUNBQWlDLGFBQWEsQ0FBQztBQUFBLDRCQUE0QixvQkFBb0Isa0JBQWtCLENBQUM7QUFBQSxTQUFTLGNBQWMsWUFBWSxhQUFhLGFBQWEsQ0FBQztBQUFBLG9DQUFzQixnQkFBZ0IsQ0FBQztBQUF2QywrQkFBc0IsZ0JBQWdCLENBQUM7QUFBdkMsZ0NBQXNCLGdCQUFnQixDQUFDO0FBQXZDLHNCQUFzQixnQkFBZ0IsQ0FBQztBQUFBLDJCQUEyQixTQUFTLGFBQWEsYUFBYSxDQUFDO0FBQUEsbUVBQW1FLGVBQWUseUJBQXlCLENBQUM7QUFBQSxxTkFBcU4seUJBQXlCLENBQUM7QUFBQSw2QkFBNkIsbUJBQW1CLENBQUM7QUFBQSxPQUFPLFNBQVMsZ0JBQWdCLG9CQUFvQixtQkFBbUIscUJBQXFCLGNBQWMsb0JBQW9CLGVBQWUseUJBQXlCLENBQUM7QUFBQSxXQUFXLGNBQWMsQ0FBQztBQUFBLGtEQUFrRCxjQUFjLENBQUM7QUFBQSxpREFBaUQsVUFBVSxRQUFRLENBQUM7QUFBQSwyQ0FBMkMsVUFBVSxxQkFBcUIsQ0FBQztBQUFBLGdHQUFnRyxXQUFXLENBQUM7QUFBQSxtR0FBbUcsdUJBQXVCLENBQUM7QUFBQSxNQUFNLHlCQUF5QixnQkFBZ0IsQ0FBQztBQUFBLE1BQU0sU0FBUyxDQUFDO0FDQTluRCxFQUFFLHNCQUFzQiwwQ0FBMEMsd0NBQXdDLDBCQUEwQixDQUFDO0FBQUEsS0FBSyxXQUFXLFlBQVksOEJBQXFCLEFBQXJCLDJCQUFxQixBQUFyQiwwQkFBcUIsQUFBckIscUJBQXFCLENBQUM7QUFBQSxhQUFhLFlBQVksQ0FBQztBQUFBLEtBQUssa0NBQWtDLG1DQUFtQyxjQUFjLGVBQWUsYUFBYSxnQkFBZ0IsZUFBZSxnQkFBZ0IsY0FBYyxpQkFBaUIsZUFBZSxXQUFXLGVBQWUsWUFBWSxnQkFBZ0Isa0NBQWtDLGdCQUFnQiwwQkFBMEIsdUJBQXVCLHlCQUF5QixxQkFBcUIsMkJBQTJCLDhCQUFxQixBQUFyQiwyQkFBcUIsQUFBckIsMEJBQXFCLEFBQXJCLHFCQUFxQixDQUFDO0FDQTFwQixLQUFLLGtDQUFrQyxDQUFDO0FBQUEsRUFBRSw2QkFBNkIsdUNBQXVDLENBQUM7QUFBQSxrQkFBa0IsZ0JBQWdCLG1CQUFtQixnQkFBZ0IsZUFBZSxDQUFDO0FBQUEsR0FBRyxnQkFBZ0IsY0FBYyxDQUFDO0FBQUEsR0FBRyxnQkFBZ0IsY0FBYyxDQUFDO0FBQUEsR0FBRyxjQUFjLENBQUM7QUFBQSxHQUFHLGNBQWMsQ0FBQztBQUFBLEdBQUcsY0FBYyxDQUFDO0FBQUEsR0FBRyxjQUFjLENBQUM7QUFBQSxNQUFNLGFBQWEsQ0FBQztBQUFBLFFBQVEsa0JBQWtCLGNBQWMsY0FBYyx1QkFBdUIsQ0FBQztBQUFBLElBQUksU0FBUyxDQUFDO0FBQUEsSUFBSSxhQUFhLENBQUM7QUplbGQsa0RBQWtEO0FLZmxELDZCQUE2QixtQkFBbUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsZUFBZSxnQkFBZ0IsY0FBYyxnQkFBZ0IsQ0FBQztBQUFBLHVCQUF1QiwwQ0FBMEMsd0NBQXdDLHdDQUF3QywyQ0FBMkMsc0NBQXNDLHVDQUF1QyxxQ0FBcUMsdUNBQXVDLENBQUM7QUFBQSwrRkFBZ0UsdUJBQXVCLG1CQUFtQixvQkFBb0IsK0NBQStDLDhDQUE4Qyw2Q0FBNkMsMkNBQTJDLENBQUMsQ0FBQztBQUFBLCtCQUErQix3Q0FBd0Msb0NBQW9DLENBQUM7QUFBQSxtQ0FBbUMsMENBQTBDLHFDQUFxQyxDQUFDO0FBQUEsK0ZBQWdFLG1DQUFtQyxtQkFBbUIsK0NBQStDLDZDQUE2QyxDQUFDLENBQUM7QUFBQSwrQkFBK0Isd0NBQXdDLHNDQUFzQyxDQUFDO0FBQUEsK0ZBQWdFLCtCQUErQixvQkFBb0IsNkNBQTZDLDJDQUEyQyxDQUFDLENBQUM7QUFBQSxxQ0FBcUMsMkNBQTJDLHVDQUF1QyxDQUFDO0FBQUEseUNBQXlDLHdDQUF3QywyQ0FBMkMscUNBQXFDLHVDQUF1QyxDQUFDO0FBQUEsNkNBQTZDLDBDQUEwQyx3Q0FBd0Msc0NBQXNDLHNDQUFzQyxDQUFDO0FBQUEsK0ZBQWdFLDZDQUE2QyxtQkFBbUIsb0JBQW9CLCtDQUErQyw4Q0FBOEMsNkNBQTZDLDJDQUEyQyxDQUFDLENBQUM7QUFBQSwyQkFBMkIsa0JBQWtCLGdCQUFnQixnQkFBZ0IsbUJBQW1CLGNBQWMsZUFBZSxhQUFhLGVBQWUsQ0FBQztBQUFBLHFCQUFxQix3Q0FBd0Msc0NBQXNDLHNDQUFzQyx5Q0FBeUMsb0NBQW9DLHFDQUFxQyxtQ0FBbUMscUNBQXFDLENBQUM7QUFBQSwrRkFBZ0UscUJBQXFCLGtCQUFrQixtQkFBbUIsNkNBQTZDLDRDQUE0QywyQ0FBMkMseUNBQXlDLENBQUMsQ0FBQztBQUFBLDZCQUE2QixzQ0FBc0Msa0NBQWtDLENBQUM7QUFBQSxpQ0FBaUMsd0NBQXdDLG1DQUFtQyxDQUFDO0FBQUEsK0ZBQWdFLGlDQUFpQyxrQkFBa0IsNkNBQTZDLDJDQUEyQyxDQUFDLENBQUM7QUFBQSw2QkFBNkIsc0NBQXNDLG9DQUFvQyxDQUFDO0FBQUEsK0ZBQWdFLDZCQUE2QixtQkFBbUIsMkNBQTJDLHlDQUF5QyxDQUFDLENBQUM7QUFBQSxtQ0FBbUMseUNBQXlDLHFDQUFxQyxDQUFDO0FBQUEsdUNBQXVDLHNDQUFzQyx5Q0FBeUMsbUNBQW1DLHFDQUFxQyxDQUFDO0FBQUEsMkNBQTJDLHdDQUF3QyxzQ0FBc0Msb0NBQW9DLG9DQUFvQyxDQUFDO0FBQUEsK0ZBQWdFLDJDQUEyQyxrQkFBa0IsbUJBQW1CLDZDQUE2Qyw0Q0FBNEMsMkNBQTJDLHlDQUF5QyxDQUFDLENBQUM7QUNBNW5KLGFBQWEscUJBQXFCLENBQUM7QUFBQSxjQUFjLHNCQUFzQixDQUFDO0FBQUEsY0FBYyxxQkFBcUIsQ0FBQztBQUFBLHVDQUF1QyxzQkFBc0IsQ0FBQztBQUFBLFlBQVksc0JBQXNCLENBQUM7QUFBQSxxQ0FBcUMscUJBQXFCLENBQUM7QUFBQSwwQkFBMEIsZ0JBQWdCLHFCQUFxQixDQUFDLGlCQUFpQixzQkFBc0IsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMENBQTBDLHNCQUFzQixDQUFDLGVBQWUsc0JBQXNCLENBQUMsd0NBQXdDLHFCQUFxQixDQUFDLENBQUM7QUFBQSwwQkFBMEIsZ0JBQWdCLHFCQUFxQixDQUFDLGlCQUFpQixzQkFBc0IsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMENBQTBDLHNCQUFzQixDQUFDLGVBQWUsc0JBQXNCLENBQUMsd0NBQXdDLHFCQUFxQixDQUFDLENBQUM7QUFBQSwwQkFBMEIsZ0JBQWdCLHFCQUFxQixDQUFDLGlCQUFpQixzQkFBc0IsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMENBQTBDLHNCQUFzQixDQUFDLGVBQWUsc0JBQXNCLENBQUMsd0NBQXdDLHFCQUFxQixDQUFDLENBQUM7QUFBQSwyQkFBMkIsZ0JBQWdCLHFCQUFxQixDQUFDLGlCQUFpQixzQkFBc0IsQ0FBQyxpQkFBaUIscUJBQXFCLENBQUMsMENBQTBDLHNCQUFzQixDQUFDLGVBQWUsc0JBQXNCLENBQUMsd0NBQXdDLHFCQUFxQixDQUFDLENBQUM7QUNBNzlDLCtCQUErQiw0QkFBNEIsQ0FBQztBQUFBLGlDQUFpQyw2QkFBNkIsQ0FBQztBQUFBLDZCQUE2QiwyQkFBMkIsQ0FBQztBQUFBLHlCQUF5Qix5QkFBeUIsQ0FBQztBQUFBLDJCQUEyQiwwQkFBMEIsQ0FBQztBQUFBLDZCQUE2QiwyQkFBMkIsQ0FBQztBQUFBLCtCQUErQiw2QkFBNkIsQ0FBQztBQUFBLDJCQUEyQiw2QkFBNkIsQ0FBQztBQUFBLDBCQUEwQixxQ0FBcUMsNEJBQTRCLENBQUMsdUNBQXVDLDZCQUE2QixDQUFDLG1DQUFtQywyQkFBMkIsQ0FBQywrQkFBK0IseUJBQXlCLENBQUMsaUNBQWlDLDBCQUEwQixDQUFDLG1DQUFtQywyQkFBMkIsQ0FBQyxxQ0FBcUMsNkJBQTZCLENBQUMsaUNBQWlDLDZCQUE2QixDQUFDLENBQUM7QUFBQSwwQkFBMEIscUNBQXFDLDRCQUE0QixDQUFDLHVDQUF1Qyw2QkFBNkIsQ0FBQyxtQ0FBbUMsMkJBQTJCLENBQUMsK0JBQStCLHlCQUF5QixDQUFDLGlDQUFpQywwQkFBMEIsQ0FBQyxtQ0FBbUMsMkJBQTJCLENBQUMscUNBQXFDLDZCQUE2QixDQUFDLGlDQUFpQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQUEsMEJBQTBCLHFDQUFxQyw0QkFBNEIsQ0FBQyx1Q0FBdUMsNkJBQTZCLENBQUMsbUNBQW1DLDJCQUEyQixDQUFDLCtCQUErQix5QkFBeUIsQ0FBQyxpQ0FBaUMsMEJBQTBCLENBQUMsbUNBQW1DLDJCQUEyQixDQUFDLHFDQUFxQyw2QkFBNkIsQ0FBQyxpQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQztBQUFBLDJCQUEyQixxQ0FBcUMsNEJBQTRCLENBQUMsdUNBQXVDLDZCQUE2QixDQUFDLG1DQUFtQywyQkFBMkIsQ0FBQywrQkFBK0IseUJBQXlCLENBQUMsaUNBQWlDLDBCQUEwQixDQUFDLG1DQUFtQywyQkFBMkIsQ0FBQyxxQ0FBcUMsNkJBQTZCLENBQUMsaUNBQWlDLDZCQUE2QixDQUFDLENBQUM7QUNBemlGLHFDQUFxQyxtQ0FBbUMsQ0FBQztBQUFBLHFDQUFxQyxtQ0FBbUMsQ0FBQztBQUFBLHVDQUF1QyxvQ0FBb0MsQ0FBQztBQUFBLDBCQUEwQiwyQ0FBMkMsbUNBQW1DLENBQUMsMkNBQTJDLG1DQUFtQyxDQUFDLDZDQUE2QyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQUEsMEJBQTBCLDJDQUEyQyxtQ0FBbUMsQ0FBQywyQ0FBMkMsbUNBQW1DLENBQUMsNkNBQTZDLG9DQUFvQyxDQUFDLENBQUM7QUFBQSwwQkFBMEIsMkNBQTJDLG1DQUFtQyxDQUFDLDJDQUEyQyxtQ0FBbUMsQ0FBQyw2Q0FBNkMsb0NBQW9DLENBQUMsQ0FBQztBQUFBLDJCQUEyQiwyQ0FBMkMsbUNBQW1DLENBQUMsMkNBQTJDLG1DQUFtQyxDQUFDLDZDQUE2QyxvQ0FBb0MsQ0FBQyxDQUFDO0FDQTN3QyxtQkFBbUIsZ0NBQWdDLENBQUM7QUFBQSxpQkFBaUIsOEJBQThCLENBQUM7QUFBQSxvQkFBb0IsNEJBQTRCLENBQUM7QUFBQSxxQkFBcUIsNkJBQTZCLENBQUM7QUFBQSxzQkFBc0IsOEJBQThCLENBQUM7QUFBQSxrQkFBa0IsMEJBQTBCLENBQUM7QUFBQSxPQUFPLHlCQUF5QixDQUFDO0FBQUEsU0FBUywyQkFBMkIsQ0FBQztBQUFBLGVBQWUsaUNBQWlDLENBQUM7QUFBQSx3QkFBd0IscUNBQXFDLENBQUM7QUFBQSx5QkFBeUIsaUNBQWlDLENBQUM7QUFBQSxzQkFBc0IsbUNBQW1DLENBQUM7QUFBQSx5QkFBeUIsdUNBQXVDLENBQUM7QUFBQSwwQkFBMEIsd0NBQXdDLENBQUM7QUFBQSx5QkFBeUIsdUNBQXVDLENBQUM7QUFBQSxvQkFBb0IsaUNBQWlDLENBQUM7QUFBQSxxQkFBcUIsNkJBQTZCLENBQUM7QUFBQSxrQkFBa0IsK0JBQStCLENBQUM7QUFBQSxzQkFBc0IsOEJBQThCLENBQUM7QUFBQSx1QkFBdUIsK0JBQStCLENBQUM7QVR1QmhpQztFQUVJLDBCQUF5QjtFQUV6Qix1QkFBc0I7RUFFdEIsc0JBQXFCO0VBRXJCLGtCQUFpQixFQUVoQiIsImZpbGUiOiJzcmMvZ2xvYmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHAgR2xvYmFsIENTU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3Jcbi8vIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcbi8vIGFsc28gdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbi8vIG91dHB1dCBDU1MuXG5cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG5cbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjtcblxuXG4qIHtcblxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgXG4gICAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgICBcbiAgICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgXG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgXG4gICAgfVxuIiwiaHRtbC5pb3N7LS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZn1odG1sLm1key0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfWh0bWx7LS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpfWJvZHl7YmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcil9Ym9keS5iYWNrZHJvcC1uby1zY3JvbGx7b3ZlcmZsb3c6aGlkZGVufS5pb24tY29sb3ItcHJpbWFyeXstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwxMjgsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1zZWNvbmRhcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzBjZDFlOCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDEyLDIwOSwyMzIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMwYmI4Y2MpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjMjRkNmVhKSAhaW1wb3J0YW50fS5pb24tY29sb3ItdGVydGlhcnl7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCAjNzA0NGZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCAxMTIsNjgsMjU1KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNjMzY2UwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjN2U1N2ZmKSAhaW1wb3J0YW50fS5pb24tY29sb3Itc3VjY2Vzc3stLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzEwZGM2MCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCAxNiwyMjAsOTYpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMwZWMyNTQpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzI4ZTA3MCkgIWltcG9ydGFudH0uaW9uLWNvbG9yLXdhcm5pbmd7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmNlMDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LDIwNiwwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBiNTAwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmQzMWEpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1kYW5nZXJ7LS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2YwNDE0MSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDI0MCw2NSw2NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2QzMzkzOSkgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNmMjU0NTQpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1saWdodHstLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwyNDUsMjQ4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLDAsMCkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50fS5pb24tY29sb3ItbWVkaXVtey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5ODlhYTIpICFpbXBvcnRhbnQ7LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNTIsMTU0LDE2MikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDstLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzg2ODg4ZikgIWltcG9ydGFudDstLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNhMmE0YWIpICFpbXBvcnRhbnR9Lmlvbi1jb2xvci1kYXJrey0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LDM2LDQwKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDstLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50Oy0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnR9Lmlvbi1wYWdle2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZTtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDowfWlvbi1yb3V0ZSxpb24tcm91dGUtcmVkaXJlY3QsaW9uLXJvdXRlcixpb24tc2VsZWN0LW9wdGlvbixpb24tbmF2LWNvbnRyb2xsZXIsaW9uLW1lbnUtY29udHJvbGxlcixpb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsaW9uLWFsZXJ0LWNvbnRyb2xsZXIsaW9uLWxvYWRpbmctY29udHJvbGxlcixpb24tbW9kYWwtY29udHJvbGxlcixpb24tcGlja2VyLWNvbnRyb2xsZXIsaW9uLXBvcG92ZXItY29udHJvbGxlcixpb24tdG9hc3QtY29udHJvbGxlciwuaW9uLXBhZ2UtaGlkZGVuLFtoaWRkZW5de2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fS5pb24tcGFnZS1pbnZpc2libGV7b3BhY2l0eTowfWh0bWwucGx0LWlvcy5wbHQtaHlicmlkLGh0bWwucGx0LWlvcy5wbHQtcHdhey0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKX19QHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpe2h0bWx7LS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7LS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCl9fUBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSl7aHRtbHstLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7LS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pOy0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpOy0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCl9fVxuIiwiYXVkaW8sY2FudmFzLHByb2dyZXNzLHZpZGVve3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZH1pbWd7bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOjB9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7aGVpZ2h0OjFweDtib3JkZXItd2lkdGg6MDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fXByZXtvdmVyZmxvdzphdXRvfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19bGFiZWwsaW5wdXQsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7bGluZS1oZWlnaHQ6bm9ybWFsfXRleHRhcmVhe292ZXJmbG93OmF1dG87aGVpZ2h0OmF1dG87Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9dGV4dGFyZWE6OnBsYWNlaG9sZGVye3BhZGRpbmctbGVmdDoycHh9Zm9ybSxpbnB1dCxvcHRncm91cCxzZWxlY3R7bWFyZ2luOjA7Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9aHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLGlucHV0W3R5cGU9XCJyZXNldFwiXSxpbnB1dFt0eXBlPVwic3VibWl0XCJde2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259YSxhIGRpdixhIHNwYW4sYSBpb24taWNvbixhIGlvbi1sYWJlbCxidXR0b24sYnV0dG9uIGRpdixidXR0b24gc3BhbixidXR0b24gaW9uLWljb24sYnV0dG9uIGlvbi1sYWJlbCwuaW9uLXRhcHBhYmxlLFt0YXBwYWJsZV0sW3RhcHBhYmxlXSBkaXYsW3RhcHBhYmxlXSBzcGFuLFt0YXBwYWJsZV0gaW9uLWljb24sW3RhcHBhYmxlXSBpb24tbGFiZWwsaW5wdXQsdGV4dGFyZWF7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbn1hIGlvbi1sYWJlbCxidXR0b24gaW9uLWxhYmVse3BvaW50ZXItZXZlbnRzOm5vbmV9YnV0dG9ue2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXZhcmlhbnQ6aW5oZXJpdDtsaW5lLWhlaWdodDoxO3RleHQtdHJhbnNmb3JtOm5vbmU7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdGFwcGFibGVde2N1cnNvcjpwb2ludGVyfWFbZGlzYWJsZWRdLGJ1dHRvbltkaXNhYmxlZF0saHRtbCBpbnB1dFtkaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLGlucHV0OjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXI6MH1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0saW5wdXRbdHlwZT1cInJhZGlvXCJde3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfWlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjB9XG4iLCIqe2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmV9aHRtbHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RleHQtc2l6ZS1hZGp1c3Q6MTAwJX1odG1sLnBsdC1wd2F7aGVpZ2h0OjEwMHZofWJvZHl7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXgtaGVpZ2h0OjEwMCU7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5O292ZXJmbG93OmhpZGRlbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uOy13ZWJraXQtdXNlci1kcmFnOm5vbmU7LW1zLWNvbnRlbnQtem9vbWluZzpub25lO3dvcmQtd3JhcDpicmVhay13b3JkO292ZXJzY3JvbGwtYmVoYXZpb3IteTpub25lO3RleHQtc2l6ZS1hZGp1c3Q6bm9uZX1cbiIsImh0bWx7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpfWgxLGgyLGgzLGg0LGg1LGg2e21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjEwcHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuMn1oMXttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOjI2cHh9aDJ7bWFyZ2luLXRvcDoxOHB4O2ZvbnQtc2l6ZToyNHB4fWgze2ZvbnQtc2l6ZToyMnB4fWg0e2ZvbnQtc2l6ZToyMHB4fWg1e2ZvbnQtc2l6ZToxOHB4fWg2e2ZvbnQtc2l6ZToxNnB4fXNtYWxse2ZvbnQtc2l6ZTo3NSV9c3ViLHN1cHtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vwe3RvcDotLjVlbX1zdWJ7Ym90dG9tOi0uMjVlbX1cbiIsIi5pb24tbm8tcGFkZGluZyxbbm8tcGFkZGluZ117LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9Lmlvbi1wYWRkaW5nLFtwYWRkaW5nXXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZyxbcGFkZGluZ117cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLXRvcCxbcGFkZGluZy10b3Bdey0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXN0YXJ0LFtwYWRkaW5nLXN0YXJ0XXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmctc3RhcnQsW3BhZGRpbmctc3RhcnRde3BhZGRpbmctbGVmdDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRdey0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRde3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWJvdHRvbSxbcGFkZGluZy1ib3R0b21dey0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXZlcnRpY2FsLFtwYWRkaW5nLXZlcnRpY2FsXXstLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLWhvcml6b250YWwsW3BhZGRpbmctaG9yaXpvbnRhbF17LS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZy1ob3Jpem9udGFsLFtwYWRkaW5nLWhvcml6b250YWxde3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tbm8tbWFyZ2luLFtuby1tYXJnaW5dey0tbWFyZ2luLXN0YXJ0OiAwOy0tbWFyZ2luLWVuZDogMDstLW1hcmdpbi10b3A6IDA7LS1tYXJnaW4tYm90dG9tOiAwO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uaW9uLW1hcmdpbixbbWFyZ2luXXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4sW21hcmdpbl17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX0uaW9uLW1hcmdpbi10b3AsW21hcmdpbi10b3Bdey0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1zdGFydCxbbWFyZ2luLXN0YXJ0XXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLXN0YXJ0LFttYXJnaW4tc3RhcnRde21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fS5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19Lmlvbi1tYXJnaW4tYm90dG9tLFttYXJnaW4tYm90dG9tXXstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9Lmlvbi1tYXJnaW4tdmVydGljYWwsW21hcmdpbi12ZXJ0aWNhbF17LS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17LS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX1cbiIsIltmbG9hdC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7W2Zsb2F0LXNtLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZmxvYXQtc20tcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LXNtLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zbS1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtc20tZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7W2Zsb2F0LW1kLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZmxvYXQtbWQtcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LW1kLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtbWQtZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7W2Zsb2F0LWxnLWxlZnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH1bZmxvYXQtbGctcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LWxnLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1sZy1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH1bZmxvYXQtbGctZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpe1tmbG9hdC14bC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9W2Zsb2F0LXhsLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fVtmbG9hdC14bC1zdGFydF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQteGwtc3RhcnRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9W2Zsb2F0LXhsLWVuZF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1cbiIsIi5pb24tdGV4dC1jZW50ZXIsW3RleHQtY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1qdXN0aWZ5LFt0ZXh0LWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zdGFydCxbdGV4dC1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1lbmQsW3RleHQtZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZWZ0LFt0ZXh0LWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1yaWdodCxbdGV4dC1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1ub3dyYXAsW3RleHQtbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtd3JhcCxbdGV4dC13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpey5pb24tdGV4dC1zbS1jZW50ZXIsW3RleHQtc20tY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1qdXN0aWZ5LFt0ZXh0LXNtLWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1zdGFydCxbdGV4dC1zbS1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1lbmQsW3RleHQtc20tZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1sZWZ0LFt0ZXh0LXNtLWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1yaWdodCxbdGV4dC1zbS1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1ub3dyYXAsW3RleHQtc20tbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtc20td3JhcCxbdGV4dC1zbS13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtY2VudGVyLFt0ZXh0LW1kLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtanVzdGlmeSxbdGV4dC1tZC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtc3RhcnQsW3RleHQtbWQtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtZW5kLFt0ZXh0LW1kLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbGVmdCxbdGV4dC1tZC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtcmlnaHQsW3RleHQtbWQtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbm93cmFwLFt0ZXh0LW1kLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXdyYXAsW3RleHQtbWQtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi10ZXh0LWxnLWNlbnRlcixbdGV4dC1sZy1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWp1c3RpZnksW3RleHQtbGctanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXN0YXJ0LFt0ZXh0LWxnLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWVuZCxbdGV4dC1sZy1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxlZnQsW3RleHQtbGctbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXJpZ2h0LFt0ZXh0LWxnLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLW5vd3JhcCxbdGV4dC1sZy1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy13cmFwLFt0ZXh0LWxnLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuaW9uLXRleHQteGwtY2VudGVyLFt0ZXh0LXhsLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQteGwtanVzdGlmeSxbdGV4dC14bC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQteGwtc3RhcnQsW3RleHQteGwtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtZW5kLFt0ZXh0LXhsLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbGVmdCxbdGV4dC14bC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtcmlnaHQsW3RleHQteGwtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbm93cmFwLFt0ZXh0LXhsLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXdyYXAsW3RleHQteGwtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSxbdGV4dC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sb3dlcmNhc2UsW3RleHQtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtY2FwaXRhbGl6ZSxbdGV4dC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLXRleHQtc20tdXBwZXJjYXNlLFt0ZXh0LXNtLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXNtLWxvd2VyY2FzZSxbdGV4dC1zbS1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1jYXBpdGFsaXplLFt0ZXh0LXNtLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtdXBwZXJjYXNlLFt0ZXh0LW1kLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWxvd2VyY2FzZSxbdGV4dC1tZC1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC1jYXBpdGFsaXplLFt0ZXh0LW1kLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXsuaW9uLXRleHQtbGctdXBwZXJjYXNlLFt0ZXh0LWxnLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxvd2VyY2FzZSxbdGV4dC1sZy1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1jYXBpdGFsaXplLFt0ZXh0LWxnLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi10ZXh0LXhsLXVwcGVyY2FzZSxbdGV4dC14bC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC14bC1sb3dlcmNhc2UsW3RleHQteGwtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQteGwtY2FwaXRhbGl6ZSxbdGV4dC14bC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fVxuIiwiW2FsaWduLXNlbGYtc3RhcnRde2FsaWduLXNlbGY6ZmxleC1zdGFydCAhaW1wb3J0YW50fVthbGlnbi1zZWxmLWVuZF17YWxpZ24tc2VsZjpmbGV4LWVuZCAhaW1wb3J0YW50fVthbGlnbi1zZWxmLWNlbnRlcl17YWxpZ24tc2VsZjpjZW50ZXIgIWltcG9ydGFudH1bYWxpZ24tc2VsZi1zdHJldGNoXXthbGlnbi1zZWxmOnN0cmV0Y2ggIWltcG9ydGFudH1bYWxpZ24tc2VsZi1iYXNlbGluZV17YWxpZ24tc2VsZjpiYXNlbGluZSAhaW1wb3J0YW50fVthbGlnbi1zZWxmLWF1dG9de2FsaWduLXNlbGY6YXV0byAhaW1wb3J0YW50fVt3cmFwXXtmbGV4LXdyYXA6d3JhcCAhaW1wb3J0YW50fVtub3dyYXBde2ZsZXgtd3JhcDpub3dyYXAgIWltcG9ydGFudH1bd3JhcC1yZXZlcnNlXXtmbGV4LXdyYXA6d3JhcC1yZXZlcnNlICFpbXBvcnRhbnR9W2p1c3RpZnktY29udGVudC1zdGFydF17anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQgIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWNlbnRlcl17anVzdGlmeS1jb250ZW50OmNlbnRlciAhaW1wb3J0YW50fVtqdXN0aWZ5LWNvbnRlbnQtZW5kXXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQgIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWFyb3VuZF17anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZCAhaW1wb3J0YW50fVtqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbl17anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gIWltcG9ydGFudH1banVzdGlmeS1jb250ZW50LWV2ZW5seV17anVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seSAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1zdGFydF17YWxpZ24taXRlbXM6ZmxleC1zdGFydCAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1jZW50ZXJde2FsaWduLWl0ZW1zOmNlbnRlciAhaW1wb3J0YW50fVthbGlnbi1pdGVtcy1lbmRde2FsaWduLWl0ZW1zOmZsZXgtZW5kICFpbXBvcnRhbnR9W2FsaWduLWl0ZW1zLXN0cmV0Y2hde2FsaWduLWl0ZW1zOnN0cmV0Y2ggIWltcG9ydGFudH1bYWxpZ24taXRlbXMtYmFzZWxpbmVde2FsaWduLWl0ZW1zOmJhc2VsaW5lICFpbXBvcnRhbnR9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  --ion-color-primary: #64b3f4 ;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-mycolor: linear-gradient(+55deg,  var(--ion-color-primary) 80% , green 10% );\n  --ion-color-toolbarmycolor: linear-gradient(+55deg,  var(--ion-color-primary)  50% ,  green 50% ); }\n\n.ion-color-favorite {\n  --ion-color-base: #69bb7b;\n  --ion-color-base-rgb: 105, 187, 123;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #5ca56c;\n  --ion-color-tint: #78c288; }\n\n.ion-color-twitter {\n  --ion-color-base: #1da1f4;\n  --ion-color-base-rgb: 29, 161, 244;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #1a8ed7;\n  --ion-color-tint: #34aaf5; }\n\n.ion-color-google {\n  --ion-color-base: #dc4a38;\n  --ion-color-base-rgb: 220, 74, 56;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #c24131;\n  --ion-color-tint: #e05c4c; }\n\n.ion-color-vimeo {\n  --ion-color-base: #23b6ea;\n  --ion-color-base-rgb: 35, 182, 234;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #1fa0ce;\n  --ion-color-tint: #39bdec; }\n\n.ion-color-facebook {\n  --ion-color-base: #3b5998;\n  --ion-color-base-rgb: 59, 89, 152;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #344e86;\n  --ion-color-tint: #4f6aa2; }\n\n:root {\n  --ion-headings-font-weight: 300;\n  --ion-color-angular: #ac282b;\n  --ion-color-communication: #8e8d93;\n  --ion-color-tooling: #fe4c52;\n  --ion-color-services: #fd8b2d;\n  --ion-color-design: #fed035;\n  --ion-color-workshop: #69bb7b;\n  --ion-color-food: #3bc7c4;\n  --ion-color-documentation: #b16be3;\n  --ion-color-navigation: #6600cc; }\n\n.md {\n  --ion-toolbar-background: var(--ion-color-toolbarmycolor) ;\n  --ion-toolbar-color: #fff;\n  --ion-toolbar-color-activated: #fff;\n  --ion-toolbar-color-unchecked: rgba(255, 255, 255, .6);\n  --ion-toolbar-color-checked: #fff; }\n\n.md ion-menu ion-content {\n    --ion-background-color: var(--ion-color-mycolor) ;\n    background-size: cover;\n    font-size: 1.8rem; }\n\n.md ion-menu ion-content div.scroll-content {\n      color: white; }\n\n.md ion-menu ion-content div.scroll-content ion-list .item {\n        color: white;\n        background: transparent; }\n\n.md ion-menu .bar-buttons, .md ion-menu .toolbar-title {\n    color: white; }\n\n.toolbar-background {\n  --ion-toolbar-background: var(--ion-color-toolbarmycolor) ; }\n\n@media (min-width: 450px) {\n  .container {\n    margin: auto;\n    width: 80%;\n    border: 3px;\n    padding: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWVzaC93b3Jrc3BhY2UyMC90aGVwYXlib3gvc3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUVFLDhCQUFvQjtFQUNwQixzQ0FBd0I7RUFDeEIsc0NBQTZCO0VBQzdCLGdEQUFpQztFQUNqQyxtQ0FBMEI7RUFDMUIsa0NBQXlCO0VBRXpCLCtCQUFzQjtFQUN0Qix3Q0FBMEI7RUFDMUIsd0NBQStCO0VBQy9CLGtEQUFtQztFQUNuQyxxQ0FBNEI7RUFDNUIsb0NBQTJCO0VBRTNCLDhCQUFxQjtFQUNyQix1Q0FBeUI7RUFDekIsdUNBQThCO0VBQzlCLGlEQUFrQztFQUNsQyxvQ0FBMkI7RUFDM0IsbUNBQTBCO0VBRTFCLDZCQUFvQjtFQUNwQixxQ0FBd0I7RUFDeEIsc0NBQTZCO0VBQzdCLGdEQUFpQztFQUNqQyxtQ0FBMEI7RUFDMUIsa0NBQXlCO0VBRXpCLDZCQUFvQjtFQUNwQixxQ0FBd0I7RUFDeEIsc0NBQTZCO0VBQzdCLGdEQUFpQztFQUNqQyxtQ0FBMEI7RUFDMUIsa0NBQXlCO0VBRXpCLDRCQUFtQjtFQUNuQixvQ0FBdUI7RUFDdkIscUNBQTRCO0VBQzVCLCtDQUFnQztFQUNoQyxrQ0FBeUI7RUFDekIsaUNBQXdCO0VBRXhCLDBCQUFpQjtFQUNqQixpQ0FBcUI7RUFDckIsbUNBQTBCO0VBQzFCLDZDQUE4QjtFQUM5QixnQ0FBdUI7RUFDdkIsK0JBQXNCO0VBRXRCLDRCQUFtQjtFQUNuQixzQ0FBdUI7RUFDdkIscUNBQTRCO0VBQzVCLCtDQUFnQztFQUNoQyxrQ0FBeUI7RUFDekIsaUNBQXdCO0VBRXhCLDJCQUFrQjtFQUNsQixxQ0FBc0I7RUFDdEIsb0NBQTJCO0VBQzNCLHdDQUErQjtFQUMvQixpQ0FBd0I7RUFDeEIsZ0NBQXVCO0VBSXZCLHlGQUFvQjtFQUdwQixrR0FBMkIsRUFDNUI7O0FBVUQ7RUFDRSwwQkFBaUI7RUFDakIsb0NBQXFCO0VBQ3JCLDhCQUFxQjtFQUNyQix3Q0FBeUI7RUFDekIsMkJBQWtCO0VBQ2xCLDBCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQUFpQjtFQUNqQixtQ0FBcUI7RUFDckIsOEJBQXFCO0VBQ3JCLHdDQUF5QjtFQUN6QiwyQkFBa0I7RUFDbEIsMEJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsMEJBQWlCO0VBQ2pCLGtDQUFxQjtFQUNyQiw4QkFBcUI7RUFDckIsd0NBQXlCO0VBQ3pCLDJCQUFrQjtFQUNsQiwwQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSwwQkFBaUI7RUFDakIsbUNBQXFCO0VBQ3JCLDhCQUFxQjtFQUNyQix3Q0FBeUI7RUFDekIsMkJBQWtCO0VBQ2xCLDBCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQUFpQjtFQUNqQixrQ0FBcUI7RUFDckIsOEJBQXFCO0VBQ3JCLHdDQUF5QjtFQUN6QiwyQkFBa0I7RUFDbEIsMEJBQWlCLEVBQ2xCOztBQVNEO0VBR0UsZ0NBQTJCO0VBRTNCLDZCQUFvQjtFQUNwQixtQ0FBMEI7RUFDMUIsNkJBQW9CO0VBQ3BCLDhCQUFxQjtFQUNyQiw0QkFBbUI7RUFDbkIsOEJBQXFCO0VBQ3JCLDBCQUFpQjtFQUNqQixtQ0FBMEI7RUFDMUIsZ0NBQXVCLEVBRXhCOztBQWFEO0VBSUMsMkRBQXlCO0VBTXhCLDBCQUFvQjtFQUdwQixvQ0FBOEI7RUFHOUIsdURBQThCO0VBRzlCLGtDQUE0QixFQTBDN0I7O0FBN0REO0lBK0JDLGtEQUF1QjtJQVVwQix1QkFBc0I7SUFDdEIsa0JBQWlCLEVBVWxCOztBQXBESDtNQTZDTSxhQUFZLEVBTWI7O0FBbkRMO1FBZ0RRLGFBQVk7UUFDWix3QkFBdUIsRUFDeEI7O0FBbERQO0lBc0RJLGFBQVksRUFDYjs7QUFRSDtFQUVDLDJEQUF5QixFQUd6Qjs7QUFRRDtFQUNJO0lBQ0csYUFBWTtJQUNLLFdBQVU7SUFDVixZQUFZO0lBQ1osY0FBYSxFQUdoQyxFQUFBIiwiZmlsZSI6InNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSBzZWVcbi8vIGh0dHBzOi8vYmV0YS5pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vLyBUaGUgYXBwIGRpcmVjdGlvbiBpcyB1c2VkIHRvIGluY2x1ZGVcbi8vIHJ0bCBzdHlsZXMgaW4geW91ciBhcHAuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2Ugc2VlXG4vLyBodHRwczovL2JldGEuaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L3J0bFxuLy8gJGFwcC1kaXJlY3Rpb246IGx0cjtcblxuLy8gSW9uaWMgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTmFtZWQgY29sb3JzIG1ha2VzIGl0IGVhc3kgdG8gcmV1c2UgY29sb3JzIG9uIHZhcmlvdXMgY29tcG9uZW50cy5cbi8vIEl0J3MgaGlnaGx5IHJlY29tbWVuZGVkIHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBjb2xvcnNcbi8vIHRvIG1hdGNoIHlvdXIgYXBwJ3MgYnJhbmRpbmcuIElvbmljIHByb3ZpZGVzIGVpZ2h0IGxheWVyZWQgY29sb3JzXG4vLyB0aGF0IGNhbiBiZSBjaGFuZ2VkIHRvIHRoZW1lIGFuIGFwcC4gQWRkaXRpb25hbCBjb2xvcnMgY2FuIGJlXG4vLyBhZGRlZCBhcyB3ZWxsIChzZWUgYmVsb3cpLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHNlZVxuLy8gaHR0cHM6Ly9iZXRhLmlvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvYWR2YW5jZWRcblxuLy8gVG8gZWFzaWx5IGNyZWF0ZSBjdXN0b20gY29sb3IgcGFsZXR0ZXMgZm9yIHlvdXIgYXBw4oCZcyBVSSxcbi8vIGNoZWNrIG91dCBvdXIgY29sb3IgZ2VuZXJhdG9yOlxuLy8gaHR0cHM6Ly9iZXRhLmlvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvY29sb3ItZ2VuZXJhdG9yXG5cbjpyb290IHtcblxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNjRiM2Y0IDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMwY2QxZTg7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDEyLCAyMDksIDIzMjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwYmI4Y2M7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjRkNmVhO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzEwZGM2MDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LCAyMjAsIDk2O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzBlYzI1NDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMjhlMDcwO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmMDQxNDE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbi8vICAtLWlvbi1jb2xvci1teWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoLTU1ZGVnLCAgI2MyZTU5YyAzNSUgLCAjNjRiM2Y0IDEwMCUgKTtcbi8vICAtLWlvbi1jb2xvci1teWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoKzU1ZGVnLCAgYmx1ZSAxMCUgLCAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDgwJSApO1xuICAtLWlvbi1jb2xvci1teWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoKzU1ZGVnLCAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDgwJSAsIGdyZWVuIDEwJSApO1xuLy8gIC0taW9uLWNvbG9yLW15Y29sb3I6IGxpbmVhci1ncmFkaWVudCgrNTVkZWcsICBibHVlIDgwJSAsIGdyZWVuIDEwJSApO1xuLy8gIC0taW9uLWNvbG9yLXRvb2xiYXJteWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoKzU1ZGVnLCAgYmx1ZSA1MCUgLCAgZ3JlZW4gNTAlICk7XG4gIC0taW9uLWNvbG9yLXRvb2xiYXJteWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoKzU1ZGVnLCAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICA1MCUgLCAgZ3JlZW4gNTAlICk7XG59XG5cbi8vIEFkZGl0aW9uYWwgSW9uaWMgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSW4gb3JkZXIgdG8gYWRkIGNvbG9ycyB0byBiZSB1c2VkIHdpdGggSW9uaWMgY29tcG9uZW50cyxcbi8vIHRoZSBjb2xvciBzaG91bGQgYmUgYWRkZWQgYXMgYSBjbGFzcyB3aXRoIHRoZSBjb252ZW50aW9uIGAuaW9uLWNvbG9yLXtDT0xPUn1gXG4vLyB3aGVyZSBge0NPTE9SfWAgaXMgdGhlIGNvbG9yIHRvIGJlIHVzZWQgb24gdGhlIElvbmljIGNvbXBvbmVudFxuLy8gYW5kIGVhY2ggdmFyaWFudCBpcyBkZWZpbmVkIGZvciB0aGUgY29sb3IuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2Ugc2VlXG4vLyBodHRwczovL2JldGEuaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZFxuXG4uaW9uLWNvbG9yLWZhdm9yaXRlIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzY5YmI3YjtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDEwNSwgMTg3LCAxMjM7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjNWNhNTZjO1xuICAtLWlvbi1jb2xvci10aW50OiAjNzhjMjg4O1xufVxuXG4uaW9uLWNvbG9yLXR3aXR0ZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMWRhMWY0O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogMjksIDE2MSwgMjQ0O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zaGFkZTogIzFhOGVkNztcbiAgLS1pb24tY29sb3ItdGludDogIzM0YWFmNTtcbn1cblxuLmlvbi1jb2xvci1nb29nbGUge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZGM0YTM4O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogMjIwLCA3NCwgNTY7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjYzI0MTMxO1xuICAtLWlvbi1jb2xvci10aW50OiAjZTA1YzRjO1xufVxuXG4uaW9uLWNvbG9yLXZpbWVvIHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzIzYjZlYTtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDM1LCAxODIsIDIzNDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICMxZmEwY2U7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICMzOWJkZWM7XG59XG5cbi5pb24tY29sb3ItZmFjZWJvb2sge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjM2I1OTk4O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogNTksIDg5LCAxNTI7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjMzQ0ZTg2O1xuICAtLWlvbi1jb2xvci10aW50OiAjNGY2YWEyO1xufVxuXG4vLyBTaGFyZWQgVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVG8gY3VzdG9taXplIHRoZSBsb29rIGFuZCBmZWVsIG9mIHRoaXMgYXBwLCB5b3UgY2FuIG92ZXJyaWRlXG4vLyB0aGUgQ1NTIHZhcmlhYmxlcyBmb3VuZCBpbiBJb25pYydzIHNvdXJjZSBmaWxlcy5cbi8vIFRvIHZpZXcgYWxsIHRoZSBwb3NzaWJsZSBJb25pYyB2YXJpYWJsZXMsIHNlZTpcbi8vIGh0dHBzOi8vYmV0YS5pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL2Nzcy12YXJpYWJsZXMjaW9uaWMtdmFyaWFibGVzXG5cbjpyb290IHtcbiAgLy8gVE9ET1xuICAvLyAkaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDMwMDtcbiAgLS1pb24taGVhZGluZ3MtZm9udC13ZWlnaHQ6IDMwMDtcblxuICAtLWlvbi1jb2xvci1hbmd1bGFyOiAjYWMyODJiO1xuICAtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uOiAjOGU4ZDkzO1xuICAtLWlvbi1jb2xvci10b29saW5nOiAjZmU0YzUyO1xuICAtLWlvbi1jb2xvci1zZXJ2aWNlczogI2ZkOGIyZDtcbiAgLS1pb24tY29sb3ItZGVzaWduOiAjZmVkMDM1O1xuICAtLWlvbi1jb2xvci13b3Jrc2hvcDogIzY5YmI3YjtcbiAgLS1pb24tY29sb3ItZm9vZDogIzNiYzdjNDtcbiAgLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbjogI2IxNmJlMztcbiAgLS1pb24tY29sb3ItbmF2aWdhdGlvbjogIzY2MDBjYztcbi8vICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAjNjRiM2Y0O1xufVxuXG4vLyBBcHAgaU9TIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGlPUyBvbmx5IENTUyB2YXJpYWJsZXMgY2FuIGdvIGhlcmVcblxuLmlvcyB7XG59XG5cbi8vIEFwcCBNYXRlcmlhbCBEZXNpZ24gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTWF0ZXJpYWwgRGVzaWduIG9ubHkgQ1NTIHZhcmlhYmxlcyBjYW4gZ28gaGVyZVxuXG4ubWQge1xuICAvLyBVc2UgdGhlIHByaW1hcnkgY29sb3IgYXMgdGhlIGJhY2tncm91bmQgZm9yIHRoZSB0b29sYmFyXG4vLyAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAgIzY0YjNmNDtcbiAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10b29sYmFybXljb2xvcikgO1xuICBcbi8vICAtLWlvbi1jb250ZW50LWJhY2tncm91bmQ6ICAjNjRiM2Y0O1xuLy8gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC01NWRlZywgICNjMmU1OWMgMzUlICwgIzY0YjNmNCAxMDAlICkgIWltcG9ydGFudDtcblxuICAvLyBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSB0b29sYmFyIGNvbXBvbmVudHNcbiAgLS1pb24tdG9vbGJhci1jb2xvcjogI2ZmZjtcblxuICAvLyBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBhY3RpdmF0ZWQgdG9vbGJhciBjb21wb25lbnRzXG4gIC0taW9uLXRvb2xiYXItY29sb3ItYWN0aXZhdGVkOiAjZmZmO1xuXG4gIC8vIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIHVuY2hlY2tlZCBzZWdtZW50IGJ1dHRvbnNcbiAgLS1pb24tdG9vbGJhci1jb2xvci11bmNoZWNrZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuXG4gIC8vIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGNoZWNrZWQgc2VnbWVudCBidXR0b25cbiAgLS1pb24tdG9vbGJhci1jb2xvci1jaGVja2VkOiAjZmZmO1xuXG4vL0BpbXBvcnQgJy4vZ3JhZGllbnQtbWl4aW5zJztcbi8vQGltcG9ydCBcIi4vZ3JlZW4tYW5kLWJsdWUtdGhlbWVcIjtcbi8vQGltcG9ydCBcIi4vZmFjZWJvb2stbWVzc2VuZ2VyLXRoZW1lXCI7XG5cbmlvbi1tZW51IHsgXG5cbiAgaW9uLWNvbnRlbnQge1xuLy8gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogICM2NGIzZjQgO1xuLy8gLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG4vLyAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNTVkZWcsICAjYzJlNTljIDM1JSAsICM2NGIzZjQgMTAwJSApO1xuIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yKSA7XG5cbi8vICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAjYzJlNTljIDtcblxuLy8gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xMGRlZywgICNjMmU1OWMgMzUlICwgIzY0YjNmNCAxMDAlICkgIWltcG9ydGFudDtcbi8vICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNTVkZWcsICAjNjRiM2Y0IDEwMCUsICNmZmZmZiAzNSUgKSAhaW1wb3J0YW50O1xuLy8gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCB0byBsZWZ0LCAjYzJlNTljICwgIzY0YjNmNCApOyAgICAgIFxuXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuXG4gICAgZGl2LnNjcm9sbC1jb250ZW50IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgaW9uLWxpc3QgLml0ZW0ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYmFyLWJ1dHRvbnMsIC50b29sYmFyLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuXG5cblxufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbi8vICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNTVkZWcsICAjYzJlNTljIDM1JSAsICM2NGIzZjQgMTAwJSApICFpbXBvcnRhbnQ7XG4gLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdG9vbGJhcm15Y29sb3IpIDtcbi8vICNjMmU1OWMgLCAjNjRiM2Y0XG5cbn1cbi8vJGZhLWZvbnQtcGF0aDogXCIuLi9hc3NldHMvZm9udC1hd2Vzb21lL2ZvbnRzXCI7XG4vL0BpbXBvcnQgXCIuLi9hc3NldHMvZm9udC1hd2Vzb21lL3Njc3MvZm9udC1hd2Vzb21lXCI7XG5cbi8vQGltcG9ydCBcImZvbnQtYXdlc29tZVwiO1xuLy9AaW1wb3J0IFwiLi4vYXNzZXRzL3NoYXJlYnV0dG9uL3NoYXJlLWJ1dHRvbnMuc2Nzc1wiO1xuLy9AaW1wb3J0IFwiLi4vYXNzZXRzL3NoYXJlYnV0dG9uL3RoZW1lcy9tb2Rlcm4vbW9kZXJuLWRhcmstdGhlbWUuc2Nzc1wiO1xuXG5AbWVkaWEobWluLXdpZHRoOjQ1MHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cblxuICAgIH1cbn1cblxuXG5cbi8vIEFwcCBUaGVtZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElvbmljIGFwcHMgY2FuIGhhdmUgZGlmZmVyZW50IHRoZW1lcyBhcHBsaWVkLCB3aGljaCBjYW5cbi8vIHRoZW4gYmUgZnV0dXJlIGN1c3RvbWl6ZWQuIFRoaXMgaW1wb3J0IGNvbWVzIGxhc3Rcbi8vIHNvIHRoYXQgdGhlIGFib3ZlIHZhcmlhYmxlcyBhcmUgdXNlZCBhbmQgSW9uaWMnc1xuLy8gZGVmYXVsdCBhcmUgb3ZlcnJpZGRlbi5cblxuLy8gQGltcG9ydCBcImlvbmljLnRoZW1lLmRlZmF1bHRcIjtcblxuLy8gRm9udHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSb2JvdG8gZm9udCBpcyB1c2VkIGJ5IGRlZmF1bHQgZm9yIE1hdGVyaWFsIERlc2lnbi4gTm90byBzYW5zXG4vLyBpcyB1c2VkIGJ5IGRlZmF1bHQgZm9yIFdpbmRvd3MuXG5cbi8vIEBpbXBvcnQgXCJyb2JvdG9cIjtcblxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ramesh/workspace20/thepaybox/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /home/ramesh/workspace20/thepaybox/src/global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map