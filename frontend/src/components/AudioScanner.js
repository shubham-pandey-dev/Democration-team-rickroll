import { useEffect, useState } from "react";
import RecordingIcon from '../images/recording.gif'
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import { useTranslation } from 'react-i18next';
import { getText } from "../apis/voiceToText";
const style = {
    textAlign: 'center'
}

export default function AudioScanner({ handleChange }) {

    const { t } = useTranslation();
    const [isRecording, setIsRecording] = useState(true);
    const [recorder, setRecorder] = useState(null);
    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        // Lazily obtain recorder first time we're recording.
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }

        // Obtain the audio when ready.
        const handleData = e => {
            getText(e.data)
                .then(data => {
                    setTextValue(data.text.replace('.', ''))
                });
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);

    const startRecording = () => {
        setIsRecording(true);
        setTextValue('');
    };

    const stopRecording = () => {
        setIsRecording(false);
    };



    return (<div style={style}>
        {isRecording ? <div>
            <img src={RecordingIcon} width="100" />
            <p>{t('recording')}....</p>
            <IconButton color="error" onClick={stopRecording}>
                <StopCircleIcon style={{ fontSize: '50px' }} />
            </IconButton>
        </div> : <div>
            <IconButton color="error" onClick={startRecording}>
                <ReplayIcon style={{ fontSize: '50px' }} />
            </IconButton>
            <br />
            {textValue ? <Chip
                style={{
                    fontSize: '20px',
                    margin: '10px'
                }}
                color='primary'
                label={textValue}
                onDelete={() => handleChange(textValue)}
                deleteIcon={<DoneIcon />} /> : null}

        </div>}

    </div>)
}

async function requestRecorder() {
    await register(await connect());
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream, { mimeType: 'audio/wav' });
}
