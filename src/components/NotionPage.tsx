import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
    // open: boolean;
    handleClose: any;
    name: any;
    // userArrayy: any;
    // userArraay: any;
    setUserArray?: any;
    handleChange?: any;
    index:any;
    handleSave?: any;
    // handleInvite: () => void;
}




function NotionPage({handleClose,name,setUserArray,handleChange,index, handleSave}: Props) {

 
 
    // console.log("v",name);
  return (
    
    <div>
        
      <DialogTitle>
     
        <TextField
          placeholder="Name"
          variant="outlined"
            value={name}
        //   value="Card 1"
          size="small"
          name="displayName1"
          onChange={handleChange(index,'displayName1')}
        />
    
    
      </DialogTitle>
      <DialogContent>
      
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Add a comment..."
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </div>
  );
}

export default NotionPage;
