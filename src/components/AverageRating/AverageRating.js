import './AverageRating.css'

function AverageRating() {
    return (
        <>
            <div className="averageRating">
                <div className="star-background">
                    <div className="star-holder">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FD8888" viewBox="0 0 24 24"
                        stroke="#FD8888">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FD8888" viewBox="0 0 24 24"
                             stroke="#FD8888">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FD8888" viewBox="0 0 24 24"
                             stroke="#FD8888">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FD8888" viewBox="0 0 24 24"
                             stroke="#FD8888">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="#FD8888">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                    </div>

                </div>
                <h5>45 Ratings</h5>
                <div className="rating-bar-holder">

                    <div className="bar-wrapper">
                        <span className="star-title">5 star</span>
                        <div className="bar-background">
                            <div className="bar-count b5s"></div>
                        </div>
                        <span className="star-percentage">82 %</span>
                    </div>
                    <div className="bar-wrapper">
                        <span className="star-title">4 star</span>
                    <div className="bar-background">
                        <div className="bar-count b4s"></div>
                    </div>
                        <span className="star-percentage">82 %</span>
                    </div>
                    <div className="bar-wrapper">
                        <span className="star-title">3 star</span>
                        <div className="bar-background">
                            <div className="bar-count b3s"></div>
                        </div>
                        <span className="star-percentage">82 %</span>
                    </div>
                    <div className="bar-wrapper">
                        <span className="star-title">2 star</span>
                        <div className="bar-background">
                            <div className="bar-count b2s"></div>
                        </div>
                        <span className="star-percentage">82 %</span>
                    </div>
                        <div className="bar-wrapper">
                            <span className="star-title">1 star</span>
                             <div className="bar-background">
                                <div className="bar-count b1s"></div>
                             </div>
                             <span className="star-percentage">82 %</span>
                        </div>
                </div>
            </div>
        </>
    )
}

export default AverageRating;