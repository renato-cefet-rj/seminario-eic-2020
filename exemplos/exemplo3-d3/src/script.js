var dados = [ 
  { uf: "RJ", valor: 100 },
  { uf: "SP", valor: 200 },
  { uf: "ES", valor: 80 },
  { uf: "MG", valor: 250 }
];

function atualiza() {
  var svg = d3.select("#s1");
  svg.selectAll("rect")
    .data(dados)
    .join(
      enter => 
        enter.append('rect').style('fill', 'blue'),
    
      update => 
        update.style('fill', 'orange'),

      exit => 
        exit.style('fill', 'lightgray')
    )
    .attr("x", 0)
    .attr("y", (d,i) => i*20)
    .attr("width", d => d.valor)
    .attr("height", 18)
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