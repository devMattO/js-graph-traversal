// Implement a graph generator that represents a set of objects where some pairs of objects are connected by links.

function Node(name,value){
  this.name = name;
  this.value = value;
  this.adjacentNeighbors = [];
  var that = this;

  this.addNeighbors = function(arr){
    arr.forEach(function(el){
        that.adjacentNeighbors.push(el);
    });
    console.log(that.adjacentNeighbors);
  };

  this.adjacent = function(y){
    return this.adjacentNeighbors.includes(y);
  };

  this.neighbors = function(){
    return this.adjacentNeighbors;
  };

  return this;

}

var A = new Node("A",'foo1');
var B = new Node("B", 'foo2');
var C = new Node("C", 'foo3');
var D = new Node("D", 'foo4');
var E = new Node("E", 'foo5');
var F = new Node("F", 'foo6');

// A.addNeighbors([B,C]);
// B.addNeighbors([D,E]);
// C.addNeighbors([F]);

// console.log(A.hasNeighbors(E), 'hasNeighbors');
console.log(A.addNeighbors([B,C]));