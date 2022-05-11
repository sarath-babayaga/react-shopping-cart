import React from "react";

export default function Plan({
  name,
  price,
  buttonTitle,
  actualPrice,
  star,
  badge,
 
}) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />

        <div className="card-body p-4">
          <div className="text-center">
        
            <div className={badge}>Sale</div>
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className={star}></div>
              <div className={star}></div>
              <div className={star}></div>
              <div className={star}></div>
              <div className={star}></div>
            </div>
            <span class="text-muted text-decoration-line-through">
              {actualPrice}
            </span>
            {price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              {buttonTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
