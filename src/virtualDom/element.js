function Element(tagName,props,children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}

Element.prototype.render = function () {
  var el = document.createElement(this.tagName);
  var props = this.props;
  
  var propsName = Object.keys(props);
  propsName.forEach(function (cell) {
    var propsValue = props[cell];
    el.setAttribute(cell,propsValue);
  });
  
  var children = this.children || [];
  
  children.forEach(function (child) {
    var childEL = (child instanceof Element)
      ? child.render()
      : document.createTextNode(child);
    el.appendChild(childEL);
  });
  
  return el;
};
  

module.exports = function (tagName,props,children) {
  return new Element(tagName,props,children);
};