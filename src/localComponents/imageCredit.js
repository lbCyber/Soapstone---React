import React from 'react'

const ImageCredit = (props) => {
  if (props.page === 1) {
    return (
      <div className="imageCredit">
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'white'}}><a href="https://www.flickr.com/photos/24792288@N07/2599310454">"Mansfield Pa Area"</a><span>by <a href="https://www.flickr.com/photos/24792288@N07">bonniejeffs</a></span> is licensed under <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" style={{ marginRight: '5px' }}>CC BY 2.0</a><a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', whiteSpace: 'none', opacity: '.7', marginTop: '2px', marginLeft: '3px', height: '22px !important' }}><img style={{ height: '20px', marginRight: '3px', display: 'inline-block' }} src="https://ccsearch.creativecommons.org/static/img/cc_icon.svg" alt="" /><img style={{ height: '20px', marginRight: '3px', display: 'inline-block' }} src="https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg" alt=""/></a></p>
      </div>
    )
  } else if (props.page === 2) {
    return (
      <div className="imageCredit">
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'white'}}><a href="https://www.flickr.com/photos/124019668@N08/21754048328">"Kastelburg"</a><span>by <a href="https://www.flickr.com/photos/124019668@N08">mvrein</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" style={{ marginRight: '5px' }}>CC BY-SA 2.0</a><a href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', whiteSpace: 'none', opacity: '.7', marginTop: '2px', marginLeft: '3px', height: '22px !important' }}><img style={{ height: '20px', marginRight: '3px', display: 'inline-block' }} src="https://ccsearch.creativecommons.org/static/img/cc_icon.svg" alt="" /><img style={{ height: '20px', marginRight: '3px', display: 'inline-block' }} src="https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg" alt="" /><img style={{ height: '20px', marginRight: '3px', display: 'inline-block' }} src="https://ccsearch.creativecommons.org/static/img/cc-sa_icon.svg" alt="" /></a></p>
      </div>
    )
  }
}

export default ImageCredit