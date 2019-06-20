var peso = prompt('Qual seu peso na terra?', 0);

var planeta = prompt('Em qual planeta deseja saber seu peso? (Escolha entre as opções: Marte, Saturno ou Urano')

if(planeta == 'Marte'){

    document.writeln("Seu peso em marte é:" + peso)
} else if(planeta == 'Saturno'){
    
    document.writeln("Seu peso em saturno é:" + peso)

} else if(planeta == 'Urano'){

    document.writeln("Seu peso em urano é:" + peso)
}