import React, { Component } from 'react';
import bike1 from '../assert/b1.jpg';
import bike2 from '../assert/b2.jpg';
import bike3 from '../assert/b3.jpg'; 

class MultipleImgComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='300px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: bike1, alt: 'bike1' })}
                    className="btn btn-success"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show bike1
                </button>
                <button
                    onClick={() => this.toggleImage({ src: bike2, alt: 'bike2' })}
                    className="btn btn-success"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show bike2
                </button>
                <button
                    onClick={() => this.toggleImage({ src: bike3, alt: 'bike3' })}
                    className="btn btn-success"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show bike3
                </button>
            </div>
        );
    }
}

export default MultipleImgComp;