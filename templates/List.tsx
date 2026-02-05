;<>
    {/* HEADER */}
    <header className="header">
        <div className="header-content">
            <a href="/" className="logo">
                MyApp
            </a>
            <nav className="header-nav">
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    Categories
                </a>
                <a href="#" className="nav-link">
                    About
                </a>
                <a href="#" className="nav-link">
                    Contact
                </a>
            </nav>
        </div>
    </header>

    <div className="container">
        {/* ПОИСК И ФИЛЬТРЫ */}
        <section className="search-filter-section">
            {/* Строка поиска */}
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for items, products, articles..."
                    defaultValue=""
                />
                <button className="search-button">Search</button>
            </div>

            {/* Фильтры */}
            <div className="filters-row">
                <div className="filter-group">
                    <label className="filter-label">Category</label>
                    <select className="filter-select">
                        <option>All Categories</option>
                        <option>Technology</option>
                        <option>Science</option>
                        <option>Business</option>
                        <option>Education</option>
                        <option>Entertainment</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Price Range</label>
                    <select className="filter-select">
                        <option>Any Price</option>
                        <option>$0 - $50</option>
                        <option>$50 - $100</option>
                        <option>$100 - $500</option>
                        <option>$500+</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Rating</label>
                    <select className="filter-select">
                        <option>All Ratings</option>
                        <option>4+ Stars</option>
                        <option>3+ Stars</option>
                        <option>2+ Stars</option>
                    </select>
                </div>

                <div className="filter-group">
                    <label className="filter-label">Status</label>
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>Available</option>
                        <option>Out of Stock</option>
                        <option>Coming Soon</option>
                    </select>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="featured"
                        className="checkbox-input"
                    />
                    <label htmlFor="featured" className="checkbox-label">
                        Featured only
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="onSale"
                        className="checkbox-input"
                    />
                    <label htmlFor="onSale" className="checkbox-label">
                        On Sale
                    </label>
                </div>

                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="inStock"
                        className="checkbox-input"
                        defaultChecked
                    />
                    <label htmlFor="inStock" className="checkbox-label">
                        In Stock
                    </label>
                </div>
            </div>
        </section>

        {/* СОРТИРОВКА И РЕЗУЛЬТАТЫ */}
        <div className="controls-bar">
            <div className="results-count">Showing 1-12 of 248 results</div>

            <div className="sort-group">
                <label className="sort-label">Sort by:</label>
                <select className="sort-select">
                    <option>Most Relevant</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                    <option>Most Popular</option>
                    <option>Name: A to Z</option>
                    <option>Name: Z to A</option>
                </select>
            </div>
        </div>

        {/* КАРТОЧКИ */}
        <div className="cards-grid">
            {/* Карточка 1 */}
            <a to="/detail/1" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/4F46E5/ffffff?text=Product+1"
                        alt="Advanced Wireless Headphones"
                        className="card-image"
                    />
                    <span className="badge">New</span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">Advanced Wireless Headphones</h3>
                    <p className="card-description">
                        Premium noise-cancelling headphones with 30-hour battery
                        life and superior sound quality. Perfect for music
                        lovers and professionals.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Electronics</span>
                        <span className="tag secondary">Wireless</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.8</span>
                            <span style={{ color: '#9ca3af' }}>
                                (324 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$299</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>2.5k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 2 */}
            <a to="/detail/2" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/7C3AED/ffffff?text=Product+2"
                        alt="Smart Watch Pro"
                        className="card-image"
                    />
                    <span
                        className="badge"
                        style={{ backgroundColor: '#10b981' }}>
                        Sale
                    </span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">Smart Watch Pro</h3>
                    <p className="card-description">
                        Track your fitness, monitor your health, and stay
                        connected with this advanced smartwatch featuring GPS
                        and heart rate monitoring.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Wearables</span>
                        <span className="tag warning">Limited</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.6</span>
                            <span style={{ color: '#9ca3af' }}>
                                (198 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$399</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>1.8k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 3 */}
            <a to="/detail/3" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/EC4899/ffffff?text=Product+3"
                        alt="Portable Speaker"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">Portable Bluetooth Speaker</h3>
                    <p className="card-description">
                        Waterproof wireless speaker with 360-degree sound.
                        Perfect for outdoor adventures and pool parties with
                        20-hour playtime.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Audio</span>
                        <span className="tag secondary">Waterproof</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.9</span>
                            <span style={{ color: '#9ca3af' }}>
                                (567 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$149</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>3.2k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 4 */}
            <a to="/detail/4" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/F59E0B/ffffff?text=Product+4"
                        alt="4K Action Camera"
                        className="card-image"
                    />
                    <span className="badge">Trending</span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">4K Action Camera</h3>
                    <p className="card-description">
                        Capture stunning 4K videos with image stabilization.
                        Waterproof up to 30m and includes mounting accessories
                        for all your adventures.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Camera</span>
                        <span className="tag secondary">4K</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.7</span>
                            <span style={{ color: '#9ca3af' }}>
                                (412 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$279</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>2.1k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 5 */}
            <a to="/detail/5" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/10B981/ffffff?text=Product+5"
                        alt="Wireless Keyboard"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">Mechanical Wireless Keyboard</h3>
                    <p className="card-description">
                        Premium mechanical keyboard with RGB backlight and
                        wireless connectivity. Ergonomic design for all-day
                        comfortable typing.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Accessories</span>
                        <span className="tag secondary">RGB</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.5</span>
                            <span style={{ color: '#9ca3af' }}>
                                (289 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$129</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>1.5k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 6 */}
            <a to="/detail/6" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/EF4444/ffffff?text=Product+6"
                        alt="Gaming Mouse"
                        className="card-image"
                    />
                    <span
                        className="badge"
                        style={{ backgroundColor: '#10b981' }}>
                        Sale
                    </span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">Pro Gaming Mouse</h3>
                    <p className="card-description">
                        High-precision gaming mouse with 16000 DPI, customizable
                        buttons, and RGB lighting. Perfect for competitive
                        gaming.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Gaming</span>
                        <span className="tag warning">Hot</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.8</span>
                            <span style={{ color: '#9ca3af' }}>
                                (723 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$89</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>4.1k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 7 */}
            <a to="/detail/7" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/8B5CF6/ffffff?text=Product+7"
                        alt="USB-C Hub"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">7-in-1 USB-C Hub</h3>
                    <p className="card-description">
                        Expand your laptop connectivity with HDMI, USB 3.0, SD
                        card reader, and more. Compact and portable design.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Accessories</span>
                        <span className="tag secondary">USB-C</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.4</span>
                            <span style={{ color: '#9ca3af' }}>
                                (156 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$49</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>892</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 8 */}
            <a to="/detail/8" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/14B8A6/ffffff?text=Product+8"
                        alt="Phone Stand"
                        className="card-image"
                    />
                    <span className="badge">New</span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">Adjustable Phone Stand</h3>
                    <p className="card-description">
                        Ergonomic aluminum phone stand with adjustable height
                        and angle. Compatible with all smartphones and tablets.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Accessories</span>
                        <span className="tag secondary">Aluminum</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.7</span>
                            <span style={{ color: '#9ca3af' }}>
                                (234 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$29</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>1.2k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 9 */}
            <a to="/detail/9" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/06B6D4/ffffff?text=Product+9"
                        alt="Laptop Sleeve"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">Premium Laptop Sleeve</h3>
                    <p className="card-description">
                        Protect your laptop with this water-resistant sleeve.
                        Soft interior lining and extra pocket for accessories.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Bags</span>
                        <span className="tag secondary">13-15 inch</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.6</span>
                            <span style={{ color: '#9ca3af' }}>
                                (189 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$39</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>1.1k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 10 */}
            <a to="/detail/10" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/F97316/ffffff?text=Product+10"
                        alt="Webcam HD"
                        className="card-image"
                    />
                    <span
                        className="badge"
                        style={{ backgroundColor: '#8b5cf6' }}>
                        Premium
                    </span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">HD Webcam 1080p</h3>
                    <p className="card-description">
                        Professional webcam with autofocus and built-in
                        microphone. Perfect for video calls, streaming, and
                        content creation.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Camera</span>
                        <span className="tag secondary">1080p</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.5</span>
                            <span style={{ color: '#9ca3af' }}>
                                (312 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$79</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>2.3k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 11 */}
            <a to="/detail/11" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/84CC16/ffffff?text=Product+11"
                        alt="Power Bank"
                        className="card-image"
                    />
                </div>
                <div className="card-content">
                    <h3 className="card-title">20000mAh Power Bank</h3>
                    <p className="card-description">
                        High-capacity portable charger with fast charging
                        support. Charge multiple devices simultaneously on the
                        go.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Chargers</span>
                        <span className="tag secondary">Fast Charge</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.6</span>
                            <span style={{ color: '#9ca3af' }}>
                                (445 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$45</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>1.9k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Карточка 12 */}
            <a to="/detail/12" className="card">
                <div className="card-image-wrapper">
                    <img
                        src="https://via.placeholder.com/400x300/EAB308/ffffff?text=Product+12"
                        alt="Monitor Stand"
                        className="card-image"
                    />
                    <span className="badge">New</span>
                </div>
                <div className="card-content">
                    <h3 className="card-title">Ergonomic Monitor Stand</h3>
                    <p className="card-description">
                        Elevate your monitor to eye level with this sturdy
                        stand. Built-in storage drawer for organizing your desk
                        accessories.
                    </p>
                    <div className="card-tags">
                        <span className="tag">Furniture</span>
                        <span className="tag secondary">Wood</span>
                        <span className="tag success">In Stock</span>
                    </div>
                    <div className="card-footer">
                        <div className="card-rating">
                            <span className="star-icon">★</span>
                            <span>4.7</span>
                            <span style={{ color: '#9ca3af' }}>
                                (267 reviews)
                            </span>
                        </div>
                        <div className="card-stats">
                            <span className="stat-item">
                                <span>💰</span>
                                <span>$59</span>
                            </span>
                            <span className="stat-item">
                                <span>👁️</span>
                                <span>1.4k</span>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        {/* ПАГИНАЦИЯ */}
        <div className="pagination">
            <button className="pagination-button" disabled>
                ← Previous
            </button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <button className="pagination-button">3</button>
            <button className="pagination-button">4</button>
            <button className="pagination-button">5</button>
            <span className="pagination-info">...</span>
            <button className="pagination-button">21</button>
            <button className="pagination-button">Next →</button>
        </div>

        {/* LOADING STATE (можно использовать когда нужно) */}
        {/* 
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        */}

        {/* EMPTY STATE (можно использовать когда нет результатов) */}
        {/* 
        <div className="empty-state">
          <div className="empty-state-icon">📭</div>
          <h3 className="empty-state-title">No results found</h3>
          <p className="empty-state-text">Try adjusting your filters or search query</p>
        </div>
        */}
    </div>
</>
