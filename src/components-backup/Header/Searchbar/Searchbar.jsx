import Button from 'react-bootstrap/Button';

export default function Searchbar(){

      function AlertFunction(){
        alert("Kliknięto")
  }

    return(
        <div className='d-flex'>
            <input 
                placeholder="Szukaj..." 
                className="form-control"
                style={{marginRight:10}}
            />
                <Button>
                    Szukaj...
                </Button >

        </div>
    )
}