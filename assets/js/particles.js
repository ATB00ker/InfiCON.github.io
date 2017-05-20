if($(window).width() > 500){
	particlesJS('particles-js',
		{
		  "particles": {
			"number": {
			  "value": 43,
			  "density": {
				"enable": true,
				"value_area": 320.6824121731046
			  }
			},
			"color": {
			  "value": "#000000"
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 5
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": 0.6333477640418815,
			  "random": false,
			  "anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 4.008530152163807,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 112.2388442605866,
			  "color": "#878787",
			  "opacity": 0.4,
			  "width": 1
			},
			"move": {
			  "enable": true,
			  "speed": 6,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": true,
				"mode": "grab"
			  },
			  "onclick": {
				"enable": true,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 146.17389821424212,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true
		}
	);
}else{
	$("#logo").css("height",$(window).height());
	$("#logo").css("backgroundColor","#f7fbff");
	$("#logo img").css("marginTop",($(window).height()/2)-127);
	$("#logo i").css("marginTop",($(window).height())-0.15*$(window).height());
}