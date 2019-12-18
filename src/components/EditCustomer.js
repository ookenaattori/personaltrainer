import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';



function EditCustomer(props) {

        const [customer, setCustomer] = React.useState({
            firstname: '', lastname: '', email: '', phone: '', streetaddress: '', postcode: '', city: ''
        });

        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setCustomer({ firstname: props.customer.firstname, lastname: props.customer.lastname,
                          email: props.customer.email, phone: props.customer.phone, streetaddress: props.customer.streetaddress,
                          postcode: props.customer.postcode, city: props.customer.city
                        })
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(false);
          };

          const handleInputChange = (event) => {
            setCustomer({...customer, [event.target.name]: event.target.value})

        }

        const updateCustomer = () => {
            props.updateCustomer(customer, props.customer.links[0].href);
            handleClose();
            alert("Customer updated!")
        }

    return (

        <div>
            <EditOutlinedIcon cursor="pointer" onClick={handleClickOpen}>
            Edit Customer
        </EditOutlinedIcon>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit customer: {props.customer.firstname} {props.customer.lastname}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={customer.firstname}
            onChange={e => handleInputChange(e)}
            label="Firstname"
            fullWidth
          />
           <TextField
            margin="dense"
            name="lastname"
            value={customer.lastname}
            onChange={e => handleInputChange(e)}
            label="Lastname"
            fullWidth
          />
            <TextField
            margin="dense"
            name="email"
            value={customer.email}
            onChange={e => handleInputChange(e)}
            label="Email"
            fullWidth
          />
            <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={e => handleInputChange(e)}
            label="Phone"
            fullWidth
          />
            <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={e => handleInputChange(e)}
            label="Streetaddress"
            fullWidth
          />
            <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={e => handleInputChange(e)}
            label="Postcode"
            fullWidth
          />
           <TextField
            margin="dense"
            name="city"
            value={customer.city}
            onChange={e => handleInputChange(e)}
            label="City"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
             <Button onClick={handleClose} color="primary">
                Cancel
             </Button>
          <Button onClick={updateCustomer} color="primary">
                Save
          </Button>
        </DialogActions>
        </Dialog>
        </div>
    )

}

export default EditCustomer;