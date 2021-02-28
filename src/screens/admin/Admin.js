import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AdminItem from '../../blocks/AdminItem'
import Button1 from '../../components/Button'
import Button from '@material-ui/core/Button'
import newAdmin from '../../promises/NewAdmin'
import adminList from '../../promises/AdminList'
import lgaList from '../../promises/LgaList'
import toList from '../../promises/ToList'
import vehicleList from '../../promises/VehicleList'
import InnerNavbar from '../../partials/InnerNavbar'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import '../../styles/Home.css'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  editView:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 5
  },
  msgView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    margin: 5
  },
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: '100%',
    padding: 10,
    margin: 10, 
    textAlign: 'center'
  },
  signatureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    padding: 10,
    margin: 10, 
    textAlign: 'center'
  },
  linkStyle: {
      padding: 5,
      fontSize: 12,
  },
  formField: {
    marginBottom: 20
  }
}));

export default function Admin(props) {
    const classes = useStyles();
    const [error, setError] = useState('')
    const [errorA, setErrorA] = useState('')
    const [list, setList] = useState([]);
    const [check, setCheck] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [guide, setGuide] = React.useState();
    const [ttc, setTtc] = React.useState();
    const [ttt, setTtt] = React.useState();
    const [vehicle, setVehicle] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [from, setFrom] = React.useState();
    const [to, setTo] = React.useState();
    const [fromA, setFromA] = React.useState([])
    const [lgas, setLgas] = React.useState([])
    const [lga, setLga] = React.useState()
    const [toB, setToB] = React.useState([])
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const onPhoneChanged = e => setPhone(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const onNameChanged = e => setName(e.target.value)

    const _handleKeyDownSubmit = (e) => {
      if (e.key === 'Enter') {
        handleSave()
      }
    } 


    const handleChangeLga = (event) => {
        setLga(event.target.value);
    };
    
    const handleClickOpen = () => {
    setOpen(true);
    };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  
    const fetchGuides = async () => {
  
      const res = await adminList()
      const lgas = await lgaList()
      setCheck(false)
      setLgas(lgas)
    
      if(res){
        if(res.error_message){
          setErrorA(res.error_message)
        }else{
          setList(res)
        }
        
     }else{
      setError('Empty list, start adding guides now')
     }
      
    }

    if(check){
      fetchGuides()
    }
    
    const handleSave = async() => {
  
     setError('')
     setList([])
     const res = await newAdmin(name, phone, password, lga)
     if(res){
        if(res.error_message){
          setError(res.error_message)
        }else{
          setList(res)
          setOpen(false)
        }
        
     }else{
      setError('Oops something broke, refresh and try again')
     }
  
  }

  return (
    <div>
      <div style={{ margin: 0, marginBottom: 200}}>
        <InnerNavbar guide={true}/> 
      </div>
        <Box>
            <h3 style={{color: 'gray', textAlign: 'center', margin: 10}}>Manage Admins</h3>
        </Box> 

        <Grid className="new-location" direction="column" justify="center" alignItems="center">
        
        <Grid style={{width: 300}} direction="column" justify="center" alignItems="center">
          <Button1 handleClick={handleClickOpen} style={{width: 250}} title="Create New Admin"/>
          <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose} aria-labelledby="form-dialog-edit">
            <DialogTitle id="form-dialog-title">Create New Admin</DialogTitle>
            <DialogContent>
            <DialogContentText>
                A new admin can add users to the platform.
            </DialogContentText>

            <Grid className={classes.formField}>
            <FormControl className={classes.formControl}>
                <InputLabel id="from">LGA</InputLabel>
                <Select
                  labelId="lga"
                  id="lga"
                  style={{minWidth: 300}}
                  required
                  value={lga}
                  onChange={handleChangeLga}
                >
                {lgas.map(item =>
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                )}
                </Select>
            </FormControl>
            </Grid>

            <Grid className={classes.formField}>  
                <TextField 
                autoFocus 
                id="name" 
                label="Full Name" 
                onChange={onNameChanged}
                required fullWidth/>
            </Grid>

            <Grid className={classes.formField}>  
                <TextField 
                autoFocus 
                id="phone" 
                label="Phone" 
                onChange={onPhoneChanged}
                required fullWidth/>
            </Grid>

            <Grid className={classes.formField}>  
                <TextField 
                  autoFocus 
                  id="password" 
                  label="Password" 
                  type="password"
                  onChange={onPasswordChanged}
                  onKeyDown={(e) => _handleKeyDownSubmit(e)} 
                  required fullWidth
                  />
            </Grid>

            <p style={{color: '#ff0000'}}>{error}</p>

          </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={() => handleSave()} color="primary">
                Submit
            </Button>
        </DialogActions>
        </Dialog>
        </Grid>
        </Grid>

        <Grid>
          <Box>
            <h4 style={{color: 'gray', textAlign: 'center', margin: 10}}>Admins ({list.length})</h4>
          </Box> 

          <Grid container direction="column" justify="center" alignItems="center">
            <p style={{textAlign: 'center', color: '#ff0000'}}>{errorA}</p>
          </Grid>

          {list.map(item =>
          <Grid container direction="column" justify="center" alignItems="center">
            <AdminItem item={item}/>
          </Grid>
          )} 
        
        </Grid>
        
    </div>
  );
}