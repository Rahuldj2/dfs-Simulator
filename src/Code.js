import React from 'react';

const Code = () => {
  let code = `
void dfs(ArrayList<ArrayList<Integer>> graph, int curVertex)
{
    ArrayList<Integer> adjList = graph.get(curVertex);
    visited[curVertex] = true;
    for (int i = 0; i < adjList.size(); i++)
    {
        int neighbour = adjList.get(i);
        if (!visited[neighbour])
        {
            dfs(graph, neighbour);
        }
    }
}
`;

  return (
    <div className='code'>
      <div>
        <h1>CODE IN JAVA</h1>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
