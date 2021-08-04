import React,{useState} from 'react';
import { UilTimesCircle } from '@iconscout/react-unicons';
import { UilPlusCircle } from '@iconscout/react-unicons';
import { UilMinusCircle } from '@iconscout/react-unicons';
import TextField from '@material-ui/core/TextField';


function ProductList(props) {

    const weight = props.weight;
    const price = props.price;

    const[count, setCount] = useState(weight);

    function addProducts(){
        setCount(count+1);
    }

    function removeProducts(){
        setCount(count-1);
    }
    return (
        <div>

            <div className="row cart-item">
                <div className="col-lg-4">
                    <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div className="col-lg-8">
                    <div className="title">
                        {props.name}
                    </div>
                    <div className="details">
                        Weight <span><UilMinusCircle onClick={removeProducts} /> {/* <TextField id="outlined-basic" variant="outlined" defaultValue={count} size="small" 
                        inputProps={{
                            size: 1,
                          }}
                        /> */} {count} Kg <UilPlusCircle onClick={addProducts} /></span>
                         <br />
                        Price <span>Rs. {price*count}</span>
                    </div>
                    <div className="cross-icon">
                        <UilTimesCircle color="#93CF41" size={30} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductList;