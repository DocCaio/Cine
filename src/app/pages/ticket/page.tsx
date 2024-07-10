import styles from './ticket.module.css'; // Make sure the file path is correct
import Link from 'next/link';
import Image from 'next/image';
import Poltrona from '../../assets/PoltronaLivre.png';
import Preferencial from '../../assets/PoltronaLivrePreferencial.png';
import More from './More';
import Vips from './Vips'

export default function Ticket() {
  return (
       <>           
    <section>
      <Vips/>
      <div  className={styles.chars}>
      <div className={styles.ticketContainer}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className={styles.imageWrapper}>            
            <Image src={Poltrona} alt={`Poltrona ${index + 1}`} width={100} height={100} />

          </div>
        ))}
        {[...Array(2)].map((_, index) => (
          <div key={index} className={styles.imageWrapper}>            
            <Image src={Preferencial} alt={`Preferencial ${index + 1}`} width={100} height={100} />

          </div>
        ))}
      </div>

      <More/>
      </div>
      </section>
    </>
  );
}
