<h1 align='center'>Adaptação da Tabela TACO</h1>

# Sobre a tabela TACO

**`Tabela Brasileira de Composição de Alimentos - TACO`**

O projeto **TACO**, coordenado pelo **NEPA/UNICAMP**, é uma iniciativa para oferecer dados de um expressivo
número de nutrientes em alimentos nacionais e regionais obtidos por meio de amostragem representativa e
análises realizadas somente por laboratórios com competência analítica comprovada por estudos
interlaboratoriais, segundo critérios internacionais.

A terceira versão totaliza **597** alimentos catalogados!

### **Mais informações:**

- [Acesse a tabela TACO](https://www.nepa.unicamp.br/taco/tabela.php?ativo=tabela)
- [Núcleo de Estudos e Pesquisas em Alimentação](https://www.nepa.unicamp.br/)

<br/>
<br/>

# Sobre este Repositório

### **Objetivos:**

- Obter uma tabela simplificada de alimentos, no formato **JSON**, contendo apenas a composição de Macronutrientes;
- A mesma unidade de medida de massa (_grama_) e energia (_kCal_) para todos os dados da tabela;
- Garantir a consistência da tabela, tratando os _outliers_.

<br/>

### **Procedimento:**

1. Obter os dados originais (disponíveis oficialmente em **PDF** e **XLS**) no formato **JSON**;
2. Filtrar todos os alimentos com dados incompletos, indefinidos, ou fora de formato;
3. Corrigir manualmente todos os dados encontrados na etapa anterior;
4. Truncar todos os dados da tabela para 1 casa decimal;
5. Checar a consistência das unidades de medidas de massa e energia.

# Notas sobre os Procedimentos

## **Obter os dados originais em JSON:**

Os dados originais em **XLS** devem ser retrabalhados para se obter um **JSON**. Felizmente, esse trabalho já foi realizado pelo [Raul Melo](https://github.com/raulfdm), no seu projeto [taco-api](https://github.com/raulfdm/taco-api). Clonei o repositório e obtive os dados já em **JSON**.

<br/>

## **Filtrar e corrigir dados atípicos:**

Alguns alimentos na tabela TACO contém propriedades atípicas. Para cada um dos casos, foram substituidos os valores:

| PROPRIEDADE | SIGNIFICADO                                        | NOVO VALOR                        |
| ----------- | -------------------------------------------------- | --------------------------------- |
| NA          | Não aplicável                                      | 0                                 |
| \*          | Análises sob reavaliação                           | Preenchido conforme outras fontes |
| Tr          | Traço: Valores pequenos, que podem ser desprezados | 0                                 |
