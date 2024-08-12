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
const ListItems = ({ listValues , type}) => {
    console.log("listValues :--> "+JSON.stringify(listValues));
    const token = localStorage.getItem('token'); // Make sure 'token' is the string key

    const handleAddFriend=async (friend_id)=>{
        const AddFriendResponse=await fetch(`&{BASE_URL}/user/add-friend`,{
            method:'Post',
            headers:{
                'Content-type':'application/json',
                'Autherization':`Bearer ${token}`
            }
        })
        const AddFriendResponseData=await AddFriendResponse.json()
        console.log(JSON.stringify(AddFriendResponseData));
    }
    return (
        <List>
            {
                (listValues && listValues.length > 0)
                ?
                listValues.map((item) => {
                    return (
                        <ListItem
                            secondaryAction={
                                (item!='requests' && item.friendStatus=='false') ?
                                    <Tooltip title="Add Friend" placement="right-start">
                                        <IconButton edge="end" aria-label="delete" onClick={()=>handleAddFriend(item._id)}>
                                            <PersonAddIcon />
                                        </IconButton>
                                    </Tooltip>
                                :
                                (item!='requests' && item.friendStatus=='pending') ?
                                <Tooltip title="Add Friend" placement="right-start">
                                    <IconButton edge="end" aria-label="delete" onClick={()=>handleAddFriend(item._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                                :
                                null
                            }
                        >
                            <ListItemAvatar>
                                   <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: "40px", width: "40px" }} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={type=='requests' ? item.from : item.name}
                            />
                        </ListItem>
                    )
                })
                :
                null
            }
        </List>
    )

}

export default ListItems;