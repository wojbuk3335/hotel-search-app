import Hotel from './Hotel/Hotel.jsx'

export default function Hotels(){
    return(
        <div>
            <div style={{
                border:'1px solid #cdcdcd',
                padding:10,
                }}>
                    <h2>Oferty:</h2>
                <Hotel/>
                <Hotel/>
                <Hotel/>
            </div>
        </div>
    )
}