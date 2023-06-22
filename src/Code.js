let code=`
  void dfs(ArrayList<ArrayList<Integer>> graph,int curVertex)
  {
    ArrayList<Integer> adjList = graph.get(curVertex);
    visited[curVertex]=true;
    for (int i=0;i<adjList.size();i++)
    {
        int neighbour=adjList.get(i);
        if (visited[neighbour]==false)
        {
            dfs(graph,neighbour);
        }
    }
  }
  `
const Code=()=>
{
    return (
        
        <div className='code'>
        <div>
          <p>
          {code}
          </p>
          
        </div>
      </div>
    )
}

export default Code;