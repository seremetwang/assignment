import { Nav, Card, Col, InputGroup, Form, Button } from "react-bootstrap";
import { useState } from 'react';

const Article = ({
	articles,
	handleSearchTermChange
}) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchTerm = (event) => {
		event.preventDefault();
		setSearchTerm(event.target.value);
	}

	const handleSearch = () => {
		handleSearchTermChange(searchTerm);
	}

	const handleKeyPress = (event) => {
		if (event.charCode === 13) {
			handleSearchTermChange(searchTerm);
		}
	}

	return (
		<Col md={8} lg={9}>
			<InputGroup className="mb-4">
				<Form.Control
					placeholder="Search ..."
					value={searchTerm}
					onChange={handleSearchTerm}
					onKeyPress={handleKeyPress}
				/>
				<Button variant="primary" onClick={handleSearch}>
					Search
				</Button>
			</InputGroup>
			{
				articles.map((article) => {
					return (
						<div key={article.id} className="mb-3">
							<Card className="d-flex flex-row flex-wrap p-2">
								<img className="rounded-3 mx-auto" variant="bottom" width={300} src={article.url_to_image} alt="Article Image" />
								<Card.Body style={{flex: 1, minWidth: '300px'}}>
									<Card.Title>{article.title}</Card.Title>
									<Card.Subtitle className="my-2 text-muted">
										<p className="my-0">
											<small>Author: {article.author.split(",")[0]}</small>
										</p>
										<p className="my-1">
											<small>Published: {new Date(article.published_at).toDateString()}</small>
										</p>
										<p className="my-0">
											<small>Category: {article.category}</small>
										</p>
									</Card.Subtitle>
									<Card.Text>{article.description.slice(0, 100) + '...'}</Card.Text>
									<Nav.Link href={article.url} target="_blank">
										Read more from <strong>{` ${article.source_name}`}</strong>
									</Nav.Link>
								</Card.Body>
							</Card>
						</div>
					);
				})
			}

			{
				articles.length === 0 && (
					<Card>
						<Card.Body>
							No Result
						</Card.Body>
					</Card>
				)
			}
		</Col>
	);
};

export default Article;
