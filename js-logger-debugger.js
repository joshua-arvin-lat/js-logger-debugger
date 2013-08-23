var JLD,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

JLD = (function() {

  JLD.OFF = null;

  JLD.LOG_ONLY = 1;

  JLD.BLOCK_ONLY = 2;

  JLD.BLOCK_AND_LOG = 3;

  JLD._storageOn = 'jld-is-running';

  JLD.isOn = function() {
    return $.localStorage(JLD._storageOn) !== null;
  };

  JLD.off = function() {
    return $.localStorage(JLD._storageOn, null);
  };

  JLD.on = function(mode) {
    return $.localStorage(JLD._storageOn, mode);
  };

  JLD.allowLog = function() {
    var mode;
    mode = $.localStorage(JLD._storageOn);
    return mode === JLD.LOG_ONLY || mode === JLD.BLOCK_AND_LOG;
  };

  JLD.allowBlock = function() {
    var mode;
    mode = $.localStorage(JLD._storageOn);
    return mode === JLD.BLOCK_ONLY || mode === JLD.BLOCK_AND_LOG;
  };

  function JLD(label) {
    this.label = label != null ? label : 'Default Log';
    this.debug = __bind(this.debug, this);

    this.block = __bind(this.block, this);

    this.log = __bind(this.log, this);

  }

  JLD.prototype.log = function(message) {
    if (this.constructor.allowLog()) {
      return console.log("" + this.label + ": " + message);
    }
  };

  JLD.prototype.block = function(message) {
    if (this.constructor.allowBlock()) {
      return alert("" + this.label + ": " + message);
    }
  };

  JLD.prototype.debug = function(message) {
    this.log(message);
    return this.block(message);
  };

  return JLD;

}).call(this);
