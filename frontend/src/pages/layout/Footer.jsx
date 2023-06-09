import { Navbar, Container } from "react-bootstrap";
import {useAuth} from '../../contexts/AuthContext';
import Loading from '../../utils/Loading'

const Footer = () => {
	const { loginStorageData, userLogout, loading} = useAuth();
	return (
		<div>
		{loading && <Loading />}
		{loginStorageData ? (
			<Navbar fixed="bottom" bg="dark" variant="dark" className="mt-2 py-2">
				<Container className="text-center d-block">
					<span className="text-light">© Copyright 2023, Innoscripta</span>
				</Container>
			</Navbar>
		) : (
			<>
			</>
		)}
		</div>
	);
};
export default Footer;
