import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PreviewCatalog({ open, handleClose, selectedProducts, addProductToStore }) {

    const { t } = useTranslation();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        handleClose()
    };

    return (
        <React.Fragment>
            <Drawer
                anchor={'bottom'}
                open={open}
                onClose={toggleDrawer('bottom', false)}
            >
                <Grid container style={{
                    height: '95vh',
                    display: 'block',
                    padding: 10
                }}>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography variant="h6" gutterBottom component="div">
                                {t('Preview Item')}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={handleClose}>
                                <CloseIcon style={{ float: 'right' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ width: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>{t('name')}</TableCell>
                                    <TableCell align="right">{t('Selling Price')}</TableCell>
                                    <TableCell align="right">{t('quantity')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(selectedProducts).map((id) => (
                                    <TableRow
                                        key={selectedProducts[id].name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {selectedProducts[id].name}
                                        </TableCell>
                                        <TableCell align="right">{selectedProducts[id].sellingPrice}</TableCell>
                                        <TableCell align="right">{selectedProducts[id].quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button onClick={addProductToStore} variant="contained" style={{
                        marginTop: 10
                    }}>Add to Store</Button>
                </Grid>
            </Drawer>
        </React.Fragment>
    );
}
