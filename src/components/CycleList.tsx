import { countAllCards, getListOfCycles } from '../service/data'

const CycleList = () => {
    const cycles: any[] = getListOfCycles()

    return (
        <div className="card-list">
            <h1>Lord of the rings - LCG</h1>

            <button type="button" disabled>
                {countAllCards()} cards
            </button>

            {cycles &&
                cycles.map((cycle: any, index: number) => {
                    return (
                        <div key={index}>
                            <h2>
                                <a href={`/cycle/${cycle.id}`}>
                                    {cycle.title} &rarr;
                                </a>
                            </h2>

                            <ol>
                                {cycle.scenarios.map(
                                    (scenario: any, index: number) => {
                                        return <li key={index}>{scenario}</li>
                                    }
                                )}
                            </ol>
                        </div>
                    )
                })}
        </div>
    )
}

export default CycleList
