import styles from './Tabela.module.css';

const Tabelas = () => {


    return(
        <table>
            <thead>
                <tr>
                    <td className={styles.theader} colSpan={3}>
                        Veja a tabela abaixo para comparar os valores
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>IMC</td>
                    <td>CLASSIFICAÇÃO</td>
                    <td>OBESIDADE <small>(GRAU)</small></td>
                </tr>
                <tr>
                    <td>Maior que 18,5</td>
                    <td>Magreza</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Normal</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 25,0 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td>|</td>
                </tr>
                <tr>
                    <td>Entre 30,0 e 39,9</td>
                    <td>Obesidade</td>
                    <td>||</td>
                </tr>
                <tr>
                    <td>Maior que 40,0</td>
                    <td>Obesidade grave</td>
                    <td>|||</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabelas;