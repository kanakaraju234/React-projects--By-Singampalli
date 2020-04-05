import React  from 'react'

export default function CartColumns() {
    
        return (
            <div className="container-fluid text-center d-none
            d-lg-block">
                <div className="row">
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-upperscase">products</p>
                        </div>
                    
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-upperscase">name of products</p>
                        </div>
                    
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-upperscase">price</p>
                        </div>
                    
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-upperscase">Quantity</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-upperscase">remove</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2">
                            <p className="text-upperscase">Total</p>
                        </div>
                </div>
            </div>
        )
    }

