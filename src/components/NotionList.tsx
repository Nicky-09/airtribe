import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Dialog, TextField } from "@mui/material";
import NotionPage from "./NotionPage";
import '../App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function NotionList() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Untitled");
  const [currentIndex , setCurrentIndex] = useState(0);

  const handleClickOpen = (index:any) => () => {
      
    setCurrentIndex(index);
    console.log(currentIndex);
    setOpen(true);
   
  };

//   useEffect(() => {
//       localStorage.getItem("name") ;
//     }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const [userArray, setUserArray] = useState([
    { displayName1: ''},
  ]);

  const  handleSave = () => {
    localStorage.setItem("name", JSON.stringify(userArray));
};

  const [userArrayy, setUserArrayy] = useState([
    { displayName1: '', displayName2: '', displayName3: '' },
  ]);

  const [userArraay, setUserArraay] = useState([
    { displayName1: '', displayName2: '', displayName3: '' },
  ]);
  
  

  const handleInvite1 = () => {
    const tempArray = [...userArray];
    // console.log(tempArray);
    tempArray.push({
      displayName1: ''
      
    });
    setUserArray(tempArray);
  };

  const handleInvite2 = () => {
    const tempArray = [...userArrayy];
    tempArray.push({
        displayName1: '',displayName2: '',displayName3: ''
      
    });
    setUserArrayy(tempArray);
  };

  const handleInvite3 = () => {
    const tempArray = [...userArraay];
    tempArray.push({
        displayName1: '',displayName2: '',displayName3: ''
      
    });
    setUserArraay(tempArray);
  };

  const handleChange = (index:any, option:any) => (e:any) => {
    switch (option) {
      case 'displayName1': {
        const tempArray = [...userArray];
        // tempArray[index].displayName1 = e.target.value;
    //     console.log(tempArray);
    //    console.log(e.target);
        tempArray[index] = {
          ...tempArray[index],
          [e.target.name]: e.target.value,
        };

        // tempArray[index].displayName1=e.target.value;
       
        setUserArray(tempArray);
        break;
      }
     
    }
  };

  const handleStatusChange = (e:any) => {
    setStatus(e.target.value);
    };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <NotionPage handleClose={handleClose} />
      </Dialog> */}
    
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
          
          <Grid item xs={4}>
               <div className='status'>     
          <Button onClick={handleInvite1} className='status'> untitled {userArraay.length}
          <span>+</span>
                       
                       </Button>
                       </div>
                   
                </Grid>
                <Grid item xs={4}>
                   
                        <Button size='small'  value={status} onChange={handleStatusChange}/>
                        <Button onClick={handleInvite2}>+</Button>
                        {userArrayy.length}
                   
                </Grid>
                <Grid item xs={4}>
                    
                     
                        <Button onClick={handleInvite3}> untitled + {userArraay.length}
                       
                         </Button>
                     
                   
                </Grid>



            <Grid item xs={4}>    
          <React.Fragment>
          {userArray.map((user, idx) => (
          <React.Fragment key={idx}>
            <Grid container spacing={1} direction="row" alignItems="center">
               

              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  placeholder="Name"
                  value={user.displayName1}
                // value="Card 1"
                  size="small"
                  name="displayName1"
                  onClick={handleClickOpen(idx)}
                // onClick=(e) => {handleClickOpen(e)}
                //   error={errorList.includes(`users[${idx}].displayName`)}
                  onChange={handleChange(idx, 'displayName1')}
                >
                    {/* {user.displayName} */}
                    {user.displayName1 ? user.displayName1 : ' '}
                    </Button>
                    <Dialog open={open} onClose={handleClose} fullWidth>
        <NotionPage handleSave={handleSave} handleClose={handleClose} name={userArray[currentIndex].displayName1} setUserArray={setUserArray} handleChange={handleChange} index={idx}/>
        </Dialog>
              </Grid>
              <Grid item xs={4}>
             
              </Grid>
              <Grid item xs={userArray.length > 1 ? 5 : 4}>
                <div className="d-flex align-items-center">
                
                
                </div>
              </Grid>
            </Grid>
        
          </React.Fragment>
        ))}
      </React.Fragment>
      </Grid>

      <Grid item xs={4}>    
        
      </Grid>

      <Grid item xs={4}>    
        
      </Grid>
      
      
          </Grid>
          {/* <Grid container item spacing={3}>
          <React.Fragment>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
      </React.Fragment>
          </Grid>
          <Grid container item spacing={3}>
          <React.Fragment>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Item</Item>
        </Grid>
      </React.Fragment>
          </Grid> */}
        </Grid>
      </Box>


    

   
   
       
    </div>
  );
}

export default NotionList;
