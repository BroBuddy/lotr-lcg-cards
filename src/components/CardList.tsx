import React from 'react'
import { countCardsFromScenario, findCycleById } from '../service/data'
import { useParams } from 'react-router-dom'

const CardList = () => {
    const { id } = useParams()
    const scenario: any = findCycleById(Number(id))
    const cardsAmount: number = countCardsFromScenario(scenario)
    const pages: number = Math.ceil(cardsAmount / 9)

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="card-list">
            <h1>
                <a href="../">&larr; {scenario && scenario.title}</a> (
                {cardsAmount} Cards)
            </h1>

            <ol>
                {scenario &&
                    scenario.scenarios.map((scenario: any, index: number) => {
                        return (
                            <li key={index}>
                                <a href={`#${scenario.title}`}>
                                    {scenario.title} &darr;
                                </a>
                                &nbsp;(
                                {scenario.quests.length +
                                    scenario.cards.length}{' '}
                                Cards)
                            </li>
                        )
                    })}
            </ol>

            <button type="button" onClick={handlePrint}>
                Print {pages} pages
            </button>

            {scenario &&
                scenario.scenarios.map((scenario: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <a id={`${scenario.title}`}></a>
                            <h2>{scenario.title}</h2>

                            {scenario.quests.map((card: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <img
                                            className="rotate"
                                            src={card}
                                            alt=""
                                        />
                                    </React.Fragment>
                                )
                            })}

                            {scenario.cards.map((card: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <img src={card} alt="" />
                                    </React.Fragment>
                                )
                            })}

                            <a href="#top">
                                <h2>&uarr; Back to top</h2>
                            </a>
                        </React.Fragment>
                    )
                })}
        </div>
    )
}

export default CardList
