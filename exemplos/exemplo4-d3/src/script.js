var dados = [ 
  { uf: "RJ", valor: 100 },
  { uf: "SP", valor: 200 },
  { uf: "ES", valor: 80 },
  { uf: "MG", valor: 250 }
];

var t = d3.transition()
    .duration(750)
    .ease(d3.easeLinear)
;

function atualiza() {
  var svg = d3.select("#s1");
  svg.selectAll("rect")
    .data(dados)
    .join("rect")
      .attr("x", 0)
      .attr("y", (d,i) => i*20)
      .attr("height", 18)
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