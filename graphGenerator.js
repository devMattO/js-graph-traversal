// Implement a graph generator that represents a set of objects where some pairs of objects are connected by links.

// function Node(name,value){
//   this.name = name;
//   this.value = value;
//   this.adjacentNeighbors = [];
//   var that = this;

//   this.addNeighbors = function(arr){
//     arr.forEach(function(el){
//         that.adjacentNeighbors.push(el);
//     });
//   };

//   this.adjacent = function(y){
//     return this.adjacentNeighbors.includes(y);
//   };

//   this.neighbors = function(){
//     return this.adjacentNeighbors;
//   };

//   return this;

// }


'use strict';

const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];

  this.addNeighbors = (array) => {
    array.forEach((ele) => {
      this.neighbors.push(ele);
    });
  };
};

module.exports = Node;
// const A = new Node('A','foo1');
// const B = new Node('B','foo2');

// A.addNeighbors = [B];

// console.log('A',A);