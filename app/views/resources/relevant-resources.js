define(['app', 'angular', 'authentication'], function() { 'use strict';

	return ['$scope', '$rootScope', '$route', '$browser', '$location', '$window', 'authentication', function ($scope, $rootScope, $route, $browser, $location, $window, authentication) {

		$scope.documents = [
			{
				name: 			'FAO: Geographic Information Systems to support the ecosystem approach to fisheries',
				description: 	'FAO: Geographic Information Systems to support the ecosystem approach to fisheries',
				thumbnail: 		'app/images/resources/170-fao-geographic_brochure.jpg',
				url: 			'https://www.youtube.com/embed/4q6RiihseQ8',
				type:           'document'
			}, {
				name: 			'FAO: Guidelines on the Ecosystem Approach to Fisheries',
				description: 	'FAO: Guidelines on the Ecosystem Approach to Fisheries',
				thumbnail: 		'app/images/resources/170-fao-ecosystem_brochure.jpg',
				url: 			'https://www.youtube.com/embed/4q6RiihseQ8',
				type:           'document'
			}, {
				name: 			'FAO: Guidelines on Marine Protected Areas and Fisheries',
				description: 	'FAO: Guidelines on Marine Protected Areas and Fisheries',
				thumbnail: 		'app/images/resources/170-fao-deep-seas_brochure.jpg',
				url: 			'https://www.youtube.com/embed/4q6RiihseQ8',
				type:           'document'
			}, {
				name: 			'FAO: International guidelines for the management of deep-sea fisheries in the high seas',
				description: 	'FAO: International guidelines for the management of deep-sea fisheries in the high seas',
				thumbnail: 		'app/images/resources/170-fao-international.jpg',
				url: 			'https://www.youtube.com/embed/4q6RiihseQ8',
				type:           'document'
			}, {
				name: 			'FAO: Putting into practice the ecosystem approach to fisheries',
				description: 	'FAO: Putting into practice the ecosystem approach to fisheries',
				thumbnail: 		'app/images/resources/170-fao-putting.jpg',
				url: 			'https://www.youtube.com/embed/4q6RiihseQ8',
				type:           'document'
			}, {
				name: 			'FAO Vulnerable Marine Ecosystem (VME) Database',
				description: 	'FAO Vulnerable Marine Ecosystem (VME) Database',
				thumbnail: 		'app/images/resources/170-fao-vme.jpg',
				url: 			'http://www.fao.org/in-action/vulnerable-marine-ecosystems/en/',
				type:           'database'
			}, {
				name: 			'GEO BON Adequacy of Biodiversity Observation Systems to support the CBD 2020 Targets',
				description: 	'GEO BON Adequacy of Biodiversity Observation Systems to support the CBD 2020 Targets',
				thumbnail: 		'app/images/resources/170-geo-bon.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/cbwsoi-wafr-01/other/cbwsoi-wafr-01-geobon-adequacy-report-2011-en.pdf',
				type:           'document'
			}, {
				name: 			'UNEP Green Economy in a Blue World (Synthesis Report)',
				description: 	'UNEP Green Economy in a Blue World (Synthesis Report)',
				thumbnail: 		'app/images/resources/170-green-economy.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/cbwsoi-wafr-01/other/cbwsoi-wafr-01-unep-green-economy-blue-world-en.pdf',
				type:           'document'
			}, {
				name: 			'UNEP GRID Arendal: Why Value Oceans?',
				description: 	'UNEP GRID Arendal: Why Value Oceans?',
				thumbnail: 		'app/images/resources/170-unep-grid.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/cbwsoi-wafr-01/other/cbwsoi-wafr-01-unep-grid-arendal-why-value-oceans-en.pdf',
				type:           'document'
			}, {
				name: 			'UNDOALOS: Ecosystem approaches and oceans',
				description: 	'UNDOALOS: Ecosystem approaches and oceans',
				thumbnail: 		'app/images/resources/170-undoalos-ecosystem.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/cbwsoi-seasi-01/other/cbwsoi-seasi-01-ea-and-oceans-en.pdf',
				type:           'document'
			}, {
				name: 			'UNDOALOS: Marine scientific research – a revised guide to the implementation of relevant provisions of the UN Convention on the Law of the Sea',
				description: 	'UNDOALOS: Marine scientific research – a revised guide to the implementation of relevant provisions of the UN Convention on the Law of the Sea',
				thumbnail: 		'app/images/resources/170-undoalos-marine.jpg',
				url: 			'https://www.cbd.int/doc/meetings/mar/cbwsoi-wafr-01/other/cbwsoi-wafr-01-doalos-msr-en.pdf',
				type:           'document'
			}, {
				name: 			'Blue Solutions Regional Forum on Solutions for Oceans, Coasts and Human Well-Being in Asia And the Pacific',
				description: 	'Blue Solutions Regional Forum on Solutions for Oceans, Coasts and Human Well-Being in Asia And the Pacific',
				thumbnail: 		'app/images/resources/170-blue-solution-ap.jpg',
				url: 			'https://bluesolutions.info/images/Blue-Solutions-from-Asia-and-the-Pacific_2nd-edition-2016_en-1.pdf',
				type:           'document'
			}, {
				name: 			'Blue Solutions Regional Forum on Solutions for Oceans, Coasts and Human Well-Being in Latin America and the Wider Caribbean',
				description: 	'Blue Solutions Regional Forum on Solutions for Oceans, Coasts and Human Well-Being in Latin America and the Wider Caribbean',
				thumbnail: 		'app/images/resources/170-blue-solution-lac.jpg',
				url: 			'https://bluesolutions.info/images/Blue-Solutions-from-Latin-America-the-Wider-Caribbean-2015_2nd-edition.pdf',
				type:           'document'
			}, {
				name: 			'Blue Solutions Regional Forum on Solutions for Oceans, Coasts and Human Well-Being in Africa',
				description: 	'Blue Solutions Regional Forum on Solutions for Oceans, Coasts and Human Well-Being in Asia And the Pacific',
				thumbnail: 		'app/images/resources/170-blue-solution-afr.jpg',
				url: 			'https://bluesolutions.info/images/Blue-Solutions-from-Africa-2016_en.pdf ',
				type:           'document'
			}
		];
	}];
});
