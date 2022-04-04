import Button from "../button/button.component";
import Modal, {ModalBody, ModalFooter, ModalHeader} from "../modal/modal.component";
import React, {useState} from "react";


const ButtonWithConfirmation = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="d-inline-block ml-1 mr-1">
            <Button {...props} onClick={() => setShowModal(true)}>
                {props.children}
            </Button>
            <Modal show={showModal} setShow={setShowModal}>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <p>{props.text}</p>
                </ModalBody>
                <ModalFooter>
                    <Button danger onClick={() => { setShowModal(false); props.action();}}>{props.actionName}</Button>
                    <Button primary onClick={() => setShowModal(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ButtonWithConfirmation;