# Avaliação de Introdução à Computação

## Instruções Gerais

- Cada aluno deve trabalhar em sua própria branch
- Use a imagem fornecida como referência para o desenvolvimento
- Faça commits frequentes e significativos
- Mantenha o código organizado e bem documentado

## Entrega

1. Crie sua branch seguindo o padrão: `seu-nome`
2. Desenvolva a solução conforme especificações
3. Ao finalizar, faça um Pull Request para a branch principal

## Critérios de Avaliação

- Funcionalidade correta
- Organização do código
- Uso adequado do Git
- Cumprimento dos requisitos

## Observações

- Dúvidas devem ser esclarecidas durante a aula
- Mantenha a integridade acadêmica
## Comandos Git para Trabalho em Equipe

### Básicos
```bash
git clone [url-repositorio]    # Clonar repositório
git status                     # Verificar estado dos arquivos
git add .                      # Adicionar mudanças
git commit -m "mensagem"       # Registrar mudanças
git push origin [sua-branch]   # Enviar mudanças
```

### Trabalhando com Branches
```bash
git branch                     # Listar branches
git branch [nome-branch]       # Criar nova branch
git checkout [nome-branch]     # Mudar para branch
git checkout -b [nome-branch]  # Criar e mudar de branch
```

### Sincronização
```bash
git pull origin main          # Atualizar branch local
git merge main               # Mesclar main na sua branch
git fetch --all             # Atualizar referências remotas
```

### Boas Práticas
1. Mantenha sua branch atualizada com a main
2. Faça commits pequenos e frequentes
3. Escreva mensagens claras nos commits
4. Resolva conflitos antes do Pull Request