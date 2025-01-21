function Loading ({
    loadingText
}) {
    return(
        <div className='loading'>
          <h3><span className="spinner-border spinner-border-lg me-3" role="status" aria-hidden="true"></span>
            {loadingText}</h3>
        </div>
    )
}

export default Loading