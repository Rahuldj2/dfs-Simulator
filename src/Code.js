

let code=`
  void dfs(ArrayList<ArrayList<Integer>> graph,int curVertex)\n
  {\n
    \tArrayList<Integer> adjList = graph.get(curVertex);\n
    \tvisited[curVertex]=true;\n
    \tfor (int i=0;i<adjList.size();i++)\n
    \t{
        \tint neighbour=adjList.get(i);\n
        \tif (visited[neighbour]==false)\n
        \t{
            \tdfs(graph,neighbour);\n
        \t}\n
    \t}\n
  \t}\n
  `


const Code=()=>
{
  
let codeList=[`void dfs(ArrayList<ArrayList<Integer>> graph,int curVertex)`,
'{\n',
`ArrayList<Integer> adjList = graph.get(curVertex);\n`,
`    visited[curVertex]=true;\n`,
`    for (int i=0;i<adjList.size();i++)\n`,
`    {`,
`        int neighbour=adjList.get(i);\n`,
`        if (visited[neighbour]==false)\n`,
`        {`,
`            dfs(graph,neighbour);\n`,
`        }\n`,
`    }\n`,
`  }\n`,

]

let display=[]


for (let i=0;i<codeList.length;i++)
{
  display[i]=<code>{codeList[i]}<br></br></code>
}
    return (
        
        <div className='code'>
        <div>
          <h1>
            CODE IN JAVA
          </h1>
          <code>
          {display}
          </code>
          
        </div>
      </div>
    )
}

export default Code;