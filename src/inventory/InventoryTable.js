import React from 'react';
import {Table, Button} from 'reactstrap';

const InventoryTable = (props) => {

    const deleteInventory = (inventory) => { 
        fetch(`http://localhost:3000/log/${inventory.id}`, { 
          method: 'DELETE', 
          headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
          })
        })
        .then(() => props.fetchInventory())
      }

    const inventoryMapper = () => {
        return props.inventories.map((inventory, index) => {
            return(
                <tr key={index}>
                  <th scope="row">{inventory.id}</th>
                  <td>{inventory.item}</td>
                  <td>{inventory.brand}</td>
                  <td>{inventory.description}</td>
                  <td>{inventory.purchasePrice}</td>
                  <td>{inventory.soldPrice}</td>
                  <td>{inventory.forSaleDate}</td>
                  <td>{inventory.soldDate}</td>
                  <td>{inventory.inventory}</td>
           
                  <td>
                    <Button color="warning"onClick={() => {props.editUpdateInventory(inventory); props.updateOn()}}>Update</Button>
                    <Button color="danger" onClick={() => {deleteInventory(inventory)}}>Delete</Button>
                  </td>
                </tr>
              )
            })
          }
    return(
        <>
        <h3>Inventory History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Brand</th>
                    <th>Description</th>
                    <th>Purchase Price</th>
                    <th>Sold Price</th>
                    <th>For Sale Date</th>
                    <th>Sold Date</th>
                    <th>Inventory Location</th>
                </tr>
            </thead>
            <tbody>
                {inventoryMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default InventoryTable;