import React from 'react'
import { Link } from 'react-router-dom'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            keyword: "",
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews = () => {
        const { keyword } = this.state;
        let url = "https://newsdata.io/api/1/latest?apikey=pub_09f85ba0bec94368ad9cf2748bc02376";
        if (keyword.trim()) {
            url += "&q=" + encodeURIComponent(keyword.trim());
        }

        this.setState({ loading: true, error: null });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    this.setState({ data: data, loading: false })
                } else {
                    this.setState({ error: data.message || "Failed to fetch news.", loading: false })
                }
            })
            .catch(err => {
                console.error('Error:', err)
                this.setState({ error: "An error occurred while fetching news.", loading: false })
            })
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.fetchNews();
    }

    render() {
        const { loading, error, data, keyword } = this.state;

        return (
            <div>
                <Link to="/">Home</Link>
                <h1>Latest News</h1>

                <form onSubmit={this.handleSearch}>
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => this.setState({ keyword: e.target.value })}
                        placeholder="Search news by keyword..."
                    />
                    <button type="submit">Search</button>
                </form>

                {loading ? <p>Loading news...</p> : error ? <p>Error: {error}</p> : null}
                <div>
                    {data && data.results && data.results.map((article, index) => (
                        <div key={index}>
                            <h2><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
                            <p>{article.description || "No description available."}</p>
                            <div>
                                <span>Source: {article.source_id}</span> | <span>Published: {article.pubDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default News