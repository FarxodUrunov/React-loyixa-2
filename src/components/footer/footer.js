import './footer.css';

const Footer = () => {
	return (
		<div className='footer__block'>
			<p>
			© 2023 Олег Марков. Сайт создан на 
			<a className='ms-2' href='#'>Wix.com.</a>
			</p>
			<div>
				<a href='#'>
					<img src="https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_19,h_19,al_c,usm_0.66_1.00_0.01/8d2c2a4846503b9067e2fd2f590445c2.wix_mp" alt="..."/>
				</a>
				<a href='#'>
					<img src="https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/f33e5c8ff44ad726a15419f6ff97b3fd.webp" alt="..."/>
				</a>
				<a href='#'>
					<img src="https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/fe7017590fbd384c7502a64601c7b444.webp" alt="..."/>
				</a>
				<a href='#'>
					<img src="https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/a0a5617532c029a9bcc4b6490606cc49.webp" alt="..."/>
				</a>
			</div>
		</div>
	)
}

export default Footer;