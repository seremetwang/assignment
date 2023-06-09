import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../../utils/Loading";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Header = () => {
	const { loginStorageData, userLogout, loading } = useAuth();
	return (
		<div>
		{loading && <Loading />}
		{loginStorageData ? (
			<AppBar
			position="static"
			color="default"
			elevation={0}
			sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
		>
			<Toolbar sx={{ flexWrap: 'wrap' }}>
			<Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
				Innoscripta
			</Typography>
			<nav>
				<Link
				variant="button"
				color="text.primary"
				href="/"
				sx={{ my: 1, mx: 1.5 }}
				>
				Home
				</Link>
				<Link
				variant="button"
				color="text.primary"
				href="/feed"
				sx={{ my: 1, mx: 1.5 }}
				>
				Feed
				</Link>
				<Link
				variant="button"
				color="text.primary"
				href="/setting"
				sx={{ my: 1, mx: 1.5 }}
				>
				Settings
				</Link>
			</nav>
			<Button onClick={userLogout} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
				Logout
			</Button>
			</Toolbar>
		</AppBar>
		) : (
			<>
				
			</>
		)}
		</div>
	);
};

export default Header;
