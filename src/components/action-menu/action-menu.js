import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';


const ActionMenu = props => {

    const viewuser = (id) => {
        console.log(JSON.stringify(id)+" view");
    }

    const deleteuser = (id) => {
        console.log(JSON.stringify(id)+"  delete");
    }

    return <div>
        <IconButton
            aria-label="more"
            id="long-button"
            aria-controls="long-menu"
            aria-expanded={Boolean(props.menuPopupState) ? 'true' : undefined}
            aria-haspopup="true"
            onClick={props.openactionmenu}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button' }}
            anchorEl={props.menuPopupState} open={Boolean(props.menuPopupState)} onClose={props.closemenupopup} PaperProps={{
                style: { maxHeight: 48 * 4.5, width: '20ch' },
            }}
        >
            <MenuItem key={'view'} onClick={() => viewuser(props.row)}>
                View
            </MenuItem>
            <MenuItem key={'delete'} onClick={() => deleteuser(props.row)}>
                Delete
            </MenuItem>
        </Menu>
    </div>
}

export default ActionMenu;