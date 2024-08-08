import Link from "next/link";
import styles from '../produto/CardProduto.module.css';



interface ModalProps {
  isOpen: boolean;
}
  

const Bg_Style = {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex:'1000'
}


const modal_style = { 
    display:'block',
    gap:'10px',  
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform:'translate(-50%, -50%)' ,
    padding:'150px' ,
    backgroundColor:'#fff',
    borderRadius:'10px',
    color:'black'
    
  
   }
  
   
   const close_bnt = { 
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#1D4ED8',  
    fontWeight: '500',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    lineHeight: '2rem',
    padding: ' 0.7rem 2rem',  
    textAlign: 'center',
    marginRight: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    TextDecoration:'none',
    border: 'none'  
  
   }

      
 
   

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (isOpen) {
    return  (
        <dialog style={Bg_Style}>
       <div style={modal_style}>
        
       <div>{children}</div>
       <Link className={styles.link} href='/'
            style={close_bnt}>Back
      </Link>
                    
        </div>
       </dialog >       
       

    )
  }
  return null;
};

export default Modal;
