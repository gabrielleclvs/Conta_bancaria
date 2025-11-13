import { colors } from "../Colors";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Conta[] = [];
    private numero: number = 0;

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    procurarPorNumero(numero: number): void {
        // Implementação depois
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, `\nA Conta número: ${conta.numero} foi criada com sucesso!`, colors.reset);
    }

    atualizar(conta: Conta): void {
        // Implementação depois
    }

    deletar(numero: number): void {
        // Implementação depois
    }

    sacar(numero: number, valor: number): void {
        // Implementação depois
    }

    depositar(numero: number, valor: number): void {
        // Implementação depois
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        // Implementação depois
    }

    gerarNumero(): number {
        return ++this.numero;
    }
}
