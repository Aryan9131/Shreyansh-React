import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ChattingDetails from './ChattingDetails'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const [clickedUser, setClickedUser]=React.useState(undefined)
    return (
            <Grid container spacing={2} sx={{width:"100%", flexGrow: 1, overflow:"hidden"}}>
                <Grid item xs={12} md={4} >
                    <Grid xs={12} >
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "10px 0px" }}>
                            <ul id="storiesNav">
                                <li><NavLink className='storiesNavItems'>Direct Messages</NavLink></li>
                                <li><NavLink className='storiesNavItems'>Group Chat</NavLink></li>
                                <li><NavLink className='storiesNavItems'>Archived</NavLink></li>
                            </ul>
                        </Grid>
                        <Grid xs={12} sx={{ height: "70vh", overflowY: 'auto' }} id="messagesContainer">
                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor:clickedUser==="Aryan Nayak" ? "#a2a6f5" : "whitesmoke" }}  onClick={()=>setClickedUser('Aryan Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Aryan Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:clickedUser==="Riya Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Riya Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Riya Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:clickedUser==="Sweety Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Sweety Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Sweety Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>

                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:clickedUser==="Yashu Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Yashu Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Yashu Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor:clickedUser==="Darsh Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Darsh Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Darsh Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor:clickedUser==="Putti Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Putti Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Putti Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>
                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:clickedUser==="Shree Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Shree Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Shree Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:clickedUser==="Vibhu Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Vibhu Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Vibhu Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>

                            <Box sx={{borderRadius:"8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center",backgroundColor:clickedUser==="Ghappi Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={()=>setClickedUser('Ghappi Nayak')}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                                    <Box sx={{ marginLeft: "30px" }}>
                                        <p> Ghappi Nayak </p>
                                        <p>thanks for sharing ?</p>
                                    </Box>
                                </Box>
                                <Box sx={{ marginRight: "10px" }}>
                                    <p>yesterday</p>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} sx={{height:"90vh"}}>
                    <Box sx={{ height: "100%", overflow:"hidden", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center" }}>
                         {
                            clickedUser
                            ? 
                             <ChattingDetails clickedUser={clickedUser}/>
                            :
                            <>
                               <Box sx={{ backgroundColor: "rgba(246, 247,246, 1)", borderRadius:"55px"}}>
                                  <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/66058bee22351b0015665eac/66064a39a7ab70001723c02a/66361aecdc6da000172a67f6/appSource/images/img_lock_gray_500.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240616%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240616T174209Z&X-Amz-Expires=25200&X-Amz-Signature=a5bc049e66a80772c5a5d003b3d16b5430a3be81800c095ee59603c324aa74df&X-Amz-SignedHeaders=host" alt="" style={{width:"80px", padding:"40px 50px"}} />
                               </Box>
                                <h1>
                                    It's nice to chat with someone
                                </h1>
                                <p>
                                    Pick a person from left menu and start your conversation
                                </p>
                            </>
                         }
                    </Box>
                </Grid>
            </Grid>
    );
}
