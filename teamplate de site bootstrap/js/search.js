// Atualizando os dados para incluir descrições e URLs

// AQUI ESTÃO OS LINKS TI e CSI

const data = [
  { description: "Home", url: "/index.html" },
  { description: "Procedimento", url: "/procedimentos.html" },
  { description: "Script.", url: "/Scrpit.html" },
  { description: "Links", url: "/links.html" },

  {
    description: "Solicitar instalação de programas",
    url: "",
  },

  {
    description: "Solicitar homologação de Software",
    url: "",
  },
  {
    description: "Falhas em programas e aplicativos",
    url: "",
  },
  {
    description: "Falha nos Equipamentos e periféricos de TI",
    url: "",
  },
  {
    description: "Falha em Sistemas Corporativos",
    url: "",
  },
  {
    description: "Consulta de chamado",
    url: "",
  },
  {
    description: "Incidente Notebook",
    url: "",
  },
  {
    description: "Incidente Desktop",
    url: "",
  },
  {
    description: "Manutenção Ponto de rede",
    url: "",
  },
  {
    description:
      "Solicitações de Serviços de Segurança da Informação (Token de Acesso)",
    url: "",
  },
  {
    description: "Solicitação - Homologação",
    url: "",
  },
  {
    description: "Solicitação - Homologação",
    url: "",
  },
  {
    description: "Solicitar veículo reserva",
    url: "",
  },
  {
    description: "Samsung - Problemas de funcionamento",
    url: "",
  },
  {
    description:
      "Samsung - solicitar instalação de aplicações - Demais aplicativos",
    url: "",
  },
  {
    description: "",
    url: "",
  },
  {
    description: "",
    url: "",
  },
  // Adicione mais itens conforme necessário
];

function performSearch() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = ""; // Limpa resultados anteriores

  const results = data.filter((item) =>
    item.description.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    results.forEach((result) => {
      const link = document.createElement("a");
      link.href = result.url;
      link.textContent = result.description;
      link.target = "_blank";
      const element = document.createElement("div");
      element.appendChild(link);
      resultsContainer.appendChild(element);
    });
  } else {
    resultsContainer.innerHTML = "Nenhum resultado encontrado.";
  }
}

function searchOnEnter(event) {
  // Verifica se a tecla pressionada é o Enter
  if (event.key === "Enter") {
    event.preventDefault(); // Previne o comportamento padrão do Enter
    performSearch(); // Chama a função de pesquisa
  }
}

// Aqui começa a configuração do botao de copiar da pagina script que sera implementado na proxima atualização, não sei se vou fazer com api ou de outra forma
