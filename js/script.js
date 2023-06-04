

//  tarefa 1
// intantil  6 a 10 anos
// infanto-juvenil 11 a 15 anos
// juvenil 16 a 21 anos
// adulto 22 a 35 anos

// use if e depois if e else

function if1() {

    let idade = parseInt(prompt("qual a sua idade?1"))
    if (idade < 6 || idade > 35) {
        alert("fora das categorias, não pode participar")
    }
    if (idade >= 6 && idade <= 10) {
        alert("categoria infantil")
    }
    if (idade >= 11 && idade <= 15) {
        alert("categoria infanto-juvenil")
    }
    if (idade >= 16 && idade <= 21) {
        alert("categoria juvenil")
    }

    if (idade >= 22 && idade <= 35) {
        alert("categoria adulto")
    }
}

// tarefa 2

// intantil  6 a 10 anos
// infanto-juvenil 11 a 15 anos
// juvenil 16 a 21 anos
// adulto 22 a 35 anos

// use if e depois if e else

function if2() {

    let idade = parseInt(prompt("qual a sua idade?2"))
    if (idade < 6 || idade > 35) {
        alert("fora das categorias, não pode participar")
    } else
        if (idade >= 6 && idade <= 10) {
            alert("categoria infantil")
        } else
            if(idade >= 11 && idade <= 15) {
                alert("categoria infanto-juvenil")
            }
    if (idade >= 16 && idade <= 21) {
        alert("categoria juvenil")
    } else
        if (idade >= 22 && idade <= 35) {
            alert("categoria adulto")
        }

}

// tarefa 3           caso  UF
// Utilize a estrutura SWITCH...CASE 
// para criar uma função que receba como 
// entrada a sigla de uma Unidade da Federação e devolva 3 saídas:

function caso() {
    UF = prompt("Está buscando qual unidade federativa?");
    switch ( UF.toLowerCase()) {
        case "ac":
        case "acre":       
            alert(" Estado: Acre\n UF: AC\n Capital: Rio Branco\n Região: Norte");
            break;
        case "al":
        case "alagoas":          // \n quebra a linha igual o <br> do html
            alert(" Estado: Alagoas\n UF: AL\n Capital: Maceió\n Região: Nordeste");
            break;
        case "ap":
        case "amapa":
            alert(" Estado: Amapá\n UF: AP\n Capital: Macapá\n Região: Norte");
            break;
        case "am":
        case "amazonas":
            alert(" Estado: Amazonas\n UF: AM\n Capital: Manaus\n Região: Norte");
            break;
        case "ba":
        case "bahia":
            alert(" Estado: Bahia\n UF: BA\n Capital: Salvador\n Região: Nordeste");
            break;
        case "ce":
        case "ceara":
            alert(" Estado: Ceará\n UF: CE\n Capital: Fortaleza\n Região: Nordeste");
            break;
        case "df":
        case "distrito federal":
            alert(" Estado: Distrito Federal\n UF: DF\n Capital: Brasília\n Região: Centro-Oeste");
            break;
        case "es":
        case "espirito santo":
            alert(" Estado: Espírito Santo\n UF: ES\n Capital: Vitória\n Região: Sudeste");
            break;
        case "go":
        case "goias":
            alert(" Estado: Goiás\n UF: GO\n Capital: Goiânia\n Região: Centro-Oeste");
            break;
        case "ma":
        case "maranhao":
            alert(" Estado: Maranhão\n UF: MA\n Capital: São Luís\n Região: Nordeste");
            break;
        case "mt":
        case "mato grosso":
            alert(" Estado: Mato Grosso\n UF: MT\n Capital: Cuiabá\n Região: Centro-Oeste");
            break;
        case "ms":
        case "mato grosso do sul":
            alert(" Estado: Mato Grosso do Sul\n UF: MS\n Capital: Campo Grande\n Região: Centro-Oeste");
            break;
        case "mg":
        case "minas gerais":
            alert(" Estado: Minas Gerais\n UF: MG\n Capital: Belo Horizonte\n Região: Sudeste");
            break;
        case "pa":
        case "para":
            alert(" Estado: Pará\n UF: PA\n Capital: Belém\n Região: Norte");
            break;
        case "pb":
        case "paraiba":
            alert(" Estado: Paraíba\n UF: PB\n Capital: João Pessoa\n Região: Nordeste");
            break;
        case "pr":
        case "parana":
            alert(" Estado: Paraná\n UF: PR\n Capital: Curitiba\n Região: Sul");
            break;
        case "pe":
        case "pernambuco":
            alert(" Estado: Pernambuco\n UF: PE\n Capital: Recife\n Região: Nordeste");
            break;
        case "pi":
        case "piaui":
            alert(" Estado: Piauí\n UF: PI\n Capital: Teresina\n Região: Nordeste");
            break;
        case "rj":
        case "rio de janeiro":
            alert(" Estado: Rio de Janeiro\n UF: RJ\n Capital: Rio de Janeiro\n Região: Sudeste");
            break;
        case "rn":
        case "rio grande do norte":
            alert(" Estado: Rio Grande do Norte\n UF: RN\n Capital: Natal\n Região: Nordeste");
            break;
        case "rs":
        case "rio grande do sul":
            alert(" Estado: Rio Grande do Sul\n UF: RS\n Capital: Porto Alegre\n Região: Sul");
            break;
        case "ro":
        case "rondonia":
            alert(" Estado: Rondônia\n UF: RO\n Capital: Porto Velho\n Região: Norte");
            break;
        case "rr":
        case "roraima":
            alert(" Estado: Roraima\n UF: RR\n Capital: Boa Vista\n Região: Norte");
            break;
        case "sc":
        case "santa catarina":
            alert(" Estado: Santa Catarina\n UF: SC\n Capital: Florianópolis\n Região: Sul");
            break;
        case "sp":
        case "sao paulo":
            alert(" Estado: São Paulo\n UF: SP\n Capital: São Paulo\n Região: Sudeste");
            break;
        case "se":
        case "sergipe":
            alert(" Estado: Sergipe\n UF: SE\n Capital: Aracaju\n Região: Nordeste");
            break;
        case "to":
        case "tocantins":
            alert(" Estado: Tocantins\n UF: TO\n Capital: Palmas\n Região: Norte");
            break;
        default:
            alert("Verifique se digitou corretamente o nome ou sigla");
            break;
    }
}
