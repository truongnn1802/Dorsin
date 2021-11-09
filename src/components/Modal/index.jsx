import React from "react";
import "./style.css";

function Modal({ open,onClose }) {
  const hiddenRef = React.useRef();

  const hiddenModal = () => {
    hiddenRef.current.classList.remove("modal-visible");
    if(!onClose) return
    onClose(false)
  };

  if(open){
    hiddenRef.current.classList.add("modal-visible");
    console.log(open);
  }

 
  return (
    <>
      <div id="modal" ref={hiddenRef} onClick={hiddenModal}>
        <div className="section-video">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/Wgt99n-S1L8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <span 
          class="close"
        ></span>
        </div>
      </div>
    </>
  );
}

export default Modal;
