import { Children, useRef, useState } from "react";
import './Modal.css'
export default function Modal({children, dialogContent})
{
    const dialogRef = useRef()
    const [isOpen, setOpenClose] = useState(false);
    function toggleModal(){
        if(isOpen){
            setOpenClose(false)
            dialogRef.current?.close()
        }
        else{
            setOpenClose(true)
            dialogRef.current?.showModal()
        }}
    return(
            <>
            <div className="modal-click-region" onClick={()=> toggleModal()}>
                {children}
            </div>
            <dialog className="modal-dialog" ref={dialogRef}>
            {dialogContent}
            <button className="dialog-close" onClick={() => toggleModal()}>X</button>
            </dialog>
            </>
    )
    
}


