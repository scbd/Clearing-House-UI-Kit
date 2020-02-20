define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

		$scope.documents = [
			{
				name: 			'Guidelines on Marine Protected Areas and Fisheries',
				description: 	'Guidelines on Marine Protected Areas and Fisheries',
				thumbnail: 		'app/images/training/guidelines-MPAF.jpg',
				url: 			'https://www.cbd.int/doc/c/85a0/ee55/e7f6972ae2bbe786b500c94e/soi-ws-2018-03--fao-guide-mpa-fisheries-en.pdf',
				type:           'document'
			}, {
				name: 			'Using Scientific Information Related to Ecologically or Biologically Significant Marine Areas (EBSAs) to Implement Marine Spatial Planning and Ecosystem Based Management',
				description: 	'Using Scientific Information Related to Ecologically or Biologically Significant Marine Areas (EBSAs) to Implement Marine Spatial Planning and Ecosystem Based Management',
				thumbnail: 		'app/images/training/implement-MSPEBM.jpg',
				url: 			'https://www.cbd.int/doc/c/aa29/fa6c/67d11f2795656f72794ce246/soi-ws-2018-03-mcbem-2014-04-inf-02-en.pdf',
				type:           'document'
			}, {
				name: 			'Practical Actions for Advancing Blue Carbon Initiatives',
				description: 	'Practical Actions for Advancing Blue Carbon Initiatives',
				thumbnail: 		'app/images/training/practical-actions-ABCI.jpg',
				url: 			'https://www.cbd.int/doc/c/4094/d2f0/c7fdba28389bfadcb89b332a/soi-ws-2018-02-strategic-coastal-blue-carbon-brochure-en.pdf',
				type:           'document'
			}, {
				name: 			'Good practice guidelines for successful National Intersectoral Coordinating Mechanisms (NICs)',
				description: 	'Good practice guidelines for successful National Intersectoral Coordinating Mechanisms (NICs)',
				thumbnail: 		'app/images/training/guidelines-NICM.jpg',
				url: 			'https://www.cbd.int/doc/c/87d3/d1a1/26a89b1976e62cb208719dcc/soi-om-2018-01-clme-en.pdf',
				type:           'document'
			}, {
				name: 			'Marine Spatial Planning: A Step-by-Step Approach toward Ecosystem-based Management',
				description: 	'Marine Spatial Planning: A Step-by-Step Approach toward Ecosystem-based Management',
				thumbnail: 		'app/images/training/MSP.jpg',
				url: 			'https://www.cbd.int/doc/c/fef1/d81f/adff3b59a53f3e202c8bf7ea/soiws-2018-01-unesco-ioc-marine-spatial-planning-en.pdf',
				type:           'document'
			}, {
				name: 			'Identifying specific elements for integrating the traditional, scientific, technical and technological knowledge of indigenous and local communities, and social and cultural criteria and other aspects for the application of scientific criteria for identification of ecologically or biologically significant areas (EBSAs) as well as the establishment and management of marine protected areas',
				description: 	'Identifying specific elements for integrating the traditional, scientific, technical and technological knowledge of indigenous and local communities, and social and cultural criteria and other aspects for the application of scientific criteria for identification of ecologically or biologically significant areas (EBSAs) as well as the establishment and management of marine protected areas',
				thumbnail: 		'app/images/training/specific-elements-EBSA.jpg',
				url: 			'https://www.cbd.int/doc/meetings/sbstta/sbstta-16/information/sbstta-16-inf-10-en.pdf',
				type:           'document'
			}, {
				name: 			'Putting in to practice the ecosystems approach to fisheries (UN FAO)',
				description: 	'Putting in to practice the ecosystems approach to fisheries (UN FAO)',
				thumbnail: 		'app/images/training/practice-EAF.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/cbwsoi-seasi-01/other/cbwsoi-seasi-01-putting-into-practice-eaf-en.pdf',
				type:           'document'
			}, {
				name: 			'Strategic Environmental Assessment  better Practice Guide',
				description: 	'Strategic Environmental Assessment  better Practice Guide',
				thumbnail: 		'app/images/training/SEA-practice-guide.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/soiws-2015-03/other/soiws-2015-03-sea-guidance-en.pdf',
				type:           'document'
			}, {
				name: 			'Marine Protected Areas Agencies: A Practical Guide',
				description: 	'Marine Protected Areas Agencies: A Practical Guide',
				thumbnail: 		'app/images/training/MPAA-guide.jpg',
				url: 			' https://www.cbd.int/doc/meetings/mar/soiws-2015-03/other/soiws-2015-03-mpaap-en.pdf',
				type:           'document'
			}, {
				name: 			'Training Manual for the Description of Ecologically and Biologically Significant Areas (EBSAs) in Open-ocean Waters and Deep-sea Habitats',
				description: 	'Training Manual for the Description of Ecologically and Biologically Significant Areas (EBSAs) in Open-ocean Waters and Deep-sea Habitats',
				thumbnail: 		'app/images/training/download-pdf.jpg',
				url: 			'https://www.cbd.int/doc/meetings/sbstta/sbstta-16/information/sbstta-16-inf-09-en.pdf',
				type:           'document'
			}, {
				name: 			'Training manual on Integrating Traditional Knowledge in the Application of the EBSA criteria',
				description: 	'Training manual on Integrating Traditional Knowledge in the Application of the EBSA criteria',
				thumbnail: 		'app/images/training/download-pdf.jpg',
				type:           'forthcoming'
			}, {
				name: 			'CBD Protected Areas E-Learning Modules',
				description: 	'CBD Protected Areas E-Learning Modules',
				thumbnail: 		'app/images/training/e-learning-modules.jpg',
				url: 			'https://www.cbd.int/protected/e-learning/',
				type:           'website'
			}, {
				name: 			'FAO Ecosystem Approach to Fisheries (EAF) Toolbox',
				description: 	'FAO Ecosystem Approach to Fisheries (EAF) Toolbox',
				thumbnail: 		'app/images/training/170-fao-fisheries.jpg',
				url: 			'http://www.fao.org/fishery/eaf-net/topic/166272/en',
				type:           'website'
			}, {
				name: 			'Integrated Coastal Management for the Achievement of the Aichi Biodiversity Targets: Practical Guidance for Implementation Based on Experience and Lessons Learned from Coastal and Ocean Governance in the Seas of East Asia',
				description: 	'Integrated Coastal Management for the Achievement of the Aichi Biodiversity Targets: Practical Guidance for Implementation Based on Experience and Lessons Learned from Coastal and Ocean Governance in the Seas of East Asia',
				thumbnail: 		'app/images/training/cbd-ts-76.jpg',
				url: 			'https://www.cbd.int/doc/publications/cbd-ts-76-en.pdf ',
				type:           'document'
			}
		];
	}];
});
