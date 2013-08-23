class JLD
  @OFF: null
  @LOG_ONLY: 1
  @BLOCK_ONLY: 2
  @BLOCK_AND_LOG: 3

  @_storageOn: 'jld-is-running'

  @isOn: =>
    $.localStorage(@_storageOn) != null

  @off: =>
    $.localStorage(@_storageOn, null)

  @on: (mode) =>
    $.localStorage(@_storageOn, mode)

  @allowLog: =>
    mode = $.localStorage(@_storageOn)

    mode is @LOG_ONLY or mode is @BLOCK_AND_LOG

  @allowBlock: =>
    mode = $.localStorage(@_storageOn)

    mode is @BLOCK_ONLY or mode is @BLOCK_AND_LOG

  constructor: (@label = 'Default Log') ->

  log: (message) =>
    console.log("#{@label}: #{message}") if @constructor.allowLog()

  block: (message) =>
    alert("#{@label}: #{message}") if @constructor.allowBlock()

  debug: (message) =>
    @log(message)
    @block(message)



