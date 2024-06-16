import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1, height: "100vh" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} >
                    <Grid xs={12} >
                        <Grid xs={12} sx={{ margin: "20px 2px" }}>
                            <h1>Inbox :</h1>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "10px 0px" }}>
                            <ul id="storiesNav">
                                <li><NavLink className='storiesNavItems'>Direct Messages</NavLink></li>
                                <li><NavLink className='storiesNavItems'>Group Chat</NavLink></li>
                                <li><NavLink className='storiesNavItems'>Archived</NavLink></li>
                            </ul>
                        </Grid>
                        <Grid xs={12} sx={{ height: "80vh", overflowY: 'auto' }} id="messagesContainer">
                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

                            <Box sx={{ margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} >
                    <Item sx={{ height: "100vh", overflowY: 'auto', display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center" }}>
                        <Box sx={{ backgroundColor: "rgba(246, 247,246, 1)", borderRadius:"55px"}}>
                        <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/66058bee22351b0015665eac/66064a39a7ab70001723c02a/66361aecdc6da000172a67f6/appSource/images/img_lock_gray_500.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240616%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240616T174209Z&X-Amz-Expires=25200&X-Amz-Signature=a5bc049e66a80772c5a5d003b3d16b5430a3be81800c095ee59603c324aa74df&X-Amz-SignedHeaders=host" alt="" style={{width:"80px", padding:"40px 50px"}} />
                        </Box>
                        <h1>
                            It's nice to chat with someone
                        </h1>
                        <p>
                            Pick a person from left menu and start your conversation
                        </p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
