import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'

const Hotel=()=>{
    return(
        <div className={styles.hotel}>
            <div className='row'>
                <div className='col-4'>
                    <img src={hotelImg} alt="" className={`img-fluid img-thumbnail ${styles.imghotel}`}/>
                </div>
                <div className='col-8'>
                    <div className="row">
                        <div className="col-9">
                            <p><b>Pensjonat</b></p>
                            <span className="badge text-bg-light">Warszawa</span>
                        </div>
                        <div className="col-3">
                            <p><b>Ocena: 8.5</b></p>
                            <span className="badge text-bg-secondary">233</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="text-end">
                <button className="btn btn-primary">Pokaż</button>
            </div>
        </div>
    )
}   

export default Hotel 