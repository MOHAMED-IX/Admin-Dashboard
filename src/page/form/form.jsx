import React from 'react';
import Header from "../../components/Header";
import { Box, Button, MenuItem, Stack, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useTheme } from "@mui/material";

export default function Form() {
  const theme = useTheme();

  const data = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Manager', label: 'Manager' },
    { value: 'User', label: 'User' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('success');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const onSubmit = () => {
    setMessage('Account created successfully');
    setSeverity('success');
    setOpen(true);
    reset();
  };

  const onError = () => {
    setMessage('Please fix the errors before submitting');
    setSeverity('error');
    setOpen(true);
  };

  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Box
        onSubmit={handleSubmit(onSubmit, onError)}
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={2}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? "First name must be at least 3 characters" : null}
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? "Last name must be at least 3 characters" : null}
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={errors.email ? "Please enter a valid email" : null}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.phone)}
          helperText={errors.phone ? "Please enter a valid phone" : null}
          {...register("phone", { required: true, pattern: phoneRegExp })}
          label="Contact Number"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.address1)}
          helperText={errors.address1 ? "Address 1 is required" : null}
          {...register("address1", { required: true })}
          label="Address 1"
          variant="filled"
        />
        <TextField
          {...register("address2")}
          label="Address 2"
          variant="filled"
        />

        <TextField
          variant="filled"
          select
          label="Role"
          defaultValue="User"
          error={Boolean(errors.role)}
          helperText={errors.role ? "Please select your role" : " "}
          {...register("role", { required: true })}
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained" sx={{ textTransform: 'capitalize' }}>
            Create New User
          </Button>
        </Box>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            // @ts-ignore
            severity={severity}
            variant="filled"
            sx={{ width: '100%', color: 'white', bgcolor: severity === 'success' ? theme.palette.success.dark : theme.palette.error.dark }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
