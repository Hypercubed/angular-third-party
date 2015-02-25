# angular-third-party

## Getting Started

Install using bower:

```
bower install --save Hypercubed/angular-third-party
```

## Examples

For example. remove `someLib` from `$window`:

```js
angular.module('myApp',['hc.thirdParty'])
  .config(function(thirdPartyProvider) {
    thirdPartyProvider.register('someLib');
  })
  .controller(function(thirdParty, someLib) {
    console.log(window.someLib); // undefined;
    console.log(thirdParty.someLib); // ok;
    console.log(someLib); // ok;
  });
```
