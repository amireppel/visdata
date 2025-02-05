// src/WorldMap.js
import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const WorldMap = () => {
  const svgRef = useRef();
  const [chosenCountry, setCountry] = useState('Russia'); 
  const [data, setData] = useState(null);

  
  useEffect(() => {
 

    // Load and display the World Atlas data
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then(data => {
        setData(data);
  
      })
      .catch(error => {
        console.error('Error loading the world map data:', error);
      });
  }, []);

  useEffect(()=>{
    console.log('chosen country', chosenCountry)
    if(data && chosenCountry){
      console.log('here!')
    const width = 1400;
    const height = 800;
    d3.select(svgRef.current)
    .selectAll("path")
    .remove();
    let svg = d3.select(svgRef.current|| null)
      .attr('width', width)
      .attr('height', height);

    const projection = d3.geoMercator()
      .scale(130)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);
    const countries = topojson.feature(data, data.objects.countries);
 
    svg.selectAll('.country')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', path)
      .attr('fill', (e, item) => {
  
        if(e?.properties?.name === chosenCountry){
  
          return 'yellow';
        }
        return '#69b3a2'
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5)
      .on('click', function(e, item) {
       console.log('item', item)
       setCountry(item.properties.name);
       

    });
  }
  }, [data, chosenCountry,  svgRef]
 )
  
  return (
    <div>
      <div>
        {chosenCountry}
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WorldMap;