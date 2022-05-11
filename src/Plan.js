import React from "react";

export default function Plan(
  props
) {
  // console.log(props.Plan)
  return (
    
    
      console.log(value);
      <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />

props && props.Plan && props.Plan.map((value, key)=> {
        <div className="card-body p-4">
          <div className="text-center">
        
            <div className={key}>Sale</div>
            <h5 className="fw-bolder">{value.name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className={value.star}></div>
              <div className={value.star}></div>
              <div className={value.star}></div>
              <div className={value.star}></div>
              <div className={value.star}></div>
            </div>
            <span className="text-muted text-decoration-line-through">
              {value.actualPrice}
            </span>
            {value.price}
          </div>
        </div>
  })
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              {value.buttonTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}
