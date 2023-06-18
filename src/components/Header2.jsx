export default function HeaderSecond() {
	return (
		<>
			<div className="header">
				<div className="container">
					<div className="navbar">
						<div className="logo">
							<h1 style="color: aliceblue;">Welcome to Info Skills</h1>
						</div>
						<nav>
							<ul>
								<li><a href="">Home</a></li>
								<li><a href="#3">Courses</a></li>
								<li><a href="#4">Consult Expert</a></li>
								<li><a href="#2">Our Mission</a></li>
								<li><a href="#1">Contact Us</a></li>
							</ul>
						</nav>
						<li><a href="loginsignup.html" className="sign">Login/SignUp</a></li>


					</div>

					<div className="row">
						<div className="col-2">
							<h2>Search the Skill For<br />which you want to<br />get information</h2>
							<form className="search">
								<input type="text" placeholder="Search.." name="search" />
							</form>
						</div>
						<div className="col-2">
							<img src="images/displaypic.jfif" />
						</div>
					</div>
				</div>
			</div >
		</>
	);
}
