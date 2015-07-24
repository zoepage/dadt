function Dadt () {
  var scope = document.querySelector('[data-scope]')
  var el = scope.querySelectorAll('[data-dadt]')

  // bind the scope
  this.scope = scope

  // bind your elements
  this.dadt = {}
  for (var i = 0; el.length > i; i++) {
    var name = el[i].getAttribute('data-dadt')
    this[name] = name
  }
}

window.dadt = new Dadt() 