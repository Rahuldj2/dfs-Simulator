import React from 'react';
import {Graph} from './Graph';
import './App.css'
import {useState} from "react";
import Code from './Code.js'

/*
1.Implement stack behaviour
2.improve graph ui
3.responsiveness in big screens
4.disable dfs button click-done
*/

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

    const updatedStack = stack.map((element, index) => {
      if (index === curVertex) {

        return <div className={`stack-node-${letters[curVertex]}`}style={{backgroundColor:'yellow',opacity:'1px'}} key={index}><p>{curVertex}</p></div>;
      } else {
        return element;
      }
    });

    change(updatedDivList);
    operate(updatedStack);
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
    operate(list2)
  }

  const enable=async()=>
  {
    ChangeVal(false);
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
  };
  
let list2=[]


for (let j=0;j<8;j++)
{
  let adj=graph[j].map((x)=>{
    let ts=x.toString()
    return ts+=','
  })
  list2[j]= <div className={`stack-node-${letters[j]}`}>
    <div className={`array-index-${j}`}>{j}</div>
    <div>{adj}</div>
  </div>
}

const[stack,operate]=useState(list2);

// const pushPop()
  let isRunning=false;

  const update= async(event)=>
  {
    event.currentTarget.disabled=false;
  }
  const handleClick = async (event) => {
    // event.currentTarget.disabled = true;
    ChangeVal(true);
    await dfs(graph,0,visited);
    await clear();
    // await sleep(2000);
    await enable();
    // await update(event);
    console.log('button clicked');
  };

  const[buttonState,ChangeVal]=useState(false);

  const sendAlert=()=>{
    alert("Tree Simulator is still under development!");
  }
  return (
    <>
  
    <div className="App">
      <div className="app-1">
        <button className="run-btn"  disabled={buttonState} onClick={handleClick}>Run DFS</button>
        <button className='run-btn'>Graph </button>
        <button className='run-btn' onClick={sendAlert}>Tree</button>

        <h2 style={{color:'white',textAlign:'center',marginBottom:'none'}}>
            Adjacency list representation of Graph
          </h2>
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
