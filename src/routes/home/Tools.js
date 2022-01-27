// import React from 'react';
import { RiAddFill } from "react-icons/ri";

import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io5";

const StyledWrapper = styled.div`
  padding: 0 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  > hr {
    border: none;
    width: 40%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
  .tools {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .tool,
    .add {
      cursor: pointer;
      gap: 9px;
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #4b5563;
    }
    .tool {
      .logo {
        border-radius: 5.5px;
        background: #fff;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
          width: 21px;
          height: 21px;
        }
      }
      .title {
        white-space: nowrap;
      }
      &.add .logo {
        background: none;
        .icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;
export default function Tools({ collaspe = false }) {
  return (
    <StyledWrapper>
      <hr />
      <ul className="tools">
        <li className="tool">
          <div className="logo">
            <img
              className="icon"
              src="https://static.nicegoodthings.com/project/ext/webrowse.logo.png"
              alt="logo"
            />
          </div>
          {!collaspe && <h2 className="title">Webrowse</h2>}
        </li>
        <li className="tool">
          <div className="logo">
            <IoLogoGithub size={40} className="icon" />
          </div>
          {!collaspe && <h2 className="title">Github</h2>}
        </li>
        <li className="tool add">
          <div className="logo">
            <RiAddFill className="icon" size={40} color="#4B5563" />
          </div>
          {!collaspe && <h2 className="title">Add new app</h2>}
        </li>
      </ul>
    </StyledWrapper>
  );
}
