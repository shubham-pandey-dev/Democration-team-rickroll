import Layout from '../layouts/Default';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useTranslation} from 'react-i18next';
import React from "react";
import Typography from "@mui/material/Typography";
import {InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {addStore} from "../apis/backend";
import LocationPicker from 'react-location-picker';

const defaultLocation = {
    lat: 12.9538477,
    lng: 77.3507442
};

function Register() {
    const {t} = useTranslation();
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [location, setLocation] = React.useState(defaultLocation);
    let [shopName, setShopName] = React.useState("");
    const [paymentMode, setPaymentMode] = React.useState([]);
    const [fulfilmentMode, setFulfilmentMode] = React.useState([]);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleShopNameChange = (event) => {
        setShopName(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation({
            lat: event.position.lat,
            lng: event.position.lng,
        });
    };

    const handlePaymentModeChange = (event) => {
        const {
            target: {value},
        } = event;
        setPaymentMode(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleFulfilmentModeChange = (event) => {
        const {
            target: {value},
        } = event;
        setFulfilmentMode(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function handleRegister() {
        addStore({
            "name": shopName,
            "contactNumberList": [phoneNumber],
            "location": {
                "gpsCoordinates": {
                    "longitude": parseFloat(location.lng).toFixed(4),
                    "latitude": parseFloat(location.lat).toFixed(4)
                }
            }

        }).then(storeId => {
            localStorage.setItem('store_id', storeId);
            window.location = "/";
        });

    }

    return (
        <Layout>
            <Box>
                <TextField
                    id="outlined-textarea"
                    fullWidth
                    style={{marginBottom: 5}}
                    label={t("Phone number")}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
                <TextField
                    id="outlined-textarea"
                    fullWidth
                    style={{marginBottom: 5}}
                    label={t("Owner name")}
                />
                <TextField
                    id="outlined-textarea"
                    fullWidth
                    style={{marginBottom: 5}}
                    label={t("Shop name")}
                    value={shopName}
                    onChange={handleShopNameChange}
                />
                <FormControl fullWidth style={{marginBottom: 5}}>
                    <InputLabel id="payment-mode">{t("Payment mode")}</InputLabel>
                    <Select
                        labelId="payment-mode"
                        id="payment-mode"
                        multiple
                        label={t("Payment mode")}
                        value={paymentMode}
                        onChange={handlePaymentModeChange}
                    >
                        <MenuItem value={"UPI"}>{t("UPI")}</MenuItem>
                        <MenuItem value={"Cash"}>{t("Cash")}</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth style={{marginBottom: 5}}>
                    <InputLabel id="fulfilment-mode">{t("Fulfilment mode")}</InputLabel>
                    <Select
                        labelId="fulfilment-mode"
                        id="fulfilment-mode"
                        multiple
                        label={t("Fulfilment mode")}
                        value={fulfilmentMode}
                        onChange={handleFulfilmentModeChange}
                    >
                        <MenuItem value={"In store Pickup"}>{t("In store Pickup")}</MenuItem>
                        <MenuItem value={"Home delivery"}>{t("Home delivery")}</MenuItem>
                    </Select>
                </FormControl>
                <Typography variant="body" display="block" gutterBottom
                            sx={{marginTop: '10px', textAlign: 'left'}}>
                    {t("Select your store location")}
                </Typography>
                <LocationPicker
                    containerElement={<div style={{height: '100%'}}/>}
                    mapElement={<div style={{height: '400px'}}/>}
                    defaultPosition={defaultLocation}
                    onChange={handleLocationChange}
                />
                <Button
                    variant="outlined"
                    onClick={handleRegister}
                    style={{width: '100%', marginLeft: 5, marginRight: 5, marginTop: 10}}
                >{t('Register')}</Button>
                <Typography variant="caption" display="block" gutterBottom
                            sx={{marginTop: '10px', textAlign: 'center'}}>
                    {t("OR")}
                </Typography>
                <Typography variant="button" display="block" gutterBottom onClick={() => window.location = "/login"}
                            sx={{color: '#1976d2', marginLeft: '35vw', marginTop: '10px'}}>
                    {t("Login here")}
                </Typography>
            </Box>
        </Layout>
    );
}

export default Register;
