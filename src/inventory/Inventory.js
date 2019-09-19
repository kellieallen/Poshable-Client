import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import InventoryCreate from './InventoryCreate';
import InventoryTable from './InventoryTable';
import InventoryEdit from './InventoryEdit';

const InventoryIndex = (props) => {

const [inventories, setInventories] = useState([]); // Inventory  state variable is an empty array that will be filled out with objects returned from server
const [updateActive, setUpdateActive] = useState(false);
const [inventoryToUpdate, setInventoryToUpdate] = useState({});

const fetchInventories = () => {


    fetch('http://localhost:3000/log', { // getting inventory logs from server
        method:'GET',
        headers: new Headers ({
            'Content-Type': 'applicatin/json', // telling server what kind of request we are sending
            'Authorization': props.token // token was passed as prop from above (const InventoryIndex)
        })
    }).then ( (res) => res.json())
    .then((logData) => {
        setInventories(logData) // inventory logs are saved in state
    })
}

const editUpdateInventory = (inventory) => {
  setInventoryToUpdate(inventory);
  console.log(inventory);
}

const updateOn = () => {
  setUpdateActive(true);
}

const updateOff = () => {
  setUpdateActive(false);
}

useEffect(() => {
    fetchInventories();
  }, []) // loads our inventory from the fetch above one time automatically into an empty array

    return(
        <Container>
    <Row>
      <Col md="3">
      <InventoryCreate fetchInventories={fetchInventories} token={props.token}/>
      </Col>
      <Col md="9">
      <InventoryTable inventories={inventories} editUpdateInventory={editUpdateInventory}
      updateOn={updateOn} fetchInventories={fetchInventories} token={props.token}/>
      </Col>
      {updateActive ? <InventoryEdit inventoryToUpdate={inventoryToUpdate}
      updateOff={updateOff} token={props.token} fetchInventories={fetchInventories}/> : <></>}
    </Row>
  </Container>
    )
}

export default InventoryIndex;