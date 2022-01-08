import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

class PatchForm extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.patchItem = this.patchItem.bind(this);
    }

    patchItem() {
        let id = this.props.className
        let body = {
            product_id: this.props.product_id
        }
        if(document.getElementsByName("name" + id)[0].value){
            body.name = document.getElementsByName("name" + id)[0].value
        }
        if (parseInt(document.getElementsByName("quantity" + id)[0].value)) {
           body.quantity = parseInt(document.getElementsByName("quantity" + id)[0].value)
        }
        if  (parseInt(document.getElementsByName("price" + id)[0].value)) {
            body.price = parseInt(document.getElementsByName("price" + id)[0].value)
        }
        if (document.getElementsByName("description" + id)[0].value) {
            body.description = document.getElementsByName("description" + id)[0].value
        }
        axios.put(`http://localhost:8080/product/${this.props.product_id}`, body).then(() => {
            alert("item values updates")
            window.location.reload(false);
        })
    }

    render () {
        return (
            <>
            name
            <input type="text" name={`name${this.props.className}`} required='required'/>
            quantity
            <input type="number" name={`quantity${this.props.className}`} required='required'/>
            price
            <input type="number" name={`price${this.props.className}`} required='required' step=".01"/>
            description
            <input type="text" name={`description${this.props.className}`}/>
            <Button onClick={() => {this.patchItem()}}>Update</Button>
            </>
        )
    }
}

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        axios.delete(`http://localhost:8080/product/${this.props.data.product_id}`).then((response) => {
            // handle success
           this.props.delFunc(this.props.data.product_id)
        })
    }

    render() {
        return (
        <>
            <Button onClick={() => { this.props.previewFunc(this.props.data.product_id)}}>Name:{this.props.data.name} Quantity:{this.props.data.quantity}</Button>
            <Button onClick={() => { this.removeItem() }}>Delete</Button>
        </>
        )
    }
}

export class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
           items: [],
           preview: 0
        };
        this.delete = this.delete.bind(this);
        this.setPreview = this.setPreview.bind(this);
        this.renderPreview = this.renderPreview.bind(this);
    }

    setPreview(product_id) {
        this.setState({
            ...this.state,
            preview: product_id
        })
    }

    delete(product_id) {
        this.setState({
            ...this.state,
            items: this.state.items.filter((val) => {
                return val.product_id != product_id
            })
        })
        if (product_id == this.state.preview) {
            this.setState({
                ...this.state,
                preview: 0
            })
        }
    }

    renderPreview() {
        if (this.state.preview > 0 && this.state.items.length > 0) {
            let previewItem = this.state.items.filter((val) => {return val.product_id == this.state.preview})[0]
            if (!previewItem) {
                return <></>
            }
            return (
                <div>
                    <header>product_id: {previewItem.product_id}, name: {previewItem.name}, quantity: {previewItem.quantity}, price: {previewItem.price}</header>
                    <header>description: {previewItem.description}</header>
                    <PatchForm className={Math.floor(Math.random() * 1000000)} product_id={this.state.preview}/>
                    <div>
                        <img src={previewItem.image} style={{width:'300px',height:'auto'}} />
                    </div>
                    <div>
                        <Button onClick={() => {this.setState({...this.state, preview: 0})}}>Close</Button>
                    </div>
                </div>
            )
        }
        return <></>
    }

    //[items, setItems] = useState([])
    componentDidMount() {
        axios.get('http://localhost:8080/product').then((response) => {
            // handle success
            this.setState({
                ...this.state,
                items: response.data.products
            })
        })
    }

    render() {
        return (
            <>
                <a href='http://localhost:8080/products/csv' download>Download CSV</a>
                <header>Product List</header>
                {this.state.items.length > 0
                ?
                    <ul className='no-bullets'>
                        {this.state.items.map(val => {
                            return <li key={val.product_id}><Item delFunc={this.delete} previewFunc={this.setPreview} className={val.product_id} data={val}/></li>
                        })}
                    </ul>
                :
                    <header>No products found</header>
                }

            { this.renderPreview() }
            </>
        );
    }
}