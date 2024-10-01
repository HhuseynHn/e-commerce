/** @format */

import React, { useState } from "react";
import { Button, Modal } from "antd";
const RemoveItemModal = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <>
      <Modal
        title="Remove item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Remove"}
        cancelText={"Cancel"}
        okButtonProps={{
          style: { backgroundColor: "red", color: "white" }, // Change background and text color here
        }}
        cancelButtonProps={{
          style: { backgroundColor: "gray", color: "white" }, // Optional: Customize cancel button if needed
        }}>
        <p>Are you sure want to remove this product from the basket?</p>
      </Modal>
    </>
  );
};
export default RemoveItemModal;
