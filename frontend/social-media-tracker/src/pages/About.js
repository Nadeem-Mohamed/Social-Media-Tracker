import './about.css';

export default function About() {
  return (
    <main>
        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h1>About</h1>
                    </div>
                    <div className="content">
                        <p>Our platform provides comprehensive insights into your social media performance, including tracking your likes and followers, and presenting the data in easy-to-understand graphs and charts. With our tools, you can measure your social media success and adjust your strategies accordingly.</p>
                        <p>We are passionate about helping our clients succeed on social media, and we strive to provide the most accurate and up-to-date data to help you make informed decisions. Join us on our mission to make social media analytics accessible and understandable to everyone.</p>
                    </div>
                </div>
                <div className="social-media-tracker">
                    <div className="social">
                        Social
                    </div>
                    <div className="media">
                        Media
                    </div>
                    <div className="tracker">
                        Tracker
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}