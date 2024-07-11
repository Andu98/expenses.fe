import {React,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { GetExpenses } from '../services/expenses';
import { Row, Col, Button } from 'react-bootstrap';
export default () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        GetExpenses(dispatch);
    },[]);

    //this extracts data from the redux store state (din store.js)
    const expenses = useSelector(state => state.expensesReducer.expenses);
    
    return expenses.map((expense) => {
        return(
            <div style={{ marginBottom: '1rem' }} key={expense.id}>
               <ListRow expense={expense}/>
            </div>
        );
    });
}

const ListRow = ({expense}) => {
    return <div>
        <Row>
            <Col>{expense.description}</Col>
            <Col>{expense.amount}</Col>
           <Col><Button variant="warning">Edit</Button></Col> 
        </Row>
        <hr />
    </div>
}