import {plantList} from "../datas/plantList"

const Solde = () => { 
    
    return (
        <div>
            <h1>Solde</h1>
            <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}{plant.isSpecialOff ? <span style={{
                            color: 'red'
                        }}>Sale</span>: null}
					</li>
				))}
			</ul>
        </div>
    )
}
export default Solde