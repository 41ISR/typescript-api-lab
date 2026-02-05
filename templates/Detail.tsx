;<>
    {/* HEADER */}
    <header className="header">
        <div className="header-content">
            <a to="/" className="logo">
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
        {/* КНОПКА НАЗАД */}
        <a to="/" className="back-button">
            <span className="back-icon">←</span>
            Back to List
        </a>

        {/* ДЕТАЛЬНАЯ СТРАНИЦА */}
        <div className="detail-page">
            <div className="detail-container">
                {/* ЛЕВАЯ ЧАСТЬ - ИЗОБРАЖЕНИЯ */}
                <div className="detail-image-section">
                    {/* Основное изображение */}
                    <img
                        src="https://via.placeholder.com/600x600/4F46E5/ffffff?text=Main+Product+Image"
                        alt="Advanced Wireless Headphones"
                        className="detail-main-image"
                    />

                    {/* Галерея миниатюр (опционально, студенты могут удалить) */}
                    <div className="detail-gallery">
                        <img
                            src="https://via.placeholder.com/150x150/4F46E5/ffffff?text=1"
                            alt="Thumbnail 1"
                            className="gallery-thumbnail active"
                        />
                        <img
                            src="https://via.placeholder.com/150x150/7C3AED/ffffff?text=2"
                            alt="Thumbnail 2"
                            className="gallery-thumbnail"
                        />
                        <img
                            src="https://via.placeholder.com/150x150/EC4899/ffffff?text=3"
                            alt="Thumbnail 3"
                            className="gallery-thumbnail"
                        />
                        <img
                            src="https://via.placeholder.com/150x150/F59E0B/ffffff?text=4"
                            alt="Thumbnail 4"
                            className="gallery-thumbnail"
                        />
                    </div>
                </div>

                {/* ПРАВАЯ ЧАСТЬ - КОНТЕНТ */}
                <div className="detail-content-section">
                    {/* Заголовок */}
                    <div className="detail-header">
                        <h1 className="detail-title">
                            Advanced Wireless Headphones
                        </h1>
                        <p className="detail-subtitle">
                            Premium Noise-Cancelling Over-Ear Headphones
                        </p>

                        <div className="detail-meta">
                            <div className="detail-rating">
                                <span className="star-icon">★</span>
                                <span>4.8</span>
                                <span style={{ color: '#9ca3af' }}>
                                    (324 reviews)
                                </span>
                            </div>

                            <div className="detail-stats">
                                <span className="stat-item">
                                    <span>👁️</span>
                                    <span>2,547 views</span>
                                </span>
                                <span className="stat-item">
                                    <span>❤️</span>
                                    <span>156 likes</span>
                                </span>
                                <span className="stat-item">
                                    <span>📅</span>
                                    <span>Added: Jan 15, 2024</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Описание */}
                    <div className="detail-section">
                        <h2 className="section-title">Description</h2>
                        <div className="detail-description">
                            <p>
                                Experience premium audio quality with our
                                Advanced Wireless Headphones. Featuring
                                industry-leading noise cancellation technology,
                                these headphones deliver an immersive listening
                                experience whether you're at home, in the
                                office, or on the go.
                            </p>
                            <p>
                                With up to 30 hours of battery life, comfortable
                                memory foam ear cushions, and intuitive touch
                                controls, these headphones are designed for
                                all-day comfort and convenience. The advanced
                                Bluetooth 5.0 technology ensures a stable
                                connection with your devices up to 30 feet away.
                            </p>
                            <p>
                                The premium build quality combines lightweight
                                materials with durable construction, making
                                these headphones perfect for daily use. Whether
                                you're listening to music, taking calls, or
                                enjoying podcasts, you'll appreciate the
                                crystal-clear sound and deep bass response.
                            </p>
                        </div>
                    </div>

                    {/* Теги */}
                    <div className="detail-section">
                        <h2 className="section-title">Tags & Categories</h2>
                        <div className="detail-tags">
                            <span className="tag">Electronics</span>
                            <span className="tag secondary">Wireless</span>
                            <span className="tag success">In Stock</span>
                            <span className="tag">Audio</span>
                            <span className="tag secondary">Bluetooth</span>
                            <span className="tag">Premium</span>
                            <span className="tag warning">Popular</span>
                        </div>
                    </div>

                    {/* Таблица характеристик */}
                    <div className="detail-section">
                        <h2 className="section-title">Specifications</h2>
                        <table className="info-table">
                            <tbody>
                                <tr>
                                    <th>Brand</th>
                                    <td>AudioTech Pro</td>
                                </tr>
                                <tr>
                                    <th>Model</th>
                                    <td>WH-X1000M5</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>Midnight Black</td>
                                </tr>
                                <tr>
                                    <th>Connectivity</th>
                                    <td>Bluetooth 5.0, 3.5mm Jack</td>
                                </tr>
                                <tr>
                                    <th>Battery Life</th>
                                    <td>Up to 30 hours</td>
                                </tr>
                                <tr>
                                    <th>Charging Time</th>
                                    <td>
                                        3 hours (Quick charge: 10 min = 5 hours)
                                    </td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>254g</td>
                                </tr>
                                <tr>
                                    <th>Driver Size</th>
                                    <td>40mm</td>
                                </tr>
                                <tr>
                                    <th>Frequency Range</th>
                                    <td>4Hz - 40kHz</td>
                                </tr>
                                <tr>
                                    <th>Noise Cancellation</th>
                                    <td>Active (ANC) + Passive</td>
                                </tr>
                                <tr>
                                    <th>Microphone</th>
                                    <td>Built-in with CVC 8.0</td>
                                </tr>
                                <tr>
                                    <th>Warranty</th>
                                    <td>2 Years International</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Дополнительная информация */}
                    <div className="detail-section">
                        <h2 className="section-title">What's in the Box</h2>
                        <div className="detail-description">
                            <ul
                                style={{
                                    paddingLeft: '20px',
                                    lineHeight: '1.8',
                                }}>
                                <li>1x Advanced Wireless Headphones</li>
                                <li>1x USB-C Charging Cable</li>
                                <li>1x 3.5mm Audio Cable</li>
                                <li>1x Airplane Adapter</li>
                                <li>1x Carrying Case</li>
                                <li>1x User Manual</li>
                                <li>1x Quick Start Guide</li>
                            </ul>
                        </div>
                    </div>

                    {/* Ключевые особенности */}
                    <div className="detail-section">
                        <h2 className="section-title">Key Features</h2>
                        <div className="detail-description">
                            <ul
                                style={{
                                    paddingLeft: '20px',
                                    lineHeight: '1.8',
                                }}>
                                <li>
                                    <strong>
                                        Industry-Leading Noise Cancellation:
                                    </strong>{' '}
                                    Advanced ANC technology blocks out ambient
                                    noise for immersive listening
                                </li>
                                <li>
                                    <strong>All-Day Battery Life:</strong> Up to
                                    30 hours of playback on a single charge
                                </li>
                                <li>
                                    <strong>Superior Sound Quality:</strong>{' '}
                                    40mm drivers deliver rich, balanced audio
                                    across all frequencies
                                </li>
                                <li>
                                    <strong>Comfortable Design:</strong> Memory
                                    foam ear cushions and adjustable headband
                                    for long-wearing comfort
                                </li>
                                <li>
                                    <strong>Multi-Device Pairing:</strong>{' '}
                                    Connect to two devices simultaneously
                                </li>
                                <li>
                                    <strong>Touch Controls:</strong> Intuitive
                                    touch gestures for volume, playback, and
                                    calls
                                </li>
                                <li>
                                    <strong>Foldable Design:</strong> Compact
                                    folding mechanism with premium carrying case
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Цена и кнопки действий */}
                    <div
                        className="detail-section"
                        style={{ borderBottom: 'none' }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '16px',
                            }}>
                            <div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        color: '#6b7280',
                                        marginBottom: '4px',
                                    }}>
                                    Price
                                </div>
                                <div
                                    style={{
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        color: '#111827',
                                    }}>
                                    $299.00
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        color: '#10b981',
                                        marginTop: '4px',
                                    }}>
                                    ✓ Free shipping on orders over $50
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        color: '#6b7280',
                                        marginBottom: '4px',
                                    }}>
                                    Availability
                                </div>
                                <div
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#10b981',
                                    }}>
                                    In Stock
                                </div>
                                <div
                                    style={{
                                        fontSize: '14px',
                                        color: '#6b7280',
                                        marginTop: '4px',
                                    }}>
                                    Ships within 1-2 business days
                                </div>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <button className="primary-button">
                                Add to Cart
                            </button>
                            <button className="secondary-button">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>

                    {/* Дополнительные кнопки (опционально) */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '12px',
                            marginTop: '12px',
                        }}>
                        <button
                            style={{
                                flex: 1,
                                padding: '12px',
                                backgroundColor: '#f3f4f6',
                                border: '1px solid #d1d5db',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                color: '#4b5563',
                            }}>
                            📤 Share
                        </button>
                        <button
                            style={{
                                flex: 1,
                                padding: '12px',
                                backgroundColor: '#f3f4f6',
                                border: '1px solid #d1d5db',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                color: '#4b5563',
                            }}>
                            🔔 Notify Me
                        </button>
                        <button
                            style={{
                                flex: 1,
                                padding: '12px',
                                backgroundColor: '#f3f4f6',
                                border: '1px solid #d1d5db',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                color: '#4b5563',
                            }}>
                            ⚖️ Compare
                        </button>
                    </div>

                    {/* Дополнительная секция - Отзывы (опционально, закомментировано) */}
                    {/*
              <div className="detail-section">
                <h2 className="section-title">Customer Reviews</h2>
                <div className="detail-description">
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '6px',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <div style={{fontWeight: '600'}}>John Doe</div>
                      <div style={{color: '#fbbf24'}}>★★★★★</div>
                    </div>
                    <p style={{fontSize: '14px', color: '#4b5563'}}>
                      Amazing sound quality! The noise cancellation works perfectly 
                      and the battery lasts forever. Highly recommend!
                    </p>
                    <div style={{fontSize: '12px', color: '#9ca3af', marginTop: '8px'}}>
                      Posted on January 10, 2024
                    </div>
                  </div>

                  <div style={{
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '6px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <div style={{fontWeight: '600'}}>Sarah Smith</div>
                      <div style={{color: '#fbbf24'}}>★★★★☆</div>
                    </div>
                    <p style={{fontSize: '14px', color: '#4b5563'}}>
                      Very comfortable for long sessions. Only minor issue is they're 
                      a bit heavy, but the sound quality makes up for it.
                    </p>
                    <div style={{fontSize: '12px', color: '#9ca3af', marginTop: '8px'}}>
                      Posted on January 8, 2024
                    </div>
                  </div>
                </div>
              </div>
              */}

                    {/* Дополнительная секция - Похожие товары (опционально, закомментировано) */}
                    {/*
              <div className="detail-section" style={{borderBottom: 'none'}}>
                <h2 className="section-title">You May Also Like</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                  gap: '16px'
                }}>
                  <div style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="https://via.placeholder.com/200x150/7C3AED/ffffff?text=Related+1" 
                      alt="Related Product 1"
                      style={{width: '100%', height: '120px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '12px'}}>
                      <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '4px'}}>
                        Smart Watch Pro
                      </div>
                      <div style={{fontSize: '16px', fontWeight: '700', color: '#2563eb'}}>
                        $399
                      </div>
                    </div>
                  </div>

                  <div style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="https://via.placeholder.com/200x150/EC4899/ffffff?text=Related+2" 
                      alt="Related Product 2"
                      style={{width: '100%', height: '120px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '12px'}}>
                      <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '4px'}}>
                        Bluetooth Speaker
                      </div>
                      <div style={{fontSize: '16px', fontWeight: '700', color: '#2563eb'}}>
                        $149
                      </div>
                    </div>
                  </div>

                  <div style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <img 
                      src="https://via.placeholder.com/200x150/F59E0B/ffffff?text=Related+3" 
                      alt="Related Product 3"
                      style={{width: '100%', height: '120px', objectFit: 'cover'}}
                    />
                    <div style={{padding: '12px'}}>
                      <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '4px'}}>
                        Wireless Earbuds
                      </div>
                      <div style={{fontSize: '16px', fontWeight: '700', color: '#2563eb'}}>
                        $129
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              */}
                </div>
            </div>
        </div>
    </div>
</>
