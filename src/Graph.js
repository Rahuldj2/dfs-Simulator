import "./Graph.css"
import React, { createContext } from 'react';
const MyContext = createContext();

const Graph=(props)=>
{
  return(
    <>
    {/* <MyContext.Provider value={divList}> */}
    <div className="mst">
      <div className="nodes">
        <div className="row-1">
          {props.divList[0]}
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
              {props.divList[1]}
              {props.divList[2]}
              {props.divList[3]}
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
              {props.divList[4]}
              {props.divList[5]}
              {props.divList[6]}
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
      {props.divList[7]}

      </div>
       
        
      </div>
    </div>
    {/* </MyContext.Provider> */}
    
    </>
  )
}
export {Graph,MyContext};