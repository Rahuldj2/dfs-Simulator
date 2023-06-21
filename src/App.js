import React from 'react';
import {Graph} from './Graph';
import './App.css'
import {useState} from "react";


function App() {

  
  let divList=[
    <div className="node-s">
      <p>
        0
      </p>
    </div>,
  
    <div className="node-a">
    <p>
      1
    </p>
  </div>,
  
  <div className="node-b">
    <p>
      2
    </p>
  </div>,
  
  <div className="node-c">
    <p>
      3
    </p>
  </div>,
  
  <div className="node-d">
              <p>
                4
              </p>
            </div>,
  
            <div className="node-e">
              <p>
                5
              </p>
            </div>,
  
            <div className="node-f">
              <p>
                6
              </p>
            </div>,
                    <div className="node-g">
                    <p>
                      7
                    </p>
                  </div>
  
    ]

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

  const clear=()=>{
    
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
  

  return (
    <>
  
    <div className="App">
      <div className="app-1">
        <button className="run-btn" onClick={()=>{
          dfs(graph,0,visited);
          changeState(9);
        }}>Run DFS</button>
      </div>
      
      <Graph divList={divv}/>
    </div>
    </>
  );
}

export default App;
