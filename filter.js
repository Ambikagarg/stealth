export const Filter = ({onChange}) => (
    <div className = "filter-wrapper">
        <select name = "Choose" className="filter-height" onChange = {onChange}>
        <option value="0">Choose</option>
            <option value="1"><select name = "Launch Year">Launch Year</select></option>
            <option value="2">Launching</option>
            <option value="3">Landing</option>
            
        </select>
    </div>

);