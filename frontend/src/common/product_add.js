import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

class AddForm extends Component {
    render() {
        return (
            <>
            product_id
            <input type="number" name={`product_id${this.props.className}`} required='required'/>
            name
            <input type="text" name={`name${this.props.className}`} required='required'/>
            quantity
            <input type="number" name={`quantity${this.props.className}`} required='required'/>
            price
            <input type="number" name={`price${this.props.className}`} required='required' step="0.01"/>
            description
            <input type="text" name={`description${this.props.className}`}/>
            picture
            <input type='file' name={`picture${this.props.className}`}/>
            <Button onClick={() => {this.props.delFunc(this.props.className)}}>remove</Button>
            </>
        )
    }

}


export class AddFormList extends Component {
    constructor(props){
        super(props);
        this.state = {
           items: []
        };
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.readFile = this.readFile.bind(this);
    }

    add() {
        this.setState({
            ...this.state,
            items: [...this.state.items, <AddForm delFunc={this.delete} className={Math.floor(Math.random() * 1000000)}/>]
        })
    }

    delete(list_id) {
        if (this.state.items.length == 1) {
            return
        }
        this.setState({
            ...this.state,
            items: this.state.items.filter((val) => {
                return val.props.className != list_id
            })
        })
    }
    readFile(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve("");
            }
            let reader = new FileReader
            reader.onload = () => {
               resolve(reader.result);
            }
            reader.onerror = reject;
            reader.readAsDataURL(file)
        })
    }


    handleSubmit() {
        let body = []
        let list_of_promises = this.state.items.map((val) => {
            let id = val.props.className
            let file_obj = document.getElementsByName("picture" + id)[0].files[0]
            return this.readFile(file_obj)
        })
        Promise.all(list_of_promises).then((imgs) => {
            imgs.forEach((img, i) => {
                let id = this.state.items[i].props.className
                let json_body = {
                    product_id: parseInt(document.getElementsByName("product_id" + id)[0].value),
                    name: document.getElementsByName("name" + id)[0].value,
                    quantity: parseInt(document.getElementsByName("quantity" + id)[0].value),
                    price: parseFloat(document.getElementsByName("price" + id)[0].value),
                    description: document.getElementsByName("description" + id)[0].value,
                    image: img
                }
                body.push(json_body)
            })
        }).then(() => {
            axios.post('http://localhost:8080/product', {products: body}).then((res) => {
                this.setState({
                    ...this.state,
                    items: [<AddForm delFunc={this.delete} className={Math.floor(Math.random() * 1000000)}/>]
                })
                alert("successfully created [" + res.data.created + "]")
            }).catch(() => {

            })
        })
    }

    //[items, setItems] = useState([])
    componentDidMount() {
        this.setState({
            ...this.state,
            items: [<AddForm delFunc={this.delete} className={Math.floor(Math.random() * 1000000)}/>]
        })
    }

    render() {
        return (
            <>
            <form>
                <ul className='no-bullets'>
                {this.state.items.map(val => {
                    return <li key={val.props.className}>{val}</li>
                })}
                </ul>
                <>
                <Button onClick={this.add}>Add</Button>
                </>
                <Button onClick={() => {this.handleSubmit()}}>Submit</Button>
            </form>
            </>
        );
    }
}