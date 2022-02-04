import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import { useTranslation } from 'react-i18next';

export default function OTPInput({ handleChange }) {
    const { t } = useTranslation();
    return (
        <div style={{
            textAlign: 'center',
            marginTop: '35vh',
            background: "#FFFFFF",
            paddingTop: '10px',
            paddingBottom: "10px"
        }}>
            <TextField
                id="outlined-textarea"
                style={{ width: '100%', marginLeft: 5, marginRight: 5 }}
                label={t("Enter OTP")}
            />
            <Button
                variant="outlined"
                onClick={handleChange}
                style={{ width: '100%', marginLeft: 5, marginRight: 5, marginTop: 10 }}>
                {t("Submit OTP")}
            </Button>
        </div>
    )
}
