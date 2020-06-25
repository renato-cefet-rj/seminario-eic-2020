d3.selectAll("path").attr("vector-effect", "non-scaling-stroke");

function atualiza(dados) {
  var cor = d3.scaleSequential()
    .domain([0, 200000])
    .interpolator(d3.interpolateReds)
  ;
  
  d3.selectAll("path")
    .datum(function(){ console.log(dados); return dados[d3.select(this).attr("class")]; }) 
    .style("fill", d => cor(d.casosAcumulados))
  ;
}
  
d3.json('https://raw.githubusercontent.com/renato-cefet-rj/seminario-eic-2020/master/dados/covid19/dados-exemplo10.json')
  .then(atualiza)
;
