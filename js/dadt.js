function Dadt () {
  var scope = document.querySelector('[data-scope]')
  var el = scope.querySelectorAll('[data-dadt]')

  // bind all the shit
  this.scope = scope

  this.dadt = {}
  for (var i = 0; el.length > i; i++) {
    var name = el[i].getAttribute('data-dadt')
    this[name] = name
  }
}

window.dadt = new Dadt() 