import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Tooltip from '@mui/material/Tooltip';
import { BASE_URL } from '../api/userApi';
import { Button } from '@mui/material';

const FriendList = ({ friends }) => {
    return (
        <>
            {friends.map((item) => (
                <ListItem
                    key={item._id} // Ensure each item has a unique key
                    secondaryAction={
                        <Tooltip title="Chat" placement="right-start">
                            <IconButton edge="end" aria-label="chat" onClick={() => handleAddFriend(item._id)}>
                                chat
                            </IconButton>
                        </Tooltip>
                    }
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: "40px", width: "40px" }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.userId.name}
                    />
                </ListItem>
            ))}
        </>
    );
};

const ExploreList = ({ explores, handleAddFriend }) => {
    return (
        <>
            {explores.map((item) => (
                <ListItem
                    key={item._id} // Ensure each item has a unique key
                    secondaryAction={
                        <Tooltip title="Add Friend" placement="right-start">
                            <IconButton edge="end" aria-label="add" onClick={() => handleAddFriend(item._id)}>
                                <PersonAddIcon />
                            </IconButton>
                        </Tooltip>
                    }
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: "40px", width: "40px" }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                    />
                </ListItem>
            ))}
        </>
    );
};

const RequestsList = ({ requests, handleAcceptRequest }) => {
    console.log("RequestList --> "+JSON.stringify(requests))
    return (
        <>
            {requests.map((item) => (
                <ListItem
                    key={item._id} // Ensure each item has a unique key
                    secondaryAction={
                        <Tooltip title="Accept" placement="right-start">
                            <IconButton edge="end" aria-label="accept">
                                <Button onClick={()=>handleAcceptRequest(item._id)}>Accept</Button>
                            </IconButton>
                        </Tooltip>
                    }
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: "40px", width: "40px" }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.sender.name}
                    />
                </ListItem>
            ))}
        </>
    );
};

const ListItems = ({ listValues, type, setAllFriends }) => {
    console.log("listValues :--> " + JSON.stringify(listValues));
    const token = localStorage.getItem('token'); // Make sure 'token' is the string key

    const handleAddFriend = async (friend_id) => {
        const AddFriendResponse = await fetch(`${BASE_URL}/user/add-friend`, {
            method: 'Post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId: friend_id })
        })
        const AddFriendResponseData = await AddFriendResponse.json()
        setAllFriends((prev) => [AddFriendResponseData.data, ...prev])
        console.log(JSON.stringify(AddFriendResponseData.data));

    }

    const handleAcceptRequest = async (request_id)=>{
        const AcceptFriendResponse = await fetch(`${BASE_URL}/user/accept-friend-request`, {
            method: 'Post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ _id: request_id })
        })
        const acceptFriendResponseData = await AcceptFriendResponse.json()
        console.log("Recieved Data after accept --> "+JSON.stringify(acceptFriendResponseData))
    }
    return (
        <List>
            {
                (listValues && listValues.length > 0)
                    ?
                    (() => {
                        switch (type) {
                            case 'friends':
                                return <FriendList friends={listValues} />;
                            case 'requests':
                                return <RequestsList requests={listValues}  handleAcceptRequest={handleAcceptRequest}/>;
                            case 'explore':
                                return <ExploreList explores={listValues} handleAddFriend={handleAddFriend} />;
                            default:
                                return <div>Nothing To Show !</div>;
                        }
                    })()
                    :
                    null
            }
        </List>
    )

}

export default ListItems;