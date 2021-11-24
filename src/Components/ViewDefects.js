import React from 'react'
import '../css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

class ViewDefects extends React.Component{
    render(){
        var defectDetails = [
            {
                defectCategory: "UI",
                description: "Submit button coming to the extreme left. Refer the screenshots",
                priority: 2,
                status: "open"
            },
            {
                defectCategory: "Functional",
                description: "While submitting the form data, a confirmation popup",
                priority: 1,
                status: "open"
            },
            {
                defectCategory: "Change Request",
                description: "Add remove user functionality",
                priority: 3,
                status: "closed"
            },
            {
                defectCategory: "Functional",
                description: "Submit button coming to the extreme left. Refer the screenshots",
                priority: 2,
                status: "open"
            },
        ];
        var counter = 1;
        return(
            <div style={{'textAlign':'center'}}>
                <section>
                    <h2>Filter Details </h2>
                    <table className='table'>
                        <tr>
                            <td style={{'backgroundColor':'white'}}> <label for='priority'>Priotity </label></td>
                            <td style={{'backgroundColor':'white'}}><select id='priority' name='priority'> 
                                <option selected value='all'>All</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td style={{'backgroundColor':'white'}}><label for='category'>Category </label></td>
                            <td style={{'backgroundColor':'white'}}><select id='category' name='category' > 
                                <option selected value='all'>All</option>
                            </select>
                            </td>
                        </tr>
                    </table>
                </section>
                <h2>Defect Details</h2>
                <table className='table' >
                    <caption>Search Results: {defectDetails.length}</caption>
                    <thead>
                        <tr>
                            <th>Defect Category</th>
                            <th colSpan='5' >Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {defectDetails.map(defect=>{
                            return(
                                <tr key={counter++}>
                                    <td>{defect.defectCategory}</td>
                                    <td colSpan='5'>{defect.description}</td>
                                    <td>{defect.priority}</td>
                                    <td>{defect.status}</td>
                                    <td>{defect.status==="open"? <a href='#'>"Close Defect"</a>:"No action pending"}</td>
                                </tr>
                            )
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}   

export default ViewDefects