import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductItem({ product,
    isSelectAble = false,
    isSelected = false,
    unSelectItem,
    selectItem,
    updateSelectedItem,
    selectedItem,
    isEditable }) {

    const { t } = useTranslation();

    const { id, thumbnail_image, name, description, mrp_price, selling_price, quantity } = product;

    const isFieldEditable = () => {
        return isSelectAble && isSelected
    }

    return (
        <Card sx={{ display: 'flex', marginBottom: 2, marginTop: 2, position: 'relative' }}>
            {
                isSelectAble ? (<div style={{
                    position: 'absolute',
                    right: 0,
                    top: -5
                }}>
                    {
                        isSelected ?
                            (<IconButton color="primary" onClick={() => unSelectItem({
                                id
                            })}>
                                <CheckBoxIcon />
                            </IconButton>) :
                            (<IconButton color="primary" onClick={() => selectItem({
                                id,
                                name,
                                mrp_price
                            })}>
                                <CheckBoxOutlineBlankIcon />
                            </IconButton>)
                    }

                </div>) : null
            }
            {
                isEditable ? (
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        top: -5
                    }}><IconButton color="primary">
                            <EditIcon />
                        </IconButton></div>
                ) : null
            }
            <Grid container>
                <Grid item xs={4}><CardMedia
                    component="img"
                    sx={{ width: "100%" }}
                    image={thumbnail_image}
                    alt={name}
                /></Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="subtitle2">
                                {name}
                            </Typography>
                            <Typography variant="caption" color="body2" component="div">
                                {description}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '90%' }}>
                                        <Input
                                            id="standard-adornment-weight"
                                            value={mrp_price}
                                            disabled={true}
                                            startAdornment={<InputAdornment position="end">₹</InputAdornment>}
                                            aria-describedby="standard-weight-helper-text"
                                            inputProps={{
                                                'aria-label': t('MRP Price'),
                                            }}
                                        />
                                        <FormHelperText id="standard-weight-helper-text">{t('MRP Price')}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '90%' }}>
                                        <Input
                                            id="standard-adornment-weight"
                                            value={isFieldEditable() ? selectedItem['sellingPrice'] : selling_price}
                                            onChange={(e) => updateSelectedItem(id, 'sellingPrice', e.target.value)}
                                            disabled={!isFieldEditable()}
                                            startAdornment={<InputAdornment position="end">₹</InputAdornment>}
                                            aria-describedby="standard-weight-helper-text"
                                            inputProps={{
                                                'aria-label': t('Selling Price'),
                                            }}
                                        />
                                        <FormHelperText id="standard-weight-helper-text">{t('Selling Price')}</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '90%' }}>
                                        <Input
                                            id="standard-adornment-weight"
                                            value={isFieldEditable() ? selectedItem['quantity'] : quantity}
                                            onChange={(e) => updateSelectedItem(id, 'quantity', e.target.value)}
                                            disabled={!isFieldEditable()}
                                            aria-describedby="standard-weight-helper-text"
                                            inputProps={{
                                                'aria-label': t('Quantity'),
                                            }}
                                        />
                                        <FormHelperText id="standard-weight-helper-text">{t('quantity')}</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}