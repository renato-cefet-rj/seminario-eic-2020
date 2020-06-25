var dados = [ 
  { uf: "RJ", valor: 100 },
  { uf: "SP", valor: 200 },
  { uf: "ES", valor: 80 },
  { uf: "MG", valor: 500 }
];

var cor = d3.scaleOrdinal(d3.schemeAccent);

function atualiza() {

  var fy = d3.scaleLinear()
    .domain([0, d3.max(dados, d => d.valor)])
    .range([380, 0])
  ;
  
  var fx = d3.scaleBand()
    .domain(d3.range(dados.length))
    .range([0, 380])
    .padding(0.1)
  ;
  
  var svg = d3.select("#s1");
  svg.selectAll("rect")
    .data(dados)
    .join("rect")
      .attr("x", (d,i) => fx(i))
      .attr("width", fx.bandwidth())
      .style("fill", d => cor(d.uf))
      .attr("y", d => fy(d.valor))
      .attr("height", d => fy(0)-fy(d.valor))
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