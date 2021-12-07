import React from 'react';
import '../../App.css'

export default function Products () {

    const styles = {
        background: "url(/media/img-1.jpg)",
        height: "91.5vh",
        width: "100%",
        maxWidth: "1000",
        backgroundPosition: "center",
        backgroundSize: "fill",
        backgroundRepeat:" no-repeat",
        color: "#fff",
        fontSize: "100"
    }
    const h1 = {
        position: "absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)"
    }
    return (
        <div style={ styles}>
            <h1 className="products" style={h1}>Products</h1>
        </div>
    )
}