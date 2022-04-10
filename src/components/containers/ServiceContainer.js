import React from 'react';


function ServiceContainer({title, children, image, isReverse = false}) {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col"><h2 className=" lh-1 mb-5 fw-bolder">{title}</h2></div>
            </div>
            <div className={`row align-items-center justify-content-center ${isReverse ? 'flex-row-reverse' : ''}`}>
                <div className="col-12 col-lg-5">
                    <div className='text-muted mb-5 mb-lg-0'>{children}</div>
                </div>
                <div className="col-12 col-lg-7 text-center">
                    <img style={{height: '250px', width: '500px'}} className="img-fluid rounded"
                         src={image}
                         alt="..."/>
                </div>
            </div>
        </section>
    )
}


export default ServiceContainer;
