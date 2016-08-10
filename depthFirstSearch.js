'use strict';
var Node = require('./graphGenerator');

var A = new Node("A",'foo1');
var B = new Node("B", 'foo2');
var C = new Node("C", 'foo3');
var D = new Node("D", 'foo4');
var E = new Node("E", 'foo5');
var F = new Node("F", 'foo6');

A.addNeighbors([B,C]);
B.addNeighbors([D,E]);
C.addNeighbors([F]);

function DFS(start, searchFor){
  if(start === searchFor){
    return searchFor;
  }

  let i;
  let child;
  let children = start.neighbors;

  // /iterate thorugh all of the starting nodes children
  for (i = 0; i < children.length; i++) {
    //decrementing
    child = children[i];
    const found = DFS(child,searchFor);
    console.log(found);
    if(found){
      return found.name;
    }
  }
  return false;
}

DFS(A,F);