module.exports = function(func, time, initialDelay){
  return new function(func, time, initialDelay) {
    this.state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.func = func
    this.delay = time
    this.currentTime = 0
    
    this.update(delta){
      this.currentTime += delta
      if( this.currentTime > this.delay || this.state == true ){	
        this.currentTime = 0
        this.state = false
        this.func.call()
      }
    }
    this.draw(){
      return
    }
  }(func, time, initialDelay)
}
