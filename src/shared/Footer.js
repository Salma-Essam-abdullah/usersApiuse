import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

function Footer(){
    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });
    return (<>
<footer class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<form action="#" class="subscribe-form">
								<input type="text" placeholder="Enter your email to subscribe..."/>
								<input type="submit" value="Subscribe"/>
							</form>
						</div>
						<div class="col-md-3 col-md-offset-1">
							<div class="social-links">
								<a href="#"> <IconFont type="icon-tuichu" /></a>
								<a href="#"> <IconFont type="icon-facebook" /></a>
								<a href="#"><IconFont type="icon-twitter" /></a>
							
							</div>
						</div>
					</div>

					<p class="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
				</div>
			</footer>
            </>


);
}
export default Footer;