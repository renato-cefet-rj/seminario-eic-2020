var dados = [ 
  { uf: "RJ", valor: 100 },
  { uf: "SP", valor: 200 },
  { uf: "ES", valor: 80 },
  { uf: "MG", valor: 500 }
];

var t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear)
;

var cor = d3.scaleOrdinal(d3.schemeAccent);

function atualiza() {

  var fx = d3.scaleLinear()
    .domain([0, d3.max(dados, d => d.valor)])
    .range([0, 380])
  ;
  
  var fy = d3.scaleBand()
    .domain(d3.range(dados.length))
    .range([0, 380])
    .padding(0.1)
  ;
  
  var svg = d3.select("#s1");
  svg.selectAll("rect")
    .data(dados)
    .join("rect")
      .attr("x", 0)
      .attr("y", (d,i) => fy(i))
      .attr("height", fy.bandwidth())
      .style("fill", d => cor(d.uf))
      .transition(t)
        .attr("width", d => fx(d.valor))
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