import CartItem from './CartItem'
const DisplayCartProducts = props => {
  return (
    <>
      <div className="col-lg-4 py-3 px-0 pe-4" style={{ height: "90vh" }}>
        <div className="card rounded-4" style={{ height: "100%", zIndex: "0" }}>
          <div className="card-body h-100 d-flex flex-column">
            <div className="mb-3 mt-3">
              <input type="text" className="form-control" id="customer" placeholder="Enter Customer Name" name="customer" />
            </div>

            <div id="exp-3" className="table-responsive flex-grow-1 scrollbar-style-0 mb-3">
              {
                (Object.keys(props.cartItem).length == 0) ?
                  <div style={{ height: "100%", overflow: "hidden" }}>
                    <img src="https://shop.millenniumbooksource.com/static/images/cart1.png" alt="Cart is empty"
                      style={{ width: "100%", height: "100%", scale: "2", objectFit: "contain" }} />
                  </div>
                  :
                  <table className="table table-hover table-borderless  text-start rounded-table-row">
                    <thead>
                      <tr>
                        {/* <th className="p-0"></th> */}
                        <th style={{ width: "60%" }}>Products</th>
                        {/* <th style={{ width: "10%" }}>Qty</th> */}
                        <th className="text-center" style={{ width: "20%" }}>Price</th>
                        <th style={{ width: "10%" }}>Sub&nbsp;Total</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {
                        Object.entries(props.cartItem).map((item) =>
                          <CartItem setCartItem={props.setCartItem} setTotalPrice={props.setTotalPrice} item={item[1]} />
                        )
                      }
                    </tbody>
                  </table>
              }
            </div>

            <div style={{ textAlign: "right" }}>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    {/* <tr>
                        <td className="text-start">Tax</td>
                        <th>00.00</th>
                      </tr> */}
                    {/* <tr>
                        <td className="text-start">Discount</td>
                        <th>00.00</th>
                      </tr>
                      <tr>
                        <td className="text-start">Shipping cost</td>
                        <th>00.00</th>
                      </tr> */}
                    <tr>
                      <td className="text-start">Total</td>
                      <th>₹{props.totalPrice}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex mb-2 mx-2">
              <button style={{ flexGrow: "1" }} className="btn btn-outline-dark" onClick={() => window.location.reload(true)}>Reset</button>
              <button style={{ flexGrow: "3" }} className="btn btn-success ms-3">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayCartProducts;