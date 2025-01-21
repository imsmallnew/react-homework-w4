function DeleteModal ({
    deleteModalRef,
    tempProduct,
    deleteProduct,
    closeDeleteModal,
}) {
    return(
        <div className="modal fade" ref={deleteModalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-danger">
                    <h5 className="modal-title text-white" id="exampleModalLabel">請確認是否刪除商品:</h5>
                    <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>商品名稱: {tempProduct.title}</p>
                        <p>{tempProduct.id}</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={()=>closeDeleteModal()}>
                        取消
                    </button>
                    <button type="button" className={`btn btn-danger`} onClick={()=>deleteProduct(tempProduct.id)}>
                        確認刪除
                    </button>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default DeleteModal