import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { Tabs, Tab, Box } from '@mui/material';

export default function FriendsDialog() {
  const [open, setOpen] = React.useState(false);
  const [tabValue, setTabValue] = React.useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
         <GroupAddOutlinedIcon onClick={handleClickOpen}/>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* Tabs component in Material-UI automatically passes two arguments to the onChange event handler:
        event: The event object that triggered the change.
        newValue: The index or value of the newly selected tab. */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:"red"}}>
                <Tabs value={tabValue} onChange={()=>setTabValue(newValue)} aria-label="navigation tabs">
                    <Tab label="Requests" value='1' />
                    <Tab label="Friends" value='2'/>
                    <Tab label="Explore" value='3'/>
                </Tabs>
            </Box>
        <DialogContent>
            
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
