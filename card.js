export const Card = (prop) => (
    <div className="col-sm-6">
        <div className="card" key={prop.rocket.flight_number}>
               
  <div className="card-body">
    <h5 className="card-title">{prop.rocket.mission_name}</h5>
    <p className="card-text">{prop.rocket.details}</p>
    <a href="#" className="btn btn-primary" data-toggle="modal" data-target={'#popup${"prop.rocket.flight_number"}'}>View more</a>
  </div>
</div>
</div>

);