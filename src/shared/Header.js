import React from 'react';   
import logo from '../images/logo.png'
import {
	Link
  } from "react-router-dom";

function Header(){
    return (<>
	<div class="site-content">
			<div class="site-header">
				<div class="container">
					<a href="index.html" class="branding">
						<img src={logo} alt="" class="logo" />
						<div class="logo-type">
							<h1 class="site-title">Users</h1>
						</div>
					</a>
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
                        <Link to="/"  class="menu-item ">&nbsp; Users &nbsp;</Link>
							
							<Link to="/Contact"  class="menu-item ">&nbsp; Contact Us &nbsp;</Link>
							
						</ul> 
					</div> 
					<div class="mobile-navigation"></div>
					

				</div>
				
			</div> 
			
            </div>
			
</>


);
}
export default Header;