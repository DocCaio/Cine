'use client';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { useState } from 'react';
import styles from './styles/navBar.module.css';

export default function Cabecalho() {
    const [openMenu , setOpenMenu] = useState(false);
     
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    
   
    return (
       
        <>        
          <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
        <section className={styles.bar}>
        <div className={styles.barContent}>            
            <div>
               <Link href='/' className={styles.cine}>Cine</Link> 
               <Link href='/' className={styles.dev}>Dev</Link> 
            </div>
            <div>       
            <ul className={styles.list}>
                    <li className={styles.link}>
                        <Link href="/" className={styles.links}>Home</Link>
                    </li>
                    <li  className={styles.link}>
                        <Link href="/pages/movies"  className={styles.links}>Streaming</Link>
                    </li>
                    <li  className={styles.link}>
                        <Link href="/pages/Upcoming"  className={styles.links}>Upcoming</Link>
                    </li>
                </ul>
              </div> 

            <button className={styles.menuBtn} onClick={toggleMenu}>
            <span 
              className={"material-symbols-outlined"}
              style={{fontSize: "1.8rem"}}
            >               
                {openMenu ? "x" : "|||"}
                
            </span>
            </button> 

            </div>

            </section>

        </>
        
    )
}
