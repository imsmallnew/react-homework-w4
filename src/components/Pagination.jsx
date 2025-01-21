function Pagination ({
    pageInfo,
    setPage
}) {
    return(
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                <li className={`page-item ${!pageInfo?.has_pre && 'disabled'}`}>
                    <a className="page-link" onClick={()=> setPage(pageInfo?.current_page - 1)} href="#">
                        上一頁
                    </a>
                    </li>
                {Array.from({ length: pageInfo?.total_pages}).map((_, index)=> (
                    <li key={index} className={`page-item ${(pageInfo?.current_page === index + 1) && 'active'}`}>
                        <a className="page-link" onClick={()=> setPage(index+1)} href="#">
                        { index + 1 }
                        </a>
                    </li>
                ))}
                <li className={`page-item ${!pageInfo?.has_next && 'disabled'}`}>
                    <a className="page-link" onClick={()=> setPage(pageInfo?.current_page + 1)} href="#">
                    下一頁
                    </a>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination