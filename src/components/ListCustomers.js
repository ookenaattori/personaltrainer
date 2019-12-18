import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import AddCustomer from './AddCustomer'
import EditCustomer from './EditCustomer'
import AddTraining from './AddTraining'


function ListCustomers() {

    

    const [customers, SetCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => SetCustomers(data.content))
    }

    // Poistaa asiakkaan
    const deleteCustomer = (row) => {
      console.log(row)
        if (window.confirm('Confirm delete customer?')) {
        fetch(row, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        console.log(row)
        handleClick()
        }
    }

    // Tallentaa uuden asiakkaan
    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    // Päivittää olemassa olevan asiakkaan
    const updateCustomer = (customer, row) => {
      console.log(customer)
        fetch(row, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))

    }
    
    // Tallentaa uuden treenin
    const saveTraining = (training) => {
      fetch('https://customerrest.herokuapp.com/api/trainings', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(training)
      })
      .then(res => fetchData())
      .catch(err => console.error(err))
  }
    
        
        const columns = [
        { title: 'Firstname', field: 'firstname' },
        { title: 'Lastname', field: 'lastname' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Address', field: 'streetaddress' },
        { title: 'Postcode', field: 'postcode'},
        { title: 'City', field: 'city'},
        { render: row => <EditCustomer updateCustomer={updateCustomer} customer={row} />},
            
        { sorting: false,
          field: 'links[0].href',
        render: row => <DeleteIcon cursor="pointer" onClick={() => deleteCustomer(row.links[0].href)}>delete</DeleteIcon>},
        { 
          // Lähetetään AddTraining-komponentille asiakkaan linkki, jotta saadaan lisättyä treeni oikealle asiakkaalle.
        render: row => <AddTraining saveTraining={saveTraining} customerlink={row.links[0].href} customer={row}/>},
        
       
      ];
 

      //Snackbar komennot
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

   

    return (

        <div> 
          <p>Add new customer</p>
          <AddCustomer  saveCustomer={saveCustomer}/>
            <MaterialTable
             title="Customers"
            columns={columns}
            data={customers}
            />
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Customer was deleted</span>}
        action={[
          <button key="delete" color="primary" size="small" onClick={handleClose}>
            X
          </button>,
       
        ]}
      />
    
        </div>
    );
}

export default ListCustomers;