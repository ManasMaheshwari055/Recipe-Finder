export default function CardItem(props, key) {
    const { Recipe } = props;
    return (
        <>
            <div className="card" style={{ boxShadow: '0px 0px 15px black', border: 'none' }}>
                <img src={Recipe.image} className="card-img-top" style={{ height: '20rem' }} />
                <div className="card-body">
                    <h5 className="card-title">{Recipe.label}</h5>
                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-success" type="button" style={{ borderRadius: '50px' }}>Incredients</button>
                        <button className="btn btn-outline-danger" type="button" style={{ borderRadius: '50px' }} onClick={() => window.open(Recipe.url)}>See Complete Recipe</button>
                    </div>
                </div>
            </div >
        </>
    )
}
