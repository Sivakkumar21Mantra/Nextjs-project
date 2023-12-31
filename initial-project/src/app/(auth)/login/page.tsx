"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";

// import { useRouter } from "src/routes/hooks";

import { bgGradient } from "../../../../src/theme/css";
import Logo from "../../../../src/components/logo";
import Iconify from "../../../../src/components/iconify";
import { authService } from "@/app/_service/authService";
import CustomDialog from "@/components/customDialogModal/CustomDialog";

const login = () => {
  var email: string = "";
  var password: string = "";
  const router = useRouter();
  const [openDg, setOpenDg] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [dialogName, setDialogName] = useState("");
  const [customClass, setCustomClas] = useState("");

  var obj = {
    email: "",
    password: "",
  };

  function handleChange(event: any) {
    const { name, value } = event.target;

    obj = { ...obj, [name]: value };
  }
  const theme = useTheme();

  // const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    setisLoading(true);
    const res = await authService(email, password)
      .then((res) => {
        setisLoading(false);
        console.log(res);
        router.push("/details");
      })
      .catch((err) => {
        setisLoading(false);
        router.push("/pagenotfound");
      });

    //   router.push('/dashboard');
  };
  const openDialog = (dgName: string, customClass: string) => {
    setOpenDg(true);
    setDialogName(dgName);
    setCustomClas(customClass);
  };
  function handleClose(event: any, reason: any) {
    if (reason === "backdropClick") return;
    setOpenDg(false);
  }

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          InputProps={
            {
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <IconButton
              //       onClick={() => setShowPassword(!showPassword)}
              //       edge="end"
              //     >
              //       <Iconify
              //         icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
              //       />
              //     </IconButton>
              //   </InputAdornment>
              // ),
            }
          }
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "blue" }}
        color="primary"
        onClick={handleClick}
        loading={isLoading}
      >
        Login
      </LoadingButton>
      <Button onClick={() => openDialog("default", "default-dialog")}>
        Open Dialog
      </Button>
      <Button onClick={() => openDialog("form-dialog", "form-dialog")}>
        Form Dialog
      </Button>
      <CustomDialog
        _isOpen={openDg}
        handleClose={handleClose}
        dialogName={dialogName}
        customStyle={customClass}
      />
      <CustomDialog
        _isOpen={openDg}
        handleClose={handleClose}
        dialogName={dialogName}
        customStyle={customClass}
      />
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      {/* <Logo /> */}

      <div className="flex items-center justify-center">
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Minimal</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              {/* <Iconify icon="eva:google-fill" color="#DF3E30" /> */}
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              {/* <Iconify icon="eva:facebook-fill" color="#1877F2" /> */}
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              {/* <Iconify icon="eva:twitter-fill" color="#1C9CEA" /> */}
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </div>
    </Box>
  );
};

export default login;
