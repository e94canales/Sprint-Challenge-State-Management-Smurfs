import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfData, delSmurf } from '../actions'

const SmurfNode = props => {

    const { fetchSmurfData } = props

    useEffect(() => {
        fetchSmurfData()
    }, [fetchSmurfData])

    const onDelClick = (e, id) => {
        e.preventDefault()

        props.delSmurf(id)
    }
   

    return (
        <div>
        <div className='village'>
               <h4>MY VILLAGE</h4>
            </div>
        <div className='cardsContainer'>
            
            {props.smurfData.map( e => {
                return (
                    <div key={e.id} className='card'>
                        <h1>{e.name}</h1>
                        <h5>Height: {e.height}</h5>
                        <h5>Age: {e.age}</h5>
                        <button className='removeBtn' onClick={event => {onDelClick(event, e.id)}}>Remove</button>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default connect(null, {fetchSmurfData, delSmurf})(SmurfNode)