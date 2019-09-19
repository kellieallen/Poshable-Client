import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const InventoryEdit = (props) => {
  const [editItem, setEditItem] = useState(props.inventoryToUpdate.item);
  const [editBrand, setEditBrand] = useState(props.inventoryToUpdate.brand);
  const [editDescription, setEditDescription] = useState(props.inventoryToUpdate.description);
  const [editPurchasePrice, setEditPurchasePrice] = useState(props.inventoryToUpdate.purchasePrice);
  const [editSoldPrice, setEditSoldPrice] = useState(props.inventoryToUpdate.soldPrice);
  const [editForSaleDate, setEditForSaleDate] = useState(props.inventoryToUpdate.forSaleDate);
  const [editSoldDate, setEditSoldDate] = useState(props.inventoryToUpdate.soldDate);
  const [editInventory, setEditInventory] = useState(props.inventoryToUpdate.inventory);

  const inventoryUpdate = (event, workout) => {
    event.preventDefault();
    fetch(`http://localhost:3000/log/update/${props.inventoryToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({log: {item: editItem, brand: editBrand, description: editDescription, purchasePrice: editPurchasePrice, soldPrice: editSoldPrice, forSaleDate: editForSaleDate, soldDate: editSoldDate, inventory: editInventory}}),
      headers: new Headers({ 
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
      }) .then((res) => {
        props.fetchInventories();
        props.updateOff();
      })
  }

  return(
    <Modal isOpen={true}>
      <ModalHeader>Edit Your Inventory</ModalHeader>
      <ModalBody>
        <Form onSubmit={inventoryUpdate}>
          <FormGroup>
            <Label htmlFor="result">Edit Item:</Label>
            <Input name="result" value={editItem} onChange={(e) => setEditItem(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="brand">Edit Brand:</Label>
            <Input name="brand" value={editBrand} onChange={(e) => setEditBrand(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Edit Description:</Label>
            <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
         </FormGroup>
         <FormGroup>
            <Label htmlFor="purchasePrice">Edit Purchase Price:</Label>
            <Input name="purchasePrice" value={editPurchasePrice} onChange={(e) => setEditPurchasePrice(e.target.value)}/>
         </FormGroup>
         <FormGroup>
            <Label htmlFor="soldPrice">Edit Sold Price:</Label>
            <Input name="soldPrice" value={editSoldPrice} onChange={(e) => setEditSoldPrice(e.target.value)}/>
         </FormGroup>
         <FormGroup>
            <Label htmlFor="forSaleDate">Edit For Sale Date:</Label>
            <Input name="forSaleDate" value={editForSaleDate} onChange={(e) => setEditForSaleDate(e.target.value)}/>
         </FormGroup>
         <FormGroup>
            <Label htmlFor="soldDate">Edit Sold Date:</Label>
            <Input name="forSaleDate" value={editForSaleDate} onChange={(e) => setEditSoldDate(e.target.value)}/>
         </FormGroup>
         <FormGroup>
            <Label htmlFor="inventory">Edit Inventory:</Label>
            <Input name="inventory" value={editInventory} onChange={(e) => setEditInventory(e.target.value)}/>
         </FormGroup>
          <Button type="submit">Update the inventory!</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default InventoryEdit;