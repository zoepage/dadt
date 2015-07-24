# [WIP] testrun for small templating with data-attr

One-way data binding for templating your HTML per data-attributes


### API

*HTML* 

````
<div data-dadt-scope="appName"> // defines the scope for the DOM to be rendered
  <div data-dadt="name"></div> // custom data-attributes for your scope
  <div data-dadt="title"></div> // custom data-attributes for your scope
  <div data-dadt="content"></div> // custom data-attributes for your scope
</div>
````

*JS*

````
dadt.scope // defines the scope for the DOM to be rendered

dadt.name // custom data-attributes for your scope
dadt.name // custom data-attributes for your scope
````
