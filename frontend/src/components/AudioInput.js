import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';
import AudioScanner from './AudioScanner';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AudioInput({ handleChange }) {

    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div style={{ textAlign: 'center', marginTop: 10 }}>
        <IconButton
            edge="end"
            color="primary"
            onClick={handleOpen}
        >
            <SettingsVoiceIcon style={{ fontSize: '50px' }} />
            <br />
            <Typography variant="caption" display="block" gutterBottom>
                {t('Search by Voice')}
            </Typography>
        </IconButton>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AudioScanner handleChange={(value) => {
                    handleChange(value);
                    handleClose();
                }} />
            </Box>
        </Modal>

    </div>)
}
