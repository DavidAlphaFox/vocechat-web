// import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { resetAuthData } from "../../app/slices/auth.data";
import { useAppSelector } from "../../app/store";
import Button from "../../common/component/styled/Button";
import useLogout from "../../common/hook/useLogout";
const Styled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #344054;
  }
  .details {
    display: flex;
    flex-direction: column;
    .desc {
      margin: 12px 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #98a2b3;
    }
  }
`;
// type Props = {};

const GuestBlankPlaceholder = () => {
  const dispatch = useDispatch();
  const { clearLocalData } = useLogout();
  const navigateTo = useNavigate();
  const serverName = useAppSelector((store) => store.server.name);
  const handleSignIn = () => {
    dispatch(resetAuthData());
    clearLocalData();
    navigateTo("/login");
  };
  return (
    <Styled>
      <h2 className="title">Welcome to {serverName} server</h2>
      <div className="details">
        <span className="desc">Please sign in to send a message</span>
        <Button onClick={handleSignIn} className="small">{`Sign In`}</Button>
      </div>
    </Styled>
  );
};

export default GuestBlankPlaceholder;
