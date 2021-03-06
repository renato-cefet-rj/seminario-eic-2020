var dados = [ 
  { uf: "RJ", valor: 100 },
  { uf: "SP", valor: 200 },
  { uf: "ES", valor: 80 },
  { uf: "MG", valor: 250 }
];

var svg = d3.select("#s1");

svg.selectAll("rect")
  .data(dados)
  .join("rect")
    .attr("x", 0)
    .attr("y", (d,i) => i*20)
    .attr("width", d => d.valor)
    .attr("height", 18)
  ;