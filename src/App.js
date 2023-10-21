import React from 'react';
import { useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Typography, TextField, Box, Button } from '@mui/material';


function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your information: ${firstName}, ${lastName}, ${email}, ${password}}`);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };


  return (
    <>
      <Container maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          mt: 4,
          height: '50vh',
          boxShadow: 3
        }}>
        <Typography component="h1" sx={{ mt: 3 }} >New Customer</Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt: 3 }}>
            <TextField id="standard-basic" value={firstName} onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="standard" />
            <TextField id="standard-basic" type='email' value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="standard" />
            <TextField id="standard-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" />
            <TextField id="standard-basic" required type='password' value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="standard" />
          </Box>
          <Box sx={{ mt: 4, display: 'flex', gap: '50px' }}>
            <Button type='submit' variant="contained" color="success">
              Submit
            </Button>
            <Button variant="contained" onClick={handleCancel} color="error">
              Cancel
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default App;
