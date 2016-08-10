'use strict';
const Node = require('./graphGenerator');

let A = new Node("A",'foo1');
let B = new Node("B", 'foo2');
let C = new Node("C", 'foo3');
let D = new Node("D", 'foo4');
let E = new Node("E", 'foo5');
let F = new Node("F", 'foo6');

A.addNeighbors([B,C]);
B.addNeighbors([D,E]);
C.addNeighbors([F]);

const BFS = (start,searchFor)=>{
  //init open to be the nodes that we need to explore
  let open = [];
  open.push(start);

  //keep track of nodes already visited
  let visitedNodes = [];
  let searchPath = [];
  let foundPath;

  while(open.length > 0) {
    //pull of first item in queue
    let current = open.shift();

    //iterate through all the neighbors of the current node
    searchPath.push(current);

    current.neighbors.forEach((next)=>{

      //if found, return search path
      if(next === searchFor){
        foundPath = searchPath;
      }

      //if we havent visited the node return the search path
      if(visitedNodes.indexOf(next) < 0){
        visitedNodes.push(next);
        open.push(next);
      }
    });

    if(foundPath){
      return foundPath;
    }

  }
  return false;
};

console.log(BFS(A,F));