import React, { useEffect, useState } from "react";
import Quagga from "quagga";
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import "./BarcodeScanner.css";

const Scanner = ({ handleChange }) => {

    const [barcodeValue, setBarcodeValue] = useState('')

    useEffect(() => {
        Quagga.init({
            "inputStream": {
                name: "Live",
                "type": "LiveStream",
                "constraints": {
                    "width": 260,
                    "height": 200,
                    "facingMode": "environment",
                    "aspectRatio": { "min": 1, "max": 2 }
                }
            },
            area: { // defines rectangle of the detection/localization area
                top: "0%",    // top offset
                right: "0%",  // right offset
                left: "0%",   // left offset
                bottom: "0%"  // bottom offset
            },
            "numOfWorkers": 2,
            "frequency": 1,
            "decoder": {
                "readers": [
                    'code_128_reader',
                    'ean_reader',
                    'ean_8_reader',
                    'code_39_reader',
                    'code_39_vin_reader',
                    'codabar_reader',
                    'upc_reader',
                    'upc_e_reader',
                    'i2of5_reader',
                    'i2of5_reader',
                    '2of5_reader',
                    'code_93_reader']
            },
            "locate": false
        }
            , err => {
                if (err) {
                    console.log(err, "error msg");
                }
                Quagga.start();
                return () => {
                    Quagga.stop()
                }
            });

        Quagga.onDetected(detected);
    }, []);

    const detected = result => {
        setBarcodeValue(result.codeResult.code);
    };

    return (
        // If you do not specify a target,
        // QuaggaJS would look for an element that matches
        // the CSS selector #interactive.viewport
        <div style={{ textAlign: 'center' }}>
            <div id="interactive" className="viewport" />
            {barcodeValue ? <Chip
                style={{
                    fontSize: '20px',
                    margin: '10px'
                }}
                color='primary'
                label={barcodeValue}
                onDelete={() => handleChange(barcodeValue)}
                deleteIcon={<DoneIcon />} /> : null}
        </div>

    );
};

export default Scanner;
