var dados = [ 
  { uf: "RJ", valor: 100 },
  { uf: "SP", valor: 200 },
  { uf: "ES", valor: 80 },
  { uf: "MG", valor: 120 }
];

var t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear)
;

var cor = d3.scaleSequential()
	.domain([0, 350])
    .interpolator(d3.interpolateReds)
;

// Outros esquemas de cores: https://github.com/d3/d3-scale-chromatic

function atualiza() {
  var svg = d3.select("#s1");
  svg.selectAll("rect")
    .data(dados)
    .join("rect")
      .attr("x", 0)
      .attr("y", (d,i) => i*20)
      .attr("height", 18)
      .style("fill", d => cor(d.valor))
      .transition(t)
        .attr("width", d => d.valor)
    ;  
}

function insere(uf, valor) {
  dados.push({uf:uf,valor:valor});
  atualiza();
}

function remove() {
  if(dados.length>0) 
    dados.pop();
    atualiza();
}

atualiza();