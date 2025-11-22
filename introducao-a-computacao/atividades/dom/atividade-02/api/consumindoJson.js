const handleGetPokemon = async () => {
  const URL_POKEMON = "https://pokeapi.co/api/v2";
  const buscaPokemon = document.getElementById("buscar-pokemon");
  const valor = buscaPokemon.value.toLowerCase().trim();
  const exibirPokemon = document.getElementById("exibir-pokemon");

  if (!valor) {
    exibirPokemon.innerHTML = `<span class="pokemon-nome">Digite o nome de um Pokémon</span>`;
    return;
  }

  try {
    const request = await fetch(`${URL_POKEMON}/pokemon/${valor}`);

    if (request.ok) {
      const response = await request.json();

      const pokemonData = {
        nome: response.name,
        id: response.id,
        altura: response.height / 10,
        peso: response.weight / 10,
        tipos: response.types.map((n) => n.type.name),
        habilidades: response.abilities.map((a) => a.ability.name),
        estatisticas: response.stats.map((estatistica) => ({
          nome: estatistica.stat.name,
          valor: estatistica.base_stat,
        })),
        sprites: response.sprites,
      };

      exibirPokemon.innerHTML = `
        <div class="pokemon-card">
          <div class="pokemon-header">
            <h2 class="pokemon-nome">${
              pokemonData.nome.charAt(0).toUpperCase() +
              pokemonData.nome.slice(1)
            }</h2>
            <span class="pokemon-id">#${pokemonData.id
              .toString()
              .padStart(3, "0")}</span>
          </div>
          
          <div class="pokemon-images">
            <img class="pokemon-exibido" 
                 src="${pokemonData.sprites.front_default}" 
                 alt="${pokemonData.nome}" 
                 width="200" height="200" />
          </div>

          <div class="pokemon-info">
            <div class="pokemon-physical">
              <p><strong>Altura:</strong> ${pokemonData.altura}m</p>
              <p><strong>Peso:</strong> ${pokemonData.peso}kg</p>
            </div>

            <div class="pokemon-types">
              <strong>Tipos:</strong> 
              ${pokemonData.tipos
                .map(
                  (tipo) =>
                    `<span class="type-badge type-${tipo}">${tipo}</span>`
                )
                .join(" ")}
            </div>

            <div class="pokemon-abilities">
              <strong>Habilidades:</strong>
              <ul>
                ${pokemonData.habilidades
                  .map(
                    (habilidade) => `<li>${habilidade.replace("-", " ")}</li>`
                  )
                  .join("")}
              </ul>
            </div>

            <div class="pokemon-stats">
              <strong>Estatísticas base:</strong>
              <ul class="stats-list">
                ${pokemonData.estatisticas
                  .map(
                    (estatistica) => `
                  <li>
                    <span class="stat-name">${estatistica.nome.replace(
                      "-",
                      " "
                    )}:</span>
                    <span class="stat-value">${estatistica.valor}</span>
                  </li>
                `
                  )
                  .join(" ")}
              </ul>
            </div>
          </div>
        </div>
      `;
    } else {
      if (request.status === 404) {
        exibirPokemon.innerHTML = `<span class="pokemon-nome error">Pokémon "${valor}" não encontrado</span>`;
      } else {
        exibirPokemon.innerHTML = `<span class="pokemon-nome error">Erro ao buscar Pokémon (${request.status})</span>`;
      }
    }
  } catch (error) {
    exibirPokemon.innerHTML = `<span class="pokemon-nome error">erro de conexão.</span>`;
  }
};
