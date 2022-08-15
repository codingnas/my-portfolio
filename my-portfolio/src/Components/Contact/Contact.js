import './Contact.css';
import { TextField } from '@mui/material';

function Contact() {
  return (
    <div> 
  <h1> Contact Me </h1>
  <div className='form-position-grid'> 
    <form>
      <label> Name: </label>
      <TextField id="outlined-basic" variant="outlined" />
      <label> Subject: </label>
      <TextField id="outlined-basic" variant="outlined" />
      <label> Email: </label>
      <TextField id="outlined-basic" variant="outlined" />
      <lable> Message: </lable>
      <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Write here"
        />
    </form>
  </div>
  </div>
  );
}

export default Contact;