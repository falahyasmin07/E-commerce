import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-about-us',
	imports: [CommonModule],
	templateUrl: './about-us.component.html',
	styleUrl: './about-us.component.css'
})

export class AboutUsComponent {
	teamMembers = [
		{
			name: 'Mazen Neifer',
			image: 'assets/images/Mazen NEIFER.png',
			bio: 'Mazen Neifer is Chairman and CTO at Edge Pulsar. He worked as Cloud Development Director at Nestwave between September 2015 and July 2024. He started his career in 2001 at Atmel. Later he joined Sequans as a 4G project manager and technical leader since August 2005. In 2013, he worked at NXP Semiconductors as DSP firmware architect. Mazen graduated in 2001 from ISAE-SUPAERO in electronics and telecommunications. He contributed to many Open Source projects like FreeRTOS, Zephir and Debian.'
		},
		{
			name: 'Riadh Berhouma',
			image: 'assets/images/Riadh BERHOUMA.jpg',
			bio: 'Riadh Berhouma is CEO at Edge Pulsar. With a strong background in technology and business management, he has significantly contributed to innovation and growth in companies like Valeo, Sequans and Texas Instruments. His expertise in strategic planning and project management has been vital for their success. Riadh holds an MBA as well as a degree in engineering and has extensive experience in various technical and managerial roles, making him a key figure in the technology sector.'
		},
	];
}
