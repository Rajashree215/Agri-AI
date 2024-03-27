import React, { useState } from "react";
import InputCard from "../../components/common/InputCard";
import { FpasswordStyles } from "./style";
import axios from "axios";
import { apiurl } from "../../ApiUrl";
import Toaster from "../../components/common/Toaster";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/routerConstant";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [pass, setPass] = useState({
    pwd: "",
    cpwd: "",
  });
  const [inputotp, setInputotp] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  const [severity, setSeverity] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  // Step 1(Email Verification)
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = async () => {
    if (email.trim() !== "") {
      const res = await axios.post(
        `${apiurl}/otpVerification/verifyEmail.php`,
        {
          email: email,
        }
      );

      // checking if email exists in db and email is not empty
      if (res.data.msg === "Proceed") {
        const resotp = await axios.post(`${apiurl}/otpVerification/otp.php`, {
          email: email,
        });
        console.log(resotp.data);
        console.log(resotp.data.otp);
        setOtp(`${resotp.data.otp}`);
        setStep(step + 1);
      } else {
        setMsg("No Email Found! Please Register");
        setShowToaster(true);
        setSeverity("error");
        setTimeout(() => {
          setShowToaster(false);
        }, 5000);
      }
    } else {
      setMsg("Enter Email");
      setShowToaster(true);
      setSeverity("error");
      setTimeout(() => {
        setShowToaster(false);
      }, 5000);
    }
  };

  // Step 2 (OTP Verification)
  const handleOtp = (e) => {
    setInputotp(e.target.value);
  };

  const handleOtpVerify = () => {
    if (otp === inputotp) {
      setMsg("OTP Verified!");
      setSeverity("success");
      setShowToaster(true);

      setTimeout(() => {
        setStep(step + 1);
        setShowToaster(false);
      }, 3000);
    } else {
      setMsg("Incorrect OTP. Enter correctly");
      setSeverity("error");
      setShowToaster(true);

      setTimeout(() => {
        setShowToaster(false);
      }, 5000);
    }
  };

  // Step 3(Password Update)
  const handlePassword = (e) => {
    const iname = e.target.name;
    const ivalue = e.target.value;
    setPass((prevData) => ({
      ...prevData,
      [iname]: ivalue,
    }));
  };

  const handlePasswordUpdate = async () => {
    if (pass.pwd.trim() !== "" && pass.cpwd.trim() !== "") {
      if (pass.pwd === pass.cpwd) {
        const res = await axios.post(`${apiurl}/passwordUpdate.php`, {
          email: email,
          pass: pass.pwd,
        });

        if (res.data.msg === "OK") {
          setMsg("Password Updated!");
          setSeverity("success");
          setShowToaster(true);

          setTimeout(() => {
            setShowToaster(false);
            navigate(PATH.LOGIN);
          }, 3000);
        } else {
          setMsg("Error updating password");
          setSeverity("error");
          setShowToaster(true);

          setTimeout(() => {
            setShowToaster(false);
          }, 5000);
        }
      } else {
        setMsg("Password doesn't match");
        setSeverity("error");
        setShowToaster(true);

        setTimeout(() => {
          setShowToaster(false);
        }, 5000);
      }
    } else {
      setMsg("Enter all the fields");
      setSeverity("error");
      setShowToaster(true);

      setTimeout(() => {
        setShowToaster(false);
      }, 5000);
    }
  };

  return (
    <FpasswordStyles>
      {step === 1 && (
        <InputCard
          boxclass="fpwdbox"
          cardclass="card"
          typomsg="Enter your Mail Id to send OTP"
          typoclass="typoclass"
          data={[
            {
              name: "email",
              label: "Mail Id",
              type: "email",
              value: email,
              placeholder: "Enter your mail Id",
            },
          ]}
          handleChange={handleChange}
          handleClick={handleClick}
          btnclass="submitbtn"
          btnname="Send OTP"
        />
      )}

      {step === 2 && (
        <InputCard
          boxclass="fpwdbox"
          cardclass="card"
          typomsg="Enter the OTP"
          typoclass="typoclass"
          data={[
            {
              name: "otp",
              label: "OTP",
              type: "text",
              value: inputotp,
              placeholder: "Enter your mail Id",
            },
          ]}
          maxLength={6}
          handleChange={handleOtp}
          handleClick={handleOtpVerify}
          btnclass="submitbtn"
          btnname="Submit"
        />
      )}

      {step === 3 && (
        <InputCard
          boxclass="fpwdbox"
          cardclass="card"
          typomsg="Enter new password"
          typoclass="typoclass"
          data={[
            {
              name: "pwd",
              label: "Password",
              value: pass.pwd,
              type: "password",
            },
            {
              name: "cpwd",
              label: "Confirm Password",
              value: pass.cpwd,
              type: "password",
            },
          ]}
          maxLength={6}
          handleChange={handlePassword}
          handleClick={handlePasswordUpdate}
          btnclass="submitbtn"
          btnname="Update Password"
        />
      )}

      {showToaster && (
        <Toaster show={showToaster} severity={severity} msg={msg} />
      )}
    </FpasswordStyles>
  );
}
