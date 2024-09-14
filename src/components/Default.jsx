import HamBurger from '/hamburger.svg'
export default function Default() {
    return (
        <div className='d-flex justify-content-center' >
            <img src={HamBurger} alt="Image" style={{ width: "10%", opacity: '50%',top:'50%',position:'absolute'}} />
        </div>
    )
}
