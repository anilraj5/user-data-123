import React from 'react'

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6" style={{background: 'gray', height: '100vh'}}></div>
                <div className="col-6" style={{background: 'darkgray'}}></div>
                <div className="container " style={{position:'absolute', top:'50%', margin: '10px auto'}}>
                <h4 className=" row d-flex justify-content-center text-center" style={{position:'relative', top:'0px', }}>Welcome visitors</h4>
                <h3 className=" row d-flex justify-content-center text-center" style={{position:'relative', top:'0px', }}>this website is for user authentication</h3>
                </div>
            </div>
        </div>
    )
}
