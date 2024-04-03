import styles from './Tabela.module.css';

const Tabelas = ({result}) => {


    return(
        <table>
            <thead>
                <tr>
                    <td className={styles.theader} colSpan={3}>
                        Veja a tabela abaixo para comparar os valores
                    </td>
                </tr>
            </thead>
            <tbody colSpan={3}>
                <tr>
                    <td>IMC</td>
                    <td>CLASSIFICAÇÃO</td>
                    <td>OBESIDADE <small>(GRAU)</small></td>
                </tr>
                <tr  className={(result === 'Magreza') ? styles.magreza : ''}>
                    <td>Menor que 18,5</td>
                    <td>Magreza</td>
                    <td>0</td>
                </tr>
                <tr className={(result === 'Normal') ? styles.normal : ''}>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Normal</td>
                    <td>0</td>
                </tr>
                <tr className={(result === 'Sobrepeso') ? styles.sobrepeso : ''}>
                    <td>Entre 25,0 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td>|</td>
                </tr>
                <tr className={(result === 'Obesidade') ? styles.obesidade : ''}>
                    <td>Entre 30,0 e 39,9</td>
                    <td>Obesidade</td>
                    <td>||</td>
                </tr>
                <tr className={(result === 'Obesidade grave') ? styles.obesidade-grave : ''}>
                    <td>Maior que 40,0</td>
                    <td>Obesidade grave</td>
                    <td>|||</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabelas;