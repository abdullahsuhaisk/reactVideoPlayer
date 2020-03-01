import React, { useState } from "react";
import { ModalWrapper } from "./Modal.style";
// import { relative } from "path";

function Modal({ children, header }) {
  const [showModal, setshowModal] = useState(true);
  return (
    <ModalWrapper
      styles={showModal ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-background">
        <div className="modal-header">
          {header}
          <span id="close" onClick={() => setshowModal(false)}>
            &times;
          </span>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </ModalWrapper>
  );
}

export default Modal;
