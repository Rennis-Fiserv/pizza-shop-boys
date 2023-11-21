import { Children, useRef, useState } from "react";
import './Modal.css'
export default function Modal({children})
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
            <p>Modal DIALOG</p>
            <button onClick={() => toggleModal()}>X</button>
            </dialog>
            </>
    )
    
}


