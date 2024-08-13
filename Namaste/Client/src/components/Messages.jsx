import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ChattingDetails from './ChattingDetails'
import { useSelector } from 'react-redux';
import { socket, connectSocket } from '../utils/socket';
import { Divider } from '@mui/material';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import FriendsDialog from './FriendsDialog'
import { BASE_URL } from '../api/userApi';

export default function BasicGrid() {
    const [clickedUser, setClickedUser] = React.useState(undefined)
    const [allUsers, setAllUsers] = React.useState([]);
    const [allFriends, setAllFriends] = React.useState([]);
    const [allRequests, setAllRequests] = React.useState([]);
    let user = useSelector((state) => state.user);
    let user_id = user._id;
    React.useEffect(() => {
        if (user) {
            window.onload = function () {
                if (!window.location.hash) {
                    window.location = window.location + "#loaded";
                    window.location.reload()
                }
            }
            if (!socket) {
                connectSocket(user_id)
            }
        }
        const getUserDetails = async () => {
            const token = localStorage.getItem('token'); // Make sure 'token' is the string key

            const getAllUsersResponse = await fetch(`${BASE_URL}/user/get-users`)
            const getAllUSersData = await getAllUsersResponse.json();
            setAllUsers(getAllUSersData.data);

            const getAllUserFriendsResponse = await fetch(`${BASE_URL}/user/get-friends`, {
                method: "Get",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const getAllUserFriendsData = await getAllUserFriendsResponse.json();
            console.log("All frineds :--> " + JSON.stringify(getAllUserFriendsData.data))
            setAllFriends(getAllUserFriendsData.data);

            const getAllFriendRequestsResponse = await fetch(`${BASE_URL}/user/get-friend-request`, {
                method: "Get",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const getAllFriendRequestsData = await getAllFriendRequestsResponse.json();
            setAllRequests(getAllFriendRequestsData.data);
        }
        getUserDetails();

    }, [user, socket])
    return (
        <Grid container spacing={2} sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <Grid item xs={12} md={3.5} sx={{ height: "100%" }} >
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px", marginBottom: "15px" }}>
                    <h2>Chats</h2>
                    <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", color: "rgba(79, 79, 79, 1)" }}>
                        <FriendsDialog allFriends={allFriends} allUsers={allUsers} allRequests={allRequests} setAllFriends={setAllFriends} />
                        <DonutLargeOutlinedIcon sx={{ margin: "0px 10px" }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ borderRadius: "10px", backgroundColor: "black", padding: "12px 5px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10px", marginBottom: "10px" }}>
                    <ul style={{ display: "flex", justifyContent: "space-between", listStyle: "none" }}>
                        <li><NavLink className='storiesNavItems'>Direct</NavLink></li>
                        <li><NavLink className='storiesNavItems'>Group </NavLink></li>
                        <li><NavLink className='storiesNavItems'>Archived</NavLink></li>
                    </ul>
                </Grid>
                <Divider />
                <Grid item xs={12} sx={{ height: "100%", overflowY: 'scroll' }} id="messagesContainer">
                    {
                        allFriends.length > 0
                            ?
                            allFriends.map((friend) => {
                                return (
                                    friend.status == 'true' &&
                                    <Box sx={{ borderRadius: "8px", margin: "5px 2px", padding: "14px 1px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: clickedUser === "Ghappi Nayak" ? "#a2a6f5" : "whitesmoke" }} onClick={() => setClickedUser('Ghappi Nayak')}>
                                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: "40px", width: "40px" }} />
                                        <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
                                            <Box sx={{ marginLeft: "30px", display: "flex", justifyContent: "space-between" }}>
                                                <p> {friend.userId.name}</p>
                                                <sub style={{ color: "grey" }}>yesterday</sub>
                                            </Box>
                                            <Box sx={{ marginLeft: "30px", marginRight: "10px" }}>
                                                <p>thanks for sharing ?</p>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                            :
                            null
                    }

                </Grid>
            </Grid>
            <Grid item xs={12} md={8.5} sx={{ height: "100%", backgroundColor: "rgba(239, 242,249, 1)" }}>
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
