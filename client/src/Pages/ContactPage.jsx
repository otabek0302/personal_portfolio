import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material'
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [succes, setSucces] = useState(false)
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mmo2eki', 'template_6mt23hj', form.current, 'XHT1uWlqn6VLdLvI7')
      .then((result) => {
        console.log(result.text);
        if (result.text.toUpperCase() === "OK") {
          setSucces(true);
          setTimeout(() => {
            navigate("/");
          }, 4000)
        }
      }, (error) => {
        console.log(error.text);
      })

  };

  return (
    <Container maxWidth="xxl" className="mt">
      <Typography variant='h2' textAlign="center" maxWidth="100%" color="white.white100"> Craft Your Dream Project with Me</Typography>
      <Typography variant='p' textAlign="center" maxWidth="100%" color="white.white30"> Fill in all the blanks first, then the button will appear !</Typography>
      <Box ref={form} component="form" noValidate mt="45px" onSubmit={sendEmail} >
        <Grid container justifyContent="center" gap={1.5} >
          <Grid item xs={12} md={5}><TextField name='user_name' fullWidth id="outlined-basic" label="Hi am *" /></Grid>
          <Grid item xs={12} md={5}><TextField onChange={(e) => setEmail(e.target.value)} name='user_email' fullWidth id="outlined-basic" label="Email *" /></Grid>
          <Grid item xs={12} md={5}><TextField onChange={(e) => setSubject(e.target.value)} name='subject' fullWidth id="outlined-basic" label="Subject *" /></Grid>
          <Grid item xs={12} md={5}><TextField onChange={(e) => setPhone(e.target.value)} name='user_number' fullWidth id="outlined-basic" label="Phone *" /></Grid>
          <Grid item xs={12} md={6}><TextField onChange={(e) => setMessage(e.target.value)} name='message' fullWidth id="standard-multiline-flexible" multiline rows={4} label="Message *" /></Grid>
        </Grid>
        <Box display="flex" justifyContent="center" mt={6}>
          {
            email && phone && subject && message && (
              <Button sx={{ p: "20px 62px" }} type='submit' variant='outlined'>Send</Button>
            )
          }
        </Box>
      </Box>
      <Snackbar open={succes} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default ContactPage