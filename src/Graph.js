import "./Graph.css"
const Graph=()=>
{
  return(
    <>
    <div className="mst">
      <div className="nodes">
        <div className="row-1">
          <div className="node-s">
            <p>
              S
            </p>
          </div>
        </div>

        <div className="arrow-row-1">
          <div>
                  <div className="edge-1">

                </div>
          </div>

          <div>
                  <div className="edge-2">

                </div>
          </div>

          <div>
                  <div className="edge-3">

                </div>
          </div>
        </div>


        <div className="row-2">
              
          <div className="node-a">
            <p>
              A
            </p>
          </div>

          <div className="node-b">
            <p>
              B
            </p>
          </div>

          <div className="node-c">
            <p>
              C
            </p>
          </div>
        </div>

        <div className="arrow-row-2">
            <div>
                    <div className="edge-4">

                    </div>
              </div>

              <div>
                      <div className="edge-5">

                    </div>
              </div>

              <div>
                      <div className="edge-6">

                    </div>
              </div>
        </div>
      <div className="row-3">
        <div className="node-d">
            <p>
              D
            </p>
          </div>

          <div className="node-e">
            <p>
              E
            </p>
          </div>

          <div className="node-f">
            <p>
              F
            </p>
          </div>
      </div>
      <div className="arrow-row-3">
          <div>
                        <div className="edge-7">

                        </div>
                  </div>

                  <div>
                          <div className="edge-9">

                        </div>
                  </div>

                  <div>
                          <div className="edge-8">

                        </div>
                  </div>
      </div>
      <div className="row-4">
        <div className="node-g">
            <p>
              G
            </p>
          </div>
      </div>
       
        
      </div>
    </div>
    </>
  )
}
export default Graph;