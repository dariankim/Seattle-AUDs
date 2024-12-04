var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1IjoiZGFyaWFuazUiLCJhIjoiY200NHc5eHVlMHA1ejJrb2h4N2dycnJrZCJ9.vmXhgq9wXqJ5W26TfMfFqg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'AADU & DADU',
    subtitle: 'Seattle housing info',
    byline: 'By Darian Kim and Mausom Tamang',
    footer: 'Images, Articles, and Data Files: <a href="https://docs.google.com/document/d/1vOAkrveFk1JNAMXfPMt8aK4sLqt-6lSkvgUSqkOFg2w/edit?usp=sharing" target="_blank">Sources</a>  <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Chapter1',
            alignment: 'Center',
            hidden: false,
            title: 'ADU (Accessory Dwelling Unit)',
            image: 'image/ADU.jpeg',
            description: `An Accessory Dwelling Unit (ADU) is a separate, self-contained living
            space either within a house or on the same property as an existing home. ADUs can
            be attached, such as a converted garage or basement, or detached, like a standalone
            small house. These units must be legally established through a permit process to
            ensure compliance with local zoning laws, building codes, and safety regulations.
            ADUs offer affordable housing options, generate rental income for homeowners, and
            can increase property value while promoting sustainable, efficient use of land and
            resources in urban areas.`,
            location: {
                center: [-122.3228, 47.6061],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 1
                },
                {
                    layer: 'council-district-layer',
                    opacity: 0
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chapter2',
            alignment: 'left',
            hidden: false,
            title: 'AADU (Attached Accessory Dwelling Unit)',
            image: 'image/aadu.png',
            description: `An Attached Accessory Dwelling Unit (AADU) is a legally permitted
            living space that is connected to a primary residence. It is typically created
            by converting existing areas, such as basements, garages, or extensions, into
            independent units with their own entrance, kitchen, and bathroom.`,
            location: {
                center: [-122.3228, 47.6061],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 0
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer:'aaduHeatmap',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chapter3',
            alignment: 'left',
            hidden: false,
            title: 'DADU (Detached Accessory Dwelling Unit)',
            image: 'image/dadu.png',
            description: `A Detached Accessory Dwelling Unit (DADU), also known as a backyard cottage,
            is a legally permitted living space located on the same property as a primary residence
            but not within the main home. These units are typically standalone structures, offering
            privacy and independence with their own entrance, kitchen, and bathroom.`,
            location: {
                center: [-122.3228, 47.6061],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 0
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 1
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer:'daduHeatmap',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chapter4',
            alignment: 'left',
            hidden: false,
            title: 'Introduction to City Council Districts in Seattle',
            description: `In Seattle districts are divided into 7 parts where each part is reprsented by a 
            council member. Boundaries of the seven City Council Districts are divided based on 
            the number of residents and balance representation in city government. Boundaries are updated 
            based on Census data that the Seattle Redistricting Commission uses to modify boundaries.`,
            legend: true,
            location: {
                center: [-122.3228, 47.6061],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 1
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'council-district-layer',
                    opacity: 0
                     }    
            ]
        },
        {
            id: 'Chapter5',
            alignment: 'left',
            hidden: false,
            title: "City Council District ADU count",
            description: `This map is a visualization of ADUs in Seattle based on the City Council District boundaries.`,
            location: {
                center: [-122.3328, 47.6061],
                zoom: 10,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 0
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 1
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                     }    
            ]
        },
        {
            id: 'Chapter6',
            alignment: 'left',
            hidden: false,
            title: "City Council District AADUs",
            description: `This map is a visualization of AADUs in Seattle based on the City Council District boundaries.`,
            location: {
                center: [-122.3328, 47.6061],
                zoom: 10,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 0
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 1
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                     }    
            ]
        },
        {
            id: 'Chapter 7',
            alignment: 'Center',
            hidden: false,
            title: "City Council District AADU Count",
            description: `This bar graph shows the total amount of AADUs in each City Council District. 
            The highest AADU count is in district 6 with 732 total. The lowest AADU count is in district 7 with 214 total`,
            chartdata: [
                {group: "District 1", value: 602},
                {group: "District 2", value: 578},
                {group: "District 3", value: 495},
                {group: "District 4", value: 540},
                {group: "District 5", value: 670},
                {group: "District 6", value: 732},
                {group: "District 7", value: 214}
            ],
            location: {
                center: [-122.3328, 47.6061],
                zoom: 10,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 1
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'council-district-layer',
                    opacity: 0
                }   
            ]
        },
        {
            id: 'Chapter 8',
            alignment: 'left',
            hidden: false,
            title: "City Council District DADUs",
            description: 'This map is a visualization of DADUs in Seattle based on the City Council District boundaries.',
            location: {
                center: [-122.3328, 47.6061],
                zoom: 10,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 0
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 1
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                }    
            ]
        },
        {
            id: 'Chapter9',
            alignment: 'Center',
            hidden: false,
            title: "City Council District DADU Count",
            description: 'This bar graph shows the total amount of DADUs in each City Council District. The highest DADU count is in district 5 with 735 total. The lowest DADU count is in district 7 with 105 total',
            chartdata: [
                {group: "District 1", value: 521},
                {group: "District 2", value: 416},
                {group: "District 3", value: 225},
                {group: "District 4", value: 291},
                {group: "District 5", value: 735},
                {group: "District 6", value: 597},
                {group: "District 7", value: 105}
            ],
            location: {
                center: [-122.3328, 47.6061],
                zoom: 10,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 1
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'council-district-layer',
                    opacity: 0
                }    
            ]
        },
        {
            id: 'Chapter10',
            alignment: 'fully',
            hidden: false,
            title: "Conclusion",
            description: `From diving into the ADUs two conclusions can 
            be made. The first is the favortism of AADUs in Seattle. This goes with 
            reason as AADUs need less resources and time to fully complete, while
            DADUs require aditional land that may be hard to build on due
            to Seattle's building layout and restrictions. The second conclusion is that 
            district 7 when compared to the other districts had the least amount in ADUs (AADUs and DADUs).
            Closer look in the district may provide information of possible development for ADUs to support
            the population in district 7 along with investment opportunities.`,
            location: {
                center: [-122.3328, 47.6061],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'city-limits',
                    opacity: 0
                },
                {
                    layer: 'council-district-layer',
                    opacity: 1
                },
                {
                    layer: 'DADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'AADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'ADU-extrusion-layer',
                    opacity: 0
                },
                {
                    layer: 'daduHeatmap',
                    opacity: 0
                },
                {
                    layer: 'aaduHeatmap',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'council-district-layer',
                    opacity: 1
                }    
            ]
        }
    ]
};
