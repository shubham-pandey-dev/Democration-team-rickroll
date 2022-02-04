import { Fragment, useState } from "react";

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';

import TranslateIcon from '@mui/icons-material/Translate';

function Translation() {

    const { t, i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<Fragment>

        <IconButton
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <TranslateIcon />
        </IconButton>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => i18n.changeLanguage('en')}>{t('english')}</MenuItem>
            <MenuItem onClick={() => i18n.changeLanguage('hi')}>{t('hindi')}</MenuItem>
        </Menu>
    </Fragment>
    );
}

export default Translation;
