JS Logger / Debugger
====================

- JS code logger / debugger
- Allows you to add breakpoints when debugging errors
- Log mode is stored in local storage / cookies
- Allows you to turn on logging / debugging and then refresh the page to debug production code issues
- Requires jquery.local-storage.js

Basic Usage
-----------
~~~ coffee

# turn on logging and blocking
JLD.on(JLD.BLOCK_AND_LOG)

a = new JLD('Label 1')
b = new JLD('Label 2')

# equivalent to console.log('Label 1: message 001')
a.log('message 001')

# equivalent to alert('Label 1: message 002')
a.block('message 002')

# equivalent to console.log('Label 2: message 003') and alert('Label 2: message 003')
b.debug('message 003')

# turn off all logging
JLD.off()

JLD.isOn()
> false
~~~

Log Options
-----------

- BLOCK_AND_LOG
- BLOCK_ONLY
- LOG_ONLY
- OFF (default)

Debugging
---------

Example source code

~~~ coffee
a = new JLD('Value')

# some js code here ...

# debug value of x when debugging is on
a.debug(x)
~~~

Open javascript console and then run

~~~ js
JLD.on(JLD.BLOCK_AND_LOG)
~~~

Refresh the page and you'll see an alert message. Turn it off once you're done debugging.

~~~ js
JLD.off()
~~~