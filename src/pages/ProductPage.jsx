import ProductMenu from "../components/ProductMenu"
import ProductDetail from "../components/ProductDetail"
import Pagination from "../components/Pagination"
import Logout from "../components/Logout"

function ProductPage ({
    productList,
    tempProduct,
    tempImgUrl,
    pageInfo,
    state,
    handleLogout,
    openProductModal,
    openDeleteModal,
    setPage,
    setState,
    handleChangeOption,
    setTempProduct,
    setTempImgUrl,
  }) {
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <Logout 
                  handleLogout={handleLogout}
                />
              </div>
            </nav>
            <div className="container">
              <div className="row">
                  <div className="col-md-9 mt-4 mb-5">
                      <ProductMenu 
                        state={state}
                        productList={productList}
                        tempProduct={tempProduct}
                        openProductModal={openProductModal}
                        openDeleteModal={openDeleteModal}
                        handleChangeOption={handleChangeOption}
                        setTempProduct={setTempProduct}
                        setTempImgUrl={setTempImgUrl}
                        setState={setState}
                      />
                      <Pagination 
                        pageInfo={pageInfo}
                        setPage={setPage}
                      />
                  </div>
                  <div className="col-md-3 mt-5 mb-5">
                      <ProductDetail 
                        tempProduct={tempProduct}
                        tempImgUrl={tempImgUrl}
                        setTempImgUrl={setTempImgUrl}
                      />
                  </div>
              </div>
          </div>
      </div>
    )
}

export default ProductPage