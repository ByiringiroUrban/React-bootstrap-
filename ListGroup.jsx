 
          // list group by using react bootstrap
          // by rendering
 
 import { Fragment } from "react"
 
 export default function ListGroup () {

  const items = ["Newyork",
                "Kigali",
                "Tokyo",
                "Paris",
                "Newdelli"];

  const message = items.length === 0 ? <p>No items found</p> : null;

  const getMessage = () => {
    
  }
  

                if (items.length === 0){
                    return <p>No item found</p>
                }

      
     return (
       <Fragment>
        <h1>list Grpup</h1>
        <ul className="list-group">
        {items.map((item) => 
          (<li key = {item.id }>{item}</li>))}
          {/* <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li> */}
        </ul>
       </Fragment>
     )
}