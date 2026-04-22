import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar'

export default function Header() {

  return (
    <div className={styles.header + ' container'}>
      <Searchbar/>
    </div>
  )
}
