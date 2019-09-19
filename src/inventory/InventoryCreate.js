import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const InventoryCreate = (props) => {
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [soldPrice, setSoldPrice] = useState('');
  const [forSaleDate, setForSaleDate] = useState('');
  const [soldDate, setSoldDate] = useState('');
  const [inventory, setInventory] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/log/create/', {
      method: 'POST', 
      body: JSON.stringify({log: {item: item, brand: brand, description: description, purchasePrice: purchasePrice, soldPrice: soldPrice, forSaleDate: forSaleDate, soldDate: soldDate, inventory: inventory}}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    }) .then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        setItem('');
        setBrand('');
        setDescription('');
        setPurchasePrice('');
        setSoldPrice('');
        setForSaleDate('');
        setSoldDate('');
        setInventory('');
        props.fetchInventories();
    })
  }

  return(
    <>
      <h3>Log Your Inventory</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="item"/>
          <Input name="item" placeholder="item" value={item} onChange={(e) => setItem(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="brand"/>
          <Input name="brand" placeholder="brand" value={brand} onChange={(e) => setBrand(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description"/>
          <Input name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="purchasePrice"/>
          <Input name="purchasePrice" placeholder="purchasePrice" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="soldPrice"/>
          <Input name="soldPrice" placeholder="soldPrice" value={soldPrice} onChange={(e) => setSoldPrice(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="forSaleDate"/>
          <Input name="forsaleDate" placeholder="forSaleDate" value={forSaleDate} onChange={(e) => setForSaleDate(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="soldDate"/>
          <Input name="soldDate" placeholder="soldDate" value={soldDate} onChange={(e) => setSoldDate(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="inventory"/>
          <Input name="inventory" placeholder="inventory" value={inventory} onChange={(e) => setInventory(e.target.value)}/>
        </FormGroup>
        <Button type="submit">Click to Submit</Button>
      </Form>
    </>
  )
}

export default InventoryCreate;