
import './styles.css';

export default function Filter({categories,selectCategory}){

    return(
            <select className="filter" onChange={selectCategory}>
                <option default>Choose a category</option>
                {categories.map(category=>(<option key={category}>{category}</option>))}
            </select>
    );
}