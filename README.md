bagcilar
==============================

It was while ago when this project had been started. A nice memory with a tiny modular application mediator project.

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
