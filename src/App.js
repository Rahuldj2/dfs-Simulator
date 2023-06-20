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
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  // const[vertex,change]=useState(0);
  const graph=[[1,2,3],[0,4],[0,5],[0,6],[1,7],[2,7],[3,7],[4,5,6]]
  const visited=[false,false,false,false,false,false,false,false]
  const dfs=(graph,curVertex,visited)=>
  {
    // console.log(graph);
    console.log(curVertex)
    sleep(1000);
    
    visited[curVertex]=true;
    let adjList=graph[curVertex];
    // console.log(adjList);
    // console.log("check")
    for (let i=0;i<adjList.length;i++)
    {
      // console.log(neighbour)
      let neighbour=adjList[i];
      if (visited[neighbour]===false)
      {
        // console.log("hiiii")
        dfs(graph,neighbour,visited);
      }
    }
  }
  return (
    <>
  
    <div className="App">
      <div className="app-1">
        <button onClick={()=>{
          dfs(graph,0,visited);
        }}>Run dfs</button>
      </div>
      
      <Graph divList={divList}/>
    </div>
    </>
  );
}

export default App;
