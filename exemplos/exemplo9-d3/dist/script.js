function atualiza(dados) {

  var fy = d3.scaleLinear()
    .domain([0, d3.max(dados, d => d.valor)])
    .range([400, 0])
  ;
  
  var fx = d3.scaleBand()
    .domain(d3.range(dados.length))
    .range([0, 800])
  ;
  
  var svg = d3.select("#s1");
  svg.selectAll("rect")
    .data(dados)
    .join("rect")
      .attr("x", (d,i) => fx(i))
      .attr("width", fx.bandwidth())
      .attr("y", d => fy(d.valor))
      .attr("height", d => fy(0)-fy(d.valor))
    ;  
}

d3.json('https://raw.githubusercontent.com/renato-cefet-rj/seminario-eic-2020/master/dados/covid19/casosAcumulados/35.json')
  .then(atualiza)
;