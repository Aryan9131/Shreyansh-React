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
    const [clickedUser, setClickedUser] = React.useState(undefined)
    return (
        <Grid container spacing={2} sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <Grid item xs={12} md={3.5} sx={{ height: "100%" }} >
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "10px" }}>
                    <ul id="storiesNav">
                        <li><NavLink className='storiesNavItems'>Direct</NavLink></li>
                        <li><NavLink className='storiesNavItems'>Group </NavLink></li>
                        <li><NavLink className='storiesNavItems'>Archived</NavLink></li>
                    </ul>
                </Grid>
                <Grid item xs={12} sx={{ height: "100%", overflowY: 'scroll' }} id="messagesContainer">
                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Riya Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Riya Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: "40px", width: "40px" }} />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Riya Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>

                    </Box>

                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Sweety Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Sweety Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Sweety Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Sudeep Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Sudeep Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Sudeep Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Aryan Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Aryan Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Aryan Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Darsh Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Darsh Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Darsh Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Vibhu Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Vibhu Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Vibhu Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Shree Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Shree Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Shree Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Ghappi Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Ghappi Nayak')}>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg"  sx={{ height: "40px", width: "40px" }}  />
                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                <p> Ghappi Nayak </p>
                                <sub style={{color:"grey"}}>yesterday</sub>
                            </Box>
                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                <p>thanks for sharing ?</p>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
            <Grid item xs={12} md={8.5} sx={{ height: "100%",backgroundColor:"rgba(239, 242,249, 1)" }}>
                <Box sx={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    {
                        clickedUser
                            ?
                            <ChattingDetails clickedUser={clickedUser} />
                            :
                            <>
                                <Box sx={{ backgroundColor: "rgba(246, 247,246, 1)", borderRadius: "55px" }}>
                                    <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/66058bee22351b0015665eac/66064a39a7ab70001723c02a/66361aecdc6da000172a67f6/appSource/images/img_lock_gray_500.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240808%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240808T054100Z&X-Amz-Expires=25200&X-Amz-Signature=b580512ca96c978ceeb5a7c227c499b25792d8ed91350bc97374a24911656043&X-Amz-SignedHeaders=host" alt="" style={{ width: "80px", padding: "40px 50px" }} />
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
