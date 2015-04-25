bagcilar
==============================

A tiny modular application mediator project

### Module Usage
<pre lang="javascript">
<code>
bagcilar.module('moduleName', function () {

  var testMethod = function (someArg) {

  	console.log(someArg);

  }

  var dummyMethod = function (someArg) {

  	return (function (returnedValue) {

  		return returnedValue;

  	})(someArg);

  }

  return {
    testMethod : testMethod,
    dummyMethod : dummyMethod
  }

}, true);

</code>
</pre>