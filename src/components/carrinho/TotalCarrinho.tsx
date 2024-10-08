import ItemCarrinho from '@/data/model/ItemCarrinho';
import styles from './styles/total.module.css';
import Link from 'next/link';



export interface TotalCarrinhoProps {
    itens: ItemCarrinho[]
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
  
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
    return (

        <div className={styles.container}>
            <div className={styles.containerDiv}>
                <span className={styles.span}>Total</span>
                <span className={styles.price}>R$ {total.toFixed(2)}</span>
            </div>

            <Link href='/pages/chairs'className={styles.btn}>Finish</Link>
           
            
        </div>


    )
}
