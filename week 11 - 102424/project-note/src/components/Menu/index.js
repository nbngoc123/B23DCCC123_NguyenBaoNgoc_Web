import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal'

const Menu = () => {
  const arrayMenu = [
    "Trang chủ",
    "Giới thiệu",
    "Sản phẩm",
    "Liên hệ",
    "Đăng ký",
    "Tin tức",
    "Thông tin",
    "Hỗ trợ",
    "Cài đặt",
  ];

  const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #e9eef6; /* Light grey color */
    border-bottom: 1px solid #ddd; /* Subtle bottom border */
    padding: 0.5rem 0; /* Reduce padding to the top and bottom */
    font-size: 0.9rem; /* Reduce font size */
    borderRadius: 0.5rem; /* Add rounded corners */
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1); /* Add subtle shadow */
    width: 100%;
    margin-bottom: 1rem;
  `;

  const MenuItem = styled.li`
    padding: 0.5rem 1rem; /* Reduce padding to the items */
    font-weight: 500; /* Make text slightly bolder */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */

    &:hover {
      background-color: #d3e3fd; /* Change background color on hover */
    }
  `;
  return (
    <MenuList>
      {arrayMenu.map((item, index) => (
        <MenuItem key={index}>
          {item}
        </MenuItem>
      ))}
    </MenuList>
  );
};
export default Menu;