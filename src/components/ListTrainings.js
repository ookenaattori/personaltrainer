import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';
import moment from "moment";
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';

function ListTrainings() {


    const [trainings, SetTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => SetTrainings(data))

        
    }

    // Poistetaan treeni rivin ID:n avulla
    const deleteTraining = (row) => {
        if (window.confirm('Confirm delete training?')) {
        fetch('https://customerrest.herokuapp.com/api/trainings/' + (row), {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        handleClick()

    }
  }

  const setDate = 'MMMM Do YYYY, h:mm:ss a';

    const columns = [
        { title: 'Date', field: 'date', render: row => moment.utc(row.date).format(setDate) },
        { title: 'Duration', field: 'duration' },
        { title: 'Activity', field: 'activity' },
        { title: 'Customer', field: 'customer.firstname'},
        { sorting: false, field: 'links[0].href',
        // Renderöidään delete-painike, ja suoritetaan delete-funktio painalluksella, lähetetään funktiolle rivin ID.
         render: row => <DeleteIcon cursor="pointer" onClick={() => deleteTraining(row.id)} >delete</DeleteIcon>},
      
      ];

    
      // Snackbar komennot
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
            <MaterialTable
             title ="Trainings"
            columns={columns}
            data={trainings}
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
        message={<span id="message-id">Training was deleted</span>}
        action={[
          <button key="delete" color="primary" size="small" onClick={handleClose}>
            X
          </button>,
       
        ]}
      />
        </div> 
         
    );
};

export default ListTrainings;