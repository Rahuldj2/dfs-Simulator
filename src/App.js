import React from 'react';
import {Graph} from './Graph';
import './App.css'
import {useState} from "react";
import Code from './Code.js'


function App() {
  let letters=['s','a','b','c','d','e','f','g']
  let divList=[]
  
  for (let i=0;i<8;i++)
  {
    divList[i]=<div className={`node-${letters[i]}`}><p>{i}</p></div>
  }
    const[divv,change]=useState(divList)
  const graph=[[1,2,3],[0,4],[0,5],[0,6],[1,7],[2,7],[3,7],[4,5,6]]
  const visited=[false,false,false,false,false,false,false,false]

  const changeState=(curVertex)=>{
    const updatedDivList = divv.map((element, index) => {
      if (index === curVertex) {

        return <div className="node-a"style={{backgroundColor:'yellow',opacity:'1px'}} key={index}><p>{curVertex}</p></div>;
      } else {
        return element;
      }
    });
    change(updatedDivList);
  }


  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  

  const clear = async()=>
  {
    const updatedDivList = divv.map((element, index) => {
        return <div className="node-a"style={{backgroundColor:'white'}} key={index}><p>{index}</p></div>;
    });
    change(updatedDivList);
  }
  const dfs = async (graph, curVertex, visited) => {
    visited[curVertex] = true;
    changeState(curVertex); // Update the UI for the current node
  
    await sleep(1000); // Introduce a delay of 1000 milliseconds (1 second)
  
    let adjList = graph[curVertex];
    for (let i = 0; i < adjList.length; i++) {
      let neighbour = adjList[i];
      if (!visited[neighbour]) {
        await dfs(graph, neighbour, visited);
      }
    }
    await clear()
  };
  
let list2=[]
for (let j=0;j<8;j++)
{
  list2[j]= <div className='stack-node'></div>
}

const[stack,operate]=useState(list2);

// const pushPop()
  return (
    <>
  
    <div className="App">
      <div className="app-1">
        <button className="run-btn" onClick={async ()=>{
          dfs(graph,0,visited);
        }}>Run DFS</button>
        <button className='run-btn'>Graph </button>
        <button className='run-btn'>Tree</button>
        <div className='stack'>
          {stack}
        </div>
      </div>
      
      <Graph divList={divv}/>
      <Code></Code>
      
    </div>
    </>
  );
}

export default App;
