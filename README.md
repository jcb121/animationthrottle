# animationthrottle

## Install

`npm install --save animationthrottle`

## use

```javascript
var throttle = require('animationthrottle')

var runInstantly = false
var throttleTime = 200
this.throttledFunction = throttle(function(){
  console.log('I am throttled')
}, throttleTime, runInstantly)

//Inside of the animation loop
function loop(){
  let deltaTime = now - then;
  this.throttledFunction.update(deltaTime)
}
```
### Why
this function does not use `setTimeout` and thus it needs to be updated in the game loop.
